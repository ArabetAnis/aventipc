"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore, MAX_QUANTITY } from "@/store/cart";
import { useHydrated } from "@/store/useHydrated";
import { getProductBySlug, getFeaturedProducts } from "@/data/products";
import { brands } from "@/content/brands";
import { formatPrice } from "@/lib/format";
import { ButtonLink } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CartSummary } from "@/components/cart/CartSummary";

const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));

export function CartView() {
  const hydrated = useHydrated();
  const lines = useCartStore((s) => s.lines);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const remove = useCartStore((s) => s.remove);

  if (!hydrated) {
    return (
      <div aria-busy="true" className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div className="h-32 rounded-card bg-paper-tint" />
          <div className="h-32 rounded-card bg-paper-tint" />
        </div>
        <div className="h-64 rounded-tile bg-paper-tint" />
      </div>
    );
  }

  const items = lines.map((l) => ({ line: l, product: getProductBySlug(l.slug) })).filter((i) => i.product);

  if (items.length === 0) {
    return (
      <div>
        <div className="rounded-tile border border-line bg-white px-6 py-14 text-center">
          <h2 className="text-heading">Il carrello è vuoto.</h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-ink-soft">Scopri i notebook e i PC in offerta: spedizione gratuita in Italia e reso entro 14 giorni.</p>
          <ButtonLink href="/prodotti" className="mt-6">Scopri il catalogo</ButtonLink>
        </div>
        <h2 className="mt-16 text-heading">Ti potrebbero interessare</h2>
        <div className="mt-6">
          <ProductGrid products={getFeaturedProducts(4)} brandNames={brandNames} />
        </div>
      </div>
    );
  }

  const subtotal = items.reduce((sum, i) => sum + i.product!.price * i.line.quantity, 0);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-line rounded-tile border border-line bg-white px-6">
        {items.map(({ line, product }) => {
          const p = product!;
          const image = p.images[0];
          return (
            <li key={p.slug} className="flex gap-5 py-6">
              <Link href={`/prodotti/${p.slug}`} className="relative size-24 shrink-0 overflow-hidden rounded-card border border-line bg-white">
                {image ? <Image src={image.src} alt={image.alt} fill sizes="96px" className="object-contain p-2" /> : null}
              </Link>
              <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-ink-muted">{brandNames[p.brand]}</p>
                  <h2 className="font-sans text-base font-semibold">
                    <Link href={`/prodotti/${p.slug}`} className="hover:text-aventi-blue">{p.name}</Link>
                  </h2>
                  <p className="mt-1 text-sm text-ink-soft tabular">{formatPrice(p.price)} cad.</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button type="button" aria-label="Diminuisci quantità" onClick={() => setQuantity(p.slug, line.quantity - 1)} className="flex size-9 items-center justify-center rounded-full border border-line hover:border-lilac">
                      <Minus className="size-4" aria-hidden="true" />
                    </button>
                    <label className="sr-only" htmlFor={`q-${p.slug}`}>Quantità</label>
                    <input
                      id={`q-${p.slug}`}
                      type="number"
                      min={1}
                      max={MAX_QUANTITY}
                      value={line.quantity}
                      onChange={(e) => setQuantity(p.slug, Number(e.target.value) || 1)}
                      className="h-9 w-14 rounded-card border border-line text-center text-sm font-semibold tabular focus:border-lilac focus:outline-none"
                    />
                    <button type="button" aria-label="Aumenta quantità" disabled={line.quantity >= MAX_QUANTITY} onClick={() => setQuantity(p.slug, line.quantity + 1)} className="flex size-9 items-center justify-center rounded-full border border-line hover:border-lilac disabled:opacity-40">
                      <Plus className="size-4" aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => remove(p.slug)} className="ml-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-danger">
                      <Trash2 className="size-4" aria-hidden="true" /> Rimuovi
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold tabular sm:text-right">{formatPrice(p.price * line.quantity)}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <CartSummary subtotal={subtotal} cta={{ label: "Vai al checkout", href: "/checkout" }} />
    </div>
  );
}
