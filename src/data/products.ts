import type { Availability, BrandSlug, Condition } from "@/types/catalog";

/**
 * Language-neutral product data. All text lives in src/i18n/locales/<lang>.ts, keyed by slug.
 * Prices are EUR cents from the live Vinted listings (checked 2026-09-29).
 * `price: null` → "price on request" (ThinkCentre: no listing and no price yet).
 * `vinted` missing → the buy button becomes a contact button.
 */

export type ProductSlug = "lenovo-thinkbook-14-iil" | "dell-latitude-14-rugged-5414" | "lenovo-thinkcentre-m710q-tiny";

export interface ProductImage {
  src: string;
  width: number;
  height: number;
  /** "model": manufacturer image of the model on white. "real": our photo of the item for sale. */
  kind: "model" | "real";
  source: string;
}

export interface Product {
  slug: ProductSlug;
  name: string;
  brand: BrandSlug;
  form: "laptop" | "desktop";
  condition: Condition;
  /** EUR cents, or null when the price is on request. */
  price: number | null;
  sku: string;
  availability: Availability;
  /** Vinted listing URL. */
  vinted?: string;
  images: ProductImage[];
  featured?: boolean;
  /** ISO date for sitemap lastModified. */
  updatedAt: string;
}

export const products: Product[] = [
  {
    "slug": "lenovo-thinkbook-14-iil",
    "name": "Lenovo ThinkBook 14 IIL",
    "brand": "lenovo",
    "form": "laptop",
    "condition": "used",
    "price": 19900,
    "sku": "AV-TB14IIL-I3-8-256",
    "availability": "in_stock",
    "vinted": "https://www.vinted.it/items/10168548255-pc-lenovo-thinkpad-14-iil-20-sl-intel-core-i3-1005g1-8gb-ram",
    "images": [
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-modello.jpg",
        "width": 1200,
        "height": 900,
        "kind": "model",
        "source": "https://psref.lenovo.com/Product/ThinkBook/ThinkBook_14_IIL"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-1.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-2.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-3.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-4.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-5.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      }
    ],
    "featured": true,
    "updatedAt": "2026-09-29"
  },
  {
    "slug": "dell-latitude-14-rugged-5414",
    "name": "Dell Latitude 5414 Rugged",
    "brand": "dell",
    "form": "laptop",
    "condition": "used",
    "price": 28400,
    "sku": "AV-L5414R-I5-8-256",
    "availability": "in_stock",
    "vinted": "https://www.vinted.it/items/10165009288-laptop-dell-latitude-5414-rugged-intel-core-i5-6300u-8gb-of-ram",
    "images": [
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-modello.jpg",
        "width": 1200,
        "height": 900,
        "kind": "model",
        "source": "https://rugged.tech/product/dell-latitude-rugged-14-5414-i5-fhd-touch/"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-1.jpg",
        "width": 756,
        "height": 1008,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-2.jpg",
        "width": 756,
        "height": 1008,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-3.jpg",
        "width": 1008,
        "height": 756,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-4.jpg",
        "width": 1008,
        "height": 756,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-5.jpg",
        "width": 1008,
        "height": 756,
        "kind": "real",
        "source": "foto AventiPC"
      }
    ],
    "featured": true,
    "updatedAt": "2026-09-29"
  },
  {
    "slug": "lenovo-thinkcentre-m710q-tiny",
    "name": "Lenovo ThinkCentre M710q Tiny",
    "brand": "lenovo",
    "form": "desktop",
    "condition": "used",
    "price": null,
    "sku": "AV-M710Q-I5-4-500",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-modello.jpg",
        "width": 1200,
        "height": 900,
        "kind": "model",
        "source": "https://psref.lenovo.com/Product/ThinkCentre/ThinkCentre_M710_Tiny"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-1.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-2.jpg",
        "width": 1600,
        "height": 1200,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-3.jpg",
        "width": 1600,
        "height": 418,
        "kind": "real",
        "source": "foto AventiPC"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-4.jpg",
        "width": 535,
        "height": 1600,
        "kind": "real",
        "source": "foto AventiPC"
      }
    ],
    "featured": false,
    "updatedAt": "2026-09-29"
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Featured first, then priced before price-on-request. */
export function sortedProducts(list: Product[] = products): Product[] {
  return [...list].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || Number(a.price === null) - Number(b.price === null),
  );
}

export function byPrice(list: Product[] = products): Product[] {
  return [...list].sort((a, b) => (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER));
}

export function minPrice(list: Product[]): number | null {
  const prices = list.map((p) => p.price).filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
}
