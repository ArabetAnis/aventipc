import type { StaticPage } from "@/types/catalog";

/**
 * Static pages: /chi-siamo, /contatti, /spedizioni-e-resi, /privacy, /termini.
 * Company details are repeated here on purpose so the legal text reads as a
 * self-contained document; keep them in sync with "@/content/site".
 */
export const staticPages: StaticPage[] = [
  {
    slug: "chi-siamo",
    title: "Chi siamo",
    seoTitle: "Chi siamo: PC assemblati a Milano | AventiPC",
    seoDescription:
      "AventiPC è un negozio online di computer nato a Milano: una squadra piccola che sceglie, assembla e collauda i PC che vende e risponde in italiano.",
    intro:
      "AventiPC è un negozio online di computer nato a Milano. Siamo una squadra piccola che sceglie, assembla e collauda i PC che vende, e che risponde al telefono in italiano.",
    sections: [
      {
        heading: "Come siamo nati",
        paragraphs: [
          "AventiPC nasce a Milano nel 2019 da tre amici con un passato tra assistenza tecnica e vendita di componenti. L'idea era semplice: un negozio dove il computer arriva già pronto, senza software inutile, scelto da qualcuno che sa cosa sta consigliando. Oggi siamo in otto, tra laboratorio, magazzino e assistenza, e spediamo in tutta Italia.",
        ],
      },
      {
        heading: "Cosa facciamo",
        paragraphs: [
          "Vendiamo notebook e desktop dei marchi principali (Apple, Dell, HP, Lenovo, ASUS) e assembliamo PC a marchio AventiPC per gaming, ufficio e lavoro professionale. Ogni PC assemblato passa almeno 24 ore di collaudo con stress test su processore, scheda video e memoria, e viene spedito con Windows 11 in italiano già attivato e aggiornato.",
          "Sui notebook di marca facciamo un controllo qualità all'arrivo e, su richiesta, la configurazione iniziale: account, aggiornamenti e migrazione dei dati dal vecchio computer.",
        ],
      },
      {
        heading: "Come lavoriamo",
        paragraphs: [
          "Il catalogo è volutamente corto. Preferiamo poche configurazioni sensate, che conosciamo bene, a centinaia di varianti. I prezzi sono IVA inclusa, la spedizione è gratuita e non ci sono costi aggiunti al checkout. Se un prodotto non è adatto a quello che ci hai raccontato, te lo diciamo.",
        ],
      },
      {
        heading: "Assistenza in italiano",
        paragraphs: [
          "Il supporto lo facciamo noi, dal laboratorio di Milano. Chi ti risponde conosce il computer che hai comprato e può aiutarti con installazione, aggiornamenti e pratiche di garanzia. Rispondiamo alle email entro un giorno lavorativo e al telefono dal lunedì al venerdì, dalle 9 alle 18.",
        ],
      },
      {
        heading: "Dove siamo",
        paragraphs: [
          "Laboratorio e magazzino si trovano in Via Alessandro Volta 12, 20121 Milano. Il ritiro in sede è possibile su appuntamento per gli ordini già pagati.",
        ],
      },
    ],
  },
  {
    slug: "contatti",
    title: "Contatti",
    seoTitle: "Contatti e assistenza | AventiPC",
    seoDescription:
      "Scrivi a info@aventipc.it o chiama il +39 02 1234 5678 dal lunedì al venerdì, 9–18. Sede e laboratorio in Via Alessandro Volta 12, Milano.",
    intro:
      "Per domande su un prodotto, un ordine o un preventivo su misura puoi scriverci, chiamarci o venire a trovarci in laboratorio a Milano.",
    sections: [
      {
        heading: "Email",
        paragraphs: [
          "Scrivi a info@aventipc.it. Rispondiamo entro un giorno lavorativo, di solito entro poche ore. Indica il numero d'ordine se la richiesta riguarda un acquisto già fatto.",
        ],
      },
      {
        heading: "Telefono",
        paragraphs: [
          "Chiama il +39 02 1234 5678 dal lunedì al venerdì, dalle 9:00 alle 18:00. Risponde direttamente il nostro team tecnico e commerciale, in italiano.",
        ],
      },
      {
        heading: "Sede e laboratorio",
        paragraphs: [
          "AventiPC S.r.l., Via Alessandro Volta 12, 20121 Milano (MI), partita IVA IT01234567890. Il ritiro in sede è possibile su appuntamento per gli ordini già pagati.",
        ],
      },
      {
        heading: "Preventivi per aziende e PC su misura",
        paragraphs: [
          "Per forniture aziendali, workstation configurate o PC gaming personalizzati inviaci una email con l'uso previsto, il budget e il numero di macchine. Ricevi un preventivo dettagliato entro un giorno lavorativo, con fattura elettronica e, per le aziende con partita IVA, possibilità di pagamento con bonifico a 30 giorni.",
        ],
      },
      {
        heading: "Assistenza e resi",
        paragraphs: [
          "Per richieste di assistenza o di reso scrivi a info@aventipc.it indicando numero d'ordine e descrizione del problema. Ti rispondiamo con le istruzioni e, se serve, con l'etichetta per il ritiro gratuito.",
        ],
      },
    ],
  },
  {
    slug: "spedizioni-e-resi",
    title: "Spedizioni e resi",
    seoTitle: "Spedizioni e resi | AventiPC",
    seoDescription:
      "Spedizione gratuita con corriere espresso in tutta Italia in 24–48 ore, diritto di recesso entro 14 giorni e garanzia legale di 2 anni su ogni computer.",
    intro:
      "Spedizione gratuita con corriere espresso in tutta Italia, consegna in 24–48 ore, reso entro 14 giorni e garanzia di 2 anni. Qui trovi tutti i dettagli.",
    sections: [
      {
        heading: "Tempi e costi di spedizione",
        paragraphs: [
          "La spedizione è gratuita per ogni ordine consegnato in Italia, senza importo minimo. I prodotti disponibili a magazzino partono entro un giorno lavorativo dalla conferma del pagamento e arrivano in 24–48 ore con corriere espresso, isole comprese salvo ritardi del corriere. I PC assemblati su misura richiedono 3–5 giorni lavorativi aggiuntivi per montaggio e collaudo.",
          "Appena il pacco parte ricevi un'email con il codice di tracciamento. Il corriere consegna dal lunedì al venerdì in orario lavorativo; se non sei in casa fa un secondo tentativo o lascia il pacco in un punto di ritiro vicino.",
        ],
      },
      {
        heading: "Imballo e assicurazione",
        paragraphs: [
          "Ogni spedizione è assicurata per l'intero valore. I notebook viaggiano nella confezione originale protetta da una scatola esterna; i PC assemblati sono imballati con schiuma espansa interna che blocca scheda video e dissipatore. Al ricevimento controlla l'imballo: se è danneggiato, firma con riserva e scrivici entro 48 ore allegando qualche foto.",
        ],
      },
      {
        heading: "Diritto di recesso entro 14 giorni",
        paragraphs: [
          "Se sei un consumatore hai 14 giorni dalla consegna per restituire il prodotto senza indicare un motivo, secondo gli articoli 52 e seguenti del Codice del Consumo (D.Lgs. 206/2005). Scrivi a info@aventipc.it con il numero d'ordine: ti inviamo l'etichetta di reso prepagata. Il prodotto va restituito integro, con tutti gli accessori e la confezione originale; una diminuzione di valore dovuta a un uso diverso da quello necessario per esaminarlo può essere trattenuta dal rimborso.",
          "Il rimborso avviene con lo stesso metodo di pagamento entro 14 giorni dal ricevimento del reso. Sono esclusi dal recesso i PC configurati su misura, che restano comunque coperti dalla garanzia, e il software con sigillo rimosso.",
        ],
      },
      {
        heading: "Garanzia legale di 2 anni",
        paragraphs: [
          "Tutti i prodotti sono coperti dalla garanzia legale di conformità di 24 mesi (articoli 128 e seguenti del Codice del Consumo). In caso di difetto ci occupiamo del ritiro gratuito, della riparazione o della sostituzione; se non è possibile, del rimborso. I PC a marchio AventiPC sono riparati direttamente nel nostro laboratorio di Milano, di norma entro 5 giorni lavorativi dal ricevimento.",
          "Per gli acquisti con partita IVA vale la garanzia del produttore, in genere di 12 mesi, estendibile su richiesta.",
        ],
      },
      {
        heading: "Prodotto danneggiato o non conforme",
        paragraphs: [
          "Se il prodotto arriva danneggiato o diverso da quello ordinato, scrivici entro 48 ore dalla consegna con foto del prodotto e dell'imballo. Organizziamo il ritiro a nostre spese e spediamo la sostituzione appena il reso è in transito.",
        ],
      },
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
          "Dati di ordine: nome, indirizzo di consegna e di fatturazione, email, telefono, codice fiscale o partita IVA. Li usiamo per eseguire il contratto di vendita, spedire l'ordine, emettere la fattura e gestire garanzia e resi (art. 6, par. 1, lett. b GDPR) e per adempiere agli obblighi fiscali e contabili (art. 6, par. 1, lett. c).",
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
    title: "Termini e condizioni di vendita",
    seoTitle: "Termini e condizioni di vendita | AventiPC",
    seoDescription:
      "Condizioni generali di vendita di AventiPC S.r.l.: prezzi IVA inclusa, pagamenti, consegna, diritto di recesso entro 14 giorni e garanzia legale di 24 mesi.",
    intro:
      "Queste condizioni generali regolano gli acquisti effettuati su www.aventipc.it da AventiPC S.r.l. Ti consigliamo di leggerle prima di confermare un ordine: inviando un ordine accetti le condizioni in vigore in quel momento.",
    sections: [
      {
        heading: "Venditore e legge applicabile",
        paragraphs: [
          "AventiPC S.r.l., Via Alessandro Volta 12, 20121 Milano, partita IVA IT01234567890, email info@aventipc.it, telefono +39 02 1234 5678. I contratti sono conclusi in lingua italiana e regolati dalla legge italiana, in particolare dal Codice del Consumo (D.Lgs. 206/2005) per i consumatori e dal Codice Civile per i professionisti.",
        ],
      },
      {
        heading: "Prezzi e conclusione dell'ordine",
        paragraphs: [
          "Tutti i prezzi sono espressi in euro e comprendono l'IVA. La spedizione in Italia è gratuita. Il contratto si conclude quando ricevi l'email di conferma dell'ordine; fino a quel momento possiamo rifiutare o annullare un ordine, ad esempio per indisponibilità del prodotto o per un errore evidente di prezzo, restituendo quanto già pagato.",
          "Le immagini dei prodotti sono indicative; fanno fede le specifiche tecniche riportate nella scheda prodotto al momento dell'ordine.",
        ],
      },
      {
        heading: "Pagamenti e consegna",
        paragraphs: [
          "Accettiamo carte di credito e debito, PayPal, bonifico bancario anticipato e pagamento rateale tramite Klarna. Con il bonifico l'ordine viene spedito alla ricezione dell'accredito; se non riceviamo il pagamento entro 5 giorni lavorativi l'ordine viene annullato. La fattura è emessa in formato elettronico e inviata via email.",
          "Consegniamo in tutta Italia con corriere espresso in 24–48 ore lavorative dalla spedizione, salvo diversa indicazione nella scheda prodotto o per i PC assemblati su misura. Il rischio di perdita o danneggiamento passa al cliente al momento della consegna. Se il pacco appare danneggiato, ritiralo con riserva e comunicacelo entro 48 ore.",
        ],
      },
      {
        heading: "Diritto di recesso",
        paragraphs: [
          "Se sei un consumatore puoi recedere dal contratto entro 14 giorni dalla consegna senza indicare un motivo, comunicandolo a info@aventipc.it (artt. 52 e seguenti del Codice del Consumo). Rimborsiamo l'intero importo, spese di spedizione standard comprese, entro 14 giorni dal ricevimento del prodotto, con lo stesso metodo di pagamento usato per l'acquisto.",
          "Il diritto di recesso non si applica ai beni confezionati su misura o chiaramente personalizzati (art. 59), come i PC configurati su richiesta, né al software con sigillo aperto. Il consumatore risponde della diminuzione di valore del bene dovuta a una manipolazione diversa da quella necessaria per stabilirne natura, caratteristiche e funzionamento.",
        ],
      },
      {
        heading: "Garanzia legale di conformità",
        paragraphs: [
          "I prodotti venduti ai consumatori sono coperti dalla garanzia legale di conformità di 24 mesi dalla consegna (artt. 128–135 del Codice del Consumo). Il rimedio è la riparazione o la sostituzione gratuita entro un termine ragionevole e, se impossibili o eccessivamente onerose, la riduzione del prezzo o la risoluzione del contratto. Per i professionisti si applica la garanzia prevista dal Codice Civile, oltre all'eventuale garanzia del produttore.",
        ],
      },
      {
        heading: "Risoluzione delle controversie",
        paragraphs: [
          "Per qualsiasi controversia con un consumatore è competente il foro del luogo di residenza o di domicilio del consumatore. Prima di rivolgersi al giudice, il consumatore può avviare una procedura di risoluzione alternativa delle controversie presso un organismo ADR ai sensi degli artt. 141 e seguenti del Codice del Consumo; su richiesta indichiamo gli organismi disponibili.",
        ],
      },
    ],
  },
];

export function getStaticPage(slug: string): StaticPage | undefined {
  return staticPages.find((p) => p.slug === slug);
}
