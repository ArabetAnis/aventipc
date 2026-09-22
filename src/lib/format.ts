const eur = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

/** Formats integer cents as an Italian euro string, e.g. 122900 → "1.229,00 €". */
export function formatPrice(cents: number): string {
  return eur.format(cents / 100);
}

/** Cents → decimal string for schema.org offers, e.g. 122900 → "1229.00". */
export function priceToDecimal(cents: number): string {
  return (cents / 100).toFixed(2);
}

export function discountPercent(price: number, compareAtPrice?: number): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round((1 - price / compareAtPrice) * 100);
}

/** Removes accents and lowercases for search matching. */
export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export function pluralize(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural;
}
