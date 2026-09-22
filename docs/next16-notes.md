# Next.js 16.3.5 cheat-sheet for AventiPC

Verified 2026-09-22 against the packages installed in this repo: next 16.3.5 (version-matched docs in
`node_modules/next/dist/docs/01-app/`), react 19.2.8, tailwindcss 4.3.3, zustand 5.0.15, eslint 9.39.5 +
eslint-config-next 16.3.5, typescript 5.9.3, sharp 0.35.4 (its prebuilt binary loads despite
`allowBuilds: sharp: false` in pnpm-workspace.yaml). Cross-checked with nextjs.org/blog/next-16 and
tailwindcss.com/docs/theme.

Legend: **[V]** verified against installed docs/code/types. **[A]** assumed, or a design choice the docs do not state.

## 0. Project facts that shape everything

- `next.config.ts` is empty, so `cacheComponents` is **off** (default `false` in `dist/server/config-shared.js`). All notes assume the classic model unless stated. [V]
- Turbopack is the default for `next dev` and `next build`; `--webpack` opts out. [V]
- `PageProps<'/route'>`, `LayoutProps<'/route'>`, `RouteContext<'/route'>` are **global** types generated into `.next/types/routes.d.ts` by `next dev`, `next build` or `pnpm exec next typegen`. Never import them. The route literal must already exist, so run `next typegen` after adding a folder. Static routes resolve `params` to `{}`. [V]
- `next build` type-checks ("Finished TypeScript") but **does not lint**; run `pnpm lint` (= `eslint`) yourself. [V]
- Put `export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aventipc.it";` in `src/lib/site.ts` and reuse it in metadata, sitemap, robots and JSON-LD. [A]

## 1. Metadata API

### Root layout: static `metadata` + `viewport` [V]

```tsx
// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),                 // required before any relative canonical / og url
  title: { default: "AventiPC – Notebook, desktop e PC gaming", template: "%s | AventiPC" },
  description: "…max 160 caratteri…",
  applicationName: "AventiPC",
  alternates: { canonical: "/" },                  // -> https://www.aventipc.it
  openGraph: { type: "website", locale: "it_IT", siteName: "AventiPC", url: "/" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = { themeColor: "#3D7BF0", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="it" className={`${outfit.variable} ${manrope.variable} antialiased`}>…</html>;
}
```

- `title.template` applies to **child** segments only and requires `title.default`. A page exporting `title: "Notebook"` renders `<title>Notebook | AventiPC</title>`; `title: { absolute: "…" }` bypasses the template. [V]
- `themeColor`, `viewport`, `colorScheme` inside `metadata` are deprecated since v14: use the `viewport` export (`themeColor` also accepts `[{ media, color }]`). [V]
- A relative URL in any URL field **without** `metadataBase` is a build error. `"/prodotti"`, `"prodotti"`, `"./prodotti"` all resolve to `${base}/prodotti`. [V]
- `metadata`, `generateMetadata`, `viewport` are Server-Component-only exports; a page needing hooks stays a Server Component and renders a client child. [V]
- File-based metadata (`opengraph-image.tsx`, `icon.png`…) **overrides** the object: do not also set `openGraph.images` where a file exists. [V]
- Merging is shallow per top-level key: a page that sets `openGraph: { title }` **loses** the layout's `openGraph.locale`/`siteName`. Keep an `ogDefaults` object and spread it into every page's `openGraph`. [V]
- `twitter:*` tags are auto-filled from the resolved Open Graph `title`, `description` and `images` (falling back to `metadata.title`/`description`) when `twitter` omits them (`postProcessMetadata` in `dist/lib/metadata/resolve-metadata.js`); `card` defaults to `summary_large_image` once images exist. A `twitter-image.tsx` file is therefore optional. [V]
- Static pages: `export const metadata: Metadata = { title: "Chi siamo", description, alternates: { canonical: "/chi-siamo" }, openGraph: { ...ogDefaults, title: "Chi siamo | AventiPC", description, url: "/chi-siamo" } }`. [V]

