/** Site-wide identity. Import from "@/content/site". */

export const site = {
  name: "FindBetter",
  legalName: "FindBetter",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://findbetter.eu",
  tagline: "PC e notebook usati, fotografati e descritti per quello che sono.",
  /** Home page meta description, ≤ 160 characters. */
  description:
    "FindBetter vende notebook e mini PC usati con foto reali e caratteristiche verificate. Acquisti in sicurezza su eBay o Subito.",
  email: "info@findbetter.eu",
  phone: "+39 02 1234 5678",
  address: {
    street: "Via Alessandro Volta 12",
    postalCode: "20121",
    city: "Milano",
    region: "MI",
    country: "IT",
  },
  vat: "IT01234567890" /* placeholder */,
  social: {
    instagram: "https://www.instagram.com/findbetter",
    facebook: "https://www.facebook.com/findbetter",
  },
  /** schema.org openingHours format. */
  openingHours: "Mo-Fr 09:00-18:00",
} as const;

export type Site = typeof site;
