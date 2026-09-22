import type { Category } from "@/types/catalog";

/**
 * Category landing pages. Image width/height/source are filled by the
 * image-download step; keep them at 0 / "" here.
 */
export const categories: Category[] = [
  {
    slug: "notebook",
    name: "Notebook",
    tagline: "Portatili per studio, lavoro e creatività, da 13 a 16 pollici.",
    description: [
      "Un notebook è la scelta giusta se lavori in più posti, segui le lezioni all'università o vuoi un solo computer per casa e ufficio. I modelli da 13 e 14 pollici pesano poco più di un chilo e reggono una giornata intera di autonomia; i 15 e 16 pollici offrono più schermo e più potenza per fogli di calcolo pesanti, montaggio video e sviluppo software.",
      "Prima di scegliere guarda tre cose: la memoria RAM (16 GB è il minimo consigliato, 32 GB se lavori con macchine virtuali o file grandi), lo spazio SSD (512 GB bastano per l'uso quotidiano, 1 TB se archivi foto e video) e la qualità dello schermo, che conta più della sigla del processore per chi ci passa otto ore al giorno. Tutti i notebook in catalogo hanno tastiera italiana, Wi-Fi 6 o superiore e almeno una porta USB-C con ricarica.",
    ],
    seoTitle: "Notebook e portatili | AventiPC",
    seoDescription:
      "Notebook Apple, Dell, HP, Lenovo e ASUS con tastiera italiana. Spedizione gratuita in 24–48 ore, garanzia 2 anni e assistenza in italiano.",
    image: {
      src: "/images/lifestyle/category-notebook.jpg",
      alt: "Notebook aperto su una scrivania in legno accanto a una tazza di caffè",
      width: 2400,
      height: 1600,
      source: "https://unsplash.com/photos/Hin-rzhOdWs",
    },
  },
  {
    slug: "desktop",
    name: "PC desktop",
    tagline: "Computer fissi per casa e ufficio, silenziosi e facili da aggiornare.",
    description: [
      "Un PC desktop dà più prestazioni a parità di prezzo rispetto a un portatile e si aggiorna pezzo per pezzo negli anni: più RAM, un SSD più grande, una scheda video nuova. È la scelta naturale per la postazione fissa di casa, per l'ufficio, per chi lavora con due monitor e per chi vuole un computer che duri.",
      "I formati vanno dal tower classico, con spazio per le espansioni, ai modelli compatti che stanno sotto la scrivania. Per ufficio e navigazione basta un processore di fascia media con 16 GB di RAM e SSD da 512 GB; per fotoritocco e montaggio leggero conviene salire a 32 GB e a una scheda video dedicata. Verifica sempre le porte disponibili (USB-C, HDMI, DisplayPort) e la rumorosità dichiarata se il PC starà in una stanza silenziosa. I desktop a marchio AventiPC sono assemblati e collaudati a Milano.",
    ],
    seoTitle: "PC desktop e computer fissi | AventiPC",
    seoDescription:
      "PC desktop per casa e ufficio, dai modelli compatti ai tower espandibili. Assemblati in Italia, spedizione gratuita, garanzia 2 anni e assistenza in italiano.",
    image: {
      src: "/images/lifestyle/category-desktop.jpg",
      alt: "PC desktop bianco su una scrivania con monitor, tastiera e mouse",
      width: 2400,
      height: 1607,
      source: "https://unsplash.com/photos/ntX2TjKrzLc",
    },
  },
  {
    slug: "gaming",
    name: "PC gaming",
    tagline: "Desktop e portatili con scheda video dedicata per giocare in Full HD, 1440p e 4K.",
    description: [
      "Per giocare bene contano soprattutto due componenti: la scheda video, che decide risoluzione e frame rate, e il processore, che evita colli di bottiglia nei titoli più esigenti. Una GeForce RTX 5060 o equivalente basta per il Full HD a 60 fps e oltre; per il 1440p ad alto refresh o per il 4K servono RTX 5070 Ti, 5080 o superiori.",
      "Oltre a scheda video e processore guarda la RAM (32 GB è oggi lo standard per i giochi recenti), un SSD NVMe da almeno 1 TB perché molti titoli superano i 100 GB, e un alimentatore con margine per gli aggiornamenti futuri. Se preferisci un portatile, cerca uno schermo da 144 Hz o più e controlla peso e autonomia. I PC gaming AventiPC sono configurabili, assemblati a Milano e sottoposti a stress test prima della spedizione.",
    ],
    seoTitle: "PC gaming fissi e portatili | AventiPC",
    seoDescription:
      "PC gaming con schede video GeForce RTX, assemblati e collaudati in Italia. Configurazioni per Full HD, 1440p e 4K, spedizione gratuita e garanzia 2 anni.",
    image: {
      src: "/images/lifestyle/category-gaming.jpg",
      alt: "PC gaming con illuminazione a LED accanto a un monitor da gioco",
      width: 2400,
      height: 3665,
      source: "https://unsplash.com/photos/8yesL5ZPjIU",
    },
  },
  {
    slug: "workstation",
    name: "Workstation",
    tagline: "Macchine professionali per rendering, CAD, video, dati e intelligenza artificiale.",
    description: [
      "Una workstation è un computer pensato per lavorare molte ore su carichi pesanti: rendering 3D, modellazione CAD, montaggio video in 4K e 8K, simulazioni, analisi dati e addestramento di modelli di intelligenza artificiale. Rispetto a un PC consumer usa componenti certificati, più core, molta più memoria e schede video professionali o RTX di fascia alta.",
      "Scegli in base al software che usi: i programmi di rendering e i modelli AI sfruttano molti core e tanta VRAM, mentre il CAD e i software gestionali privilegiano la frequenza del singolo core. Parti da 64 GB di RAM (con opzione ECC), un SSD NVMe da 2 TB e verifica le certificazioni ISV se lavori con Autodesk, Dassault o Adobe. Le workstation AventiPC sono configurate su misura, collaudate per 48 ore e coperte da garanzia di 2 anni con assistenza dedicata.",
    ],
    seoTitle: "Workstation professionali | AventiPC",
    seoDescription:
      "Workstation per rendering, CAD, video e AI con processori multi-core, schede video professionali e RAM ECC. Configurazione su misura e assistenza in italiano.",
    image: {
      src: "/images/lifestyle/category-workstation.jpg",
      alt: "Workstation con due monitor in uno studio di grafica e video",
      width: 2400,
      height: 1600,
      source: "https://unsplash.com/photos/IO3_vOUwjVs",
    },
  },
  {
    slug: "mini-pc",
    name: "Mini PC",
    tagline: "Computer compatti e silenziosi che stanno in una mano.",
    description: [
      "Un mini PC occupa lo spazio di un libro, consuma pochi watt e fa quasi tutto quello che fa un desktop tradizionale: ufficio, navigazione, videochiamate, streaming, sviluppo software leggero. Si monta dietro il monitor con una staffa VESA o si appoggia sulla scrivania, ed è ideale per postazioni ordinate, home theater, punti vendita e sale riunioni.",
      "Le prestazioni dipendono dal processore e dalla dissipazione: i modelli con chip Apple M o Intel Core di ultima generazione reggono anche fotoritocco e montaggio leggero senza ventole rumorose. Controlla le porte (almeno due USB-C, HDMI ed Ethernet), il supporto a più monitor e la possibilità di aggiungere RAM o SSD. Se ti serve una scheda video dedicata per giochi o rendering, guarda invece i desktop.",
    ],
    seoTitle: "Mini PC compatti e silenziosi | AventiPC",
    seoDescription:
      "Mini PC Apple, Intel e AMD per ufficio, casa e home theater. Compatti, silenziosi e a basso consumo, con spedizione gratuita in Italia e garanzia 2 anni.",
    image: {
      src: "/images/lifestyle/category-mini-pc.jpg",
      alt: "Mini PC appoggiato su una scrivania accanto a un monitor",
      width: 2400,
      height: 1600,
      source: "https://unsplash.com/photos/4Pxm-KB8R5U",
    },
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
