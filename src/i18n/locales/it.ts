import type { Dictionary } from "../types";

/**
 * Italian — source language. The other locales translate this file.
 * SEO: each keyword page uses its keyword naturally about once every 100 words.
 */
const it: Dictionary = {
  meta: {
    homeTitle: "AventiPC — PC e portatili usati come nuovi, con foto reali",
    homeDescription:
      "PC e portatili usati come nuovi: Lenovo ThinkBook e Dell Latitude testati, con foto reali dell'esemplare. Acquisto protetto su Vinted.",
    tagline: "PC e portatili usati come nuovi, fotografati e descritti per quello che sono.",
    ogTagline: "PC e portatili usati come nuovi, con foto reali",
    ogBadge: "Come nuovo · Foto reali · Acquisto su Vinted",
  },
  countries: { IT: "Italia", FR: "Francia", BE: "Belgio", ES: "Spagna", DE: "Germania" },
  ui: {
    skipToContent: "Vai al contenuto",
    homeAria: "AventiPC, torna alla home",
    mainMenu: "Menu principale",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
    breadcrumb: "Percorso",
    home: "Home",
    nav: { products: "Prodotti", howToBuy: "Come acquistare", about: "Chi siamo", contact: "Contatti" },
    footer: {
      products: "Prodotti",
      allProducts: "Tutti i prodotti",
      searches: "Ricerche frequenti",
      info: "Informazioni",
      faq: "Domande frequenti",
      company: "Azienda",
      note: "Prezzi in euro. Vendita tramite Vinted. Le immagini del modello sono indicative, le foto reali mostrano l'esemplare in vendita.",
    },
    product: {
      likeNew: "Come nuovo",
      available: "Disponibile",
      sold: "Venduto",
      comingSoon: "In arrivo",
      buyOnVinted: "Acquista su Vinted",
      askAvailability: "Chiedi disponibilità",
      priceOnRequest: "Prezzo su richiesta",
      vintedNote: "Paghi su Vinted con la Protezione acquisti della piattaforma.",
      photosNote: "La prima immagine mostra il modello, le altre sono foto reali dell'esemplare in vendita.",
      questions: "Domande o altre foto?",
      writeUs: "Scrivici",
      description: "Descrizione",
      specs: "Scheda tecnica",
      specsCaption: (name) => `Specifiche tecniche di ${name}`,
      related: "Altri computer in vendita",
      gallery: (name) => `Immagini di ${name}`,
      showImage: (i, n) => `Mostra immagine ${i} di ${n}`,
      modelImage: "Immagine del modello",
      realPhoto: "Foto reale dell'esemplare",
    },
    catalog: {
      title: "PC e portatili usati come nuovi in vendita",
      h1: "PC e portatili usati in vendita",
      intro:
        "Notebook e mini PC usati in condizioni come nuove, testati e fotografati uno per uno. Ogni computer si acquista su Vinted con la Protezione acquisti.",
      metaDescription:
        "Tutti i PC e portatili usati AventiPC: Lenovo ThinkBook, Dell Latitude Rugged e ThinkCentre come nuovi, con foto reali. Acquisto su Vinted.",
      count: (n) => (n === 1 ? "1 computer in vendita" : `${n} computer in vendita`),
    },
    brand: {
      count: (n) => (n === 1 ? "1 computer disponibile" : `${n} computer disponibili`),
      others: "Altri marchi",
      empty: "Al momento non ci sono computer di questo marchio. Guarda gli altri prodotti in vendita.",
    },
    contact: {
      hours: "Lunedì–venerdì, 9:00–18:00",
      form: {
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        submit: "Invia il messaggio",
        sent: "Messaggio inviato. Ti rispondiamo entro un giorno lavorativo.",
      },
    },
    legalUpdated: "Ultimo aggiornamento: 29 settembre 2026",
    notFound: {
      title: "Questa pagina non esiste.",
      text: "Il link potrebbe essere cambiato o il computer è già stato venduto. Riparti dai prodotti in vendita.",
      home: "Torna alla home",
      products: "Vedi i prodotti",
    },
    error: {
      title: "Qualcosa è andato storto.",
      text: "La pagina non si è caricata correttamente. Riprova tra un momento.",
      retry: "Riprova",
    },
  },
  home: {
    hero: {
      title: "PC e portatili usati, come nuovi.",
      subtitle:
        "Lenovo e Dell professionali in condizioni quasi perfette, testati e fotografati per quello che sono. Li compri su Vinted, con la Protezione acquisti.",
      primaryCta: "Vedi i prodotti",
      secondaryCta: "Come acquistare",
      imageAlt: "Lenovo ThinkBook 14 IIL, portatile usato come nuovo",
    },
    reassurance: [
      { icon: "check", title: "Come nuovi", text: "Condizioni quasi 100/100: ogni computer è testato prima della vendita." },
      { icon: "camera", title: "Foto reali", text: "Oltre all'immagine del modello vedi le foto dell'esemplare che ricevi." },
      { icon: "bag", title: "Acquisto protetto su Vinted", text: "Paghi su Vinted e sei coperto dalla Protezione acquisti della piattaforma." },
      { icon: "headset", title: "Contatto diretto", text: "Scrivici per altre foto o dettagli tecnici prima di comprare." },
    ],
    featuredTitle: "In vendita ora",
    featuredText: "Ogni computer è un esemplare unico: quando è venduto, sparisce dal sito.",
    whyTitle: "Perché comprare da AventiPC",
    searchesTitle: "PC e portatili usati nella tua città",
    searchesText: "Guide e disponibilità per chi cerca un computer a Roma, Milano, Napoli, Torino e Bologna.",
    faqTitle: "Domande frequenti",
    faqText: "Come si compra, in che condizioni sono i computer e come contattarci.",
  },
  faq: [
    {
      question: "Come si acquista un computer?",
      answer:
        "Apri la scheda del prodotto e premi «Acquista su Vinted». Si apre l'annuncio dello stesso computer: paghi e ricevi la spedizione su Vinted, con la Protezione acquisti della piattaforma.",
    },
    {
      question: "Le foto sono del computer che ricevo?",
      answer:
        "Sì. La prima immagine mostra il modello su sfondo bianco, tutte le altre sono foto reali dell'esemplare in vendita, scattate da noi.",
    },
    {
      question: "In che condizioni sono i computer?",
      answer:
        "Sono usati ma in condizioni come nuove, quasi 100/100. Li accendiamo e li proviamo prima della vendita e nella scheda indichiamo lo stato della batteria e ogni dettaglio.",
    },
    {
      question: "Spedite anche all'estero?",
      answer:
        "Vendiamo tramite Vinted: al momento dell'acquisto Vinted mostra le opzioni di spedizione disponibili per il tuo indirizzo, in Italia e negli altri paesi in cui opera.",
    },
    {
      question: "Il sistema operativo è incluso?",
      answer: "Dipende dal computer ed è sempre scritto nella scheda tecnica. Alcuni hanno Windows installato, altri sono venduti senza sistema operativo.",
    },
    {
      question: "Posso vedere il computer di persona?",
      answer: "Sì, a Milano su appuntamento. Scrivici o chiamaci per fissare un orario.",
    },
  ],
  products: {
    "lenovo-thinkbook-14-iil": {
      kind: "Notebook",
      title: "Lenovo ThinkBook 14 IIL usato, come nuovo",
      shortDescription:
        "Portatile 14\" Full HD IPS con Intel Core i3-1005G1, 8 GB DDR4 e SSD NVMe 256 GB. Usato in condizioni come nuove, tastiera retroilluminata.",
      description: [
        "Il Lenovo ThinkBook 14 IIL è il portatile professionale di Lenovo per lavoro e studio: scocca in alluminio Mineral Grey, tastiera retroilluminata e webcam con copertura per la privacy.",
        "Questo esemplare usato è in condizioni come nuove. Monta un Intel Core i3-1005G1 di 10ª generazione con 8 GB di memoria DDR4 espandibile e un SSD M.2 NVMe da 256 GB, per un avvio rapido. Lo schermo da 14 pollici è Full HD IPS antiriflesso.",
        "È adatto a navigazione, Office, videochiamate e didattica a distanza. Viene venduto con Windows 10 Pro, pronto per l'aggiornamento a Windows 11. Le foto reali sono dell'esemplare in vendita.",
      ],
      highlights: [
        "Condizioni come nuove, testato",
        "Intel Core i3-1005G1 con 8 GB DDR4",
        "SSD NVMe 256 GB, avvio rapido",
        "Schermo 14\" Full HD IPS antiriflesso",
        "Tastiera retroilluminata e webcam con copertura",
      ],
      specs: [
        { label: "Processore", value: "Intel Core i3-1005G1 (2 core, 4 thread, fino a 3,4 GHz)" },
        { label: "Memoria", value: "8 GB DDR4, espandibile" },
        { label: "Archiviazione", value: "SSD M.2 NVMe 256 GB" },
        { label: "Display", value: "14\" Full HD (1920×1080) IPS antiriflesso" },
        { label: "Grafica", value: "Intel UHD Graphics" },
        { label: "Sistema operativo", value: "Windows 10 Pro, compatibile con Windows 11" },
        { label: "Tastiera", value: "Retroilluminata" },
        { label: "Webcam", value: "Integrata, con copertura privacy" },
        { label: "Scocca", value: "Alluminio, colore Mineral Grey" },
        { label: "Batteria", value: "In buono stato" },
        { label: "Condizioni", value: "Usato, come nuovo" },
      ],
      imageAlts: [
        "Lenovo ThinkBook 14 IIL, immagine del modello su sfondo bianco",
        "Lenovo ThinkBook 14 IIL usato aperto, vista frontale con tastiera",
        "Lenovo ThinkBook 14 IIL chiuso, coperchio in alluminio grigio con logo ThinkBook",
        "Lenovo ThinkBook 14 IIL, lato sinistro con porte USB, HDMI e USB-C",
        "Lenovo ThinkBook 14 IIL, lato destro con lettore di schede e porte USB",
        "Etichetta sul fondo del Lenovo ThinkBook 14-IIL con modello 20SL",
      ],
    },
    "dell-latitude-14-rugged-5414": {
      kind: "Notebook rugged",
      title: "Dell Latitude 5414 Rugged usato, come nuovo",
      shortDescription:
        "Portatile rugged 14\" Full HD touch con Intel Core i5-6300U, 8 GB e SSD 256 GB. Porte seriali RS232, tastiera retroilluminata, come nuovo.",
      description: [
        "Il Dell Latitude 5414 Rugged è un portatile rinforzato per lavorare fuori ufficio: il telaio resiste a urti, vibrazioni, polvere e umidità, gli angoli sono protetti e la maniglia è integrata.",
        "Questo esemplare usato è in condizioni come nuove, testato e perfettamente funzionante. Ha un Intel Core i5-6300U, 8 GB di memoria, un SSD da 256 GB e uno schermo touch da 14 pollici Full HD (1920×1080). La tastiera retroilluminata è leggibile anche al buio o sui mezzi di servizio.",
        "Le porte seriali RS232 (DB9) native permettono di collegare strumenti di diagnostica, insieme a Ethernet RJ-45, USB 3.0, HDMI e VGA. Ideale per officine, cantieri, magazzini e tecnici sul campo. La batteria è in condizioni eccellenti.",
      ],
      highlights: [
        "Condizioni come nuove, testato al 100%",
        "Telaio rugged resistente a urti e polvere",
        "Schermo 14\" Full HD touch",
        "Porte seriali RS232 native",
        "Tastiera retroilluminata, batteria eccellente",
      ],
      specs: [
        { label: "Processore", value: "Intel Core i5-6300U" },
        { label: "Memoria", value: "8 GB" },
        { label: "Archiviazione", value: "SSD 256 GB" },
        { label: "Display", value: "14\" Full HD (1920×1080), touch" },
        { label: "Tastiera", value: "Retroilluminata" },
        { label: "Porte", value: "Seriale RS232 (DB9), Ethernet RJ-45, USB 3.0, HDMI, VGA" },
        { label: "Scocca", value: "Rugged: resiste a urti, vibrazioni, polvere e umidità, maniglia integrata" },
        { label: "Batteria", value: "Eccellente" },
        { label: "Condizioni", value: "Usato, come nuovo, testato e funzionante al 100%" },
      ],
      imageAlts: [
        "Dell Latitude 14 Rugged, immagine del modello su sfondo bianco",
        "Dell Latitude 5414 Rugged usato aperto su un tavolo in legno",
        "Dell Latitude 5414 Rugged acceso con tastiera retroilluminata rossa",
        "Dell Latitude 5414 Rugged chiuso, angoli rinforzati e maniglia",
        "Tastiera retroilluminata del Dell Latitude 5414 Rugged",
        "Dell Latitude 5414 Rugged, lato con porte protette da sportellini",
      ],
    },
    "lenovo-thinkcentre-m710q-tiny": {
      kind: "Mini PC",
      title: "Lenovo ThinkCentre M710q Tiny usato",
      shortDescription:
        "Mini PC con Intel Core i5-6500T, 4 GB DDR4 con uno slot libero, HDD 500 GB e slot NVMe libero. Usato come nuovo, senza sistema operativo.",
      description: [
        "Il Lenovo ThinkCentre M710q Tiny è un mini PC da ufficio grande quanto un libro: si monta dietro il monitor, consuma poco ed è silenzioso.",
        "Questo esemplare usato è in condizioni come nuove. Ha un Intel Core i5-6500T a quattro core, 4 GB di memoria DDR4 con uno slot libero per aggiungerne altra e un disco da 500 GB. C'è anche uno slot M.2 NVMe libero per un SSD veloce.",
        "Viene venduto senza sistema operativo ed è una buona base per un PC da ufficio, un media center o un piccolo server di casa. Le foto reali sono dell'esemplare in vendita.",
      ],
      highlights: [
        "Condizioni come nuove",
        "Intel Core i5-6500T a basso consumo",
        "Slot RAM e slot NVMe liberi per aggiornarlo",
        "Formato Tiny, montabile dietro il monitor",
      ],
      specs: [
        { label: "Processore", value: "Intel Core i5-6500T (4 core)" },
        { label: "Memoria", value: "4 GB DDR4, uno slot libero" },
        { label: "Archiviazione", value: "HDD 500 GB + slot M.2 NVMe libero" },
        { label: "Grafica", value: "Intel HD Graphics 530" },
        { label: "Sistema operativo", value: "Non incluso" },
        { label: "Formato", value: "Mini PC Tiny, circa 1 litro" },
        { label: "Condizioni", value: "Usato, come nuovo" },
      ],
      imageAlts: [
        "Lenovo ThinkCentre M710 Tiny, immagine del modello: fronte e retro su sfondo bianco",
        "Lenovo ThinkCentre M710q Tiny usato tenuto in mano, pannello frontale",
        "Due Lenovo ThinkCentre Tiny impilati, vista frontale",
        "Pannello frontale del Lenovo ThinkCentre M710q Tiny con porte USB e audio",
        "Retro del Lenovo ThinkCentre M710q Tiny con porte USB, Ethernet, VGA e DisplayPort",
      ],
    },
  },
  brands: {
    lenovo: {
      title: "Lenovo usati: ThinkBook e ThinkCentre come nuovi",
      metaDescription: "Portatili e mini PC Lenovo usati come nuovi, con foto reali e caratteristiche verificate. Acquisto protetto su Vinted.",
      tagline: "ThinkBook e ThinkCentre usati, come nuovi.",
      whyTitle: "Perché scegliere un Lenovo usato",
      description: [
        "Le linee professionali di Lenovo nascono per l'ufficio: tastiere comode, scocche solide e componenti facili da sostituire. Per questo reggono bene gli anni e sono tra i computer usati più convenienti.",
        "Ogni Lenovo in vendita è fotografato da noi e descritto con le sue caratteristiche reali, compresi gli slot liberi per aggiungere memoria o un SSD.",
      ],
    },
    dell: {
      title: "Dell usati: Latitude Rugged come nuovi",
      metaDescription: "Portatili Dell Latitude usati come nuovi, anche rugged, con foto reali e caratteristiche verificate. Acquisto protetto su Vinted.",
      tagline: "Latitude usati, anche in versione rugged.",
      whyTitle: "Perché scegliere un Dell Latitude usato",
      description: [
        "I Dell Latitude sono portatili professionali costruiti per durare. La versione rugged aggiunge un telaio rinforzato, la maniglia e porte protette, per chi lavora in cantiere, in officina o all'aperto.",
        "Ogni Dell in vendita è fotografato da noi e descritto con le sue caratteristiche reali: processore, memoria, disco, schermo e stato della batteria.",
      ],
    },
  },
  pages: {
    about: {
      title: "Chi siamo",
      metaTitle: "Chi siamo: PC usati come nuovi a Milano",
      metaDescription: "AventiPC è un piccolo negozio di PC usati a Milano: scegliamo computer professionali come nuovi, li testiamo e li fotografiamo.",
      intro:
        "AventiPC è un piccolo negozio di computer usati a Milano. Scegliamo notebook e mini PC professionali in condizioni come nuove, li testiamo e li mettiamo in vendita con foto reali e una descrizione onesta.",
      sections: [
        {
          heading: "Cosa facciamo",
          paragraphs: [
            "Selezioniamo computer costruiti per durare, come i Lenovo ThinkBook e ThinkCentre e i Dell Latitude. Ogni esemplare viene acceso, provato e fotografato prima di essere messo in vendita.",
          ],
        },
        {
          heading: "Perché vendiamo su Vinted",
          paragraphs: [
            "Siamo una realtà piccola. Vendere su Vinted ti permette di pagare con strumenti che conosci già e di avere la Protezione acquisti della piattaforma.",
          ],
        },
        {
          heading: "Parliamo con te",
          paragraphs: [
            "Se hai un dubbio su un computer, scrivici: ti rispondiamo, ti mandiamo altre foto e, se sei a Milano, puoi vederlo di persona su appuntamento.",
          ],
        },
      ],
    },
    howToBuy: {
      title: "Come acquistare",
      metaTitle: "Come acquistare su Vinted in sicurezza",
      metaDescription: "I computer AventiPC si acquistano su Vinted: pagamento, spedizione e Protezione acquisti sono gestiti dalla piattaforma.",
      intro: "Su questo sito trovi foto e caratteristiche dei computer in vendita. L'acquisto vero e proprio avviene su Vinted.",
      sections: [
        {
          heading: "Scegli il computer",
          paragraphs: ["Guarda le foto reali e la scheda tecnica. Se ti serve un'informazione in più, scrivici prima di acquistare."],
        },
        {
          heading: "Compra su Vinted",
          paragraphs: [
            "Nella scheda del prodotto premi «Acquista su Vinted»: si apre l'annuncio dello stesso computer. Paghi con i metodi offerti da Vinted e sei coperto dalla Protezione acquisti.",
          ],
        },
        {
          heading: "Spedizione e ritiro",
          paragraphs: [
            "La spedizione si sceglie su Vinted al momento del pagamento. Se sei a Milano puoi anche ritirare il computer di persona, su appuntamento.",
          ],
        },
      ],
    },
    contact: {
      title: "Contatti",
      metaTitle: "Contatti",
      metaDescription: "Scrivi a info@aventipc.com o chiama il +39 02 1234 5678 dal lunedì al venerdì, 9–18, per domande sui computer in vendita.",
      intro: "Per domande su un computer, altre foto o un appuntamento per vederlo di persona puoi scriverci o chiamarci.",
      sections: [
        { heading: "Email", paragraphs: ["Scrivi a info@aventipc.com. Rispondiamo di solito entro un giorno lavorativo."] },
        { heading: "Telefono", paragraphs: ["Chiama il +39 02 1234 5678 dal lunedì al venerdì, dalle 9 alle 18."] },
        { heading: "Dove siamo", paragraphs: ["Via Alessandro Volta 12, 20121 Milano. Visite solo su appuntamento."] },
      ],
    },
    privacy: {
      title: "Privacy",
      metaTitle: "Informativa privacy",
      metaDescription: "Quali dati personali raccoglie AventiPC quando visiti il sito o ci contatti, perché li usa e quali diritti hai secondo il GDPR.",
      intro:
        "Questa informativa spiega quali dati personali trattiamo quando visiti il sito o ci scrivi, e quali diritti hai secondo il Regolamento UE 2016/679 (GDPR).",
      sections: [
        {
          heading: "Titolare del trattamento",
          paragraphs: ["Il titolare è AventiPC, Via Alessandro Volta 12, 20121 Milano. Per ogni richiesta sulla privacy scrivi a info@aventipc.com."],
        },
        {
          heading: "Quali dati raccogliamo",
          paragraphs: [
            "Se ci scrivi dal modulo di contatto o per email trattiamo nome, indirizzo email e il contenuto del messaggio, solo per risponderti.",
            "Gli acquisti avvengono su Vinted: i dati di pagamento e di spedizione li tratta Vinted, secondo la sua informativa.",
          ],
        },
        { heading: "Cookie", paragraphs: ["Il sito non usa cookie di profilazione né strumenti di tracciamento pubblicitario."] },
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
    terms: {
      title: "Termini e condizioni",
      metaTitle: "Termini e condizioni",
      metaDescription:
        "Condizioni d'uso del sito AventiPC: il sito presenta computer usati, la vendita avviene su Vinted secondo le condizioni della piattaforma.",
      intro: "Questo sito presenta i computer usati messi in vendita da AventiPC. Usandolo accetti le condizioni che seguono.",
      sections: [
        { heading: "Chi siamo", paragraphs: ["Il sito è gestito da AventiPC, Via Alessandro Volta 12, 20121 Milano, email info@aventipc.com."] },
        {
          heading: "Informazioni sui prodotti",
          paragraphs: [
            "Descrizioni e foto reali si riferiscono ai singoli esemplari in vendita; le immagini del modello sono indicative. In caso di differenze fa fede l'annuncio su Vinted.",
          ],
        },
        {
          heading: "Acquisto",
          paragraphs: ["Il contratto di vendita si conclude su Vinted e segue le condizioni della piattaforma, compresi pagamento, spedizione e Protezione acquisti."],
        },
        { heading: "Legge applicabile", paragraphs: ["Si applica la legge italiana."] },
      ],
    },
  },
  themes: {
    used: {
      keyword: "pc portatili usati",
      label: "PC portatili usati",
      hub: {
        title: "PC portatili usati come nuovi in Italia",
        h1: "PC portatili usati in Italia",
        metaDescription:
          "PC portatili usati come nuovi: Lenovo ThinkBook e Dell Latitude testati, con foto reali. Consegna in tutta Italia con acquisto protetto su Vinted.",
        intro: [
          "I nostri PC portatili usati sono notebook professionali Lenovo e Dell in condizioni come nuove, quasi 100/100. Ogni computer è testato, descritto nel dettaglio e fotografato per quello che è.",
          "Scegli la tua città per vedere come arrivano i PC portatili usati a casa tua, oppure guarda subito i computer disponibili.",
        ],
        citiesTitle: "PC portatili usati nelle principali città",
        productsTitle: "PC portatili usati disponibili",
      },
      city: {
        title: (c) => `PC portatili usati a ${c.name}, come nuovi`,
        h1: (c) => `PC portatili usati a ${c.name}`,
        metaDescription: (c) =>
          `PC portatili usati a ${c.name}${c.priceFrom ? ` da ${c.priceFrom}` : ""}: Lenovo e Dell come nuovi, testati e con foto reali. Acquisto protetto su Vinted.`,
        intro: (c) => [
          `Cerchi PC portatili usati a ${c.name}? AventiPC seleziona notebook professionali Lenovo e Dell in condizioni come nuove: ogni computer è testato, descritto nel dettaglio e fotografato per quello che è.`,
          c.pickup
            ? `A ${c.name} puoi anche vedere e ritirare il computer di persona, su appuntamento. In alternativa lo acquisti su Vinted e lo ricevi con la spedizione della piattaforma.`
            : `Il computer arriva a ${c.name} con la spedizione di Vinted: paghi sulla piattaforma e sei coperto dalla Protezione acquisti fino alla consegna.`,
        ],
        productsTitle: (c) => `PC portatili usati in vendita a ${c.name}`,
        guideTitle: (c) => `Come scegliere un PC portatile usato a ${c.name}`,
        guide: (c) => [
          "Un PC portatile usato di fascia professionale costa meno di un portatile nuovo economico e spesso è costruito meglio: scocche robuste, tastiere comode e componenti facili da sostituire. Le linee Lenovo ThinkBook e Dell Latitude nascono per l'uso aziendale e reggono bene gli anni.",
          "Prima di comprare guarda processore, memoria e disco. Un Intel Core i3 o i5 con 8 GB di RAM e SSD basta per navigazione, Office, videochiamate e studio. Controlla anche batteria e schermo: nelle nostre schede li trovi sempre indicati.",
          `Tutti i nostri PC portatili usati sono in condizioni quasi perfette e hanno foto reali dell'esemplare in vendita. Se sei a ${c.name} e hai un dubbio, scrivici prima dell'acquisto: ti rispondiamo e ti mandiamo altre foto.`,
        ],
        faqTitle: (c) => `Domande sui PC portatili usati a ${c.name}`,
        faq: (c) => [
          {
            question: `Consegnate PC portatili usati a ${c.name}?`,
            answer: `Sì. Acquisti il computer su Vinted e lo ricevi a ${c.name} con la spedizione scelta al momento del pagamento, coperta dalla Protezione acquisti.`,
          },
          {
            question: `Posso vedere il computer di persona a ${c.name}?`,
            answer: c.pickup
              ? `Sì, a ${c.name} puoi vederlo e ritirarlo su appuntamento. Scrivici per fissare un orario.`
              : `Il ritiro di persona è possibile solo a Milano, su appuntamento. A ${c.name} ricevi il computer con la spedizione di Vinted; prima dell'acquisto possiamo mandarti altre foto.`,
          },
          {
            question: "In che condizioni sono i PC portatili usati?",
            answer:
              "Sono in condizioni come nuove, quasi 100/100. Li testiamo prima della vendita e nella scheda indichiamo lo stato della batteria e ogni dettaglio.",
          },
        ],
        otherCitiesTitle: () => "Anche in altre città",
        otherThemesTitle: (c) => `Altre ricerche a ${c.name}`,
      },
    },
    cheap: {
      keyword: "portatili economici",
      label: "Portatili economici",
      hub: {
        title: "Portatili economici in Italia, usati come nuovi",
        h1: "Portatili economici in Italia",
        metaDescription:
          "Portatili economici ma affidabili: notebook Lenovo e Dell usati come nuovi, con foto reali. Consegna in tutta Italia e acquisto protetto su Vinted.",
        intro: [
          "Un portatile economico non deve essere un compromesso. I nostri portatili economici sono notebook professionali usati, in condizioni come nuove, che costano meno di un modello nuovo di fascia bassa e sono costruiti meglio.",
          "Scegli la tua città oppure guarda subito i portatili economici disponibili, ordinati dal prezzo più basso.",
        ],
        citiesTitle: "Portatili economici nelle principali città",
        productsTitle: "Portatili economici disponibili",
      },
      city: {
        title: (c) => `Portatili economici a ${c.name}, usati come nuovi`,
        h1: (c) => `Portatili economici a ${c.name}`,
        metaDescription: (c) =>
          `Portatili economici a ${c.name}${c.priceFrom ? ` da ${c.priceFrom}` : ""}: notebook Lenovo e Dell usati come nuovi, con foto reali. Acquisto protetto su Vinted.`,
        intro: (c) => [
          `Cerchi portatili economici a ${c.name}? Invece di un notebook nuovo di fascia bassa ti proponiamo portatili professionali usati, in condizioni come nuove${c.priceFrom ? `, a partire da ${c.priceFrom}` : ""}.`,
          c.pickup
            ? `A ${c.name} puoi ritirare il portatile di persona su appuntamento, oppure comprarlo su Vinted e riceverlo con la spedizione della piattaforma.`
            : `Li acquisti su Vinted e li ricevi a ${c.name} con la spedizione scelta al pagamento, coperta dalla Protezione acquisti.`,
        ],
        productsTitle: (c) => `Portatili economici disponibili a ${c.name}`,
        guideTitle: (c) => `Come risparmiare su un portatile a ${c.name}`,
        guide: (c) => [
          "Molti portatili economici nuovi usano plastica sottile, dischi lenti e schermi poco luminosi. Un notebook professionale usato, a parità di prezzo, offre di solito un SSD, una tastiera migliore e una scocca più solida.",
          "Per spendere poco senza sbagliare scegli almeno 8 GB di RAM e un SSD, e verifica lo stato della batteria. Evita i dischi meccanici come unico disco: rallentano tutto il sistema.",
          `Tutti i portatili che vendiamo sono testati, descritti con precisione e mostrati con foto reali. Se sei a ${c.name} e vuoi un consiglio su quale scegliere, scrivici.`,
        ],
        faqTitle: (c) => `Domande sui portatili economici a ${c.name}`,
        faq: (c) => [
          {
            question: "Quanto costa il portatile più economico?",
            answer: c.priceFrom
              ? `Al momento il portatile più economico costa ${c.priceFrom}. Il prezzo è quello dell'annuncio su Vinted.`
              : "I prezzi sono indicati in ogni scheda e corrispondono agli annunci su Vinted.",
          },
          {
            question: `Consegnate portatili economici a ${c.name}?`,
            answer: `Sì. Compri su Vinted e ricevi il portatile a ${c.name} con la spedizione scelta al momento del pagamento.`,
          },
          {
            question: "Un portatile economico usato è affidabile?",
            answer:
              "Sì, se è un modello professionale in buone condizioni. I nostri sono come nuovi, testati prima della vendita e descritti anche nei dettagli di batteria e schermo.",
          },
        ],
        otherCitiesTitle: () => "Anche in altre città",
        otherThemesTitle: (c) => `Altre ricerche a ${c.name}`,
      },
    },
    students: {
      keyword: "portatili per studenti",
      label: "Portatili per studenti",
      hub: {
        title: "Portatili per studenti, usati come nuovi",
        h1: "Portatili per studenti in Italia",
        metaDescription:
          "Portatili per studenti affidabili e convenienti: notebook Lenovo e Dell usati come nuovi, con SSD e foto reali. Acquisto protetto su Vinted.",
        intro: [
          "I portatili per studenti devono essere leggeri da portare a lezione, veloci ad avviarsi e abbastanza robusti da durare tutto il percorso di studi. I notebook professionali usati come nuovi uniscono queste qualità a un prezzo accessibile.",
          "Scegli la tua città universitaria oppure guarda subito i portatili per studenti disponibili.",
        ],
        citiesTitle: "Portatili per studenti nelle città universitarie",
        productsTitle: "Portatili per studenti disponibili",
      },
      city: {
        title: (c) => `Portatili per studenti a ${c.name}`,
        h1: (c) => `Portatili per studenti a ${c.name}`,
        metaDescription: (c) =>
          `Portatili per studenti a ${c.name}${c.priceFrom ? ` da ${c.priceFrom}` : ""}: notebook Lenovo e Dell usati come nuovi, con SSD e foto reali. Acquisto su Vinted.`,
        intro: (c) => [
          c.universities
            ? `Studi a ${c.name}, per esempio a ${c.universities}? Ti servono portatili per studenti affidabili per appunti, ricerche, videolezioni ed esami online, senza spendere come per un modello nuovo.`
            : `Studi a ${c.name}? Ti servono portatili per studenti affidabili per appunti, ricerche, videolezioni ed esami online, senza spendere come per un modello nuovo.`,
          `I nostri notebook usati sono in condizioni come nuove, con SSD e 8 GB di RAM. Li acquisti su Vinted e li ricevi a ${c.name} con la Protezione acquisti.`,
        ],
        productsTitle: (c) => `Portatili per studenti disponibili a ${c.name}`,
        guideTitle: () => "Come scegliere un portatile per l'università",
        guide: (c) => [
          "Per l'università conta più la reattività che la potenza pura: con un SSD e 8 GB di RAM il portatile si avvia in pochi secondi e gestisce senza fatica browser, Office, PDF e piattaforme di videolezione.",
          "Uno schermo da 14 pollici è il compromesso migliore tra leggibilità e peso. Controlla anche la batteria, la webcam per gli esami online e una tastiera comoda per scrivere appunti e tesi.",
          `I nostri portatili per studenti sono modelli professionali costruiti per durare anni. Se studi a ${c.name} e non sai quale scegliere, scrivici: ti aiutiamo a valutare in base al tuo corso.`,
        ],
        faqTitle: (c) => `Domande sui portatili per studenti a ${c.name}`,
        faq: (c) => [
          {
            question: "Un portatile usato va bene per l'università?",
            answer:
              "Sì. Un notebook professionale con SSD e 8 GB di RAM è più che sufficiente per studio, Office e videolezioni. I nostri sono come nuovi e testati prima della vendita.",
          },
          {
            question: `Consegnate portatili per studenti a ${c.name}?`,
            answer: c.pickup
              ? `Sì. A ${c.name} puoi anche ritirarlo di persona su appuntamento; altrimenti lo compri su Vinted e lo ricevi a casa.`
              : `Sì. Compri su Vinted e ricevi il portatile a ${c.name} con la spedizione scelta al pagamento.`,
          },
          {
            question: "Quale portatile consigliate per chi studia?",
            answer:
              "Per la maggior parte dei corsi consigliamo il Lenovo ThinkBook 14 IIL: leggero, con SSD e schermo Full HD. Il Dell Latitude Rugged è ideale per corsi tecnici e laboratori.",
          },
        ],
        otherCitiesTitle: () => "Portatili per studenti in altre città",
        otherThemesTitle: (c) => `Altre ricerche a ${c.name}`,
      },
    },
  },
};

export default it;
