import type { Locale } from "@/i18n/config";
import { formatPrice } from "@/lib/format";

interface PriceProps {
  price: number | null;
  locale: Locale;
  onRequestLabel: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-base font-bold",
  md: "text-lg font-bold",
  lg: "font-display text-title font-semibold",
};

export function Price({ price, locale, onRequestLabel, size = "md", className = "" }: PriceProps) {
  return (
    <p className={`tabular ${className}`}>
      <span className={price === null ? "text-base font-semibold text-ink-soft" : sizes[size]}>
        {price === null ? onRequestLabel : formatPrice(price, locale)}
      </span>
    </p>
  );
}
