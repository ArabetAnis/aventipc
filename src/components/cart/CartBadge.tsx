"use client";

import { useCartStore, selectCount } from "@/store/cart";
import { useHydrated } from "@/store/useHydrated";

/** Small count bubble for the header cart link. Renders nothing until hydrated. */
export function CartBadge() {
  const hydrated = useHydrated();
  const count = useCartStore(selectCount);
  if (!hydrated || count === 0) return null;
  return (
    <span
      aria-label={`${count} ${count === 1 ? "articolo" : "articoli"} nel carrello`}
      className="brand-gradient-strong absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[0.6875rem] font-bold text-white tabular"
    >
      {count}
    </span>
  );
}
