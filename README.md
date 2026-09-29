# AventiPC

Piccolo negozio di PC e notebook usati: il sito mostra foto reali e caratteristiche, l'acquisto avviene su Vinted. Disponibile in italiano, francese, spagnolo, tedesco e olandese. Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

Demo online (export statico su GitHub Pages): https://arabetanis.github.io/aventipc/

## Avvio

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

Imposta `NEXT_PUBLIC_SITE_URL` (default `https://aventipc.com`) per canonical, sitemap e structured data.

## Lingue e SEO

- 5 lingue: italiano `/it/`, francese `/fr/` (Francia e Belgio), spagnolo `/es/`, tedesco `/de/`, olandese `/nl/` (Belgio). `/` è la pagina di scelta della lingua (hreflang x-default).
- Testi: `src/i18n/locales/<lingua>.ts` (tipo `Dictionary` in `src/i18n/types.ts`). URL tradotti: `src/i18n/config.ts`.
- Pagine parola chiave × città: 3 temi (usati, economici, per studenti) × 5 città per paese → 90 pagine. Città: `src/i18n/cities.ts`.
- Ogni pagina è HTML prerenderizzato con title, meta description, canonical, hreflang, Open Graph (`/og/*.png`), JSON-LD e una sola H1. Sitemap con alternates in `src/app/sitemap.ts`.

## Struttura

- `src/data/products.ts` — i computer in vendita (prezzi in centesimi, link Vinted, immagini). Prezzo `null` = "prezzo su richiesta"; senza `vinted` il pulsante diventa "Chiedi disponibilità".
- `public/images/products/` — immagine del modello (`*-modello.jpg`) + foto reali (`<slug>-1.jpg`, …).
- `src/views/` — una vista per tipo di pagina; `src/app/[lang]/[...path]` le smista tramite `src/i18n/routes.ts`.
- Versioni precedenti: tag `v1-demo-catalogo`, branch `demo-catalogo-completo`.

## Pubblicazione

Guida passo passo per aventipc.com su Cloudflare: `docs/hosting-cloudflare.md`.

## Note

- P.IVA, indirizzo e telefono in `src/content/site.ts` sono segnaposto.
