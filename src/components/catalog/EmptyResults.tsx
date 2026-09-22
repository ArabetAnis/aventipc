import Link from "next/link";
import { categories } from "@/content/categories";
import { ButtonLink } from "@/components/ui/Button";

export function EmptyResults({ query }: { query?: string }) {
  return (
    <div className="rounded-tile border border-line bg-white px-6 py-14 text-center">
      <h2 className="text-heading">{query ? `Nessun risultato per “${query}”.` : "Nessun prodotto con questi filtri."}</h2>
      <p className="mx-auto mt-3 max-w-[48ch] text-ink-soft">
        Prova con un termine più generico, come il nome del marchio o della scheda video, oppure riparti da una categoria.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <Link key={c.slug} href={`/categorie/${c.slug}`} className="rounded-full border border-line px-3.5 py-1.5 text-sm font-semibold text-ink-soft hover:border-lilac hover:text-ink">
            {c.name}
          </Link>
        ))}
      </div>
      <ButtonLink href="/prodotti" variant="secondary" className="mt-8">
        Tutti i prodotti
      </ButtonLink>
    </div>
  );
}
