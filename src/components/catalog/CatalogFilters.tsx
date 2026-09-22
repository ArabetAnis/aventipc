import Link from "next/link";
import { categories } from "@/content/categories";
import { brands } from "@/content/brands";
import { SortSelect } from "@/components/catalog/SortSelect";

export interface CatalogQuery {
  categoria?: string;
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

/** Builds /prodotti?… keeping the other parameters. Empty values are dropped. */
export function buildQuery(base: CatalogQuery, patch: Partial<CatalogQuery>): string {
  const merged = { ...base, ...patch };
  const params = new URLSearchParams();
  for (const key of ["q", "categoria", "marca", "ordina"] as const) {
    const value = merged[key];
    if (value && !(key === "ordina" && value === "rilevanza")) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `/prodotti?${qs}` : "/prodotti";
}

function Chip({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`inline-flex h-9 items-center rounded-full border px-3.5 text-sm font-semibold transition-colors ${
        active ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-soft hover:border-lilac hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

/** Link-based filters (crawlable, no JavaScript needed) plus a sort select. */
export function CatalogFilters({ query, total }: { query: CatalogQuery; total: number }) {
  const hasFilters = Boolean(query.categoria || query.marca || query.q || (query.ordina && query.ordina !== "rilevanza"));
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtra per categoria">
        <Chip href={buildQuery(query, { categoria: undefined })} active={!query.categoria}>
          Tutte le categorie
        </Chip>
        {categories.map((c) => (
          <Chip key={c.slug} href={buildQuery(query, { categoria: c.slug })} active={query.categoria === c.slug}>
            {c.name}
          </Chip>
        ))}
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtra per marca">
        <Chip href={buildQuery(query, { marca: undefined })} active={!query.marca}>
          Tutte le marche
        </Chip>
        {brands.map((b) => (
          <Chip key={b.slug} href={buildQuery(query, { marca: b.slug })} active={query.marca === b.slug}>
            {b.name}
          </Chip>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-ink tabular">{total}</span> {total === 1 ? "prodotto" : "prodotti"}
          {hasFilters ? (
            <>
              {" · "}
              <Link href="/prodotti" className="font-semibold text-aventi-blue hover:underline">
                Azzera filtri
              </Link>
            </>
          ) : null}
        </p>
        <form action="/prodotti" method="get" className="flex items-center gap-2">
          {query.q ? <input type="hidden" name="q" value={query.q} /> : null}
          {query.categoria ? <input type="hidden" name="categoria" value={query.categoria} /> : null}
          {query.marca ? <input type="hidden" name="marca" value={query.marca} /> : null}
          <label htmlFor="ordina" className="text-sm text-ink-soft">
            Ordina per
          </label>
          <SortSelect id="ordina" name="ordina" defaultValue={query.ordina ?? "rilevanza"} options={SORT_OPTIONS} />
          <button type="submit" className="h-9 rounded-full border border-line bg-white px-3 text-sm font-semibold text-ink-soft hover:border-lilac hover:text-ink">
            Applica
          </button>
        </form>
      </div>
    </div>
  );
}
