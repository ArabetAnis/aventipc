/** Home page copy. Product data comes from the catalogue; this file is text only. */

export type ReassuranceIcon = "camera" | "check" | "bag" | "headset";

export type Cta = { label: string; href: string };

export interface HomeContent {
  hero: { title: string; subtitle: string; primaryCta: Cta; secondaryCta: Cta };
  reassurance: { icon: ReassuranceIcon; title: string; text: string }[];
  sections: { featured: string; why: string; faq: string };
}

export const home: HomeContent = {
  hero: {
    title: "PC usati, descritti per quello che sono.",
    subtitle: "Notebook e mini PC controllati uno per uno, con foto reali dell'esemplare in vendita. Li compri su eBay o Subito.",
    primaryCta: { label: "Vedi i prodotti", href: "/prodotti" },
    secondaryCta: { label: "Come acquistare", href: "/come-acquistare" },
  },
  reassurance: [
    { icon: "camera", title: "Foto reali", text: "Ogni annuncio mostra l'esemplare che ricevi, non immagini di catalogo." },
    { icon: "check", title: "Controllati prima della vendita", text: "Accendiamo, proviamo e descriviamo ogni computer, compresi i difetti." },
    { icon: "bag", title: "Acquisto su eBay o Subito", text: "Paghi e ricevi il computer con le protezioni della piattaforma che scegli." },
    { icon: "headset", title: "Rispondiamo in italiano", text: "Scrivici per foto in più, dettagli tecnici o per vedere il computer di persona." },
  ],
  sections: {
    featured: "In vendita ora",
    why: "Perché comprare da AventiPC",
    faq: "Domande frequenti",
  },
};
