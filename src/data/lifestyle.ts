/** Lifestyle images used by the site chrome (hero, category tiles, about, OG). */

export interface LifestyleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: string;
}

export const lifestyleImages = {
  "heroProduct": {
    "src": "/images/lifestyle/hero-macbook.png",
    "alt": "MacBook Air 13 pollici M4 color mezzanotte, aperto, vista frontale",
    "width": 792,
    "height": 480,
    "source": "https://www.apple.com/it/"
  },
  "hero": {
    "src": "/images/lifestyle/hero.jpg",
    "alt": "MacBook Air aperto su un piano bianco in marmo, vista frontale con schermo spento e ampio spazio libero intorno",
    "width": 2400,
    "height": 1350,
    "source": "https://unsplash.com/photos/AsZoi-Ar2CI"
  },
  "about": {
    "src": "/images/lifestyle/about.jpg",
    "alt": "Tecnico che monta una scheda all'interno di un PC desktop aperto in laboratorio, con dissipatore e cavi in vista",
    "width": 2400,
    "height": 1600,
    "source": "https://unsplash.com/photos/sMKUYIasyDM"
  },
  "ogFallback": {
    "src": "/images/lifestyle/og-fallback.jpg",
    "alt": "MacBook Pro aperto su una scrivania bianca accanto a una pianta verde, con parete chiara sullo sfondo",
    "width": 2400,
    "height": 1535,
    "source": "https://unsplash.com/photos/tpuAo8gVs58"
  },
  "categories": {
    "notebook": {
      "src": "/images/lifestyle/category-notebook.jpg",
      "alt": "Notebook sottile in alluminio argento semiaperto, visto da dietro, su fondo grigio chiaro uniforme",
      "width": 2400,
      "height": 1600,
      "source": "https://unsplash.com/photos/Hin-rzhOdWs"
    },
    "desktop": {
      "src": "/images/lifestyle/category-desktop.jpg",
      "alt": "Computer all-in-one su una scrivania bianca ordinata, con tastiera, casse e sedia bianca tra due finestre luminose",
      "width": 2400,
      "height": 1607,
      "source": "https://unsplash.com/photos/ntX2TjKrzLc"
    },
    "gaming": {
      "src": "/images/lifestyle/category-gaming.jpg",
      "alt": "PC gaming con case bianco e ventole RGB viola e blu, accanto a una pianta verde e a un controller su una scrivania in legno chiaro",
      "width": 2400,
      "height": 3665,
      "source": "https://unsplash.com/photos/8yesL5ZPjIU"
    },
    "workstation": {
      "src": "/images/lifestyle/category-workstation.jpg",
      "alt": "Postazione di lavoro creativa con monitor esterno, MacBook Pro su supporto, tastiera meccanica e accessori, illuminata dalla luce del giorno",
      "width": 2400,
      "height": 1600,
      "source": "https://unsplash.com/photos/IO3_vOUwjVs"
    },
    "mini-pc": {
      "src": "/images/lifestyle/category-mini-pc.jpg",
      "alt": "Mac mini compatto in alluminio appoggiato su un ripiano bianco, con luce soffusa lilla e due cavi collegati sul retro",
      "width": 2400,
      "height": 1600,
      "source": "https://unsplash.com/photos/4Pxm-KB8R5U"
    }
  }
} satisfies {
  heroProduct: LifestyleImage;
  hero: LifestyleImage;
  about: LifestyleImage;
  ogFallback: LifestyleImage;
  categories: Record<string, LifestyleImage>;
};
