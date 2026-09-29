/**
 * Locales, markets and localized URL segments.
 * Every public URL is /{locale}/{localized path}/ — see routes.ts.
 */

export const locales = ["it", "fr", "es", "de", "nl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export type CountryCode = "IT" | "FR" | "BE" | "ES" | "DE";
export type PageKey = "about" | "howToBuy" | "contact" | "privacy" | "terms";
export type ThemeKey = "used" | "cheap" | "students";

export const pageKeys: PageKey[] = ["about", "howToBuy", "contact", "privacy", "terms"];
export const themeKeys: ThemeKey[] = ["used", "cheap", "students"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

interface LocaleMeta {
  /** Name of the language in itself, for the language switcher. */
  nativeName: string;
  /** Markets served, shown under the language name on the chooser page. */
  markets: string;
  /** BCP 47 tag for Intl formatting (prices, lists). */
  intl: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Countries whose cities get keyword pages in this language. */
  countries: CountryCode[];
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  it: { nativeName: "Italiano", markets: "Italia", intl: "it-IT", ogLocale: "it_IT", countries: ["IT"] },
  fr: { nativeName: "Français", markets: "France · Belgique", intl: "fr-FR", ogLocale: "fr_FR", countries: ["FR", "BE"] },
  es: { nativeName: "Español", markets: "España", intl: "es-ES", ogLocale: "es_ES", countries: ["ES"] },
  de: { nativeName: "Deutsch", markets: "Deutschland", intl: "de-DE", ogLocale: "de_DE", countries: ["DE"] },
  nl: { nativeName: "Nederlands", markets: "België", intl: "nl-BE", ogLocale: "nl_BE", countries: ["BE"] },
};

/** hreflang for city pages: language + the city's country, e.g. "fr-BE". */
export function regionalHreflang(locale: Locale, country: CountryCode): string {
  return `${locale}-${country}`;
}

interface Segments {
  products: string;
  brands: string;
  pages: Record<PageKey, string>;
  themes: Record<ThemeKey, string>;
}

/** Localized, keyword-bearing URL segments. Changing one changes live URLs. */
export const segments: Record<Locale, Segments> = {
  it: {
    products: "prodotti",
    brands: "marchi",
    pages: { about: "chi-siamo", howToBuy: "come-acquistare", contact: "contatti", privacy: "privacy", terms: "termini" },
    themes: { used: "pc-portatili-usati", cheap: "portatili-economici", students: "portatili-per-studenti" },
  },
  fr: {
    products: "produits",
    brands: "marques",
    pages: { about: "qui-sommes-nous", howToBuy: "comment-acheter", contact: "contact", privacy: "confidentialite", terms: "conditions-generales" },
    themes: { used: "ordinateur-portable-occasion", cheap: "pc-portable-pas-cher", students: "ordinateur-portable-etudiant" },
  },
  es: {
    products: "productos",
    brands: "marcas",
    pages: { about: "quienes-somos", howToBuy: "como-comprar", contact: "contacto", privacy: "privacidad", terms: "condiciones" },
    themes: { used: "portatiles-segunda-mano", cheap: "portatiles-baratos", students: "portatiles-para-estudiantes" },
  },
  de: {
    products: "produkte",
    brands: "marken",
    pages: { about: "ueber-uns", howToBuy: "so-kaufen-sie", contact: "kontakt", privacy: "datenschutz", terms: "nutzungsbedingungen" },
    themes: { used: "gebrauchte-laptops", cheap: "guenstige-laptops", students: "laptops-fuer-studenten" },
  },
  nl: {
    products: "producten",
    brands: "merken",
    pages: { about: "over-ons", howToBuy: "hoe-kopen", contact: "contact", privacy: "privacy", terms: "voorwaarden" },
    themes: { used: "tweedehands-laptops", cheap: "goedkope-laptops", students: "laptops-voor-studenten" },
  },
};
