/** Site-wide identity and commercial promises. Import from "@/content/site". */

export const site = {
  name: "AventiPC",
  legalName: "AventiPC S.r.l.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aventipc.it",
  tagline:
    "Notebook, PC desktop, gaming e workstation, consegnati in 48 ore in tutta Italia.",
  /** Home page meta description, ≤ 160 characters. */
  description:
    "AventiPC vende notebook, PC desktop, gaming e workstation con spedizione gratuita in Italia, garanzia 2 anni e assistenza in italiano da Milano.",
  email: "info@aventipc.it",
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
    linkedin: "https://www.linkedin.com/company/aventipc",
    youtube: "https://www.youtube.com/@aventipc",
  },
  /** schema.org openingHours format. */
  openingHours: "Mo-Fr 09:00-18:00",
  /** EUR cents. 0 means every order in Italy ships free. */
  freeShippingThreshold: 0,
  shippingDays: "24–48 ore",
  returnDays: 14,
  warrantyYears: 2,
} as const;

export type Site = typeof site;
