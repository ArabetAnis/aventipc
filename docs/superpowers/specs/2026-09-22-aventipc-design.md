# AventiPC — design and build spec

Date: 2026-09-22

## What this is

AventiPC is an Italian online shop for laptops, desktops, gaming PCs and
workstations. This spec covers a production-quality demo built with Next.js 16
(App Router) that shows how the catalogue, product pages, cart and checkout will
look, with real products and images from the internet as placeholders.

Audience: Italian consumers and prosumers searching for a computer. Everything
user-facing is in Italian. Prices are in EUR, IVA inclusa. The site must be
built for search from the ground up.

## Decisions taken without the client (assumptions)

- Language: Italian only, `lang="it"`, locale `it_IT`. No i18n routing.
- Domain used in canonical URLs and structured data: `https://www.aventipc.it`
  (configurable through `NEXT_PUBLIC_SITE_URL`).
- No payment provider. Checkout collects shipping details and produces a fake
  order number. Stripe or PayPal can be added later.
- Cart lives client-side (zustand + localStorage). No accounts.
- Catalogue is a typed static data file. Product pages are statically generated.
- Product images are downloaded once into `public/images/products/` so the demo
  never depends on third-party hotlinking. Sources are recorded in the data.

## Brand tokens (from the logo)

The logo is a monoline rounded wordmark with a horizontal sweep from blue to
cream. The gradient is the brand. It is the only decoration on the site.

| Token          | Hex       | Role                                        |
| -------------- | --------- | ------------------------------------------- |
| `aventi-blue`  | `#3D7BF0` | Gradient start, links, focus rings          |
| `periwinkle`   | `#7C7DE8` | Gradient stop 2                             |
| `lilac`        | `#B48CE1` | Gradient stop 3, hover borders              |
| `orchid`       | `#D8A6DC` | Gradient stop 4                             |
| `blush`        | `#EBC7D9` | Gradient stop 5                             |
| `cream`        | `#F4E4DF` | Gradient end                                |
| `ink`          | `#15121D` | Text. Violet-tinted so it sits on the washes |
| `ink-soft`     | `#5A5566` | Secondary text                              |
| `paper`        | `#FDFCFE` | Page background                             |
| `paper-tint`   | `#F7F4FA` | Image stages, table stripes                 |
| `line`         | `#E8E3F0` | Borders                                     |

Brand gradient (left to right):
`linear-gradient(90deg, #3D7BF0 0%, #7C7DE8 22%, #B48CE1 45%, #D8A6DC 66%, #EBC7D9 84%, #F4E4DF 100%)`

Backgrounds: the page is `paper` with three large, very soft radial washes
(blue top-left, lilac centre-right, blush bottom-left) at 10–18% opacity that
fade to nothing. They sit in a fixed layer behind the content. Sections do not
get their own background colours; white surfaces (cards, tables) float on the
wash.

## Typography

- Display: **Outfit** (500, 600). Geometric, near-circular bowls, echoes the
  logo. Used for h1–h3 and prices on the product page.
- Body and UI: **Manrope** (400, 500, 600, 700). Tabular numerals for prices.
- Scale (ratio 1.25, base 16): 13, 16, 18, 20, 25, 31, 39, 49, 61.
- Headline tracking −0.02em, line-height 1.05–1.15. Body line-height 1.6.
- Measure ≤ 70ch for prose.
- No all-caps labels, no eyebrow labels, no single-word accent colouring in
  headings, no arrows appended to links.

## Layout

Container 1280px, 24px gutters on mobile, 32px on desktop. Left-aligned.

```
┌──────────────────────────────────────────────────────────────┐
│ [AventiPC wordmark]   Notebook Desktop Gaming Workstation  🔍 🛒│
├──────────────────────────────────────────────────────────────┤
│  Il computer giusto,        ┌───────────────────────────┐    │
│  consegnato in 48 ore.      │   (gradient halo)         │    │
│  Notebook, desktop e ...    │      [MacBook image]      │    │
│  [Scopri il catalogo] [PC gaming]                        │    │
│                             └───────────────────────────┘    │
├──────────────────────────────────────────────────────────────┤
│  Categorie                                                   │
│  [Notebook] [Desktop] [Gaming] [Workstation]   (image tiles) │
├──────────────────────────────────────────────────────────────┤
│  In evidenza                                                 │
│  [card] [card] [card] [card]                                 │
├──────────────────────────────────────────────────────────────┤
│  Spedizione gratuita | Garanzia 2 anni | Pagamenti sicuri |..│
├──────────────────────────────────────────────────────────────┤
│  Domande frequenti  (details/summary)                        │
├──────────────────────────────────────────────────────────────┤
│  Footer: sitemap links, legal, P.IVA                         │
└──────────────────────────────────────────────────────────────┘
```

The memorable element is the hero halo: the logo gradient rendered as a soft,
blurred aurora behind a large product image, fading into the page. Everything
else is quiet: white surfaces, one thin `line` border, no drop shadows.

Radii: 24px for hero and category tiles, 16px for product cards and inputs,
pill for buttons. Nothing else.

