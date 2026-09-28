import type { Product } from "@/types/catalog";
import { buttonClasses } from "@/components/ui/Button";

const MARKETPLACES = [
  { key: "ebay", label: "Acquista su eBay", variant: "primary" },
  { key: "subito", label: "Acquista su Subito", variant: "secondary" },
] as const;

/**
 * Buy buttons for the marketplaces where the item is listed. A button becomes a link
 * as soon as its URL is set in `product.marketplaces`; until then it is a plain button.
 */
export function MarketplaceButtons({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {MARKETPLACES.map(({ key, label, variant }) => {
        const href = product.marketplaces?.[key];
        const className = buttonClasses(variant, "lg", "w-full sm:flex-1");
        return href ? (
          <a key={key} href={href} target="_blank" rel="noopener" className={className}>
            {label}
          </a>
        ) : (
          <button key={key} type="button" className={className}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
