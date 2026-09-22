import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/catalog";

interface CategoryTilesProps {
  categories: Category[];
  counts: Record<string, number>;
}

export function CategoryTiles({ categories, counts }: CategoryTilesProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            href={`/categorie/${category.slug}`}
            className="group block rounded-tile"
          >
            <span className="relative block aspect-[4/3] overflow-hidden rounded-tile bg-paper-tint">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.04]"
              />
            </span>
            <span className="mt-3 block">
              <span className="block font-display text-lg font-semibold text-ink group-hover:text-aventi-blue">
                {category.name}
              </span>
              <span className="block text-sm text-ink-soft">
                {counts[category.slug] ?? 0} {counts[category.slug] === 1 ? "prodotto" : "prodotti"}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
