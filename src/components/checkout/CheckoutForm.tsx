"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { useHydrated } from "@/store/useHydrated";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CartSummary } from "@/components/cart/CartSummary";

/* Demo checkout: no payment provider is connected. The order number is generated locally. */

const input = "h-11 w-full rounded-card border border-line bg-white px-4 text-ink focus:border-lilac focus:outline-none focus-visible:ring-2 focus-visible:ring-aventi-blue/40 aria-[invalid=true]:border-danger";

const PAYMENTS = [
  { id: "carta", label: "Carta di credito o debito", text: "Visa, Mastercard, American Express. I dati vengono inseriti nella pagina sicura del gestore." },
  { id: "paypal", label: "PayPal", text: "Accedi al tuo conto PayPal per confermare il pagamento." },
  { id: "bonifico", label: "Bonifico bancario", text: "Spediamo alla ricezione del bonifico, di solito entro 1–2 giorni lavorativi." },
  { id: "klarna", label: "Klarna in 3 rate", text: "Tre rate mensili senza interessi, esito immediato." },
];

type Errors = Record<string, string>;

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {error ? <p id={`${id}-errore`} className="mt-1.5 text-sm text-danger">{error}</p> : null}
    </div>
  );
}

export function CheckoutForm() {
  const router = useRouter();
  const hydrated = useHydrated();
  const lines = useCartStore((s) => s.lines);
  const clear = useCartStore((s) => s.clear);
  const [errors, setErrors] = useState<Errors>({});
  const [invoice, setInvoice] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const items = lines.map((l) => ({ line: l, product: getProductBySlug(l.slug)! })).filter((i) => i.product);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.line.quantity, 0);

  if (!hydrated) return <div aria-busy="true" className="h-96 rounded-tile bg-paper-tint" />;

  if (items.length === 0) {
    return (
      <div className="rounded-tile border border-line bg-white px-6 py-14 text-center">
        <h2 className="text-heading">Il carrello è vuoto.</h2>
        <p className="mt-3 text-ink-soft">Aggiungi un prodotto per procedere con l’ordine.</p>
        <ButtonLink href="/prodotti" className="mt-6">Scopri il catalogo</ButtonLink>
      </div>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Inserisci un indirizzo email valido.";
    if (get("telefono").replace(/\D/g, "").length < 8) next.telefono = "Inserisci un numero di telefono valido.";
    for (const k of ["nome", "cognome", "indirizzo", "citta"]) if (!get(k)) next[k] = "Campo obbligatorio.";
    if (!/^\d{5}$/.test(get("cap"))) next.cap = "Il CAP è di 5 cifre.";
    if (!/^[A-Za-z]{2}$/.test(get("provincia"))) next.provincia = "Usa la sigla di due lettere, ad esempio MI.";
    if (invoice) {
      if (!get("ragioneSociale")) next.ragioneSociale = "Campo obbligatorio.";
      if (!/^(IT)?\d{11}$/.test(get("piva").replace(/\s/g, ""))) next.piva = "La partita IVA è di 11 cifre.";
    }
    if (!data.get("pagamento")) next.pagamento = "Scegli un metodo di pagamento.";
    if (!data.get("consenso")) next.consenso = "Devi accettare termini e privacy per continuare.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstId = Object.keys(next)[0];
      document.getElementById(firstId)?.focus();
      return;
    }
    setSubmitting(true);
    const orderNumber = `AV-${String(Date.now()).slice(-6)}`;
    clear();
    router.push(`/checkout/conferma?ordine=${orderNumber}`);
  }

  const a = (id: string) => ({ "aria-invalid": errors[id] ? true : undefined, "aria-describedby": errors[id] ? `${id}-errore` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid items-start gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-10">
        <fieldset className="space-y-4">
          <legend className="text-heading">Dati di contatto</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="email" label="Email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" required className={input} {...a("email")} /></Field>
            <Field id="telefono" label="Telefono" error={errors.telefono}><input id="telefono" name="telefono" type="tel" autoComplete="tel" required className={input} {...a("telefono")} /></Field>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-heading">Indirizzo di spedizione</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="nome" label="Nome" error={errors.nome}><input id="nome" name="nome" autoComplete="given-name" required className={input} {...a("nome")} /></Field>
            <Field id="cognome" label="Cognome" error={errors.cognome}><input id="cognome" name="cognome" autoComplete="family-name" required className={input} {...a("cognome")} /></Field>
          </div>
          <Field id="indirizzo" label="Indirizzo e numero civico" error={errors.indirizzo}><input id="indirizzo" name="indirizzo" autoComplete="street-address" required className={input} {...a("indirizzo")} /></Field>
          <div className="grid gap-4 sm:grid-cols-[120px_1fr_100px]">
            <Field id="cap" label="CAP" error={errors.cap}><input id="cap" name="cap" inputMode="numeric" autoComplete="postal-code" required className={input} {...a("cap")} /></Field>
            <Field id="citta" label="Città" error={errors.citta}><input id="citta" name="citta" autoComplete="address-level2" required className={input} {...a("citta")} /></Field>
            <Field id="provincia" label="Provincia" error={errors.provincia}><input id="provincia" name="provincia" maxLength={2} autoComplete="address-level1" required className={`${input} uppercase`} {...a("provincia")} /></Field>
          </div>
          <Field id="note" label="Note per il corriere (facoltative)"><textarea id="note" name="note" rows={2} className={`${input} h-auto py-2.5`} /></Field>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-heading">Fatturazione</legend>
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" name="fattura" checked={invoice} onChange={(e) => setInvoice(e.target.checked)} className="size-4 accent-aventi-blue" />
            Ho bisogno della fattura con partita IVA
          </label>
          {invoice ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="ragioneSociale" label="Ragione sociale" error={errors.ragioneSociale}><input id="ragioneSociale" name="ragioneSociale" className={input} {...a("ragioneSociale")} /></Field>
              <Field id="piva" label="Partita IVA" error={errors.piva}><input id="piva" name="piva" className={input} {...a("piva")} /></Field>
              <Field id="sdi" label="Codice SDI o PEC"><input id="sdi" name="sdi" className={input} /></Field>
            </div>
          ) : null}
        </fieldset>

        <fieldset>
          <legend className="text-heading">Pagamento</legend>
          <div className="mt-4 divide-y divide-line rounded-tile border border-line bg-white">
            {PAYMENTS.map((p) => (
              <label key={p.id} className="flex cursor-pointer items-start gap-3 px-5 py-4">
                <input type="radio" name="pagamento" value={p.id} className="mt-1 size-4 accent-aventi-blue" />
                <span>
                  <span className="block text-sm font-semibold">{p.label}</span>
                  <span className="block text-sm text-ink-soft">{p.text}</span>
                </span>
              </label>
            ))}
          </div>
          {errors.pagamento ? <p className="mt-2 text-sm text-danger">{errors.pagamento}</p> : null}
        </fieldset>

        <div>
          <label className="flex items-start gap-3 text-sm">
            <input id="consenso" type="checkbox" name="consenso" className="mt-0.5 size-4 accent-aventi-blue" />
            <span>
              Accetto i <Link href="/termini" className="font-semibold text-aventi-blue hover:underline">termini e condizioni</Link> e l’
              <Link href="/privacy" className="font-semibold text-aventi-blue hover:underline">informativa privacy</Link>.
            </span>
          </label>
          {errors.consenso ? <p className="mt-2 text-sm text-danger">{errors.consenso}</p> : null}
        </div>
      </div>

      <CartSummary subtotal={subtotal}>
        <ul className="mt-4 divide-y divide-line text-sm">
          {items.map(({ line, product }) => (
            <li key={product.slug} className="flex justify-between gap-4 py-2">
              <span className="text-ink-soft">{line.quantity} × {product.name}</span>
              <span className="shrink-0 tabular">{formatPrice(product.price * line.quantity)}</span>
            </li>
          ))}
        </ul>
        <Button type="submit" size="lg" disabled={submitting} className="mt-5 w-full">
          {submitting ? "Conferma in corso…" : "Conferma ordine"}
        </Button>
      </CartSummary>
    </form>
  );
}
