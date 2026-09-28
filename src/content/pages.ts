import type { StaticPage } from "@/types/catalog";

/**
 * Static pages: /chi-siamo, /come-acquistare, /contatti, /privacy, /termini.
 * Company details are repeated here on purpose so the legal text reads as a
 * self-contained document; keep them in sync with "@/content/site".
 */
export const staticPages: StaticPage[] = [
  {
    slug: "chi-siamo",
    title: "Chi siamo",
    seoTitle: "Chi siamo | AventiPC",
    seoDescription: "AventiPC è un piccolo negozio di PC usati a Milano: controlliamo ogni computer, lo fotografiamo e lo descriviamo per quello che è.",
    intro:
      "AventiPC è un piccolo negozio di computer usati a Milano. Compriamo notebook e mini PC, li controlliamo e li rimettiamo in vendita con foto reali e una descrizione onesta.",
    sections: [
      {
        heading: "Cosa facciamo",
        paragraphs: [
          "Scegliamo computer professionali che reggono bene gli anni, come i Lenovo ThinkBook e ThinkCentre e i Dell Latitude. Ogni esemplare viene acceso, provato e fotografato prima di essere messo in vendita.",
        ],
      },
      {
        heading: "Perché vendiamo su eBay e Subito",
        paragraphs: [
          "Siamo una realtà piccola. Vendere attraverso eBay e Subito ti permette di pagare con strumenti che conosci già e di avere le protezioni per l'acquirente di quelle piattaforme.",
        ],
      },
      {
        heading: "Parliamo con te",
        paragraphs: [
          "Se hai un dubbio su un computer, scrivici. Ti rispondiamo in italiano, ti mandiamo altre foto e, se sei a Milano, puoi vederlo di persona su appuntamento.",
        ],
      },
    ],
  },
  {
    slug: "come-acquistare",
    title: "Come acquistare",
    seoTitle: "Come acquistare su eBay o Subito | AventiPC",
    seoDescription: "I computer AventiPC si acquistano su eBay o Subito: pagamento, spedizione e protezione dell'acquirente sono gestiti dalla piattaforma.",
    intro: "Su questo sito trovi foto e caratteristiche dei computer in vendita. L'acquisto vero e proprio avviene su eBay o su Subito.",
    sections: [
      {
        heading: "Scegli il computer",
        paragraphs: ["Guarda le foto e la scheda tecnica. Se ti serve un'informazione in più, scrivici prima di acquistare."],
      },
      {
        heading: "Compra su eBay o Subito",
        paragraphs: [
          "Nella scheda del prodotto trovi i pulsanti per eBay e Subito. Si apre l'annuncio dello stesso computer sulla piattaforma, dove puoi pagare con i metodi che offre.",
        ],
      },
      {
        heading: "Spedizione e ritiro",
        paragraphs: [
          "La spedizione si organizza tramite la piattaforma su cui acquisti. Se sei a Milano puoi anche ritirare il computer di persona, su appuntamento.",
        ],
      },
    ],
  },
  {
    slug: "contatti",
    title: "Contatti",
    seoTitle: "Contatti | AventiPC",
    seoDescription: "Scrivi a info@aventipc.com o chiama il +39 02 1234 5678 dal lunedì al venerdì, 9–18, per domande sui computer in vendita.",
    intro: "Per domande su un computer, altre foto o un appuntamento per vederlo di persona puoi scriverci o chiamarci.",
    sections: [
      { heading: "Email", paragraphs: ["Scrivi a info@aventipc.com. Rispondiamo di solito entro un giorno lavorativo."] },
      { heading: "Telefono", paragraphs: ["Chiama il +39 02 1234 5678 dal lunedì al venerdì, dalle 9 alle 18."] },
      { heading: "Dove siamo", paragraphs: ["Via Alessandro Volta 12, 20121 Milano. Visite solo su appuntamento."] },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    seoTitle: "Informativa privacy | AventiPC",
    seoDescription: "Quali dati personali raccoglie AventiPC quando visiti il sito o ci contatti, perché li usa e quali diritti hai secondo il GDPR.",
    intro: "Questa informativa spiega quali dati personali trattiamo quando visiti il sito o ci scrivi, e quali diritti hai secondo il Regolamento UE 2016/679 (GDPR).",
    sections: [
      {
        heading: "Titolare del trattamento",
        paragraphs: ["Il titolare è AventiPC, Via Alessandro Volta 12, 20121 Milano. Per ogni richiesta sulla privacy scrivi a info@aventipc.com."],
      },
      {
        heading: "Quali dati raccogliamo",
        paragraphs: [
          "Se ci scrivi dal modulo di contatto o per email trattiamo nome, indirizzo email e il contenuto del messaggio, solo per risponderti.",
          "Gli acquisti avvengono su eBay o Subito: i dati di pagamento e di spedizione li tratta la piattaforma, secondo la sua informativa.",
        ],
      },
      {
        heading: "Cookie",
        paragraphs: ["Il sito non usa cookie di profilazione né strumenti di tracciamento pubblicitario."],
      },
      {
        heading: "Per quanto tempo conserviamo i dati",
        paragraphs: ["Conserviamo i messaggi per il tempo necessario a rispondere e al massimo per 24 mesi, poi li cancelliamo."],
      },
      {
        heading: "I tuoi diritti",
        paragraphs: [
          "Puoi chiedere l'accesso, la rettifica o la cancellazione dei tuoi dati scrivendo a info@aventipc.com. Puoi anche presentare reclamo al Garante per la protezione dei dati personali.",
        ],
      },
    ],
  },
  {
    slug: "termini",
    title: "Termini e condizioni",
    seoTitle: "Termini e condizioni | AventiPC",
    seoDescription: "Condizioni d'uso del sito AventiPC: il sito presenta computer usati, la vendita avviene su eBay o Subito secondo le condizioni della piattaforma.",
    intro: "Questo sito presenta i computer usati messi in vendita da AventiPC. Usandolo accetti le condizioni che seguono.",
    sections: [
      {
        heading: "Chi siamo",
        paragraphs: ["Il sito è gestito da AventiPC, Via Alessandro Volta 12, 20121 Milano, email info@aventipc.com."],
      },
      {
        heading: "Informazioni sui prodotti",
        paragraphs: [
          "Descrizioni e foto si riferiscono ai singoli esemplari in vendita. Facciamo il possibile perché siano accurate; in caso di differenze fa fede l'annuncio sulla piattaforma di vendita.",
        ],
      },
      {
        heading: "Acquisto",
        paragraphs: [
          "Il contratto di vendita si conclude su eBay o su Subito e segue le condizioni della piattaforma scelta, compresi pagamento, spedizione e recesso.",
        ],
      },
      {
        heading: "Legge applicabile",
        paragraphs: ["Si applica la legge italiana."],
      },
    ],
  },
];

export function getStaticPage(slug: string): StaticPage | undefined {
  return staticPages.find((p) => p.slug === slug);
}
