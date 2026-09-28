import { brands } from "@/content/brands";

export type NavLink = { label: string; href: string };
export type FooterNavGroup = { title: string; links: NavLink[] };

/** Header navigation, in display order. */
export const mainNav: NavLink[] = [
  { label: "Prodotti", href: "/prodotti" },
  { label: "Come acquistare", href: "/come-acquistare" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];

/** Footer sitemap, grouped by column. */
export const footerNav: FooterNavGroup[] = [
  {
    title: "Prodotti",
    links: [{ label: "Tutti i prodotti", href: "/prodotti" }, ...brands.map((b) => ({ label: b.name, href: `/marchi/${b.slug}` }))],
  },
  {
    title: "Informazioni",
    links: [
      { label: "Come acquistare", href: "/come-acquistare" },
      { label: "Domande frequenti", href: "/#domande-frequenti" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    title: "Azienda",
    links: [
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Privacy", href: "/privacy" },
      { label: "Termini e condizioni", href: "/termini" },
    ],
  },
];