### `generateMetadata` with async `params` (product page) [V]

```tsx
// src/app/prodotti/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/prodotti/[slug]">, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;                   // Promise in 16: sync access was removed
  const product = getProduct(slug);
  if (!product) notFound();                        // allowed inside generateMetadata
  const title = `${product.name} – ${brandName(product.brand)}`;   // keep <= 60 chars
  return {
    title,
    description: product.shortDescription,
    alternates: { canonical: `/prodotti/${slug}` },
    openGraph: { ...(await parent).openGraph, title, description: product.shortDescription, url: `/prodotti/${slug}`, type: "website" },
  };
}
export default async function Page({ params }: PageProps<"/prodotti/[slug]">) { const { slug } = await params; … }
```

- `searchParams` (also a Promise) reaches `generateMetadata` **only from `page.tsx`**. On `/prodotti` keep `alternates.canonical: "/prodotti"` whatever the filters, so `?categoria=…` URLs canonicalise to the clean list. [V facts / A canonical policy]
- `fetch()` in `generateMetadata` is memoised with the page render; the in-memory catalogue needs no `cache()`. [V]

### noindex for cart / checkout [V]

```tsx
// src/app/carrello/page.tsx  (same in checkout/page.tsx and checkout/conferma/page.tsx)
export const metadata: Metadata = {
  title: "Carrello",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },  // -> content="noindex, nofollow"
  alternates: { canonical: "/carrello" },
};
```
The resolver (`dist/lib/metadata/resolvers/resolve-basics.js`) writes `noindex`/`nofollow` only for boolean `false`; the `noindex`/`nofollow` keys are typed `never`. Set `googleBot` too, otherwise the layout's permissive `googleBot` block is merged in. [V]

## 2. File conventions

