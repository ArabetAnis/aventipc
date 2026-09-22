import type { FaqItem } from "@/types/catalog";

/** Home page FAQ (rendered as details/summary and as FAQPage JSON-LD). */
export const faq: FaqItem[] = [
  {
    question: "Quanto tempo ci vuole per ricevere l'ordine?",
    answer:
      "Spediamo dal nostro magazzino di Milano entro un giorno lavorativo dalla conferma del pagamento. La consegna con corriere espresso richiede in genere 24–48 ore in tutta Italia, isole comprese; i PC assemblati su misura richiedono 3–5 giorni lavorativi in più per montaggio e collaudo. Ricevi il codice di tracciamento via email appena il pacco parte.",
  },
  {
    question: "Quanto costa la spedizione?",
    answer:
      "La spedizione con corriere espresso è gratuita per tutti gli ordini in Italia, senza importo minimo. Il computer viaggia assicurato, nella confezione originale protetta da una scatola esterna o, per i PC assemblati, in un imballo rinforzato con schiuma espansa. Al momento non spediamo all'estero.",
  },
  {
    question: "Posso restituire un prodotto se cambio idea?",
    answer:
      "Sì. Hai 14 giorni dalla consegna per esercitare il diritto di recesso previsto dal Codice del Consumo, senza dover indicare un motivo. Scrivi a info@aventipc.it: ti inviamo l'etichetta di reso prepagata e rimborsiamo l'importo entro 14 giorni dal ricevimento del prodotto. Il prodotto deve essere integro e completo di accessori; i PC configurati su misura sono esclusi dal recesso ma restano coperti dalla garanzia.",
  },
  {
    question: "Che garanzia hanno i computer?",
    answer:
      "Tutti i prodotti hanno la garanzia legale di conformità di 2 anni prevista dal Codice del Consumo per i clienti privati. In caso di difetto ci occupiamo noi del ritiro, della riparazione o della sostituzione, senza costi. I PC a marchio AventiPC vengono riparati direttamente nel nostro laboratorio di Milano; per gli acquisti con partita IVA vale la garanzia del produttore, in genere di 12 mesi, estendibile su richiesta.",
  },
  {
    question: "Quali metodi di pagamento accettate?",
    answer:
      "Accettiamo carte di credito e debito (Visa, Mastercard, American Express), PayPal, bonifico bancario anticipato e il pagamento in 3 rate senza interessi con Klarna. I pagamenti con carta passano da un circuito certificato PCI DSS e non conserviamo i dati della tua carta. Con il bonifico spediamo alla ricezione dell'accredito, di norma entro 1–2 giorni lavorativi.",
  },
  {
    question: "Posso avere la fattura con partita IVA?",
    answer:
      "Sì. Inserisci ragione sociale, partita IVA e codice destinatario (o PEC) nel modulo di checkout: la fattura elettronica viene inviata tramite il Sistema di Interscambio e ricevi una copia PDF via email. Ai privati emettiamo la fattura con codice fiscale su richiesta. La fattura è emessa entro 24 ore dalla spedizione.",
  },
  {
    question: "L'assistenza tecnica è in italiano?",
    answer:
      "Sì, il supporto è interamente in italiano ed è fatto dalle stesse persone che assemblano e collaudano i computer. Puoi scriverci a info@aventipc.it o chiamare il +39 02 1234 5678 dal lunedì al venerdì, dalle 9 alle 18. Rispondiamo alle email entro un giorno lavorativo e aiutiamo anche con la configurazione iniziale, la migrazione dei dati e la scelta degli aggiornamenti.",
  },
  {
    question: "Posso far configurare un PC su misura?",
    answer:
      "Sì. Ogni PC a marchio AventiPC può essere modificato in processore, RAM, SSD e scheda video partendo dalle configurazioni in catalogo, oppure possiamo progettarlo da zero in base al software che usi e al tuo budget. Scrivici cosa devi farci e ricevi un preventivo dettagliato entro un giorno lavorativo. I PC su misura sono assemblati a Milano e spediti dopo un collaudo di almeno 24 ore.",
  },
];
