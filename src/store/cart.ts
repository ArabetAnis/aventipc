"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartLine {
  slug: string;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
  add: (slug: string, quantity?: number) => void;
  remove: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
}

export const MAX_QUANTITY = 5;

/**
 * The cart stores only slugs and quantities. Prices and names are always read
 * from the catalogue, so a stale localStorage entry can never show an old price.
 */
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      add: (slug, quantity = 1) =>
        set((state) => {
          const existing = state.lines.find((l) => l.slug === slug);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.slug === slug ? { ...l, quantity: Math.min(MAX_QUANTITY, l.quantity + quantity) } : l,
              ),
            };
          }
          return { lines: [...state.lines, { slug, quantity: Math.min(MAX_QUANTITY, quantity) }] };
        }),
      remove: (slug) => set((state) => ({ lines: state.lines.filter((l) => l.slug !== slug) })),
      setQuantity: (slug, quantity) =>
        set((state) => ({
          lines:
            quantity <= 0
              ? state.lines.filter((l) => l.slug !== slug)
              : state.lines.map((l) => (l.slug === slug ? { ...l, quantity: Math.min(MAX_QUANTITY, quantity) } : l)),
        })),
      clear: () => set({ lines: [] }),
    }),
    {
      name: "aventipc-cart",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export function selectCount(state: CartState): number {
  return state.lines.reduce((sum, l) => sum + l.quantity, 0);
}