### `sitemap.ts` → `/sitemap.xml` [V]

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { products, categories, brands, staticPages } from "@/data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = products.map((p) => p.updatedAt).sort().at(-1) ?? "2026-09-22";
  return [
    { url: `${SITE_URL}/`, lastModified: newest, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/prodotti`, lastModified: newest, changeFrequency: "daily", priority: 0.9 },
    ...categories.map((c) => ({ url: `${SITE_URL}/categorie/${c.slug}`, lastModified: newest, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...brands.map((b) => ({ url: `${SITE_URL}/marchi/${b.slug}`, lastModified: newest, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...products.map((p) => ({ url: `${SITE_URL}/prodotti/${p.slug}`, lastModified: p.updatedAt, changeFrequency: "weekly" as const, priority: 0.8,
      images: p.images.map((i) => `${SITE_URL}${i.src}`) })),                     // image sitemap extension
    ...staticPages.map((s) => ({ url: `${SITE_URL}/${s.slug}`, lastModified: "2026-09-22", changeFrequency: "yearly" as const, priority: 0.3 })),
  ]; // never list /carrello, /checkout, /checkout/conferma
}
```
`lastModified` is `string | Date` (ISO dates from `Product.updatedAt` are fine). The file is a route handler cached at build unless it calls a request-time API. Google's cap is 50 000 URLs per file; `generateSitemaps` (its `id` is now `Promise<string>`) is only needed beyond that. [V]

### `robots.ts` → `/robots.txt` and `manifest.ts` → `/manifest.webmanifest` [V]

```ts
// src/app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/carrello", "/checkout"] }], sitemap: `${SITE_URL}/sitemap.xml` }; // prefix match covers /checkout/conferma
}
// src/app/manifest.ts
export default function manifest(): MetadataRoute.Manifest {
  return { name: "AventiPC", short_name: "AventiPC", lang: "it", start_url: "/", display: "standalone", description: "…",
    background_color: "#FDFCFE", theme_color: "#3D7BF0",
    icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }] };
}
```
The manifest is always served at `/manifest.webmanifest` (hard-coded in `dist/lib/metadata/is-metadata-route.js`); `metadata.manifest` must point there. [V]

### Icons [V]
- `src/app/favicon.ico` (root segment only) → `<link rel="icon" href="/favicon.ico" sizes="any">`; the scaffold has one, replace the bytes.
- `src/app/icon.png|svg` and `src/app/apple-icon.png` → `<link rel="icon">` / `<link rel="apple-touch-icon">` with `type`/`sizes` read from the file; `icon1.png`, `icon2.png` for several sizes (180×180 apple-icon is customary [A]).
- Generated: `src/app/icon.tsx` exporting `size`, `contentType` and a default `ImageResponse`. A `favicon` cannot be generated.

### `opengraph-image.tsx` with `ImageResponse` [V]

```tsx
// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "AventiPC – notebook, desktop e PC gaming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ttf/otf/woff only (no woff2; next/font files are not reachable here). Module scope = read once at build.
const outfit = await readFile(join(process.cwd(), "src/assets/fonts/Outfit-SemiBold.ttf"));
const BRAND = "linear-gradient(90deg,#3D7BF0 0%,#7C7DE8 22%,#B48CE1 45%,#D8A6DC 66%,#EBC7D9 84%,#F4E4DF 100%)";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 72, background: "#FDFCFE", fontFamily: "Outfit" }}>
        <div style={{ display: "flex", height: 14, width: 420, borderRadius: 999, backgroundImage: BRAND }} />
        <div style={{ display: "flex", fontSize: 72, color: "#15121D", marginTop: 32 }}>AventiPC</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Outfit", data: outfit, weight: 600, style: "normal" }] },
  );
}
```
Satori renders flexbox plus a CSS subset (no `display: grid`); **every element with more than one child needs `display: flex`**; bundle (JSX + fonts + images) ≤ 500 KB; `linear-gradient` backgrounds work [A]. Generated images are prerendered at build unless they read request-time data; the emitted `og:image` is absolute via `metadataBase`. [V]

### Dynamic-route OG image with the product photo [V]

```tsx
// src/app/prodotti/[slug]/opengraph-image.tsx
export const alt = "Scheda prodotto AventiPC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); } // [A] prerenders the image routes; if ignored they render on demand (ƒ), still fine

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;                                     // Promise since 16.0
  const p = getProduct(slug);
  const photo = p && `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public", p.images[0].src), "base64")}`;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#FDFCFE" }}>
        {photo && <img src={photo} width={560} height={560} style={{ objectFit: "contain" }} />}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 64, fontSize: 56 }}>{p?.name}</div>
      </div>
    ),
    size,
  );
}
```
Several images per route: export `generateImageMetadata({ params })` (**sync** `params`, returns `[{ id, alt, size, contentType }]`); the default export then also receives `id: Promise<string | number>`. One image per product is enough here. [V]

### `not-found.tsx`, `loading.tsx`, `error.tsx` [V]

- `src/app/not-found.tsx` (default export, no props) renders for `notFound()` **and** every unmatched URL; prerendered as `/_not-found`.
- Status code: `404` when the response is **not** streamed; `200` plus an injected `<meta name="robots" content="noindex">` when `notFound()` fires after streaming began (inside a `loading.tsx`/`<Suspense>` boundary). For product pages use `generateStaticParams` + `dynamicParams = false` (unknown slug → real 404 at routing level) and **do not add `loading.tsx`** to `prodotti/[slug]`.
- `loading.tsx` = a Suspense boundary around the segment's page. Only `/prodotti` (dynamic) benefits; keep it a light skeleton.
- `error.tsx` must start with `"use client"`; props `{ error: Error & { digest?: string }; retry: () => void; reset: () => void }`. `retry` (re-fetch + re-render, stable since 16.3) is preferred over `reset`. Optional `global-error.tsx` renders its own `<html>`/`<body>`.

## 3. Static generation

```tsx
// src/app/prodotti/[slug]/page.tsx
export const dynamicParams = false;                   // unknown slug -> 404, never rendered on demand
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export default async function Page({ params }: PageProps<"/prodotti/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  …
}
// src/app/prodotti/page.tsx – dynamic on purpose
export default async function Page({ searchParams }: PageProps<"/prodotti">) {
  const sp = await searchParams;                      // Record<string, string | string[] | undefined>
  const categoria = typeof sp.categoria === "string" ? sp.categoria : undefined;
  …
}
```
- Same `[slug]` pattern for `categorie/[slug]` and `marchi/[slug]`; the build table shows them as `●` (SSG). `dynamicParams` defaults to `true` (render unknown params on demand) and is **removed** when `cacheComponents` is on. [V]
- `searchParams` is a **request-time API**: awaiting it makes `/prodotti` `ƒ` (server-rendered per request). Intended for the catalogue; filters as `<Link>`s plus a `<form method="get">` stay crawlable without JS. Layouts have no `searchParams`. [V]
- Alternative keeping `/prodotti` static (filter client-side with `useSearchParams` under `<Suspense>`) is rejected: filtered lists would not be in the HTML. [A]
- `cacheComponents` / `"use cache"`: **not** the default in 16.3.5 and not set by this scaffold. `"use cache"`, `cacheLife`, `cacheTag` need `cacheComponents: true`. Enabling it removes the `dynamic`, `dynamicParams`, `revalidate`, `fetchCache` configs, makes PPR the model, and fails the build when `params`/`searchParams`/uncached reads happen outside `<Suspense>` (also inside `generateMetadata`). Keep it off. [V]
- Classic segment config still works (`export const dynamic = "force-static" | "force-dynamic" | "error"`, `revalidate`); not needed here. Dev renders on demand, so prerender and missing-Suspense errors only appear in `pnpm build`. [V]

## 4. `next/image`

```tsx
// /public file: intrinsic width/height required; `sizes` for responsive layouts
<Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px" className="h-auto w-full" />
// Hero / LCP image: `preload` (16.0 replaces `priority`; `priority` is still typed but deprecated)
<Image … preload sizes="(max-width: 1024px) 100vw, 640px" />
// fill: parent must be position: relative; `sizes` mandatory; object-fit through CSS
<div className="relative aspect-[4/3]"><Image src={src} alt={alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-contain" /></div>
```
- Without `sizes` the browser assumes `100vw` and Next emits only a 1x/2x srcset; with `sizes` it emits the full `deviceSizes`+`imageSizes` w-descriptor set. `alt` is required (`""` only for decorative images). A static `import logo from "@/…/logo.png"` infers dimensions (good for the logo); catalogue images are string paths, so `ProductImage.width/height` stay mandatory. [V]
- `images` config: `formats` default `["image/webp"]` (put `"image/avif"` first for smaller files, slower first encode); `deviceSizes` `[640,750,828,1080,1200,1920,2048,3840]`; `imageSizes` `[32,48,64,96,128,256,384]` (16 dropped); `qualities` default **`[75]`**, any other `quality` prop is coerced, so list `[60,75,90]` if used; `minimumCacheTTL` 14 400 s. [V]
- `remotePatterns` is **not** needed (every `src` is a `/public` path); `localPatterns` only matters for local `src` with a query string. Optimisation uses `sharp`, a dependency of next 16 that loads in this checkout. [V]
- `next.config.ts`: `images: { formats: ["image/avif", "image/webp"], qualities: [60, 75, 90] }`. [V]

## 5. Fonts + Tailwind v4

```tsx
// src/app/layout.tsx
import { Outfit, Manrope } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], display: "swap", variable: "--font-outfit" });    // variable font: omit weight
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
```
```css
/* src/app/globals.css */
@import "tailwindcss";

