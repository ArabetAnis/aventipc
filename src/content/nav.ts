import { brands } from "@/content/brands";
import { categories } from "@/content/categories";

export type NavLink = { label: string; href: string };
export type FooterNavGroup = { title: string; links: NavLink[] };

/** Header navigation, in display order. */
export const mainNav: NavLink[] = [
  { label: "Notebook", href: "/categorie/notebook" },
  { label: "PC desktop", href: "/categorie/desktop" },
  { label: "PC gaming", href: "/categorie/gaming" },
  { label: "Workstation", href: "/categorie/workstation" },
  { label: "Mini PC", href: "/categorie/mini-pc" },
  { label: "Tutti i prodotti", href: "/prodotti" },
];

/** Footer sitemap, grouped by column. */
export const footerNav: FooterNavGroup[] = [
  {
    title: "Catalogo",
    links: [
      ...categories.map((c) => ({ label: c.name, href: `/categorie/${c.slug}` })),
      ...brands.map((b) => ({ label: b.name, href: `/marchi/${b.slug}` })),
      { label: "Tutti i prodotti", href: "/prodotti" },
    ],
  },
  {
    title: "Assistenza",
    links: [
      { label: "Spedizioni e resi", href: "/spedizioni-e-resi" },
      { label: "Contatti", href: "/contatti" },
      { label: "Domande frequenti", href: "/#domande-frequenti" },
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
