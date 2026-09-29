import { localeMeta, type Locale } from "@/i18n/config";

const priceFormats = new Map<Locale, Intl.NumberFormat>();

/** Formats integer cents as a euro price for the locale, e.g. 19900 → "199,00 €" (it) or "€ 199,00" (nl). */
export function formatPrice(cents: number, locale: Locale): string {
  let f = priceFormats.get(locale);
  if (!f) {
    f = new Intl.NumberFormat(localeMeta[locale].intl, { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
    priceFormats.set(locale, f);
  }
  return f.format(cents / 100);
}

/** Cents → decimal string for schema.org offers, e.g. 19900 → "199.00". */
export function priceToDecimal(cents: number): string {
  return (cents / 100).toFixed(2);
}

/** "A, B e C" in the locale's grammar. */
export function joinList(items: string[], locale: Locale): string {
  if (items.length === 0) return "";
  return new Intl.ListFormat(localeMeta[locale].intl, { style: "long", type: "conjunction" }).format(items);
}
