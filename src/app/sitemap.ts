import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { categories } from "@/content/categories";
import { brands } from "@/content/brands";
import { staticPages } from "@/content/pages";
import { products } from "@/data/products";

const CONTENT_UPDATED = new Date("2026-09-22");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;

  const home: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: CONTENT_UPDATED, changeFrequency: "daily", priority: 1 },
    { url: url("/prodotti"), lastModified: CONTENT_UPDATED, changeFrequency: "daily", priority: 0.9 },
  ];

  const categoryUrls: MetadataRoute.Sitemap = categories.map((c) => ({
    url: url(`/categorie/${c.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const brandUrls: MetadataRoute.Sitemap = brands.map((b) => ({
    url: url(`/marchi/${b.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: url(`/prodotti/${p.slug}`),
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
    images: p.images.map((img) => url(img.src)),
  }));

  const pageUrls: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: url(`/${p.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly",
    priority: p.slug === "privacy" || p.slug === "termini" ? 0.3 : 0.5,
  }));

  return [...home, ...categoryUrls, ...brandUrls, ...productUrls, ...pageUrls];
}
