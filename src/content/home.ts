/** Home page copy. Product data comes from the catalogue; this file is text only. */

export type ReassuranceIcon = "truck" | "shield" | "lock" | "headset";

export type Cta = { label: string; href: string };

export interface HomeContent {
  hero: {
    title: string;
    /** One sentence, ≤ 160 characters. */
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  reassurance: { icon: ReassuranceIcon; title: string; text: string }[];
  sections: {
    categories: string;
    featured: string;
    why: string;
    faq: string;
  };
  /** id of the FAQ section; the footer links to /#<faqAnchor>. */
  faqAnchor: string;
}

export const home: HomeContent = {
  hero: {
    title: "Il computer giusto, consegnato in 48 ore.",
    subtitle:
      "Notebook, PC desktop, gaming e workstation scelti e collaudati a Milano, con spedizione gratuita in Italia e assistenza in italiano.",
    primaryCta: { label: "Scopri il catalogo", href: "/prodotti" },
    secondaryCta: { label: "PC gaming", href: "/categorie/gaming" },
  },
  reassurance: [
    {
      icon: "truck",
      title: "Spedizione gratuita in Italia",
      text: "Corriere espresso assicurato, consegna in 24–48 ore, nessun importo minimo.",
    },
    {
      icon: "shield",
      title: "Garanzia 2 anni",
      text: "Garanzia legale di conformità di 24 mesi. Ritiro, riparazione e sostituzione a nostro carico.",
    },
    {
      icon: "lock",
      title: "Pagamenti sicuri",
      text: "Carta, PayPal, bonifico o Klarna in 3 rate. Non conserviamo i dati della tua carta.",
    },
    {
      icon: "headset",
      title: "Assistenza in italiano",
      text: "Ti risponde chi assembla e collauda i computer, dal lunedì al venerdì dalle 9 alle 18.",
    },
  ],
  sections: {
    categories: "Scegli per categoria",
    featured: "In evidenza",
    why: "Perché comprare da AventiPC",
    faq: "Domande frequenti",
  },
  faqAnchor: "domande-frequenti",
};
