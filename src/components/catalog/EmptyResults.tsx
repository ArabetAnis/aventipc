import { ButtonLink } from "@/components/ui/Button";

export function EmptyResults({ query }: { query?: string }) {
  return (
    <div className="rounded-tile border border-line bg-white px-6 py-14 text-center">
      <h2 className="text-heading">{query ? `Nessun risultato per “${query}”.` : "Nessun prodotto con questi filtri."}</h2>
      <p className="mx-auto mt-3 max-w-[48ch] text-ink-soft">
        Prova con un termine più generico, come il marchio o il processore. Se cerchi un modello preciso, scrivici: potremmo averlo in arrivo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/prodotti">Tutti i prodotti</ButtonLink>
        <ButtonLink href="/contatti" variant="secondary">Scrivici</ButtonLink>
      </div>
    </div>
  );
}