Buttons: primary is a pill with the brand gradient (blue → lilac portion) and
white text; secondary is a pill with an ink outline. Height 44px.

Product card: white, 1px `line` border, image on `paper-tint` stage, brand in
`ink-soft`, name in Manrope 600, price in tabular figures. Hover changes the
border to `lilac`. No lift, no shadow.

Motion: one page-load moment on the home hero (halo and product image fade in
over 700ms). Nothing else animates on its own. Hover and open/close transitions
answer user actions only. `prefers-reduced-motion` disables the load moment.

## Copy

Plain Italian, sentence case, concrete promises. Examples:
- Hero: "Il computer giusto, consegnato in 48 ore."
- CTA: "Scopri il catalogo", "Aggiungi al carrello", "Vai al checkout",
  "Conferma ordine".
- Empty cart: "Il carrello è vuoto. Scopri i notebook e i PC in offerta."

## Information architecture and URLs

| Route                        | Page                              | Rendering |
| ---------------------------- | --------------------------------- | --------- |
| `/`                          | Home                              | static    |
| `/prodotti`                  | Catalogue with filters (`?categoria=&marca=&ordina=&q=`) | dynamic (searchParams) |
| `/prodotti/[slug]`           | Product detail                    | static (generateStaticParams) |
| `/categorie/[slug]`          | Category landing (notebook, desktop, gaming, workstation, mini-pc) | static |
| `/marchi/[slug]`             | Brand landing (apple, dell, lenovo, asus, hp, aventipc) | static |
| `/carrello`                  | Cart                              | static shell, client state |
| `/checkout`                  | Checkout form                     | static shell, client state |
| `/checkout/conferma`         | Order confirmation                | static shell |
| `/chi-siamo`                 | About                             | static |
| `/contatti`                  | Contact                           | static |
| `/spedizioni-e-resi`         | Shipping and returns              | static |
| `/privacy`, `/termini`       | Legal                             | static |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | generated | |
| `/opengraph-image`, `/prodotti/[slug]/opengraph-image` | generated OG images | |
| `not-found`                  | 404                               | |

## Data model

```ts
type Category = { slug; name; description; seoTitle; seoDescription; image }
type Brand = { slug; name; description; seoTitle; seoDescription }
type Product = {
  slug; name; brand: BrandSlug; category: CategorySlug;
  shortDescription; description (2–3 paragraphs, Italian);
  price (EUR, cents as integer); compareAtPrice?; sku; gtin?;
  availability: 'in_stock' | 'preorder' | 'out_of_stock';
  images: { src; alt; width; height; source }[];
  specs: { label; value }[];
  highlights: string[];            // 3–5 bullets
  rating?: { value; count };
  tags?: string[];
  featured?: boolean;
}
```

## SEO requirements (all must hold)

- `metadataBase` set; title template `%s | AventiPC`; unique title ≤ 60 chars
  and description ≤ 160 chars on every page.
- Canonical URL on every page. Open Graph (`locale: it_IT`) and Twitter card on
  every page. Dynamic OG images with the brand gradient.
- `robots`: index, follow everywhere except `/carrello`, `/checkout*`, which
  are `noindex` and disallowed in `robots.txt`. `sitemap.xml` lists all
  indexable routes with `lastModified`.
- JSON-LD: `Organization` and `WebSite` (with `SearchAction`) in the root
  layout; `Product` + `Offer` (EUR, availability, condition, seller,
  shipping details, return policy) + `BreadcrumbList` on product pages;
  `CollectionPage` + `ItemList` + `BreadcrumbList` on category and brand
  pages; `FAQPage` on the home page; `AggregateRating` only where a rating is
  displayed.
- Semantic HTML: one `h1` per page, logical heading order, `header`/`nav`/
  `main`/`footer`, visible breadcrumbs, skip link, descriptive `alt` text,
  labelled form controls, visible focus.
- Performance: `next/image` everywhere with `sizes`; hero image `priority`;
  `next/font` for fonts; all catalogue pages statically generated; client JS
  limited to cart, header menu and filters.
- `manifest.webmanifest`, favicon set, `theme-color`.
- Clean Italian slugs. 404 returns a real 404 status.

## Components (src/components)

- `layout/SiteHeader` (wordmark, nav, search, cart badge — client for badge)
- `layout/SiteFooter`
- `layout/GradientBackdrop` (the fixed washes)
- `brand/Wordmark` (SVG recreation of the logo with the gradient)
- `ui/Button`, `ui/Container`, `ui/Price`, `ui/Breadcrumbs`, `ui/Badge`
- `product/ProductCard`, `product/ProductGrid`, `product/ProductGallery`,
  `product/SpecTable`, `product/AddToCartButton` (client)
- `cart/CartLine`, `cart/CartSummary` (client)
- `seo/JsonLd`
- `home/Hero`, `home/CategoryTiles`, `home/Reassurance`, `home/Faq`

## Testing and verification

- `pnpm build` must succeed with zero type errors and zero lint errors.
- Every route renders (checked with a headless Chrome crawl after `next start`).
- Structured data validated with a JSON-LD parser against schema.org types.
- Screenshots reviewed at 390px and 1440px for the home, catalogue, product
  and cart pages.
