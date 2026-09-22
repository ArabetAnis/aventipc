"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/Button";

interface AddToCartButtonProps {
  slug: string;
  disabled?: boolean;
}

export function AddToCartButton({ slug, disabled = false }: AddToCartButtonProps) {
  const add = useCartStore((s) => s.add);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 3000);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button
        size="lg"
        disabled={disabled}
        onClick={() => {
          add(slug, 1);
          setAdded(true);
        }}
        aria-live="polite"
        className="w-full sm:w-auto"
      >
        {added ? <Check className="size-5" aria-hidden="true" /> : <ShoppingBag className="size-5" aria-hidden="true" />}
        {added ? "Aggiunto al carrello" : disabled ? "Non disponibile" : "Aggiungi al carrello"}
      </Button>
      {added ? (
        <Link href="/carrello" className="text-sm font-semibold text-aventi-blue hover:underline">
          Vai al carrello
        </Link>
      ) : null}
    </div>
  );
}