@theme inline {                       /* inline: resolve var() references coming from next/font */
  --font-display: var(--font-outfit);
  --font-sans: var(--font-manrope);
}
@theme {                              /* literals -> utilities bg-aventi-blue, text-ink, border-line, rounded-card, max-w-site */
  --color-aventi-blue: #3D7BF0;  --color-periwinkle: #7C7DE8;  --color-lilac: #B48CE1;
  --color-orchid: #D8A6DC;       --color-blush: #EBC7D9;       --color-cream: #F4E4DF;
  --color-ink: #15121D;          --color-ink-soft: #5A5566;
  --color-paper: #FDFCFE;        --color-paper-tint: #F7F4FA;  --color-line: #E8E3F0;
  --radius-card: 16px;           --radius-tile: 24px;          --container-site: 80rem;
}
body { background: var(--color-paper); color: var(--color-ink); font-family: var(--font-sans); }
```
- Both fonts are variable in the installed `next/font/google` list (`weight` defaults to `'variable'`; Outfit 100–900, Manrope 200–800); self-hosted, no runtime request to Google. The `latin` subset covers Italian accents [A]. [V]
- The scaffold's `globals.css` is `@import "tailwindcss"` + `:root` vars + `@theme inline` for the Geist variables + a `prefers-color-scheme: dark` block + `body { font-family: Arial }`. Replace the whole file; drop the dark block (light-only site) [A]. No `tailwind.config.js`; `postcss.config.mjs` already loads `@tailwindcss/postcss`. [V]
- `@theme` must be top-level. Namespaces: `--color-*` → `bg-/text-/border-/fill-*`; `--font-*` → `font-*`; `--radius-*` → `rounded-*`; `--container-*` → `max-w-*`. `--color-*: initial` would wipe Tailwind's palette (keep it for greys). Use `var(--color-lilac)` in custom CSS (gradient backdrop, halo). [V]
- No `--background-image-*` namespace in v4: use `bg-[linear-gradient(...)]` or a `.bg-brand` rule in `@layer utilities`. `tabular-nums`, `tracking-[-0.02em]`, `leading-[1.1]` are standard utilities. [A]

## 6. Client / server boundaries

- `"use client"` goes at the top of the entry file only; everything it imports joins the client bundle. Props crossing the boundary must be serialisable: no functions (except `"use server"` Server Functions), no class instances; server-rendered elements can cross as `children`. Client Components must not be `async` (`@next/next/no-async-client-component`). Keep every `page.tsx` a Server Component and mount client leaves (`AddToCartButton`, `CartBadge`, `CartLine`, `CartSummary`, `Filters`, mobile menu). [V]

### Cart store: zustand 5.0.15 + `persist` [V API / A pattern]

```ts
// src/store/cart.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type Line = { slug: string; qty: number };
type CartState = { lines: Line[]; add: (slug: string, qty?: number) => void; remove: (slug: string) => void; clear: () => void };

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      add: (slug, qty = 1) => set((s) => {
        const l = s.lines.find((x) => x.slug === slug);
        return { lines: l ? s.lines.map((x) => (x.slug === slug ? { ...x, qty: x.qty + qty } : x)) : [...s.lines, { slug, qty }] };
      }),
      remove: (slug) => set((s) => ({ lines: s.lines.filter((x) => x.slug !== slug) })),
      clear: () => set({ lines: [] }),
    }),
    { name: "aventipc-cart", storage: createJSONStorage(() => localStorage), partialize: (s) => ({ lines: s.lines }), skipHydration: true },
  ),
);
```
```tsx
// src/components/cart/CartHydration.tsx – mount once in the root layout
"use client";
export function CartHydration() { useEffect(() => { void useCart.persist.rehydrate(); }, []); return null; }

