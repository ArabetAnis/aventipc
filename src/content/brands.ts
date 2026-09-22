import type { Brand } from "@/types/catalog";

/** Brand landing pages (/marchi/[slug]). */
export const brands: Brand[] = [
  {
    slug: "apple",
    name: "Apple",
    tagline: "MacBook, iMac e Mac mini con chip Apple silicon.",
    description: [
      "Apple progetta insieme hardware e sistema operativo, e si vede: i Mac con chip M sono tra i computer più efficienti in commercio, con autonomie che superano le 15 ore sui MacBook Air e prestazioni da workstation sui MacBook Pro e sui Mac Studio. macOS è stabile, sicuro e si integra con iPhone e iPad.",
      "Sono la scelta giusta per chi lavora con foto, video, musica e sviluppo software, per chi vuole un portatile silenzioso che dura anni e per chi è già nell'ecosistema Apple. Su AventiPC trovi MacBook Air, MacBook Pro, iMac e Mac mini con tastiera italiana, garanzia di 2 anni e fattura con partita IVA su richiesta.",
    ],
    seoTitle: "Apple MacBook, iMac e Mac mini | AventiPC",
    seoDescription:
      "MacBook Air, MacBook Pro, iMac e Mac mini con chip Apple silicon e tastiera italiana. Spedizione gratuita in 24–48 ore, garanzia 2 anni e fattura con P.IVA.",
  },
  {
    slug: "dell",
    name: "Dell",
    tagline: "Notebook e desktop affidabili per chi lavora, dalla serie XPS alle Precision.",
    description: [
      "Dell è uno dei marchi più diffusi nelle aziende italiane per un motivo semplice: i suoi computer sono costruiti per durare e sono facili da assistere. La gamma va dai portatili premium XPS, con schermi OLED e telaio in alluminio, ai Latitude e OptiPlex per l'ufficio, fino alle workstation Precision certificate per CAD e rendering.",
      "Scegli Dell se cerchi un computer da lavoro con una buona tastiera, molte porte, memoria e SSD spesso aggiornabili e una gamma coerente di accessori come dock e monitor. Le configurazioni in catalogo hanno Windows 11 in italiano preinstallato e garanzia di 2 anni.",
    ],
    seoTitle: "Dell XPS, Latitude e Precision | AventiPC",
    seoDescription:
      "Notebook e desktop Dell: XPS, Latitude, OptiPlex e workstation Precision con Windows 11 in italiano. Spedizione gratuita, garanzia 2 anni e assistenza.",
  },
  {
    slug: "hp",
    name: "HP",
    tagline: "Portatili e desktop per casa, ufficio e gaming, dalla serie Spectre alla OMEN.",
    description: [
      "HP copre praticamente ogni fascia di prezzo con una gamma ampia e ben ordinata: Spectre ed EliteBook per chi vuole un portatile premium da lavoro, Pavilion e ProBook per uso quotidiano e studio, OMEN e Victus per il gaming, la serie Z per le workstation professionali.",
      "I computer HP sono una buona scelta se cerchi un buon rapporto tra prezzo e dotazione, una rete di assistenza capillare in Italia e funzioni di sicurezza integrate come il lettore di impronte e la webcam con otturatore. Su AventiPC trovi le configurazioni più richieste con tastiera italiana e garanzia di 2 anni.",
    ],
    seoTitle: "HP notebook, desktop e OMEN | AventiPC",
    seoDescription:
      "Computer HP: Spectre, EliteBook, Pavilion, OMEN e workstation Z con tastiera italiana e Windows 11. Spedizione gratuita in Italia e garanzia 2 anni.",
  },
  {
    slug: "lenovo",
    name: "Lenovo",
    tagline: "ThinkPad, Yoga e Legion: tastiere eccellenti e affidabilità da ufficio.",
    description: [
      "Lenovo è il primo produttore di PC al mondo e i suoi ThinkPad restano il riferimento per chi scrive tutto il giorno: tastiere tra le migliori in commercio, telaio testato secondo standard militari e assistenza pensata per le aziende. La linea Yoga offre convertibili e ultraportatili eleganti, mentre Legion è dedicata al gaming con un'ottima dissipazione.",
      "Consigliamo Lenovo a professionisti, studenti e a chi cerca un portatile robusto da usare per molti anni. Molti modelli hanno RAM e SSD sostituibili e un buon supporto per Linux. Tutti i Lenovo in catalogo arrivano con tastiera italiana e garanzia di 2 anni.",
    ],
    seoTitle: "Lenovo ThinkPad, Yoga e Legion | AventiPC",
    seoDescription:
      "Notebook e desktop Lenovo: ThinkPad per il lavoro, Yoga per lo studio, Legion per il gaming. Tastiera italiana, spedizione gratuita e garanzia 2 anni.",
  },
  {
    slug: "asus",
    name: "ASUS",
    tagline: "Zenbook, ROG e ProArt: design curato e prestazioni per creativi e giocatori.",
    description: [
      "ASUS è noto per i portatili sottili della serie Zenbook, con schermi OLED e peso ridotto, per la gamma gaming ROG e TUF, tra le più complete sul mercato, e per la linea ProArt pensata per grafici e videomaker, con display calibrati in fabbrica.",
      "È il marchio giusto se cerchi un rapporto tra qualità e prezzo aggressivo, schermi di alta qualità e componenti recenti. Le schede madri e le schede video ASUS sono anche alla base di molte configurazioni AventiPC. Tutti i modelli in catalogo hanno tastiera italiana e garanzia di 2 anni.",
    ],
    seoTitle: "ASUS Zenbook, ROG e ProArt | AventiPC",
    seoDescription:
      "Notebook e PC ASUS: Zenbook con schermo OLED, ROG e TUF per il gaming, ProArt per i creativi. Tastiera italiana, spedizione gratuita e garanzia 2 anni.",
  },
  {
    slug: "aventipc",
    name: "AventiPC",
    tagline: "PC assemblati e collaudati a Milano, configurati sulle tue esigenze.",
    description: [
      "I computer a marchio AventiPC nascono nel nostro laboratorio di Milano. Scegliamo componenti di marca (schede madri ASUS e MSI, alimentatori certificati 80 Plus Gold, SSD Samsung e WD, schede video NVIDIA e AMD) e li assembliamo a mano con cablaggio ordinato e pasta termica di qualità. Ogni PC passa un collaudo di almeno 24 ore con stress test su processore, scheda video e memoria prima di essere spedito.",
      "Il risultato è un computer senza software superfluo, con Windows 11 in italiano attivato e aggiornato, facile da aggiornare negli anni e coperto da garanzia di 2 anni con assistenza diretta da chi lo ha costruito. Puoi partire da una configurazione in catalogo e modificarla, oppure scriverci per un preventivo su misura.",
    ],
    seoTitle: "PC su misura assemblati a Milano | AventiPC",
    seoDescription:
      "PC desktop, gaming e workstation a marchio AventiPC: componenti selezionati, assemblaggio a mano a Milano, collaudo di 24 ore e garanzia 2 anni.",
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
