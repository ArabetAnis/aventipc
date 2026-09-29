import { products, sortedProducts, byPrice, minPrice, type Product } from "@/data/products";
import { localeMeta, type Locale, type ThemeKey } from "@/i18n/config";
import type { City } from "@/i18n/cities";
import type { CityContext, Dictionary } from "@/i18n/types";
import { formatPrice, joinList } from "@/lib/format";
import { href, type RouteKey } from "@/i18n/routes";

/** Which products each keyword page lists, and in what order. */
export function productsForTheme(theme: ThemeKey): Product[] {
  switch (theme) {
    case "cheap":
      return byPrice(products);
    case "students":
      return sortedProducts(products.filter((p) => p.form === "laptop"));
    default:
      return sortedProducts(products);
  }
}

export function cityContext(locale: Locale, dict: Dictionary, city: City, list: Product[]): CityContext {
  const from = minPrice(list);
  return {
    name: city.names[locale]?.name ?? city.id,
    country: dict.countries[city.country],
    countryCode: city.country,
    universities: joinList(city.universities, locale),
    pickup: Boolean(city.pickup),
    priceFrom: from === null ? null : formatPrice(from, locale),
    count: list.length,
  };
}

export function homeCrumb(locale: Locale, dict: Dictionary) {
  return { name: dict.ui.home, href: href(locale, { kind: "home" }) };
}

export function crumb(locale: Locale, name: string, key: RouteKey) {
  return { name, href: href(locale, key) };
}

export function intlTag(locale: Locale): string {
  return localeMeta[locale].intl;
}
