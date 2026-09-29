import type { Dictionary } from "../types";

/**
 * Dutch (Belgium / Flanders), translated and adapted from it.ts.
 * SEO: each keyword page uses its keyword naturally about once every 100 words.
 */
const nl: Dictionary = {
  meta: {
    homeTitle: "AventiPC — Tweedehands laptops als nieuw, met echte foto's",
    homeDescription:
      "Tweedehands laptops en pc's als nieuw: geteste Lenovo ThinkBook en Dell Latitude, met echte foto's van het toestel. Veilig kopen via Vinted.",
    tagline: "Tweedehands pc's en laptops als nieuw, gefotografeerd en beschreven zoals ze echt zijn.",
    ogTagline: "Tweedehands pc's en laptops als nieuw, met echte foto's",
    ogBadge: "Als nieuw · Echte foto's · Kopen via Vinted",
  },
  countries: { IT: "Italië", FR: "Frankrijk", BE: "België", ES: "Spanje", DE: "Duitsland" },
  ui: {
    skipToContent: "Naar de inhoud",
    homeAria: "AventiPC, terug naar de homepage",
    mainMenu: "Hoofdmenu",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    language: "Taal",
    breadcrumb: "Kruimelpad",
    home: "Home",
    nav: { products: "Producten", howToBuy: "Hoe kopen", about: "Over ons", contact: "Contact" },
    footer: {
      products: "Producten",
      allProducts: "Alle producten",
      searches: "Vaak gezocht",
      info: "Informatie",
      faq: "Veelgestelde vragen",
      company: "Bedrijf",
      note: "Prijzen in euro. Verkoop via Vinted. De modelafbeeldingen zijn indicatief, de echte foto's tonen het exemplaar dat te koop staat.",
    },
    product: {
      likeNew: "Als nieuw",
      available: "Beschikbaar",
      sold: "Verkocht",
      comingSoon: "Binnenkort beschikbaar",
      buyOnVinted: "Kopen op Vinted",
      askAvailability: "Beschikbaarheid vragen",
      priceOnRequest: "Prijs op aanvraag",
      vintedNote: "Je betaalt op Vinted, met de Kopersbescherming van het platform.",
      photosNote: "De eerste afbeelding toont het model, de andere zijn echte foto's van het exemplaar dat te koop staat.",
      questions: "Vragen of meer foto's nodig?",
      writeUs: "Stuur ons een bericht",
      description: "Beschrijving",
      specs: "Specificaties",
      specsCaption: (name) => `Technische specificaties van de ${name}`,
      related: "Andere computers te koop",
      gallery: (name) => `Afbeeldingen van de ${name}`,
      showImage: (i, n) => `Afbeelding ${i} van ${n} tonen`,
      modelImage: "Afbeelding van het model",
      realPhoto: "Echte foto van het exemplaar",
    },
    catalog: {
      title: "Tweedehands pc's en laptops als nieuw te koop",
      h1: "Tweedehands pc's en laptops te koop",
      intro:
        "Tweedehands laptops en mini-pc's in als-nieuwstaat, een voor een getest en gefotografeerd. Elke computer koop je op Vinted, met Kopersbescherming.",
      metaDescription:
        "Alle tweedehands pc's en laptops van AventiPC: Lenovo ThinkBook, Dell Latitude Rugged en ThinkCentre als nieuw, met echte foto's. Kopen via Vinted.",
      count: (n) => (n === 1 ? "1 computer te koop" : `${n} computers te koop`),
    },
    brand: {
      count: (n) => (n === 1 ? "1 computer beschikbaar" : `${n} computers beschikbaar`),
      others: "Andere merken",
      empty: "Op dit moment zijn er geen computers van dit merk. Bekijk de andere producten die te koop staan.",
    },
    contact: {
      hours: "Maandag–vrijdag, 9.00–18.00 uur",
      form: {
        name: "Naam",
        email: "E-mail",
        message: "Bericht",
        submit: "Bericht versturen",
        sent: "Bericht verstuurd. We antwoorden binnen één werkdag.",
      },
    },
    legalUpdated: "Laatst bijgewerkt: 29 september 2026",
    notFound: {
      title: "Deze pagina bestaat niet.",
      text: "De link is misschien veranderd of de computer is al verkocht. Begin opnieuw bij de producten die te koop staan.",
      home: "Terug naar de homepage",
      products: "Bekijk de producten",
    },
    error: {
      title: "Er is iets misgegaan.",
      text: "De pagina is niet goed geladen. Probeer het zo meteen opnieuw.",
      retry: "Opnieuw proberen",
    },
  },
  home: {
    hero: {
      title: "Tweedehands pc's en laptops, als nieuw.",
      subtitle:
        "Professionele Lenovo- en Dell-toestellen in bijna perfecte staat, getest en gefotografeerd zoals ze zijn. Je koopt ze op Vinted, met Kopersbescherming.",
      primaryCta: "Bekijk de producten",
      secondaryCta: "Hoe kopen",
      imageAlt: "Lenovo ThinkBook 14 IIL, tweedehands laptop als nieuw",
    },
    reassurance: [
      { icon: "check", title: "Als nieuw", text: "Staat bijna 100/100: elke computer wordt getest voor hij te koop komt." },
      { icon: "camera", title: "Echte foto's", text: "Naast de modelafbeelding zie je foto's van het exemplaar dat je ontvangt." },
      { icon: "bag", title: "Veilig kopen via Vinted", text: "Je betaalt op Vinted en bent gedekt door de Kopersbescherming van het platform." },
      { icon: "headset", title: "Rechtstreeks contact", text: "Stuur ons een bericht voor extra foto's of technische details voor je koopt." },
    ],
    featuredTitle: "Nu te koop",
    featuredText: "Elke computer is een uniek exemplaar: zodra hij verkocht is, verdwijnt hij van de site.",
    whyTitle: "Waarom kopen bij AventiPC",
    searchesTitle: "Tweedehands pc's en laptops in jouw stad",
    searchesText: "Gidsen en aanbod voor wie een computer zoekt in Brussel, Antwerpen, Gent, Charleroi en Luik.",
    faqTitle: "Veelgestelde vragen",
    faqText: "Hoe je koopt, in welke staat de computers zijn en hoe je ons bereikt.",
  },
  faq: [
    {
      question: "Hoe koop ik een computer?",
      answer:
        "Open de productpagina en klik op ‘Kopen op Vinted’. Je komt op de advertentie van dezelfde computer: je betaalt en ontvangt de zending via Vinted, met de Kopersbescherming van het platform.",
    },
    {
      question: "Zijn de foto's van de computer die ik ontvang?",
      answer:
        "Ja. De eerste afbeelding toont het model op een witte achtergrond, alle andere zijn echte foto's van het exemplaar dat te koop staat, door ons gemaakt.",
    },
    {
      question: "In welke staat zijn de computers?",
      answer:
        "Ze zijn tweedehands maar in als-nieuwstaat, bijna 100/100. We zetten ze aan en testen ze voor de verkoop, en op de productpagina vermelden we de staat van de batterij en elk detail.",
    },
    {
      question: "Verzenden jullie naar België?",
      answer:
        "We verkopen via Vinted en verzenden vanuit Milaan. Bij de aankoop toont Vinted de verzendopties die voor jouw adres beschikbaar zijn, in België en in de andere landen waar het platform actief is.",
    },
    {
      question: "Is het besturingssysteem inbegrepen?",
      answer:
        "Dat hangt af van de computer en staat altijd in de specificaties. Sommige hebben Windows geïnstalleerd, andere worden zonder besturingssysteem verkocht.",
    },
    {
      question: "Kan ik de computer in het echt bekijken?",
      answer: "Ja, in Milaan op afspraak. Stuur ons een bericht of bel ons om een tijdstip af te spreken.",
    },
  ],
  products: {
    "lenovo-thinkbook-14-iil": {
      kind: "Laptop",
      title: "Tweedehands Lenovo ThinkBook 14 IIL, als nieuw",
      shortDescription:
        "14\" Full HD IPS-laptop met Intel Core i3-1005G1, 8 GB DDR4 en 256 GB NVMe-SSD. Tweedehands in als-nieuwstaat, met verlicht toetsenbord.",
      description: [
        "De Lenovo ThinkBook 14 IIL is de professionele laptop van Lenovo voor werk en studie: aluminium behuizing in Mineral Grey, verlicht toetsenbord en een webcam met privacyschuifje.",
        "Dit tweedehands exemplaar is in als-nieuwstaat. Er zit een Intel Core i3-1005G1 van de 10e generatie in, met 8 GB uitbreidbaar DDR4-geheugen en een M.2 NVMe-SSD van 256 GB, zodat hij snel opstart. Het 14-inch scherm is Full HD IPS en ontspiegeld.",
        "Geschikt om te surfen, voor Office, videogesprekken en afstandsonderwijs. Hij wordt verkocht met Windows 10 Pro, klaar voor de upgrade naar Windows 11. De echte foto's tonen het exemplaar dat te koop staat.",
      ],
      highlights: [
        "Als nieuw, getest",
        "Intel Core i3-1005G1 met 8 GB DDR4",
        "256 GB NVMe-SSD, snelle opstart",
        "14\" Full HD IPS-scherm, ontspiegeld",
        "Verlicht toetsenbord en webcam met privacyschuifje",
      ],
      specs: [
        { label: "Processor", value: "Intel Core i3-1005G1 (2 cores, 4 threads, tot 3,4 GHz)" },
        { label: "Geheugen", value: "8 GB DDR4, uitbreidbaar" },
        { label: "Opslag", value: "M.2 NVMe-SSD 256 GB" },
        { label: "Scherm", value: "14\" Full HD (1920×1080) IPS, ontspiegeld" },
        { label: "Grafisch", value: "Intel UHD Graphics" },
        { label: "Besturingssysteem", value: "Windows 10 Pro, compatibel met Windows 11" },
        { label: "Toetsenbord", value: "Met achtergrondverlichting" },
        { label: "Webcam", value: "Ingebouwd, met privacyschuifje" },
        { label: "Behuizing", value: "Aluminium, kleur Mineral Grey" },
        { label: "Batterij", value: "In goede staat" },
        { label: "Staat", value: "Tweedehands, als nieuw" },
      ],
      imageAlts: [
        "Lenovo ThinkBook 14 IIL, modelafbeelding op witte achtergrond",
        "Tweedehands Lenovo ThinkBook 14 IIL opengeklapt, vooraanzicht met toetsenbord",
        "Lenovo ThinkBook 14 IIL dichtgeklapt, grijze aluminium klep met ThinkBook-logo",
        "Lenovo ThinkBook 14 IIL, linkerkant met USB-, HDMI- en USB-C-poorten",
        "Lenovo ThinkBook 14 IIL, rechterkant met kaartlezer en USB-poorten",
        "Label onderaan de Lenovo ThinkBook 14-IIL met model 20SL",
      ],
    },
    "dell-latitude-14-rugged-5414": {
      kind: "Rugged laptop",
      title: "Tweedehands Dell Latitude 5414 Rugged, als nieuw",
      shortDescription:
        "Rugged 14\" Full HD-laptop met touchscreen, Intel Core i5-6300U, 8 GB en 256 GB SSD. Seriële RS232-poorten, verlicht toetsenbord, als nieuw.",
      description: [
        "De Dell Latitude 5414 Rugged is een verstevigde laptop om buiten het kantoor mee te werken: het chassis is bestand tegen schokken, trillingen, stof en vocht, de hoeken zijn beschermd en er zit een handvat in.",
        "Dit tweedehands exemplaar is in als-nieuwstaat, getest en werkt perfect. Er zit een Intel Core i5-6300U in, met 8 GB geheugen, een SSD van 256 GB en een 14-inch Full HD-touchscreen (1920×1080). Het verlichte toetsenbord blijft leesbaar in het donker of in een bedrijfswagen.",
        "Via de ingebouwde seriële RS232-poorten (DB9) sluit je diagnoseapparatuur aan, naast Ethernet RJ-45, USB 3.0, HDMI en VGA. Ideaal voor werkplaatsen, werven, magazijnen en technici op het terrein. De batterij is in uitstekende staat.",
      ],
      highlights: [
        "Als nieuw, 100% getest",
        "Rugged chassis, bestand tegen schokken en stof",
        "14\" Full HD-touchscreen",
        "Ingebouwde seriële RS232-poorten",
        "Verlicht toetsenbord, uitstekende batterij",
      ],
      specs: [
        { label: "Processor", value: "Intel Core i5-6300U" },
        { label: "Geheugen", value: "8 GB" },
        { label: "Opslag", value: "SSD 256 GB" },
        { label: "Scherm", value: "14\" Full HD (1920×1080), touchscreen" },
        { label: "Toetsenbord", value: "Met achtergrondverlichting" },
        { label: "Poorten", value: "Serieel RS232 (DB9), Ethernet RJ-45, USB 3.0, HDMI, VGA" },
        { label: "Behuizing", value: "Rugged: bestand tegen schokken, trillingen, stof en vocht, ingebouwd handvat" },
        { label: "Batterij", value: "Uitstekend" },
        { label: "Staat", value: "Tweedehands, als nieuw, getest en 100% werkend" },
      ],
      imageAlts: [
        "Dell Latitude 14 Rugged, modelafbeelding op witte achtergrond",
        "Tweedehands Dell Latitude 5414 Rugged opengeklapt op een houten tafel",
        "Dell Latitude 5414 Rugged aan, met rood verlicht toetsenbord",
        "Dell Latitude 5414 Rugged dichtgeklapt, verstevigde hoeken en handvat",
        "Verlicht toetsenbord van de Dell Latitude 5414 Rugged",
        "Dell Latitude 5414 Rugged, zijkant met poorten achter beschermklepjes",
      ],
    },
    "lenovo-thinkcentre-m710q-tiny": {
      kind: "Mini-pc",
      title: "Tweedehands Lenovo ThinkCentre M710q Tiny",
      shortDescription:
        "Mini-pc met Intel Core i5-6500T, 4 GB DDR4 met een vrij slot, 500 GB HDD en een vrij NVMe-slot. Tweedehands als nieuw, zonder besturingssysteem.",
      description: [
        "De Lenovo ThinkCentre M710q Tiny is een mini-pc voor kantoorgebruik, zo groot als een boek: je monteert hem achter de monitor, hij verbruikt weinig en is stil.",
        "Dit tweedehands exemplaar is in als-nieuwstaat. Er zit een quad-core Intel Core i5-6500T in, met 4 GB DDR4-geheugen, een vrij slot om geheugen bij te plaatsen en een harde schijf van 500 GB. Er is ook een vrij M.2 NVMe-slot voor een snelle SSD.",
        "Hij wordt verkocht zonder besturingssysteem en is een goede basis voor een kantoor-pc, een mediacenter of een kleine thuisserver. De echte foto's tonen het exemplaar dat te koop staat.",
      ],
      highlights: [
        "Als nieuw",
        "Zuinige Intel Core i5-6500T",
        "Vrij RAM-slot en vrij NVMe-slot om uit te breiden",
        "Tiny-formaat, te monteren achter de monitor",
      ],
      specs: [
        { label: "Processor", value: "Intel Core i5-6500T (4 cores)" },
        { label: "Geheugen", value: "4 GB DDR4, een vrij slot" },
        { label: "Opslag", value: "HDD 500 GB + vrij M.2 NVMe-slot" },
        { label: "Grafisch", value: "Intel HD Graphics 530" },
        { label: "Besturingssysteem", value: "Niet inbegrepen" },
        { label: "Formaat", value: "Tiny mini-pc, ongeveer 1 liter" },
        { label: "Staat", value: "Tweedehands, als nieuw" },
      ],
      imageAlts: [
        "Lenovo ThinkCentre M710 Tiny, modelafbeelding: voor- en achterkant op witte achtergrond",
        "Tweedehands Lenovo ThinkCentre M710q Tiny in de hand, voorpaneel",
        "Twee Lenovo ThinkCentre Tiny op elkaar gestapeld, vooraanzicht",
        "Voorpaneel van de Lenovo ThinkCentre M710q Tiny met USB- en audiopoorten",
        "Achterkant van de Lenovo ThinkCentre M710q Tiny met USB-, Ethernet-, VGA- en DisplayPort-poorten",
      ],
    },
  },
  brands: {
    lenovo: {
      title: "Tweedehands Lenovo ThinkBook en ThinkCentre",
      metaDescription:
        "Tweedehands laptops en mini-pc's van Lenovo als nieuw, met echte foto's en gecontroleerde specificaties. Veilig kopen via Vinted.",
      tagline: "Tweedehands ThinkBook en ThinkCentre, als nieuw.",
      whyTitle: "Waarom een tweedehands Lenovo",
      description: [
        "De professionele lijnen van Lenovo zijn gemaakt voor kantoorgebruik: comfortabele toetsenborden, stevige behuizingen en onderdelen die je makkelijk vervangt. Daardoor gaan ze jaren mee en behoren ze tot de voordeligste tweedehands computers.",
        "Elke Lenovo die te koop staat, fotograferen we zelf en beschrijven we met zijn echte specificaties, inclusief de vrije slots om geheugen of een SSD toe te voegen.",
      ],
    },
    dell: {
      title: "Tweedehands Dell Latitude Rugged, als nieuw",
      metaDescription:
        "Tweedehands Dell Latitude-laptops als nieuw, ook rugged, met echte foto's en gecontroleerde specificaties. Veilig kopen via Vinted.",
      tagline: "Tweedehands Latitude, ook in rugged uitvoering.",
      whyTitle: "Waarom een tweedehands Dell Latitude",
      description: [
        "Dell Latitude-laptops zijn professionele toestellen die gebouwd zijn om lang mee te gaan. De rugged versie heeft daarbovenop een verstevigd chassis, een handvat en afgeschermde poorten, voor wie op de werf, in de werkplaats of buiten werkt.",
        "Elke Dell die te koop staat, fotograferen we zelf en beschrijven we met zijn echte specificaties: processor, geheugen, opslag, scherm en staat van de batterij.",
      ],
    },
  },
  pages: {
    about: {
      title: "Over ons",
      metaTitle: "Over ons: tweedehands pc's als nieuw uit Milaan",
      metaDescription:
        "AventiPC is een kleine winkel in tweedehands pc's in Milaan: we kiezen professionele computers als nieuw, testen ze en fotograferen ze.",
      intro:
        "AventiPC is een kleine winkel in tweedehands computers in Milaan. We kiezen professionele laptops en mini-pc's in als-nieuwstaat, testen ze en zetten ze te koop met echte foto's en een eerlijke beschrijving.",
      sections: [
        {
          heading: "Wat we doen",
          paragraphs: [
            "We selecteren computers die gebouwd zijn om lang mee te gaan, zoals de Lenovo ThinkBook en ThinkCentre en de Dell Latitude. Elk exemplaar wordt aangezet, getest en gefotografeerd voor het te koop komt.",
          ],
        },
        {
          heading: "Waarom we via Vinted verkopen",
          paragraphs: [
            "We zijn een klein bedrijf. Via Vinted betaal je met middelen die je al kent en heb je de Kopersbescherming van het platform.",
          ],
        },
        {
          heading: "Persoonlijk contact",
          paragraphs: [
            "Twijfel je over een computer, stuur ons dan een bericht: we antwoorden, sturen je extra foto's en als je in Milaan bent, kun je hem op afspraak komen bekijken.",
          ],
        },
      ],
    },
    howToBuy: {
      title: "Hoe kopen",
      metaTitle: "Veilig kopen via Vinted, zo werkt het",
      metaDescription:
        "Computers van AventiPC koop je op Vinted: betaling, verzending en Kopersbescherming worden door het platform geregeld.",
      intro: "Op deze site vind je foto's en specificaties van de computers die te koop staan. De eigenlijke aankoop gebeurt op Vinted.",
      sections: [
        {
          heading: "Kies je computer",
          paragraphs: ["Bekijk de echte foto's en de specificaties. Heb je meer informatie nodig, stuur ons dan een bericht voor je koopt."],
        },
        {
          heading: "Koop op Vinted",
          paragraphs: [
            "Klik op de productpagina op ‘Kopen op Vinted’: je komt op de advertentie van dezelfde computer. Je betaalt met de betaalmethodes van Vinted en bent gedekt door de Kopersbescherming.",
          ],
        },
        {
          heading: "Verzending en afhalen",
          paragraphs: [
            "De verzending kies je op Vinted bij het betalen. Ben je in Milaan, dan kun je de computer ook op afspraak zelf afhalen.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      metaTitle: "Contact",
      metaDescription:
        "Mail naar info@aventipc.com of bel +39 02 1234 5678 van maandag tot vrijdag, 9–18 uur, met vragen over de computers die te koop staan.",
      intro: "Voor vragen over een computer, extra foto's of een afspraak om hem te komen bekijken, kun je ons mailen of bellen.",
      sections: [
        { heading: "E-mail", paragraphs: ["Mail naar info@aventipc.com. We antwoorden meestal binnen één werkdag."] },
        { heading: "Telefoon", paragraphs: ["Bel +39 02 1234 5678 van maandag tot vrijdag, van 9 tot 18 uur."] },
        { heading: "Adres", paragraphs: ["Via Alessandro Volta 12, 20121 Milaan (Milano). Bezoek alleen op afspraak."] },
      ],
    },
    privacy: {
      title: "Privacy",
      metaTitle: "Privacyverklaring",
      metaDescription:
        "Welke persoonsgegevens AventiPC verzamelt als je de site bezoekt of contact opneemt, waarom, en welke rechten je hebt volgens de AVG (GDPR).",
      intro:
        "Deze verklaring legt uit welke persoonsgegevens we verwerken als je de site bezoekt of ons schrijft, en welke rechten je hebt volgens Verordening (EU) 2016/679 (AVG, ook GDPR genoemd).",
      sections: [
        {
          heading: "Verwerkingsverantwoordelijke",
          paragraphs: [
            "Verwerkingsverantwoordelijke is AventiPC, Via Alessandro Volta 12, 20121 Milaan (Milano). Voor elke vraag over privacy mail je naar info@aventipc.com.",
          ],
        },
        {
          heading: "Welke gegevens we verzamelen",
          paragraphs: [
            "Als je ons schrijft via het contactformulier of per e-mail, verwerken we je naam, je e-mailadres en de inhoud van je bericht, alleen om je te antwoorden.",
            "Aankopen gebeuren op Vinted: betalings- en verzendgegevens worden door Vinted verwerkt, volgens het eigen privacybeleid van Vinted.",
          ],
        },
        { heading: "Cookies", paragraphs: ["De site gebruikt geen profileringscookies en geen trackers voor advertenties."] },
        {
          heading: "Hoe lang we gegevens bewaren",
          paragraphs: ["We bewaren berichten zo lang als nodig is om te antwoorden en maximaal 24 maanden, daarna wissen we ze."],
        },
        {
          heading: "Je rechten",
          paragraphs: [
            "Je kunt inzage, correctie of verwijdering van je gegevens vragen via info@aventipc.com. Je kunt ook een klacht indienen bij de Italiaanse toezichthouder (Garante per la protezione dei dati personali) of bij de Belgische Gegevensbeschermingsautoriteit (GBA).",
          ],
        },
      ],
    },
    terms: {
      title: "Algemene voorwaarden",
      metaTitle: "Algemene voorwaarden",
      metaDescription:
        "Gebruiksvoorwaarden van de site van AventiPC: de site toont tweedehands computers, de verkoop gebeurt op Vinted volgens de voorwaarden van het platform.",
      intro: "Deze site toont de tweedehands computers die AventiPC te koop aanbiedt. Door de site te gebruiken, aanvaard je de volgende voorwaarden.",
      sections: [
        { heading: "Wie we zijn", paragraphs: ["De site wordt beheerd door AventiPC, Via Alessandro Volta 12, 20121 Milaan (Milano), e-mail info@aventipc.com."] },
        {
          heading: "Productinformatie",
          paragraphs: [
            "Beschrijvingen en echte foto's gaan over de afzonderlijke exemplaren die te koop staan; de modelafbeeldingen zijn indicatief. Bij verschillen geldt de advertentie op Vinted.",
          ],
        },
        {
          heading: "Aankoop",
          paragraphs: [
            "De koopovereenkomst komt tot stand op Vinted en volgt de voorwaarden van het platform, inclusief betaling, verzending en Kopersbescherming.",
          ],
        },
        { heading: "Toepasselijk recht", paragraphs: ["Het Italiaanse recht is van toepassing."] },
      ],
    },
  },
  themes: {
    used: {
      keyword: "tweedehands laptops",
      label: "Tweedehands laptops",
      hub: {
        title: "Tweedehands laptops als nieuw in België",
        h1: "Tweedehands laptops in België",
        metaDescription:
          "Tweedehands laptops als nieuw: geteste Lenovo ThinkBook en Dell Latitude, met echte foto's. Levering in heel België, veilig kopen via Vinted.",
        intro: [
          "Onze tweedehands laptops zijn professionele toestellen van Lenovo en Dell in als-nieuwstaat, bijna 100/100. Elke computer is getest, uitgebreid beschreven en gefotografeerd zoals hij is.",
          "Kies je stad om te zien hoe onze tweedehands laptops bij jou thuis geraken, of bekijk meteen de computers die beschikbaar zijn.",
        ],
        citiesTitle: "Tweedehands laptops in de grootste steden",
        productsTitle: "Beschikbare tweedehands laptops",
      },
      city: {
        title: (c) => `Tweedehands laptops in ${c.name}, als nieuw`,
        h1: (c) => `Tweedehands laptops in ${c.name}`,
        metaDescription: (c) =>
          `Tweedehands laptops in ${c.name}${c.priceFrom ? ` vanaf ${c.priceFrom}` : ""}: Lenovo en Dell als nieuw, getest en met echte foto's. Veilig kopen via Vinted.`,
        intro: (c) => [
          `Zoek je tweedehands laptops in ${c.name}? AventiPC selecteert professionele laptops van Lenovo en Dell in als-nieuwstaat: elke computer is getest, uitgebreid beschreven en gefotografeerd zoals hij is.`,
          c.pickup
            ? `In ${c.name} kun je de computer ook op afspraak komen bekijken en afhalen. Je kunt hem ook op Vinted kopen en laten verzenden via het platform.`
            : `De computer komt in ${c.name} aan met de verzending van Vinted: je betaalt op het platform en bent tot de levering gedekt door de Kopersbescherming.`,
        ],
        productsTitle: (c) => `Tweedehands laptops te koop in ${c.name}`,
        guideTitle: (c) => `Zo kies je een tweedehands laptop in ${c.name}`,
        guide: (c) => [
          "Een gebruikte laptop uit het professionele gamma kost minder dan een goedkope nieuwe en is vaak beter gebouwd: een stevige behuizing, een comfortabel toetsenbord en onderdelen die je makkelijk vervangt. De Lenovo ThinkBook en Dell Latitude zijn ontworpen voor zakelijk gebruik en gaan jaren mee.",
          "Kijk voor je koopt naar processor, geheugen en opslag. Een Intel Core i3 of i5 met 8 GB RAM en een SSD volstaat om te surfen, voor Office, videogesprekken en studie. Controleer ook batterij en scherm: op onze productpagina's staan ze altijd vermeld.",
          `Al onze tweedehands laptops zijn in bijna perfecte staat en hebben echte foto's van het exemplaar dat te koop staat. Woon je in ${c.name} en twijfel je nog, stuur ons dan een bericht voor je koopt: we antwoorden en sturen je extra foto's.`,
        ],
        faqTitle: (c) => `Vragen over tweedehands laptops in ${c.name}`,
        faq: (c) => [
          {
            question: `Leveren jullie tweedehands laptops in ${c.name}?`,
            answer: `Ja. Je koopt de computer op Vinted en ontvangt hem in ${c.name} met de verzending die je bij het betalen kiest, gedekt door de Kopersbescherming.`,
          },
          {
            question: `Kan ik de computer in ${c.name} in het echt bekijken?`,
            answer: c.pickup
              ? `Ja, in ${c.name} kun je hem op afspraak bekijken en afhalen. Stuur ons een bericht om een tijdstip af te spreken.`
              : `Afhalen kan alleen in Milaan, op afspraak. In ${c.name} ontvang je de computer via de verzending van Vinted; voor je koopt, kunnen we je extra foto's sturen.`,
          },
          {
            question: "In welke staat zijn jullie laptops?",
            answer:
              "Ze zijn in als-nieuwstaat, bijna 100/100. We testen ze voor de verkoop en op de productpagina vermelden we de staat van de batterij en elk detail.",
          },
        ],
        otherCitiesTitle: () => "Tweedehands laptops in andere steden",
        otherThemesTitle: (c) => `Andere zoekopdrachten in ${c.name}`,
      },
    },
    cheap: {
      keyword: "goedkope laptops",
      label: "Goedkope laptops",
      hub: {
        title: "Goedkope laptops in België, als nieuw",
        h1: "Goedkope laptops in België",
        metaDescription:
          "Goedkope laptops die je kunt vertrouwen: tweedehands Lenovo en Dell als nieuw, met echte foto's. Levering in heel België, veilig kopen via Vinted.",
        intro: [
          "Een goedkope laptop hoeft geen compromis te zijn. Onze goedkope laptops zijn tweedehands professionele toestellen in als-nieuwstaat, die minder kosten dan een nieuw instapmodel en beter gebouwd zijn.",
          "Kies je stad of bekijk meteen de goedkope laptops die beschikbaar zijn, van de laagste naar de hoogste prijs.",
        ],
        citiesTitle: "Goedkope laptops in de grootste steden",
        productsTitle: "Beschikbare goedkope laptops",
      },
      city: {
        title: (c) => `Goedkope laptops in ${c.name}, tweedehands`,
        h1: (c) => `Goedkope laptops in ${c.name}`,
        metaDescription: (c) =>
          `Goedkope laptops in ${c.name}${c.priceFrom ? ` vanaf ${c.priceFrom}` : ""}: tweedehands Lenovo en Dell als nieuw, met echte foto's. Veilig kopen via Vinted.`,
        intro: (c) => [
          `Zoek je goedkope laptops in ${c.name}? In plaats van een nieuw instapmodel bieden we je tweedehands professionele laptops in als-nieuwstaat aan${c.priceFrom ? `, vanaf ${c.priceFrom}` : ""}.`,
          c.pickup
            ? `In ${c.name} kun je de laptop op afspraak zelf afhalen, of je koopt hem op Vinted en laat hem verzenden via het platform.`
            : `Je koopt ze op Vinted en ontvangt ze in ${c.name} met de verzending die je bij het betalen kiest, gedekt door de Kopersbescherming.`,
        ],
        productsTitle: (c) => `Goedkope laptops beschikbaar in ${c.name}`,
        guideTitle: (c) => `Zo koop je een goedkope laptop in ${c.name}`,
        guide: (c) => [
          "Veel nieuwe instapmodellen hebben dun plastic, trage opslag en weinig heldere schermen. Een tweedehands professionele laptop biedt voor dezelfde prijs meestal een SSD, een beter toetsenbord en een stevigere behuizing.",
          "Wil je weinig uitgeven zonder je te vergissen, kies dan minstens 8 GB RAM en een SSD, en controleer de staat van de batterij. Vermijd een harde schijf als enige opslag: die vertraagt het hele systeem.",
          `Onze goedkope laptops zijn getest, nauwkeurig beschreven en getoond met echte foto's. Woon je in ${c.name} en wil je advies over welke je best kiest, stuur ons dan een bericht.`,
        ],
        faqTitle: (c) => `Vragen over goedkope laptops in ${c.name}`,
        faq: (c) => [
          {
            question: "Hoeveel kost de goedkoopste laptop?",
            answer: c.priceFrom
              ? `Op dit moment kost de goedkoopste laptop ${c.priceFrom}. Dat is de prijs van de advertentie op Vinted.`
              : "De prijzen staan op elke productpagina en komen overeen met de advertenties op Vinted.",
          },
          {
            question: `Leveren jullie goedkope laptops in ${c.name}?`,
            answer: `Ja. Je koopt op Vinted en ontvangt de laptop in ${c.name} met de verzending die je bij het betalen kiest.`,
          },
          {
            question: "Is een goedkope tweedehands laptop betrouwbaar?",
            answer:
              "Ja, als het een professioneel model in goede staat is. De onze zijn als nieuw, getest voor de verkoop en beschreven tot in de details van batterij en scherm.",
          },
        ],
        otherCitiesTitle: () => "Goedkope laptops in andere steden",
        otherThemesTitle: (c) => `Andere zoekopdrachten in ${c.name}`,
      },
    },
    students: {
      keyword: "laptops voor studenten",
      label: "Laptops voor studenten",
      hub: {
        title: "Laptops voor studenten, tweedehands als nieuw",
        h1: "Laptops voor studenten in België",
        metaDescription:
          "Betrouwbare en betaalbare laptops voor studenten: tweedehands Lenovo en Dell als nieuw, met SSD en echte foto's. Veilig kopen via Vinted.",
        intro: [
          "Laptops voor studenten moeten licht genoeg zijn om mee naar de les te nemen, snel opstarten en stevig genoeg zijn om al je studiejaren mee te gaan. Tweedehands professionele laptops in als-nieuwstaat combineren dat met een betaalbare prijs.",
          "Kies je studentenstad of bekijk meteen de laptops voor studenten die beschikbaar zijn.",
        ],
        citiesTitle: "Laptops voor studenten in de studentensteden",
        productsTitle: "Beschikbare laptops voor studenten",
      },
      city: {
        title: (c) => `Laptops voor studenten in ${c.name}`,
        h1: (c) => `Laptops voor studenten in ${c.name}`,
        metaDescription: (c) =>
          `Laptops voor studenten in ${c.name}${c.priceFrom ? ` vanaf ${c.priceFrom}` : ""}: tweedehands Lenovo en Dell als nieuw, met SSD en echte foto's. Kopen via Vinted.`,
        intro: (c) => [
          c.universities
            ? `Studeer je in ${c.name}, bijvoorbeeld aan ${c.universities}? Onze laptops voor studenten zijn betrouwbaar voor notities, opzoekwerk, online lessen en examens, zonder dat je de prijs van een nieuw model betaalt.`
            : `Studeer je in ${c.name}? Onze laptops voor studenten zijn betrouwbaar voor notities, opzoekwerk, online lessen en examens, zonder dat je de prijs van een nieuw model betaalt.`,
          `Onze tweedehands laptops zijn in als-nieuwstaat, met SSD en 8 GB RAM. Je koopt ze op Vinted en ontvangt ze in ${c.name} met Kopersbescherming.`,
        ],
        productsTitle: (c) => `Laptops voor studenten beschikbaar in ${c.name}`,
        guideTitle: () => "Zo kies je een laptop voor hogeschool of universiteit",
        guide: (c) => [
          "Voor hogeschool of universiteit is een vlotte laptop belangrijker dan pure rekenkracht: met een SSD en 8 GB RAM start hij op in enkele seconden en draaien browser, Office, pdf's en platforms voor online lessen zonder moeite.",
          "Een 14-inch scherm is het beste compromis tussen leesbaarheid en gewicht. Let ook op de batterij, de webcam voor online examens en een comfortabel toetsenbord voor je notities en je thesis.",
          `Onze laptops voor studenten zijn professionele modellen die jaren meegaan. Studeer je in ${c.name} en weet je niet welke je moet kiezen, stuur ons dan een bericht: we helpen je kiezen op basis van je opleiding.`,
        ],
        faqTitle: (c) => `Vragen over laptops voor studenten in ${c.name}`,
        faq: (c) => [
          {
            question: "Is een tweedehands laptop goed genoeg voor je studies?",
            answer:
              "Ja. Een professionele laptop met SSD en 8 GB RAM is ruim voldoende om te studeren, voor Office en online lessen. De onze zijn als nieuw en getest voor de verkoop.",
          },
          {
            question: `Leveren jullie laptops voor studenten in ${c.name}?`,
            answer: c.pickup
              ? `Ja. In ${c.name} kun je hem ook op afspraak zelf afhalen; anders koop je hem op Vinted en ontvang je hem thuis.`
              : `Ja. Je koopt op Vinted en ontvangt de laptop in ${c.name} met de verzending die je bij het betalen kiest.`,
          },
          {
            question: "Welke laptop raden jullie aan als je studeert?",
            answer:
              "Voor de meeste richtingen raden we de Lenovo ThinkBook 14 IIL aan: licht, met SSD en Full HD-scherm. De Dell Latitude Rugged is ideaal voor technische opleidingen en labo's.",
          },
        ],
        otherCitiesTitle: () => "Laptops voor studenten in andere steden",
        otherThemesTitle: (c) => `Andere zoekopdrachten in ${c.name}`,
      },
    },
  },
};

export default nl;
