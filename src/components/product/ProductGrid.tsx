import type { Product } from "@/data/products";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductGrid({ products, locale, dict, priorityCount = 0 }: { products: Product[]; locale: Locale; dict: Dictionary; priorityCount?: number }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <li key={product.slug}>
          <ProductCard product={product} locale={locale} dict={dict} priority={index < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
