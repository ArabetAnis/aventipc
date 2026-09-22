import type { Product } from "@/types/catalog";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductGridProps {
  products: Product[];
  brandNames: Record<string, string>;
  /** How many leading images get priority loading. */
  priorityCount?: number;
}

export function ProductGrid({ products, brandNames, priorityCount = 0 }: ProductGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <li key={product.slug} className="relative">
          <ProductCard product={product} brandName={brandNames[product.brand] ?? product.brand} priority={index < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
