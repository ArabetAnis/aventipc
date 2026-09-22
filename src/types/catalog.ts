/** Shared catalogue types for AventiPC. Keep this file free of runtime code. */

export type CategorySlug =
  | "notebook"
  | "desktop"
  | "gaming"
  | "workstation"
  | "mini-pc";

export type BrandSlug =
  | "apple"
  | "dell"
  | "hp"
  | "lenovo"
  | "asus"
  | "aventipc";

export type Availability = "in_stock" | "preorder" | "out_of_stock";

export interface ProductImage {
  /** Path under /public, e.g. "/images/products/apple-macbook-air-13-m4-1.jpg" */
  src: string;
  /** Descriptive Italian alt text, e.g. "MacBook Air 13 pollici M4 color mezzanotte, aperto, vista frontale" */
  alt: string;
  width: number;
  height: number;
  /** Where the placeholder image came from (URL). Demo attribution only. */
  source: string;
  /** "manufacturer" for official press/product shots, "unsplash" for stock photos. */
  license: "manufacturer" | "unsplash";
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: BrandSlug;
  category: CategorySlug;
  /** One sentence, Italian, ≤ 140 chars. Used in cards and meta descriptions. */
  shortDescription: string;
  /** 2–3 paragraphs in Italian. Each array item is one paragraph. */
  description: string[];
  /** EUR, integer cents, IVA inclusa. 1229.00 € → 122900 */
  price: number;
  /** Optional crossed-out price in cents. */
  compareAtPrice?: number;
  sku: string;
  /** EAN/GTIN-13 when known. */
  gtin?: string;
  availability: Availability;
  images: ProductImage[];
  specs: ProductSpec[];
  /** 3–5 short bullets in Italian. */
  highlights: string[];
  rating?: { value: number; count: number };
  tags?: string[];
  featured?: boolean;
  /** ISO date (YYYY-MM-DD) for sitemap lastModified. */
  updatedAt: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short line under the name, Italian. */
  tagline: string;
  /** 1–2 paragraphs, Italian, for the category landing page. */
  description: string[];
  seoTitle: string;
  seoDescription: string;
  image: { src: string; alt: string; width: number; height: number; source: string };
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
