/** Shared catalogue types for AventiPC. Keep this file free of runtime code. */

export type BrandSlug = "dell" | "lenovo";

export type Condition = "used" | "refurbished" | "new";

export type Availability = "in_stock" | "preorder" | "out_of_stock";

export interface ProductImage {
  /** Path under /public, e.g. "/images/products/apple-macbook-air-13-m4-1.jpg" */
  src: string;
  /** Descriptive Italian alt text, e.g. "Dell Latitude 14 Rugged 5414 aperto, vista frontale" */
  alt: string;
  width: number;
  height: number;
  /** Where the placeholder image came from (URL). Demo attribution only. */
  source: string;
  /** "own" for our photos of the actual item, "manufacturer" for press shots. */
  license: "own" | "manufacturer";
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: BrandSlug;
  /** Short product type shown on cards, e.g. "Notebook", "Mini PC". */
  kind: string;
  condition: Condition;
  /** One sentence, Italian, ≤ 140 chars. Used in cards and meta descriptions. */
  shortDescription: string;
  /** 2–3 paragraphs in Italian. Each array item is one paragraph. */
  description: string[];
  /** EUR, integer cents. 249.00 € → 24900 */
  price: number;
  /** Optional crossed-out price in cents. */
  compareAtPrice?: number;
  /** Where the item is actually sold. Empty values render as unlinked buttons. */
  marketplaces?: { ebay?: string; subito?: string };
  sku: string;
  /** EAN/GTIN-13 when known. */
  gtin?: string;
  availability: Availability;
  images: ProductImage[];
  specs: ProductSpec[];
  /** 3–5 short bullets in Italian. */
  highlights: string[];
  tags?: string[];
  featured?: boolean;
  /** ISO date (YYYY-MM-DD) for sitemap lastModified. */
  updatedAt: string;
}

export interface Brand {
  slug: BrandSlug;
  name: string;
  tagline: string;
  description: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StaticPageSection {
  heading?: string;
  paragraphs: string[];
}

export interface StaticPage {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sections: StaticPageSection[];
}
