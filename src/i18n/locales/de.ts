import type { Dictionary } from "../types";

/**
 * German (Germany) — translated and adapted from it.ts.
 * SEO: each keyword page uses its keyword naturally about once every 100 words.
 */
const de: Dictionary = {
  meta: {
    homeTitle: "AventiPC – gebrauchte Laptops und PCs wie neu, echte Fotos",
    homeDescription:
      "Gebrauchte PCs und Laptops wie neu: getestete Lenovo ThinkBook und Dell Latitude mit echten Fotos des Geräts. Sicher kaufen über Vinted mit Käuferschutz.",
    tagline: "Gebrauchte PCs und Laptops wie neu, fotografiert und so beschrieben, wie sie sind.",
    ogTagline: "Gebrauchte PCs und Laptops wie neu, mit echten Fotos",
    ogBadge: "Wie neu · Echte Fotos · Kauf über Vinted",
  },
  countries: { IT: "Italien", FR: "Frankreich", BE: "Belgien", ES: "Spanien", DE: "Deutschland" },
  ui: {
    skipToContent: "Zum Inhalt springen",
    homeAria: "AventiPC, zur Startseite",
    mainMenu: "Hauptmenü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    breadcrumb: "Navigationspfad",
    home: "Startseite",
    nav: { products: "Produkte", howToBuy: "So kaufen Sie", about: "Über uns", contact: "Kontakt" },
    footer: {
      products: "Produkte",
      allProducts: "Alle Produkte",
      searches: "Häufige Suchanfragen",
      info: "Informationen",
      faq: "Häufige Fragen",
      company: "Unternehmen",
      note: "Preise in Euro. Verkauf über Vinted. Die Modellbilder dienen der Veranschaulichung, die echten Fotos zeigen das angebotene Gerät.",
    },
    product: {
      likeNew: "Wie neu",
      available: "Verfügbar",
      sold: "Verkauft",
      comingSoon: "Demnächst verfügbar",
      buyOnVinted: "Auf Vinted kaufen",
      askAvailability: "Verfügbarkeit anfragen",
      priceOnRequest: "Preis auf Anfrage",
      vintedNote: "Sie bezahlen auf Vinted und sind durch den Käuferschutz der Plattform abgesichert.",
      photosNote: "Das erste Bild zeigt das Modell, die weiteren sind echte Fotos des angebotenen Geräts.",
      questions: "Fragen oder weitere Fotos?",
      writeUs: "Schreiben Sie uns",
      description: "Beschreibung",
      specs: "Technische Daten",
      specsCaption: (name) => `Technische Daten: ${name}`,
      related: "Weitere Computer im Angebot",
      gallery: (name) => `Bilder: ${name}`,
      showImage: (i, n) => `Bild ${i} von ${n} anzeigen`,
      modelImage: "Modellbild",
      realPhoto: "Echtes Foto des Geräts",
    },
    catalog: {
      title: "Gebrauchte PCs und Laptops wie neu kaufen",
      h1: "Gebrauchte PCs und Laptops im Angebot",
      intro:
        "Gebrauchte Notebooks und Mini-PCs im Zustand wie neu, einzeln getestet und fotografiert. Jeden Computer kaufen Sie über Vinted mit Käuferschutz.",
      metaDescription:
        "Alle gebrauchten PCs und Laptops von AventiPC: Lenovo ThinkBook, Dell Latitude Rugged und ThinkCentre wie neu, mit echten Fotos. Kauf über Vinted.",
      count: (n) => (n === 1 ? "1 Computer im Angebot" : `${n} Computer im Angebot`),
    },
    brand: {
      count: (n) => (n === 1 ? "1 Computer verfügbar" : `${n} Computer verfügbar`),
      others: "Weitere Marken",
      empty: "Derzeit gibt es keine Computer dieser Marke. Sehen Sie sich die anderen Produkte im Angebot an.",
    },
    contact: {
      hours: "Montag–Freitag, 9:00–18:00 Uhr",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        submit: "Nachricht senden",
        sent: "Nachricht gesendet. Wir antworten Ihnen innerhalb eines Werktags.",
      },
    },
    legalUpdated: "Zuletzt aktualisiert: 29. September 2026",
    notFound: {
      title: "Diese Seite gibt es nicht.",
      text: "Der Link hat sich vielleicht geändert, oder der Computer ist bereits verkauft. Sehen Sie sich die Produkte an, die aktuell im Angebot sind.",
      home: "Zur Startseite",
      products: "Produkte ansehen",
    },
    error: {
      title: "Etwas ist schiefgelaufen.",
      text: "Die Seite wurde nicht richtig geladen. Bitte versuchen Sie es gleich noch einmal.",
      retry: "Erneut versuchen",
    },
  },
  home: {
    hero: {
      title: "Gebrauchte PCs und Laptops, wie neu.",
      subtitle:
        "Business-Geräte von Lenovo und Dell in nahezu perfektem Zustand, getestet und so fotografiert, wie sie sind. Sie kaufen sie auf Vinted, mit Käuferschutz.",
      primaryCta: "Produkte ansehen",
      secondaryCta: "So kaufen Sie",
      imageAlt: "Lenovo ThinkBook 14 IIL, gebrauchter Laptop im Zustand wie neu",
    },
    reassurance: [
      { icon: "check", title: "Wie neu", text: "Zustand fast 100/100: Jeder Computer wird vor dem Verkauf getestet." },
      { icon: "camera", title: "Echte Fotos", text: "Neben dem Modellbild sehen Sie Fotos von genau dem Gerät, das Sie erhalten." },
      { icon: "bag", title: "Sicher kaufen über Vinted", text: "Sie bezahlen auf Vinted und sind durch den Käuferschutz der Plattform abgesichert." },
      { icon: "headset", title: "Direkter Kontakt", text: "Schreiben Sie uns vor dem Kauf für weitere Fotos oder technische Details." },
    ],
    featuredTitle: "Jetzt im Angebot",
    featuredText: "Jeder Computer ist ein Einzelstück: Sobald er verkauft ist, verschwindet er von der Website.",
    whyTitle: "Warum bei AventiPC kaufen",
    searchesTitle: "Gebrauchte PCs und Laptops in Ihrer Stadt",
    searchesText: "Ratgeber und Verfügbarkeit für alle, die einen Computer in Berlin, Hamburg, München, Köln oder Frankfurt suchen.",
    faqTitle: "Häufige Fragen",
    faqText: "Wie Sie kaufen, in welchem Zustand die Computer sind und wie Sie uns erreichen.",
  },
  faq: [
    {
      question: "Wie kaufe ich einen Computer?",
      answer:
        "Öffnen Sie die Produktseite und klicken Sie auf „Auf Vinted kaufen“. Es öffnet sich das Inserat desselben Computers: Bezahlung und Versand laufen über Vinted, mit dem Käuferschutz der Plattform.",
    },
    {
      question: "Zeigen die Fotos den Computer, den ich erhalte?",
      answer:
        "Ja. Das erste Bild zeigt das Modell vor weißem Hintergrund, alle weiteren sind echte Fotos des angebotenen Geräts, die wir selbst aufgenommen haben.",
    },
    {
      question: "In welchem Zustand sind die Computer?",
      answer:
        "Sie sind gebraucht, aber im Zustand wie neu, fast 100/100. Wir schalten sie vor dem Verkauf ein und testen sie. Auf der Produktseite geben wir den Zustand des Akkus und jedes Detail an.",
    },
    {
      question: "Versenden Sie auch ins Ausland?",
      answer:
        "Wir verkaufen über Vinted: Beim Kauf zeigt Vinted die verfügbaren Versandoptionen für Ihre Adresse an, in Deutschland, Italien und den anderen Ländern, in denen die Plattform aktiv ist.",
    },
    {
      question: "Ist ein Betriebssystem enthalten?",
      answer: "Das hängt vom Computer ab und steht immer in den technischen Daten. Einige haben Windows installiert, andere werden ohne Betriebssystem verkauft.",
    },
    {
      question: "Kann ich mir den Computer vor Ort ansehen?",
      answer: "Ja, in Mailand nach Terminvereinbarung. Schreiben Sie uns oder rufen Sie uns an, um einen Termin zu vereinbaren.",
    },
  ],
  products: {
    "lenovo-thinkbook-14-iil": {
      kind: "Notebook",
      title: "Lenovo ThinkBook 14 IIL gebraucht, wie neu",
      shortDescription:
        "14-Zoll-Laptop mit Full-HD-IPS-Display, Intel Core i3-1005G1, 8 GB DDR4 und 256 GB NVMe-SSD. Gebraucht im Zustand wie neu, beleuchtete Tastatur.",
      description: [
        "Das Lenovo ThinkBook 14 IIL ist Lenovos Business-Laptop für Arbeit und Studium: Aluminiumgehäuse in Mineral Grey, beleuchtete Tastatur und Webcam mit Sichtschutzabdeckung.",
        "Dieses gebrauchte Gerät ist im Zustand wie neu. Es hat einen Intel Core i3-1005G1 der 10. Generation, 8 GB erweiterbaren DDR4-Arbeitsspeicher und eine M.2-NVMe-SSD mit 256 GB für einen schnellen Start. Das 14-Zoll-Display bietet Full HD, IPS und eine entspiegelte Oberfläche.",
        "Es eignet sich für Surfen, Office, Videocalls und Online-Unterricht. Es wird mit Windows 10 Pro verkauft und ist bereit für das Upgrade auf Windows 11. Die echten Fotos zeigen das angebotene Gerät.",
      ],
      highlights: [
        "Zustand wie neu, getestet",
        "Intel Core i3-1005G1 mit 8 GB DDR4",
        "256 GB NVMe-SSD, schneller Start",
        "14-Zoll-Display, Full HD, IPS, entspiegelt",
        "Beleuchtete Tastatur und Webcam mit Abdeckung",
      ],
      specs: [
        { label: "Prozessor", value: "Intel Core i3-1005G1 (2 Kerne, 4 Threads, bis zu 3,4 GHz)" },
        { label: "Arbeitsspeicher", value: "8 GB DDR4, erweiterbar" },
        { label: "Speicher", value: "256 GB M.2-NVMe-SSD" },
        { label: "Display", value: "14\" Full HD (1920×1080), IPS, entspiegelt" },
        { label: "Grafik", value: "Intel UHD Graphics" },
        { label: "Betriebssystem", value: "Windows 10 Pro, kompatibel mit Windows 11" },
        { label: "Tastatur", value: "Beleuchtet" },
        { label: "Webcam", value: "Integriert, mit Sichtschutzabdeckung" },
        { label: "Gehäuse", value: "Aluminium, Farbe Mineral Grey" },
        { label: "Akku", value: "In gutem Zustand" },
        { label: "Zustand", value: "Gebraucht, wie neu" },
      ],
      imageAlts: [
        "Lenovo ThinkBook 14 IIL, Modellbild vor weißem Hintergrund",
        "Gebrauchtes Lenovo ThinkBook 14 IIL aufgeklappt, Frontansicht mit Tastatur",
        "Lenovo ThinkBook 14 IIL zugeklappt, grauer Aluminiumdeckel mit ThinkBook-Logo",
        "Lenovo ThinkBook 14 IIL, linke Seite mit USB-, HDMI- und USB-C-Anschlüssen",
        "Lenovo ThinkBook 14 IIL, rechte Seite mit Kartenleser und USB-Anschlüssen",
        "Typenschild auf der Unterseite des Lenovo ThinkBook 14-IIL mit Modell 20SL",
      ],
    },
    "dell-latitude-14-rugged-5414": {
      kind: "Rugged-Notebook",
      title: "Dell Latitude 5414 Rugged gebraucht, wie neu",
      shortDescription:
        "Rugged-Laptop mit 14-Zoll-Full-HD-Touchscreen, Intel Core i5-6300U, 8 GB und 256 GB SSD. Serielle RS232-Ports, beleuchtete Tastatur, wie neu.",
      description: [
        "Das Dell Latitude 5414 Rugged ist ein robuster Laptop für die Arbeit außerhalb des Büros: Das Gehäuse hält Stößen, Vibrationen, Staub und Feuchtigkeit stand, die Ecken sind geschützt und ein Tragegriff ist integriert.",
        "Dieses gebrauchte Gerät ist im Zustand wie neu, getestet und voll funktionsfähig. Es hat einen Intel Core i5-6300U, 8 GB Arbeitsspeicher, eine SSD mit 256 GB und einen 14-Zoll-Touchscreen in Full HD (1920×1080). Die beleuchtete Tastatur ist auch im Dunkeln oder im Dienstfahrzeug gut lesbar.",
        "Über die nativen seriellen RS232-Anschlüsse (DB9) lassen sich Diagnosegeräte anschließen, dazu kommen Ethernet RJ-45, USB 3.0, HDMI und VGA. Ideal für Werkstätten, Baustellen, Lager und Techniker im Außendienst. Der Akku ist in ausgezeichnetem Zustand.",
      ],
      highlights: [
        "Zustand wie neu, zu 100 % getestet",
        "Rugged-Gehäuse, stoß- und staubfest",
        "14-Zoll-Touchscreen in Full HD",
        "Native serielle RS232-Anschlüsse",
        "Beleuchtete Tastatur, ausgezeichneter Akku",
      ],
      specs: [
        { label: "Prozessor", value: "Intel Core i5-6300U" },
        { label: "Arbeitsspeicher", value: "8 GB" },
        { label: "Speicher", value: "256 GB SSD" },
        { label: "Display", value: "14\" Full HD (1920×1080), Touchscreen" },
        { label: "Tastatur", value: "Beleuchtet" },
        { label: "Anschlüsse", value: "Seriell RS232 (DB9), Ethernet RJ-45, USB 3.0, HDMI, VGA" },
        { label: "Gehäuse", value: "Rugged: widersteht Stößen, Vibrationen, Staub und Feuchtigkeit, integrierter Tragegriff" },
        { label: "Akku", value: "Ausgezeichnet" },
        { label: "Zustand", value: "Gebraucht, wie neu, getestet und zu 100 % funktionsfähig" },
      ],
      imageAlts: [
        "Dell Latitude 14 Rugged, Modellbild vor weißem Hintergrund",
        "Gebrauchtes Dell Latitude 5414 Rugged aufgeklappt auf einem Holztisch",
        "Dell Latitude 5414 Rugged eingeschaltet, mit rot beleuchteter Tastatur",
        "Dell Latitude 5414 Rugged zugeklappt, verstärkte Ecken und Tragegriff",
        "Beleuchtete Tastatur des Dell Latitude 5414 Rugged",
        "Dell Latitude 5414 Rugged, Seite mit Anschlüssen hinter Schutzklappen",
      ],
    },
    "lenovo-thinkcentre-m710q-tiny": {
      kind: "Mini-PC",
      title: "Lenovo ThinkCentre M710q Tiny gebraucht",
      shortDescription:
        "Mini-PC mit Intel Core i5-6500T, 4 GB DDR4 und freiem RAM-Steckplatz, 500-GB-HDD und freiem NVMe-Slot. Gebraucht wie neu, ohne Betriebssystem.",
      description: [
        "Der Lenovo ThinkCentre M710q Tiny ist ein Büro-Mini-PC in Buchgröße: Er lässt sich hinter dem Monitor montieren, verbraucht wenig Strom und arbeitet leise.",
        "Dieses gebrauchte Gerät ist im Zustand wie neu. Es hat einen Intel Core i5-6500T mit vier Kernen, 4 GB DDR4-Arbeitsspeicher mit einem freien Steckplatz zum Aufrüsten und eine 500-GB-Festplatte. Dazu kommt ein freier M.2-NVMe-Slot für eine schnelle SSD.",
        "Er wird ohne Betriebssystem verkauft und ist eine gute Basis für einen Büro-PC, ein Mediacenter oder einen kleinen Heimserver. Die echten Fotos zeigen das angebotene Gerät.",
      ],
      highlights: [
        "Zustand wie neu",
        "Sparsamer Intel Core i5-6500T",
        "Freier RAM- und NVMe-Steckplatz zum Aufrüsten",
        "Tiny-Format, hinter dem Monitor montierbar",
      ],
      specs: [
        { label: "Prozessor", value: "Intel Core i5-6500T (4 Kerne)" },
        { label: "Arbeitsspeicher", value: "4 GB DDR4, ein Steckplatz frei" },
        { label: "Speicher", value: "500 GB HDD + freier M.2-NVMe-Slot" },
        { label: "Grafik", value: "Intel HD Graphics 530" },
        { label: "Betriebssystem", value: "Nicht enthalten" },
        { label: "Formfaktor", value: "Mini-PC Tiny, ca. 1 Liter" },
        { label: "Zustand", value: "Gebraucht, wie neu" },
      ],
      imageAlts: [
        "Lenovo ThinkCentre M710 Tiny, Modellbild: Vorder- und Rückseite vor weißem Hintergrund",
        "Gebrauchter Lenovo ThinkCentre M710q Tiny in der Hand, Frontblende",
        "Zwei gestapelte Lenovo ThinkCentre Tiny, Frontansicht",
        "Frontblende des Lenovo ThinkCentre M710q Tiny mit USB- und Audioanschlüssen",
        "Rückseite des Lenovo ThinkCentre M710q Tiny mit USB-, Ethernet-, VGA- und DisplayPort-Anschlüssen",
      ],
    },
  },
  brands: {
    lenovo: {
      title: "Lenovo gebraucht: ThinkBook, ThinkCentre wie neu",
      metaDescription:
        "Gebrauchte Laptops und Mini-PCs von Lenovo wie neu, mit echten Fotos und geprüften technischen Daten. Sicher kaufen über Vinted mit Käuferschutz.",
      tagline: "ThinkBook und ThinkCentre gebraucht, wie neu.",
      whyTitle: "Warum einen gebrauchten Lenovo kaufen",
      description: [
        "Die Business-Serien von Lenovo sind für das Büro gemacht: bequeme Tastaturen, solide Gehäuse und leicht austauschbare Komponenten. Deshalb halten sie viele Jahre und gehören zu den gebrauchten Computern mit dem besten Preis-Leistungs-Verhältnis.",
        "Jeden Lenovo im Angebot fotografieren wir selbst und beschreiben ihn mit seinen tatsächlichen Eigenschaften, einschließlich der freien Steckplätze für mehr Arbeitsspeicher oder eine SSD.",
      ],
    },
    dell: {
      title: "Dell gebraucht: Latitude Rugged wie neu",
      metaDescription:
        "Gebrauchte Dell-Latitude-Laptops wie neu, auch in Rugged-Ausführung, mit echten Fotos und geprüften Daten. Sicher kaufen über Vinted mit Käuferschutz.",
      tagline: "Latitude gebraucht, auch in Rugged-Ausführung.",
      whyTitle: "Warum einen gebrauchten Dell Latitude kaufen",
      description: [
        "Dell-Latitude-Laptops sind Business-Geräte, die auf Langlebigkeit ausgelegt sind. Die Rugged-Version ergänzt ein verstärktes Gehäuse, einen Tragegriff und geschützte Anschlüsse, für alle, die auf der Baustelle, in der Werkstatt oder im Freien arbeiten.",
        "Jeden Dell im Angebot fotografieren wir selbst und beschreiben ihn mit seinen tatsächlichen Eigenschaften: Prozessor, Arbeitsspeicher, Festplatte, Display und Zustand des Akkus.",
      ],
    },
  },
  pages: {
    about: {
      title: "Über uns",
      metaTitle: "Über uns: gebrauchte PCs wie neu aus Mailand",
      metaDescription:
        "AventiPC ist ein kleiner Shop für gebrauchte PCs in Mailand: Wir wählen Business-Computer im Zustand wie neu aus, testen und fotografieren sie.",
      intro:
        "AventiPC ist ein kleines Geschäft für gebrauchte Computer in Mailand. Wir wählen Business-Notebooks und Mini-PCs im Zustand wie neu aus, testen sie und bieten sie mit echten Fotos und einer ehrlichen Beschreibung an.",
      sections: [
        {
          heading: "Was wir machen",
          paragraphs: [
            "Wir wählen Computer aus, die auf Langlebigkeit ausgelegt sind, etwa Lenovo ThinkBook und ThinkCentre sowie Dell Latitude. Jedes Gerät wird eingeschaltet, getestet und fotografiert, bevor wir es zum Verkauf anbieten.",
          ],
        },
        {
          heading: "Warum wir über Vinted verkaufen",
          paragraphs: [
            "Wir sind ein kleines Unternehmen. Über Vinted bezahlen Sie mit Zahlungsmitteln, die Sie bereits kennen, und profitieren vom Käuferschutz der Plattform.",
          ],
        },
        {
          heading: "Persönlicher Kontakt",
          paragraphs: [
            "Wenn Sie Fragen zu einem Computer haben, schreiben Sie uns: Wir antworten, schicken Ihnen weitere Fotos, und wenn Sie in Mailand sind, können Sie sich das Gerät nach Terminvereinbarung vor Ort ansehen.",
          ],
        },
      ],
    },
    howToBuy: {
      title: "So kaufen Sie",
      metaTitle: "So kaufen Sie sicher über Vinted",
      metaDescription:
        "Die Computer von AventiPC kaufen Sie über Vinted: Bezahlung, Versand und Käuferschutz werden von der Plattform abgewickelt.",
      intro: "Auf dieser Website finden Sie Fotos und technische Daten der angebotenen Computer. Der eigentliche Kauf erfolgt über Vinted.",
      sections: [
        {
          heading: "Computer auswählen",
          paragraphs: ["Sehen Sie sich die echten Fotos und die technischen Daten an. Wenn Sie weitere Informationen brauchen, schreiben Sie uns vor dem Kauf."],
        },
        {
          heading: "Auf Vinted kaufen",
          paragraphs: [
            "Klicken Sie auf der Produktseite auf „Auf Vinted kaufen“: Es öffnet sich das Inserat desselben Computers. Sie bezahlen mit den Zahlungsmethoden von Vinted und sind durch den Käuferschutz abgesichert.",
          ],
        },
        {
          heading: "Versand und Abholung",
          paragraphs: [
            "Den Versand wählen Sie beim Bezahlen auf Vinted. Wenn Sie in Mailand sind, können Sie den Computer nach Terminvereinbarung auch persönlich abholen.",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      metaTitle: "Kontakt",
      metaDescription:
        "Fragen zu unseren Computern? Schreiben Sie an info@aventipc.com oder rufen Sie +39 02 1234 5678 an, Montag bis Freitag von 9 bis 18 Uhr.",
      intro: "Bei Fragen zu einem Computer, für weitere Fotos oder einen Termin zur Besichtigung können Sie uns schreiben oder anrufen.",
      sections: [
        { heading: "E-Mail", paragraphs: ["Schreiben Sie an info@aventipc.com. Wir antworten in der Regel innerhalb eines Werktags."] },
        { heading: "Telefon", paragraphs: ["Rufen Sie +39 02 1234 5678 an, Montag bis Freitag von 9 bis 18 Uhr."] },
        { heading: "Adresse", paragraphs: ["Via Alessandro Volta 12, 20121 Mailand (Milano), Italien. Besuche nur nach Terminvereinbarung."] },
      ],
    },
    privacy: {
      title: "Datenschutz",
      metaTitle: "Datenschutzerklärung",
      metaDescription:
        "Welche Daten AventiPC erhebt, wenn Sie die Website besuchen oder uns kontaktieren, wofür wir sie nutzen und welche Rechte Sie nach der DSGVO haben.",
      intro:
        "Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir verarbeiten, wenn Sie die Website besuchen oder uns schreiben, und welche Rechte Sie nach der Verordnung (EU) 2016/679 (DSGVO) haben.",
      sections: [
        {
          heading: "Verantwortlicher",
          paragraphs: [
            "Verantwortlich ist AventiPC, Via Alessandro Volta 12, 20121 Mailand (Milano), Italien. Für alle Anfragen zum Datenschutz schreiben Sie an info@aventipc.com.",
          ],
        },
        {
          heading: "Welche Daten wir erheben",
          paragraphs: [
            "Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse und den Inhalt der Nachricht, ausschließlich um Ihnen zu antworten.",
            "Käufe erfolgen über Vinted: Zahlungs- und Versanddaten verarbeitet Vinted gemäß seiner eigenen Datenschutzerklärung.",
          ],
        },
        { heading: "Cookies", paragraphs: ["Die Website verwendet keine Profiling-Cookies und keine Tracking-Tools für Werbezwecke."] },
        {
          heading: "Speicherdauer",
          paragraphs: ["Wir speichern Nachrichten so lange, wie es für die Antwort nötig ist, höchstens 24 Monate, und löschen sie danach."],
        },
        {
          heading: "Ihre Rechte",
          paragraphs: [
            "Sie können Auskunft über Ihre Daten sowie deren Berichtigung oder Löschung verlangen, indem Sie an info@aventipc.com schreiben. Außerdem können Sie sich bei der italienischen Datenschutzbehörde (Garante per la protezione dei dati personali) oder bei der Datenschutzaufsichtsbehörde Ihres Bundeslandes beschweren.",
          ],
        },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      metaTitle: "Nutzungsbedingungen",
      metaDescription:
        "AGB der Website AventiPC: Die Website stellt gebrauchte Computer vor, der Verkauf erfolgt über Vinted nach den Bedingungen der Plattform.",
      intro: "Diese Website stellt die gebrauchten Computer vor, die AventiPC zum Verkauf anbietet. Mit der Nutzung akzeptieren Sie die folgenden Bedingungen.",
      sections: [
        {
          heading: "Betreiber",
          paragraphs: ["Die Website wird betrieben von AventiPC, Via Alessandro Volta 12, 20121 Mailand (Milano), Italien, E-Mail info@aventipc.com."],
        },
        {
          heading: "Produktinformationen",
          paragraphs: [
            "Beschreibungen und echte Fotos beziehen sich auf die einzelnen angebotenen Geräte; die Modellbilder dienen der Veranschaulichung. Bei Abweichungen gilt das Inserat auf Vinted.",
          ],
        },
        {
          heading: "Kauf",
          paragraphs: [
            "Der Kaufvertrag kommt auf Vinted zustande und unterliegt den Bedingungen der Plattform, einschließlich Bezahlung, Versand und Käuferschutz.",
          ],
        },
        { heading: "Anwendbares Recht", paragraphs: ["Es gilt italienisches Recht."] },
      ],
    },
  },
  themes: {
    used: {
      keyword: "gebrauchte Laptops",
      label: "Gebrauchte Laptops",
      hub: {
        title: "Gebrauchte Laptops wie neu in Deutschland",
        h1: "Gebrauchte Laptops in Deutschland",
        metaDescription:
          "Gebrauchte Laptops wie neu: getestete Lenovo ThinkBook und Dell Latitude mit echten Fotos. Lieferung in ganz Deutschland, Kauf mit Käuferschutz auf Vinted.",
        intro: [
          "Unsere gebrauchten Laptops sind Business-Notebooks von Lenovo und Dell im Zustand wie neu, fast 100/100. Jeder Computer ist getestet, genau beschrieben und so fotografiert, wie er ist.",
          "Wählen Sie Ihre Stadt, um zu sehen, wie gebrauchte Laptops zu Ihnen nach Hause kommen, oder sehen Sie sich gleich die verfügbaren Computer an.",
        ],
        citiesTitle: "Gebrauchte Laptops in den größten Städten",
        productsTitle: "Verfügbare gebrauchte Laptops",
      },
      city: {
        title: (c) => `Gebrauchte Laptops in ${c.name}, wie neu`,
        h1: (c) => `Gebrauchte Laptops in ${c.name}`,
        metaDescription: (c) =>
          `Gebrauchte Laptops in ${c.name}${c.priceFrom ? ` ab ${c.priceFrom}` : ""}: Lenovo und Dell wie neu, getestet und mit echten Fotos. Kauf mit Käuferschutz auf Vinted.`,
        intro: (c) => [
          `Sie suchen gebrauchte Laptops in ${c.name}? AventiPC wählt Business-Notebooks von Lenovo und Dell im Zustand wie neu aus: Jeder Computer ist getestet, genau beschrieben und so fotografiert, wie er ist.`,
          c.pickup
            ? `In ${c.name} können Sie den Computer nach Terminvereinbarung auch vor Ort ansehen und abholen. Alternativ kaufen Sie ihn auf Vinted und erhalten ihn mit dem Versand der Plattform.`
            : `Der Computer kommt mit dem Versand von Vinted zu Ihnen nach ${c.name}: Sie bezahlen auf der Plattform und sind bis zur Zustellung durch den Käuferschutz abgesichert.`,
        ],
        productsTitle: (c) => `Gebrauchte Laptops in ${c.name} kaufen`,
        guideTitle: (c) => `Gebrauchte Laptops in ${c.name}: worauf Sie achten sollten`,
        guide: (c) => [
          "Ein gebrauchter Business-Laptop kostet weniger als ein neues Einsteigergerät und ist oft besser verarbeitet: robuste Gehäuse, bequeme Tastaturen und leicht austauschbare Komponenten. Die Serien Lenovo ThinkBook und Dell Latitude sind für den Einsatz im Unternehmen gebaut und halten viele Jahre.",
          "Achten Sie vor dem Kauf auf Prozessor, Arbeitsspeicher und Festplatte. Ein Intel Core i3 oder i5 mit 8 GB RAM und SSD reicht für Surfen, Office, Videocalls und Studium. Prüfen Sie auch Akku und Display: Auf unseren Produktseiten ist beides immer angegeben.",
          `Alle unsere Laptops sind in nahezu perfektem Zustand und werden mit echten Fotos des jeweiligen Geräts gezeigt. Wenn Sie in ${c.name} wohnen und eine Frage haben, schreiben Sie uns vor dem Kauf: Wir antworten und schicken Ihnen weitere Fotos.`,
        ],
        faqTitle: (c) => `Fragen zu gebrauchten Laptops in ${c.name}`,
        faq: (c) => [
          {
            question: `Liefern Sie gebrauchte Laptops nach ${c.name}?`,
            answer: `Ja. Sie kaufen den Computer auf Vinted und erhalten ihn in ${c.name} mit dem Versand, den Sie beim Bezahlen wählen, abgesichert durch den Käuferschutz.`,
          },
          {
            question: `Kann ich mir den Computer in ${c.name} vor Ort ansehen?`,
            answer: c.pickup
              ? `Ja, in ${c.name} können Sie ihn nach Terminvereinbarung ansehen und abholen. Schreiben Sie uns, um einen Termin zu vereinbaren.`
              : `Eine Abholung vor Ort ist nur in Mailand nach Terminvereinbarung möglich. In ${c.name} erhalten Sie den Computer mit dem Versand von Vinted; vor dem Kauf schicken wir Ihnen gern weitere Fotos.`,
          },
          {
            question: "In welchem Zustand sind die Geräte?",
            answer:
              "Sie sind im Zustand wie neu, fast 100/100. Wir testen sie vor dem Verkauf und geben auf der Produktseite den Zustand des Akkus und jedes Detail an.",
          },
        ],
        otherCitiesTitle: () => "Gebrauchte Laptops in weiteren Städten",
        otherThemesTitle: (c) => `Auch gesucht in ${c.name}`,
      },
    },
    cheap: {
      keyword: "günstige Laptops",
      label: "Günstige Laptops",
      hub: {
        title: "Günstige gebrauchte Laptops in Deutschland",
        h1: "Günstige Laptops in Deutschland",
        metaDescription:
          "Günstige Laptops, aber zuverlässig: gebrauchte Notebooks von Lenovo und Dell wie neu, mit echten Fotos. Lieferung in ganz Deutschland, Kauf über Vinted.",
        intro: [
          "Ein günstiger Laptop muss kein Kompromiss sein. Unsere günstigen Laptops sind gebrauchte Business-Notebooks im Zustand wie neu, die weniger kosten als ein neues Einsteigermodell und besser verarbeitet sind.",
          "Wählen Sie Ihre Stadt oder sehen Sie sich gleich die verfügbaren günstigen Laptops an, sortiert nach dem niedrigsten Preis.",
        ],
        citiesTitle: "Günstige Laptops in den größten Städten",
        productsTitle: "Verfügbare günstige Laptops",
      },
      city: {
        title: (c) => `Günstige Laptops in ${c.name}, gebraucht`,
        h1: (c) => `Günstige Laptops in ${c.name}`,
        metaDescription: (c) =>
          `Günstige Laptops in ${c.name}${c.priceFrom ? ` ab ${c.priceFrom}` : ""}: gebrauchte Notebooks von Lenovo und Dell wie neu, mit echten Fotos. Kauf mit Käuferschutz auf Vinted.`,
        intro: (c) => [
          `Sie suchen günstige Laptops in ${c.name}? Statt eines neuen Einsteiger-Notebooks bieten wir Ihnen gebrauchte Business-Laptops im Zustand wie neu an${c.priceFrom ? `, ab ${c.priceFrom}` : ""}.`,
          c.pickup
            ? `In ${c.name} können Sie den Laptop nach Terminvereinbarung persönlich abholen oder ihn auf Vinted kaufen und mit dem Versand der Plattform erhalten.`
            : `Sie kaufen die Laptops auf Vinted und erhalten sie in ${c.name} mit dem Versand, den Sie beim Bezahlen wählen, abgesichert durch den Käuferschutz.`,
        ],
        productsTitle: (c) => `Verfügbare günstige Laptops in ${c.name}`,
        guideTitle: (c) => `Günstige Laptops in ${c.name}: so kaufen Sie richtig`,
        guide: (c) => [
          "Viele neue Einsteiger-Laptops haben dünnes Plastik, langsame Festplatten und lichtschwache Displays. Ein gebrauchtes Business-Notebook bietet zum gleichen Preis meist eine SSD, eine bessere Tastatur und ein stabileres Gehäuse.",
          "Wenn Sie wenig ausgeben und trotzdem keinen Fehlkauf machen wollen, wählen Sie mindestens 8 GB RAM und eine SSD und prüfen Sie den Zustand des Akkus. Vermeiden Sie eine mechanische Festplatte als einziges Laufwerk: Sie bremst das ganze System aus.",
          `Unsere Laptops sind getestet, genau beschrieben und mit echten Fotos abgebildet. Wenn Sie in ${c.name} wohnen und einen Rat brauchen, welches Gerät zu Ihnen passt, schreiben Sie uns.`,
        ],
        faqTitle: (c) => `Fragen zu günstigen Laptops in ${c.name}`,
        faq: (c) => [
          {
            question: "Wie viel kostet der günstigste Laptop?",
            answer: c.priceFrom
              ? `Der günstigste Laptop kostet derzeit ${c.priceFrom}. Es gilt der Preis im Inserat auf Vinted.`
              : "Die Preise stehen auf jeder Produktseite und entsprechen den Inseraten auf Vinted.",
          },
          {
            question: `Liefern Sie günstige Laptops nach ${c.name}?`,
            answer: `Ja. Sie kaufen auf Vinted und erhalten den Laptop in ${c.name} mit dem Versand, den Sie beim Bezahlen wählen.`,
          },
          {
            question: "Ist ein günstiger gebrauchter Laptop zuverlässig?",
            answer:
              "Ja, wenn es ein Business-Modell in gutem Zustand ist. Unsere Geräte sind wie neu, vor dem Verkauf getestet und bis hin zu Akku und Display genau beschrieben.",
          },
        ],
        otherCitiesTitle: () => "Günstige Laptops in weiteren Städten",
        otherThemesTitle: (c) => `Auch gesucht in ${c.name}`,
      },
    },
    students: {
      keyword: "Laptops für Studenten",
      label: "Laptops für Studenten",
      hub: {
        title: "Laptops für Studenten, gebraucht wie neu",
        h1: "Laptops für Studenten in Deutschland",
        metaDescription:
          "Laptops für Studenten, zuverlässig und preiswert: gebrauchte Notebooks von Lenovo und Dell wie neu, mit SSD und echten Fotos. Sicher kaufen über Vinted.",
        intro: [
          "Laptops für Studenten müssen leicht genug für die Vorlesung sein, schnell starten und robust genug, um das ganze Studium durchzuhalten. Gebrauchte Business-Notebooks im Zustand wie neu verbinden diese Eigenschaften mit einem erschwinglichen Preis.",
          "Wählen Sie Ihre Universitätsstadt oder sehen Sie sich gleich die verfügbaren Laptops für Studenten an.",
        ],
        citiesTitle: "Laptops für Studenten in Universitätsstädten",
        productsTitle: "Verfügbare Laptops für Studenten",
      },
      city: {
        title: (c) => `Laptops für Studenten in ${c.name}`,
        h1: (c) => `Laptops für Studenten in ${c.name}`,
        metaDescription: (c) =>
          `Laptops für Studenten in ${c.name}${c.priceFrom ? ` ab ${c.priceFrom}` : ""}: gebrauchte Notebooks von Lenovo und Dell wie neu, mit SSD und echten Fotos. Kauf über Vinted.`,
        intro: (c) => [
          c.universities
            ? `Sie studieren in ${c.name}, etwa an Hochschulen wie ${c.universities}? Dann suchen Sie wahrscheinlich Laptops für Studenten, die zuverlässig genug für Mitschriften, Recherchen, Online-Vorlesungen und Online-Prüfungen sind und nicht so viel kosten wie ein neues Modell.`
            : `Sie studieren in ${c.name}? Dann suchen Sie wahrscheinlich Laptops für Studenten, die zuverlässig genug für Mitschriften, Recherchen, Online-Vorlesungen und Online-Prüfungen sind und nicht so viel kosten wie ein neues Modell.`,
          `Unsere gebrauchten Notebooks sind im Zustand wie neu, mit SSD und 8 GB RAM. Sie kaufen sie auf Vinted und erhalten sie in ${c.name} mit Käuferschutz.`,
        ],
        productsTitle: (c) => `Verfügbare Laptops für Studenten in ${c.name}`,
        guideTitle: () => "So wählen Sie den richtigen Laptop fürs Studium",
        guide: (c) => [
          "Im Studium zählt ein reaktionsschnelles System mehr als reine Rechenleistung: Mit SSD und 8 GB RAM startet der Laptop in wenigen Sekunden und bewältigt Browser, Office, PDFs und Plattformen für Online-Vorlesungen mühelos.",
          "Ein 14-Zoll-Display ist der beste Kompromiss zwischen Lesbarkeit und Gewicht. Achten Sie auch auf den Akku, auf die Webcam für Online-Prüfungen und auf eine bequeme Tastatur für Mitschriften und Abschlussarbeiten.",
          `Unsere Laptops für Studenten sind Business-Modelle, die für eine lange Nutzungsdauer gebaut sind. Wenn Sie in ${c.name} studieren und unsicher sind, welches Gerät passt, schreiben Sie uns: Wir helfen Ihnen bei der Auswahl passend zu Ihrem Studiengang.`,
        ],
        faqTitle: (c) => `Fragen zu Laptops für Studenten in ${c.name}`,
        faq: (c) => [
          {
            question: "Eignet sich ein gebrauchter Laptop für das Studium?",
            answer:
              "Ja. Ein Business-Notebook mit SSD und 8 GB RAM reicht für Studium, Office und Online-Vorlesungen mehr als aus. Unsere Geräte sind wie neu und vor dem Verkauf getestet.",
          },
          {
            question: `Liefern Sie Laptops für Studenten nach ${c.name}?`,
            answer: c.pickup
              ? `Ja. In ${c.name} können Sie den Laptop auch nach Terminvereinbarung persönlich abholen; ansonsten kaufen Sie ihn auf Vinted und erhalten ihn nach Hause geliefert.`
              : `Ja. Sie kaufen auf Vinted und erhalten den Laptop in ${c.name} mit dem Versand, den Sie beim Bezahlen wählen.`,
          },
          {
            question: "Welchen Laptop empfehlen Sie für das Studium?",
            answer:
              "Für die meisten Studiengänge empfehlen wir das Lenovo ThinkBook 14 IIL: leicht, mit SSD und Full-HD-Display. Das Dell Latitude Rugged eignet sich besonders für technische Studiengänge und Laborarbeit.",
          },
        ],
        otherCitiesTitle: () => "Laptops für Studenten in weiteren Städten",
        otherThemesTitle: (c) => `Auch gesucht in ${c.name}`,
      },
    },
  },
};

export default de;
