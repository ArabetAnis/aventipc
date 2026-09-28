import type { Product } from "@/types/catalog";
import { products, searchProducts } from "@/data/products";
import { brands } from "@/content/brands";

export interface CatalogQuery {
  marca?: string;
  ordina?: string;
  q?: string;
}

export const SORT_OPTIONS = [
  { value: "rilevanza", label: "Rilevanza" },
  { value: "prezzo-crescente", label: "Prezzo crescente" },
  { value: "prezzo-decrescente", label: "Prezzo decrescente" },
  { value: "nome", label: "Nome" },
] as const;

type RawParams = Record<string, string | string[] | undefined>;

function first(v: string | string[] | undefined): string | undefined {
  const s = Array.isArray(v) ? v[0] : v;
  return s ? s.slice(0, 80) : undefined;
}

/** Normalises raw query parameters: unknown brands are dropped. */
export function parseQuery(raw: RawParams): CatalogQuery {
  const marca = first(raw.marca);
  return {
    q: first(raw.q)?.trim() || undefined,
    marca: brands.some((b) => b.slug === marca) ? marca : undefined,
    ordina: first(raw.ordina),
  };
}

export function applyQuery(query: CatalogQuery): Product[] {
  let list = query.q ? searchProducts(query.q) : [...products];
  if (query.marca) list = list.filter((p) => p.brand === query.marca);
  switch (query.ordina) {
    case "prezzo-crescente":
      list.sort((a, b) => a.price - b.price);
      break;
    case "prezzo-decrescente":
      list.sort((a, b) => b.price - a.price);
      break;
    case "nome":
      list.sort((a, b) => a.name.localeCompare(b.name, "it"));
      break;
    default:
      list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }
  return list;
}

/** Builds /prodotti?… keeping the other parameters. Empty values are dropped. */
export function buildQuery(base: CatalogQuery, patch: Partial<CatalogQuery>): string {
  const merged = { ...base, ...patch };
  const params = new URLSearchParams();
  for (const key of ["q", "marca", "ordina"] as const) {
    const value = merged[key];
    if (value && !(key === "ordina" && value === "rilevanza")) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `/prodotti?${qs}` : "/prodotti";
}

/** Title shown as h1 for a given query. */
export function catalogTitle(query: CatalogQuery): string {
  if (query.q) return `Risultati per “${query.q}”`;
  const brand = brands.find((b) => b.slug === query.marca);
  return brand ? `${brand.name} usati` : "Tutti i prodotti";
}

export function catalogTagline(query: CatalogQuery): string {
  const brand = brands.find((b) => b.slug === query.marca);
  return brand ? brand.tagline : "Notebook e mini PC usati, con foto reali dell'esemplare in vendita. Si acquistano su eBay o Subito.";
}

/** True when the site is built as a static export (GitHub Pages showcase). */
export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
