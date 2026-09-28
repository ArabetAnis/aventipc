/** Site-wide identity. Import from "@/content/site". */

export const site = {
  name: "AventiPC",
  legalName: "AventiPC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aventipc.com",
  tagline: "PC e notebook usati, fotografati e descritti per quello che sono.",
  /** Home page meta description, ≤ 160 characters. */
  description:
    "AventiPC vende notebook e mini PC usati con foto reali e caratteristiche verificate. Acquisti in sicurezza su eBay o Subito.",
  email: "info@aventipc.com",
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
    instagram: "https://www.instagram.com/aventipc",
    facebook: "https://www.facebook.com/aventipc",
  },
  /** schema.org openingHours format. */
  openingHours: "Mo-Fr 09:00-18:00",
} as const;

export type Site = typeof site;
