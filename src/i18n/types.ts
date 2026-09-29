import type { BrandSlug, FaqItem } from "@/types/catalog";
import type { ProductSlug } from "@/data/products";
import type { CountryCode, PageKey, ThemeKey } from "./config";

/**
 * Everything a city page template needs. Built in routes/views, passed to the
 * locale's template functions so each language controls its own grammar.
 */
export interface CityContext {
  /** Localized city name, e.g. "Roma", "Anvers", "München". */
  name: string;
  /** Localized country name, e.g. "Italia", "Belgique". */
  country: string;
  countryCode: CountryCode;
  /** Universities already joined for this language, e.g. "Sapienza, Tor Vergata e Roma Tre". Empty string if none. */
  universities: string;
  /** In-person pickup is possible in this city (Milan only). */
  pickup: boolean;
  /** Lowest price shown on the page, formatted for the locale ("199,00 €"), or null. */
  priceFrom: string | null;
  /** Number of products listed on the page. */
  count: number;
}

export interface ThemeText {
  /** Lowercase keyword as used in running text, e.g. "portatili economici". */
  keyword: string;
  /** Capitalized short label for links, e.g. "Portatili economici". */
  label: string;
  hub: {
    /** <title> without the " | AventiPC" suffix. Max 48 characters. */
    title: string;
    h1: string;
    /** Max 155 characters. */
    metaDescription: string;
    /** 2 paragraphs, keyword used naturally about once per 100 words. */
    intro: string[];
    /** H2 above the list of city links. */
    citiesTitle: string;
    /** H2 above the product grid. */
    productsTitle: string;
  };
  city: {
    /** <title> without suffix. Max 48 characters for the longest city name. */
    title: (c: CityContext) => string;
    h1: (c: CityContext) => string;
    /** Max 155 characters. */
    metaDescription: (c: CityContext) => string;
    /** 2 paragraphs mentioning the keyword and the city. */
    intro: (c: CityContext) => string[];
    /** H2 above the product grid. */
    productsTitle: (c: CityContext) => string;
    guideTitle: (c: CityContext) => string;
    /** 3 paragraphs of real buying advice. */
    guide: (c: CityContext) => string[];
    faqTitle: (c: CityContext) => string;
    /** 3 questions. */
    faq: (c: CityContext) => FaqItem[];
    otherCitiesTitle: (c: CityContext) => string;
    otherThemesTitle: (c: CityContext) => string;
  };
}

export interface ProductText {
  /** Product type for cards, e.g. "Notebook", "Mini PC". */
  kind: string;
  /** <title> without suffix, max 48 characters, e.g. "Lenovo ThinkBook 14 IIL usato, come nuovo". */
  title: string;
  /** One or two sentences, max 155 characters. Also the meta description. */
  shortDescription: string;
  /** 3 paragraphs. */
  description: string[];
  /** 4–5 bullets. */
  highlights: string[];
  specs: { label: string; value: string }[];
  /** One alt text per image, in the same order as the product's images in src/data/products.ts. */
  imageAlts: string[];
}

export interface BrandText {
  /** <title> without suffix. */
  title: string;
  metaDescription: string;
  tagline: string;
  whyTitle: string;
  description: string[];
}

export interface PageText {
  /** H1 and breadcrumb label. */
  title: string;
  /** <title> without suffix. */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading?: string; paragraphs: string[] }[];
}

export type ReassuranceIcon = "camera" | "check" | "bag" | "headset";

export interface Dictionary {
  meta: {
    /** Home <title>, used as-is (absolute). Max 60 characters, includes "AventiPC". */
    homeTitle: string;
    /** Home meta description, max 155 characters. */
    homeDescription: string;
    /** One-line brand tagline (footer, Organization schema). */
    tagline: string;
    /** Short line printed on Open Graph images. */
    ogTagline: string;
    /** Short badge line on product Open Graph images, e.g. "Come nuovo · Foto reali · Vinted". */
    ogBadge: string;
  };
  countries: Record<CountryCode, string>;
  ui: {
    skipToContent: string;
    homeAria: string;
    mainMenu: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    breadcrumb: string;
    home: string;
    nav: { products: string; howToBuy: string; about: string; contact: string };
    footer: {
      products: string;
      allProducts: string;
      /** Column title for the keyword pages, e.g. "Ricerche frequenti". */
      searches: string;
      info: string;
      faq: string;
      company: string;
      /** Small print at the bottom. */
      note: string;
    };
    product: {
      likeNew: string;
      available: string;
      sold: string;
      comingSoon: string;
      buyOnVinted: string;
      /** Button when there is no Vinted listing. */
      askAvailability: string;
      priceOnRequest: string;
      /** Line under the buy button about Vinted buyer protection. */
      vintedNote: string;
      /** Line about the photos: model image first, real photos after. */
      photosNote: string;
      questions: string;
      writeUs: string;
      description: string;
      specs: string;
      specsCaption: (name: string) => string;
      related: string;
      gallery: (name: string) => string;
      showImage: (index: number, total: number) => string;
      /** Caption under a manufacturer image. */
      modelImage: string;
      /** Caption under a real photo. */
      realPhoto: string;
    };
    catalog: {
      /** <title> without suffix. */
      title: string;
      h1: string;
      intro: string;
      metaDescription: string;
      count: (n: number) => string;
    };
    brand: { count: (n: number) => string; others: string; empty: string };
    contact: {
      hours: string;
      form: { name: string; email: string; message: string; submit: string; sent: string };
    };
    legalUpdated: string;
    notFound: { title: string; text: string; home: string; products: string };
    error: { title: string; text: string; retry: string };
  };
  home: {
    hero: { title: string; subtitle: string; primaryCta: string; secondaryCta: string; imageAlt: string };
    reassurance: { icon: ReassuranceIcon; title: string; text: string }[];
    featuredTitle: string;
    featuredText: string;
    whyTitle: string;
    /** Internal-links block to the keyword and city pages. */
    searchesTitle: string;
    searchesText: string;
    faqTitle: string;
    faqText: string;
  };
  faq: FaqItem[];
  products: Record<ProductSlug, ProductText>;
  brands: Record<BrandSlug, BrandText>;
  pages: Record<PageKey, PageText>;
  themes: Record<ThemeKey, ThemeText>;
}
