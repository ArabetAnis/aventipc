import { brands } from "@/data/brands";
import { products, type ProductSlug } from "@/data/products";
import type { BrandSlug } from "@/types/catalog";
import { cities, citiesFor, type City } from "./cities";
import { locales, pageKeys, regionalHreflang, segments, themeKeys, type Locale, type PageKey, type ThemeKey } from "./config";

/** What a URL shows, independent of language. */
export type RouteKey =
  | { kind: "home" }
  | { kind: "catalog" }
  | { kind: "product"; slug: ProductSlug }
  | { kind: "brand"; slug: BrandSlug }
  | { kind: "page"; page: PageKey }
  | { kind: "theme"; theme: ThemeKey }
  | { kind: "city"; theme: ThemeKey; city: string };

export interface Route {
  locale: Locale;
  key: RouteKey;
  /** Root-relative path with trailing slash, e.g. "/fr/pc-portable-pas-cher/paris/". */
  path: string;
}

export interface Alternate {
  locale: Locale;
  /** hreflang value: "it", "fr"… or regional ("fr-BE") for city pages. */
  hreflang: string;
  path: string;
}

export function getCity(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}

/** Localized path for a route key, or null when that page doesn't exist in the locale. */
export function pathFor(locale: Locale, key: RouteKey): string | null {
  const s = segments[locale];
  switch (key.kind) {
    case "home":
      return `/${locale}/`;
    case "catalog":
      return `/${locale}/${s.products}/`;
    case "product":
      return `/${locale}/${s.products}/${key.slug}/`;
    case "brand":
      return `/${locale}/${s.brands}/${key.slug}/`;
    case "page":
      return `/${locale}/${s.pages[key.page]}/`;
    case "theme":
      return `/${locale}/${s.themes[key.theme]}/`;
    case "city": {
      const name = getCity(key.city)?.names[locale];
      return name ? `/${locale}/${s.themes[key.theme]}/${name.slug}/` : null;
    }
  }
}

/** Same as pathFor, for keys that exist in every locale. */
export function href(locale: Locale, key: RouteKey): string {
  return pathFor(locale, key) ?? `/${locale}/`;
}

function keysFor(locale: Locale): RouteKey[] {
  const keys: RouteKey[] = [{ kind: "home" }, { kind: "catalog" }];
  for (const p of products) keys.push({ kind: "product", slug: p.slug });
  for (const b of brands) keys.push({ kind: "brand", slug: b.slug });
  for (const page of pageKeys) keys.push({ kind: "page", page });
  for (const theme of themeKeys) {
    keys.push({ kind: "theme", theme });
    for (const city of citiesFor(locale)) keys.push({ kind: "city", theme, city: city.id });
  }
  return keys;
}

let cache: Route[] | null = null;

/** Every page of the site, in every language. */
export function allRoutes(): Route[] {
  if (!cache) {
    cache = locales.flatMap((locale) =>
      keysFor(locale).map((key) => ({ locale, key, path: pathFor(locale, key) as string })),
    );
  }
  return cache;
}

/** Finds the route for /{locale}/{...parts}/. */
export function resolve(locale: Locale, parts: string[]): Route | null {
  const path = `/${[locale, ...parts].join("/")}/`;
  return allRoutes().find((r) => r.path === path) ?? null;
}

/** The same page in every language where it exists (used for hreflang and the language switcher). */
export function alternatesFor(key: RouteKey): Alternate[] {
  if (key.kind === "city") {
    const city = getCity(key.city);
    if (!city) return [];
    return locales.flatMap((locale) => {
      const path = pathFor(locale, key);
      return path ? [{ locale, hreflang: regionalHreflang(locale, city.country), path }] : [];
    });
  }
  return locales.map((locale) => ({ locale, hreflang: locale, path: pathFor(locale, key) as string }));
}

/** x-default target: the language chooser for the home page, Italian for other shared pages, none for city pages. */
export function xDefaultFor(key: RouteKey): string | null {
  if (key.kind === "home") return "/";
  if (key.kind === "city") return null;
  return pathFor("it", key);
}

export function routeId(key: RouteKey): string {
  return Object.values(key).join(":");
}
