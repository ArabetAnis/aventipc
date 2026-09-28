# AventiPC

Piccolo negozio di PC e notebook usati: il sito mostra foto reali e caratteristiche, l'acquisto avviene su eBay o Subito. Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

Demo online (export statico su GitHub Pages): https://arabetanis.github.io/aventipc/

## Avvio

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

Imposta `NEXT_PUBLIC_SITE_URL` (default `https://www.aventipc.it`) per canonical, sitemap e structured data.

## Struttura

- `src/data/products.ts` — i computer in vendita. Prezzi da confermare. Per collegare i pulsanti di acquisto compila `marketplaces: { ebay: "https://…", subito: "https://…" }` sul prodotto.
- `public/images/products/` — foto reali degli esemplari (`<slug>-1.jpg`, `-2.jpg`, …).
- `src/content/*` — testi in italiano: home, FAQ, marchi, pagine (chi siamo, come acquistare, contatti, privacy, termini).
- `src/lib/seo.ts` — metadata e JSON-LD (Product con condizione "usato", BreadcrumbList, FAQPage, Organization, WebSite).
- Versione precedente con catalogo dimostrativo, carrello e checkout: tag `v1-demo-catalogo` e branch `demo-catalogo-completo`.

## Note

- P.IVA, indirizzo e telefono in `src/content/site.ts` sono segnaposto.
