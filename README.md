# AventiPC

Sito ecommerce dimostrativo per la vendita di notebook, PC desktop, gaming e workstation in Italia. Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

## Avvio

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

Imposta `NEXT_PUBLIC_SITE_URL` (default `https://www.aventipc.it`) per canonical, sitemap e structured data.

## Struttura

- `src/app` — route: home, `/prodotti` (catalogo con filtri), `/prodotti/[slug]`, `/categorie/[slug]`, `/marchi/[slug]`, `/carrello`, `/checkout`, pagine informative `/[slug]`, `sitemap.ts`, `robots.ts`, `manifest.ts`, immagini Open Graph.
- `src/data/products.ts` — catalogo tipizzato (17 prodotti) e helper di ricerca.
- `src/content/*` — testi in italiano: categorie, marchi, FAQ, pagine legali, navigazione.
- `src/lib/seo.ts` — metadata standard e JSON-LD (Organization, WebSite, Product, BreadcrumbList, ItemList, CollectionPage, FAQPage).
- `src/store/cart.ts` — carrello lato client (zustand + localStorage).
- `docs/superpowers/specs/2026-09-22-aventipc-design.md` — design system e regole SEO.

## Note

- Le immagini prodotto sono segnaposto scaricati da siti dei produttori e Unsplash (fonte registrata in `products.ts`); da sostituire con foto proprie prima della pubblicazione.
- Il checkout è dimostrativo: nessun provider di pagamento collegato, il numero d'ordine è generato localmente.
- P.IVA, indirizzo e recapiti in `src/content/site.ts` sono segnaposto.
