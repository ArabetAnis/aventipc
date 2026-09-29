import type { MetadataRoute } from "next";
import { allRoutes, type Route } from "@/i18n/routes";
import { getProduct } from "@/data/products";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

export const dynamic = "force-static";

const CONTENT_UPDATED = new Date("2026-09-29");

const priority: Record<Route["key"]["kind"], number> = {
  home: 1,
  catalog: 0.9,
  product: 0.9,
  theme: 0.8,
  city: 0.7,
  brand: 0.6,
  page: 0.4,
};

/** Every page in every language, each with its hreflang alternates (xhtml:link). */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = allRoutes().map((route) => {
    const product = route.key.kind === "product" ? getProduct(route.key.slug) : undefined;
    const legal = route.key.kind === "page" && (route.key.page === "privacy" || route.key.page === "terms");
    return {
      url: absoluteUrl(route.path),
      lastModified: product ? new Date(product.updatedAt) : CONTENT_UPDATED,
      changeFrequency: route.key.kind === "page" ? "monthly" : "weekly",
      priority: legal ? 0.2 : priority[route.key.kind],
      alternates: { languages: languageAlternates(route.key) },
      ...(product ? { images: product.images.map((img) => absoluteUrl(img.src)) } : {}),
    };
  });
  return [
    { url: absoluteUrl("/"), lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.5, alternates: { languages: languageAlternates({ kind: "home" }) } },
    ...pages,
  ];
}
