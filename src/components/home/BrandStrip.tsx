import Link from "next/link";
import type { Brand } from "@/types/catalog";

export function BrandStrip({ brands }: { brands: Brand[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
      {brands.map((brand) => (
        <li key={brand.slug}>
          <Link
            href={`/marchi/${brand.slug}`}
            className="font-display text-2xl font-semibold text-ink-muted transition-colors hover:text-ink"
          >
            {brand.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
