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
    seoDescription: "Scrivi a info@aventipc.it o chiama il +39 02 1234 5678 dal lunedì al venerdì, 9–18, per domande sui computer in vendita.",
    intro: "Per domande su un computer, altre foto o un appuntamento per vederlo di persona puoi scriverci o chiamarci.",
    sections: [
      { heading: "Email", paragraphs: ["Scrivi a info@aventipc.it. Rispondiamo di solito entro un giorno lavorativo."] },
      { heading: "Telefono", paragraphs: ["Chiama il +39 02 1234 5678 dal lunedì al venerdì, dalle 9 alle 18."] },
      { heading: "Dove siamo", paragraphs: ["Via Alessandro Volta 12, 20121 Milano. Visite solo su appuntamento."] },
    ],
  },
  {
    slug: "privacy",
    title: "Informativa sulla privacy",
    seoTitle: "Informativa sulla privacy | AventiPC",
    seoDescription:
      "Come AventiPC S.r.l. raccoglie e usa i tuoi dati personali quando visiti il sito o fai un ordine, e quali diritti hai secondo il GDPR.",
    intro:
      "Questa informativa spiega quali dati personali raccogliamo quando visiti www.aventipc.it o fai un ordine, perché li trattiamo e quali diritti hai, ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.",
    sections: [
      {
        heading: "Titolare del trattamento",
        paragraphs: [
          "Il titolare del trattamento è AventiPC S.r.l., Via Alessandro Volta 12, 20121 Milano, partita IVA IT01234567890, email info@aventipc.it. Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a questo indirizzo.",
        ],
      },
      {
        heading: "Quali dati raccogliamo e perché",
        paragraphs: [
          "Dati di contatto: nome, indirizzo di consegna e di fatturazione, email, telefono, codice fiscale o partita IVA. Li usiamo per eseguire il contratto di vendita, spedire l'ordine, emettere la fattura e gestire garanzia e resi (art. 6, par. 1, lett. b GDPR) e per adempiere agli obblighi fiscali e contabili (art. 6, par. 1, lett. c).",
          "Dati di navigazione: indirizzo IP, tipo di browser e pagine visitate, raccolti in forma aggregata per garantire il funzionamento e la sicurezza del sito (art. 6, par. 1, lett. f, legittimo interesse). Dati di contatto: se ci scrivi, usiamo email e contenuto del messaggio per risponderti.",
          "Non raccogliamo i dati della tua carta di pagamento: sono gestiti direttamente dal fornitore del servizio di pagamento (PayPal, Klarna o il circuito della carta), che agisce come autonomo titolare.",
        ],
      },
      {
        heading: "Cookie",
        paragraphs: [
          "Il sito usa solo cookie tecnici necessari al funzionamento, ad esempio per ricordare il contenuto del carrello, che non richiedono consenso. Non usiamo cookie di profilazione né strumenti di tracciamento pubblicitario. Eventuali statistiche sul traffico sono raccolte in forma anonima e aggregata.",
        ],
      },
      {
        heading: "Con chi condividiamo i dati",
        paragraphs: [
          "I dati vengono comunicati solo a chi serve per completare l'ordine: corrieri per la consegna, fornitori di servizi di pagamento, il commercialista e il Sistema di Interscambio per la fatturazione elettronica, e il fornitore di hosting che ospita il sito nell'Unione Europea. Questi soggetti trattano i dati come responsabili del trattamento o come autonomi titolari, nel rispetto del GDPR. Non vendiamo né cediamo i dati a terzi per finalità di marketing e non li trasferiamo fuori dall'Unione Europea.",
        ],
      },
      {
        heading: "Per quanto tempo conserviamo i dati",
        paragraphs: [
          "I dati di ordine e fatturazione sono conservati per 10 anni, come richiesto dalla normativa fiscale. I dati di contatto per richieste di informazioni sono conservati per il tempo necessario a rispondere e comunque non oltre 24 mesi. I log di navigazione sono conservati per un massimo di 12 mesi.",
        ],
      },
      {
        heading: "I tuoi diritti",
        paragraphs: [
          "Puoi chiedere in ogni momento l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento e la portabilità, e puoi opporti al trattamento (artt. 15–22 GDPR) scrivendo a info@aventipc.it. Rispondiamo entro 30 giorni. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
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
        paragraphs: ["Il sito è gestito da AventiPC, Via Alessandro Volta 12, 20121 Milano, email info@aventipc.it."],
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
