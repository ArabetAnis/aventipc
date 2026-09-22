"use client";

import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

/** Reads the order number client-side so the route stays static. */
export function OrderConfirmation() {
  const order = useSearchParams().get("ordine");
  if (!order || !/^AV-\d{6}$/.test(order)) {
    return (
      <div>
        <h1 className="text-title md:text-display">Nessun ordine da mostrare.</h1>
        <ButtonLink href="/prodotti" className="mt-6">Scopri il catalogo</ButtonLink>
      </div>
    );
  }
  return (
    <div className="max-w-[60ch]">
      <span className="brand-gradient-strong inline-flex size-12 items-center justify-center rounded-full text-white">
        <Check className="size-6" aria-hidden="true" strokeWidth={2.5} />
      </span>
      <h1 className="mt-5 text-title md:text-display">Grazie, ordine confermato.</h1>
      <div className="mt-6 rounded-tile border border-line bg-white p-6">
        <p className="text-sm text-ink-soft">Numero ordine</p>
        <p className="font-display text-heading font-semibold tabular">{order}</p>
      </div>
      <ol className="mt-8 space-y-3 text-ink-soft">
        <li>Ricevi subito un’email di conferma con il riepilogo dell’ordine.</li>
        <li>Prepariamo e collaudiamo il computer, poi lo affidiamo al corriere entro 24–48 ore.</li>
        <li>Ti inviamo il codice di tracking appena il pacco parte.</li>
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Torna alla home</ButtonLink>
        <ButtonLink href="/prodotti" variant="secondary">Continua gli acquisti</ButtonLink>
      </div>
    </div>
  );
}