// src/components/layout/CartBadge.tsx
"use client";
import { useSyncExternalStore } from "react";
const subscribe = (cb: () => void) => useCart.persist.onFinishHydration(cb);
export function CartBadge() {
  const hydrated = useSyncExternalStore(subscribe, () => useCart.persist.hasHydrated(), () => false);
  const count = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  if (!hydrated || count === 0) return null;     // server HTML and first client render agree -> no hydration mismatch
  return <span aria-label={`${count} articoli nel carrello`}>{count}</span>;
}
```
- `skipHydration: true` stops `persist` from reading `localStorage` during the first render (its JSDoc: "useful in SSR application"); `persist.rehydrate()`, `hasHydrated()`, `onFinishHydration()` are in the installed types. `localStorage` is the default storage, so `storage:` may be omitted. [V]
- Cart and checkout pages: show "Caricamento del carrello…" until `hasHydrated()`; prices always come from the static catalogue by slug, never from storage. [A]

### `useSearchParams`, `Link` [V]
- A Client Component calling `useSearchParams()` inside a **prerendered** route must sit under `<Suspense>`, or `next build` fails with "Missing Suspense boundary with useSearchParams" (dev never warns). The header search field is on every static page: `<Suspense fallback={<SearchFormFallback />}><SearchForm /></Suspense>`. Prefer the `searchParams` prop in server pages and pass values down.
- `next/link` prefetch is `auto` (static routes fully, dynamic routes down to the nearest `loading.tsx`) and runs **only in production**. `href` literals are type-checked only with `typedRoutes: true` (optional). Never use `<a>` for internal routes (`@next/next/no-html-link-for-pages`).

### Checkout form [V facts / A choice]

```tsx
// src/app/checkout/actions.ts (Server Action variant)
"use server";
import { redirect } from "next/navigation";
export async function placeOrder(_prev: { error?: string }, formData: FormData) {
  const email = String(formData.get("email") ?? "");
  if (!email.includes("@")) return { error: "Inserisci un'email valida." };
  redirect(`/checkout/conferma?ordine=AV-${Date.now().toString(36).toUpperCase()}`);   // redirect() throws: keep it outside try/catch
}
// src/components/checkout/CheckoutForm.tsx
"use client";
import { useActionState } from "react";
const [state, formAction, pending] = useActionState(placeOrder, {});
<form action={formAction}> … <p aria-live="polite">{state.error}</p><button disabled={pending}>Conferma ordine</button></form>
```
Server Actions are POST endpoints reachable without the UI: validate inside. The cart lives only in `localStorage`, so an action cannot see the lines unless they are serialised into a hidden input; a plain client `onSubmit` + `router.push("/checkout/conferma?ordine=…")` is simpler for the demo. On `/checkout/conferma` read the order number with `useSearchParams` under `<Suspense>` so the page stays static (awaiting the `searchParams` prop would make it `ƒ`).

## 7. Next 16 changes that can bite [V]

- `middleware.ts` → `proxy.ts` (project root or `src/`, beside `app`), export `proxy(request: NextRequest)`, Node runtime only; `skipMiddlewareUrlNormalize` → `skipProxyUrlNormalize`. Not needed here; without `matcher` it would run on every request including `_next/image`.
- Turbopack default; `turbopack` config is top-level. A Babel config auto-enables Babel and slows builds: do not add one.
- `next lint` and the `eslint` key in `next.config` are removed; `eslint.config.mjs` flat config is scaffolded (`eslint-config-next/core-web-vitals` + `/typescript`). Lint with `pnpm exec eslint .`.
- Sync access to `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` is gone: always `await`. Image-route `params` and `id` are Promises; `generateImageMetadata` still gets sync `params`; `sitemap({ id })` gets `Promise<string>`.
- `Metadata` type: `themeColor`/`viewport`/`colorScheme` moved to `Viewport`; `robots.noindex`/`nofollow` are typed `never` (use `index: false`); `MetadataRoute.Robots` rules gained `other` (16.3). `revalidateTag(tag)` single-arg is deprecated → `revalidateTag(tag, "max")`; `updateTag`/`refresh` are new Server-Action-only APIs (none needed here).
- `next/image`: `priority` → `preload`; `qualities` default `[75]`; `imageSizes` lost 16; `minimumCacheTTL` 4 h; local `src` with a query string needs `localPatterns`; `images.domains` → `remotePatterns`; `next/legacy/image` deprecated.
- `experimental.ppr`, `experimental_ppr`, `experimental.dynamicIO`, `experimental.useCache` removed → single `cacheComponents` flag (off by default). `unstable_rootParams` → `next/root-params`.
- Parallel-route slots need explicit `default.tsx`. `scroll-behavior: smooth` is no longer overridden during navigation (opt back in with `<html data-scroll-behavior="smooth">`).
- `next dev` writes to `.next/dev`, `next build` to `.next`; a lockfile blocks two `dev` or two `build` processes. The build table dropped the "Size / First Load JS" columns.
- Node ≥ 20.9, TypeScript ≥ 5.1; Chrome/Edge/Firefox ≥ 111, Safari ≥ 16.4. React 19.2 (`useActionState`, `use()`, `<Activity>`, `useEffectEvent`, View Transitions); React Compiler is opt-in (`reactCompiler: true` + `babel-plugin-react-compiler`), not enabled. `error.tsx` receives `retry` (16.3). `next typegen` (15.5+) generates route types without a build.

## 8. Reading `next build` output [V]

```
Route (app)
┌ ○ /                                        ○  (Static)   prerendered as static content
├ ○ /_not-found                              ●  (SSG)      prerendered as static HTML (uses generateStaticParams)
├ ○ /carrello                                ƒ  (Dynamic)  server-rendered on demand
├ ƒ /prodotti
├ ● /prodotti/[slug]
│ └ /prodotti/apple-macbook-air-13-m4 …
├ ● /categorie/[slug]   ● /marchi/[slug]
├ ○ /sitemap.xml   ○ /robots.txt   ○ /manifest.webmanifest   ○ /opengraph-image
└ ○ or ƒ /prodotti/[slug]/opengraph-image     (ƒ is acceptable for image routes)
```
- `○` fully static, `●` static via `generateStaticParams`, `ƒ` rendered per request; `◐` (Partial Prerender) exists only with `cacheComponents`. Legend strings are in `dist/build/utils.js`. Expected here: everything `○`/`●` except `/prodotti`. A page unexpectedly `ƒ` awaited `searchParams`, `cookies()`, `headers()`, called `connection()`, or exported `dynamic = "force-dynamic"`.
- Phases printed: "Compiled successfully", "Finished TypeScript" (type errors fail the build), "Collecting page data", "Generating static pages", "Finalizing page optimization". Lint is not part of it.
- Debugging: `pnpm exec next build --debug-prerender` (unminified server code + source maps, continues past the first failure; never deploy it) and `--debug-build-paths="src/app/prodotti/[slug]/page.tsx"` to build one route.
- Verify after `pnpm build && pnpm start`: `curl -sI localhost:3000/prodotti/non-esiste | head -1` must print `404`; `curl -s localhost:3000/carrello | grep -o 'name="robots"[^>]*'` must show `noindex`. [A]

## Top 10 gotchas

1. `params`/`searchParams` are Promises everywhere (pages, layouts, `generateMetadata`, OG/icon routes); type them with the global `PageProps<'/prodotti/[slug]'>`, never import it, and run `next typegen` after adding routes.
2. `cacheComponents` is off and should stay off; `"use cache"`/`cacheLife` will not work, and the classic `dynamicParams`/`dynamic` configs still apply.
3. Awaiting `searchParams` makes a page `ƒ`: only `/prodotti` should do it; `/checkout/conferma` must read its query client-side under `<Suspense>`.
4. `useSearchParams()` in a client component on a static page without `<Suspense>` breaks `next build` but never dev.
5. Product pages: `generateStaticParams` + `dynamicParams = false` + no `loading.tsx` in that segment, otherwise unknown slugs return 200 with a noindex meta instead of a real 404.
6. `metadataBase` must be set in the root layout before any relative `canonical`/`og:url`, and `openGraph` merges shallowly, so re-spread `locale: "it_IT"`/`siteName` on every page that overrides it.
7. `robots: { index: false, follow: false, googleBot: {...} }` on cart/checkout; the deprecated `noindex` key is typed `never`.
8. `ImageResponse` (Satori) needs `display: flex` on every multi-child element, ttf/otf/woff fonts read from disk (no woff2, no next/font reuse), ≤ 500 KB.
9. `next/image`: use `preload` (not `priority`), always pass `sizes`, `qualities` default is `[75]` only, no `remotePatterns` needed for `/public` files.
10. Zustand cart: `skipHydration: true` + `persist.rehydrate()` in an effect + `useSyncExternalStore(onFinishHydration, hasHydrated, () => false)` for the badge, so server and first client render match.
