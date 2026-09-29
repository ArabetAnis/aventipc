import type { Metadata } from "next";
import { site } from "@/content/site";
import { localeMeta, type Locale } from "@/i18n/config";
import { alternatesFor, xDefaultFor, type RouteKey } from "@/i18n/routes";
import type { Product } from "@/data/products";
import type { FaqItem } from "@/types/catalog";
import { priceToDecimal } from "@/lib/format";

export const SITE_NAME = site.name;

/**
 * Absolute URL on the canonical domain. Page paths always end with "/" (the site uses
 * trailing slashes everywhere); file paths such as /images/x.jpg are left alone.
 */
export function absoluteUrl(path = "/"): string {
  let p = path;
  const cut = p.search(/[?#]/);
  const base = cut === -1 ? p : p.slice(0, cut);
  const rest = cut === -1 ? "" : p.slice(cut);
  if (!base.endsWith("/") && !/\.[a-z0-9]+$/i.test(base)) p = `${base}/${rest}`;
  return new URL(p, site.url).toString();
}

/** hreflang map for a route: every language version plus x-default when there is one. */
export function languageAlternates(key: RouteKey): Record<string, string> {
  const map: Record<string, string> = {};
  for (const alt of alternatesFor(key)) map[alt.hreflang] = absoluteUrl(alt.path);
  const xDefault = xDefaultFor(key);
  if (xDefault) map["x-default"] = absoluteUrl(xDefault);
  return map;
}

/** Open Graph image generated at build time by app/og/[file]/route.tsx. */
export function ogImagePath(locale: Locale, productSlug?: string): string {
  return productSlug ? `/og/${locale}-${productSlug}.png` : `/og/${locale}.png`;
}

interface PageMetaInput {
  locale: Locale;
  key: RouteKey;
  path: string;
  /** Title without the " | AventiPC" suffix (added by the layout template) unless absoluteTitle is set. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  image?: { path: string; alt: string };
  type?: "website" | "article";
}

/** Canonical, hreflang, Open Graph and Twitter tags for one page. */
export function pageMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path);
  const image = input.image ?? { path: ogImagePath(input.locale), alt: input.title };
  const images = [{ url: absoluteUrl(image.path), width: 1200, height: 630, alt: image.alt }];
  const otherLocales = alternatesFor(input.key)
    .filter((a) => a.locale !== input.locale)
    .map((a) => localeMeta[a.locale].ogLocale);
  const fullTitle = input.absoluteTitle ? input.title : `${input.title} | ${SITE_NAME}`;
  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    alternates: { canonical: url, languages: languageAlternates(input.key) },
    openGraph: {
      type: input.type ?? "website",
      url,
      siteName: SITE_NAME,
      locale: localeMeta[input.locale].ogLocale,
      alternateLocale: [...new Set(otherLocales)],
      title: fullTitle,
      description: input.description,
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: input.description, images: images.map((i) => i.url) },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  };
}

/* ---------- JSON-LD (schema.org) ---------- */

export function organizationJsonLd(tagline: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/icon-512.png"),
    description: tagline,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: ["Italy", "France", "Belgium", "Spain", "Germany"].map((name) => ({ "@type": "Country", name })),
    sameAs: Object.values(site.social),
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: absoluteUrl("/"),
    inLanguage: localeMeta[locale].intl,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

const availabilityMap = {
  in_stock: "https://schema.org/InStock",
  preorder: "https://schema.org/PreOrder",
  out_of_stock: "https://schema.org/SoldOut",
} as const;

const conditionMap = {
  used: "https://schema.org/UsedCondition",
  refurbished: "https://schema.org/RefurbishedCondition",
  new: "https://schema.org/NewCondition",
} as const;

/** Product + Offer. Products without a price get no Offer (Google rejects offers without price). */
export function productJsonLd(input: {
  product: Product;
  brandName: string;
  path: string;
  locale: Locale;
  description: string;
  kind: string;
}) {
  const { product } = input;
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: input.description,
    sku: product.sku,
    brand: { "@type": "Brand", name: input.brandName },
    category: input.kind,
    itemCondition: conditionMap[product.condition],
    image: product.images.map((img) => absoluteUrl(img.src)),
    url,
    inLanguage: localeMeta[input.locale].intl,
    ...(product.price !== null
      ? {
          offers: {
            "@type": "Offer",
            url: product.vinted ?? url,
            priceCurrency: "EUR",
            price: priceToDecimal(product.price),
            availability: availabilityMap[product.availability],
            itemCondition: conditionMap[product.condition],
            seller: { "@id": absoluteUrl("/#organization") },
          },
        }
      : {}),
  };
}

export function itemListJsonLd(entries: { name: string; path: string }[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: entries.length,
    itemListElement: entries.map((e, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(e.path),
      name: e.name,
    })),
  };
}

export function collectionPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  city?: { name: string; country: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: localeMeta[input.locale].intl,
    isPartOf: { "@id": absoluteUrl("/#website") },
    ...(input.city
      ? {
          spatialCoverage: {
            "@type": "City",
            name: input.city.name,
            containedInPlace: { "@type": "Country", name: input.city.country },
          },
        }
      : {}),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
