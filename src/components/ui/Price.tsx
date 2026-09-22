import { formatPrice, discountPercent } from "@/lib/format";

interface PriceProps {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { main: "text-base font-bold", old: "text-xs" },
  md: { main: "text-lg font-bold", old: "text-sm" },
  lg: { main: "font-display text-title font-semibold", old: "text-base" },
};

/** Euro price with optional crossed-out compare-at price and discount. */
export function Price({ price, compareAtPrice, size = "md", className = "" }: PriceProps) {
  const discount = discountPercent(price, compareAtPrice);
  return (
    <p className={`tabular flex flex-wrap items-baseline gap-x-2 ${className}`}>
      <span className={sizes[size].main}>{formatPrice(price)}</span>
      {discount !== null && compareAtPrice ? (
        <>
          <s className={`${sizes[size].old} text-ink-muted`}>{formatPrice(compareAtPrice)}</s>
          <span className={`${sizes[size].old} font-semibold text-success`}>−{discount}%</span>
        </>
      ) : null}
    </p>
  );
}
