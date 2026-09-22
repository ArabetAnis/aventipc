import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { ButtonLink } from "@/components/ui/Button";

interface CartSummaryProps {
  subtotal: number;
  cta?: { label: string; href: string };
  children?: React.ReactNode;
}

export function CartSummary({ subtotal, cta, children }: CartSummaryProps) {
  return (
    <aside aria-label="Riepilogo ordine" className="rounded-tile border border-line bg-white p-6 lg:sticky lg:top-24">
      <h2 className="font-sans text-base font-bold">Riepilogo</h2>
      {children}
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink-soft">Subtotale</dt>
          <dd className="tabular">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-soft">Spedizione</dt>
          <dd className="font-semibold text-success">Gratuita</dd>
        </div>
        <div className="flex justify-between border-t border-line pt-3 text-base">
          <dt className="font-bold">Totale</dt>
          <dd className="font-bold tabular">{formatPrice(subtotal)}</dd>
        </div>
      </dl>
      <p className="mt-1 text-xs text-ink-muted">IVA inclusa</p>
      {cta ? (
        <>
          <ButtonLink href={cta.href} size="lg" className="mt-5 w-full">{cta.label}</ButtonLink>
          <Link href="/prodotti" className="mt-3 block text-center text-sm font-semibold text-aventi-blue hover:underline">
            Continua gli acquisti
          </Link>
        </>
      ) : null}
      <p className="mt-5 flex items-start gap-2 text-xs text-ink-soft">
        <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-aventi-blue" /> Pagamento sicuro, reso gratuito entro 14 giorni e garanzia 2 anni.
      </p>
    </aside>
  );
}
