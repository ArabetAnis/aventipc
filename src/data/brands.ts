import type { BrandSlug } from "@/types/catalog";

export const brands: { slug: BrandSlug; name: string }[] = [
  { slug: "lenovo", name: "Lenovo" },
  { slug: "dell", name: "Dell" },
];

export function brandName(slug: BrandSlug): string {
  return brands.find((b) => b.slug === slug)?.name ?? slug;
}
