import type { Product } from "@/types/catalog";
import { normalize } from "@/lib/format";

/*
 * Real used items for sale. PREZZI DA CONFERMARE: the prices below are placeholders.
 * Marketplace links: fill in `marketplaces.ebay` / `marketplaces.subito` and the
 * buttons on the product page become links automatically.
 */
export const products: Product[] = [
  {
    "slug": "lenovo-thinkbook-14-iil",
    "name": "Lenovo ThinkBook 14 IIL",
    "brand": "lenovo",
    "kind": "Notebook",
    "condition": "used",
    "shortDescription": "Notebook 14\" con Intel Core i3 di 10ª generazione, 8 GB DDR4, SSD 256 GB e Windows 11. Batteria in buono stato.",
    "description": [
      "Il ThinkBook 14 è il portatile da lavoro e studio di Lenovo: scocca in alluminio grigio, tastiera comoda e un peso che lo rende facile da portare ogni giorno.",
      "Questo esemplare monta un Intel Core i3 di 10ª generazione con 8 GB di memoria DDR4 e un SSD da 256 GB, con Windows 11 già installato. È adatto a navigazione, Office, videochiamate e didattica a distanza. La batteria è in buono stato.",
      "Le foto sono dell'esemplare in vendita: quello che vedi è quello che ricevi."
    ],
    "price": 27900,
    "sku": "USD-TB14-I3-8-256",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-1.jpg",
        "alt": "Lenovo ThinkBook 14 aperto, vista frontale con tastiera",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-2.jpg",
        "alt": "Lenovo ThinkBook 14 chiuso, coperchio in alluminio grigio con logo ThinkBook",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-3.jpg",
        "alt": "Lenovo ThinkBook 14, lato sinistro con porte USB, HDMI e USB-C",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-4.jpg",
        "alt": "Lenovo ThinkBook 14, lato destro con lettore di schede e porte USB",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkbook-14-iil-5.jpg",
        "alt": "Etichetta sul fondo del Lenovo ThinkBook 14-IIL con modello e data di produzione",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core i3 di 10ª generazione"
      },
      {
        "label": "Memoria",
        "value": "8 GB DDR4"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 256 GB"
      },
      {
        "label": "Display",
        "value": "14 pollici"
      },
      {
        "label": "Grafica",
        "value": "Intel UHD integrata"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11"
      },
      {
        "label": "Batteria",
        "value": "In buono stato"
      },
      {
        "label": "Condizioni",
        "value": "Usato, funzionante"
      }
    ],
    "highlights": [
      "Intel Core i3 di 10ª generazione",
      "8 GB DDR4 e SSD 256 GB",
      "Windows 11 installato",
      "Batteria in buono stato"
    ],
    "tags": [
      "notebook",
      "lenovo",
      "thinkbook",
      "usato",
      "windows 11"
    ],
    "featured": true,
    "updatedAt": "2026-09-28"
  },
  {
    "slug": "dell-latitude-14-rugged-5414",
    "name": "Dell Latitude 14 Rugged 5414",
    "brand": "dell",
    "kind": "Notebook rugged",
    "condition": "used",
    "shortDescription": "Notebook rugged 14\" touch Full HD con Core i5-6300U, 8 GB, SSD 256 GB e tastiera retroilluminata. Batteria eccellente.",
    "description": [
      "Il Latitude 14 Rugged 5414 è un notebook progettato per lavorare fuori ufficio: scocca rinforzata con angoli protetti, maniglia integrata e porte con sportellini contro polvere e umidità.",
      "Questo esemplare ha un Intel Core i5-6300U, 8 GB di memoria e un SSD da 256 GB. Lo schermo da 14 pollici è Full HD e touch, la tastiera è retroilluminata e la batteria è in condizioni eccellenti.",
      "Ideale per cantieri, magazzini, officine e per chi cerca un portatile che non tema urti. Le foto sono dell'esemplare in vendita."
    ],
    "price": 24900,
    "sku": "USD-L5414-I5-8-256",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-1.jpg",
        "alt": "Dell Latitude 14 Rugged 5414 aperto su un tavolo in legno, vista frontale",
        "width": 756,
        "height": 1008,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-2.jpg",
        "alt": "Dell Latitude 14 Rugged 5414 acceso con Windows e tastiera retroilluminata rossa",
        "width": 756,
        "height": 1008,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-3.jpg",
        "alt": "Dell Latitude 14 Rugged 5414 chiuso, angoli rinforzati e maniglia",
        "width": 1008,
        "height": 756,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-4.jpg",
        "alt": "Tastiera retroilluminata del Dell Latitude 14 Rugged 5414",
        "width": 1008,
        "height": 756,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/dell-latitude-14-rugged-5414-5.jpg",
        "alt": "Dell Latitude 14 Rugged 5414, lato con porte protette da sportellini",
        "width": 1008,
        "height": 756,
        "source": "foto originale AventiPC",
        "license": "own"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core i5-6300U"
      },
      {
        "label": "Memoria",
        "value": "8 GB"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 256 GB"
      },
      {
        "label": "Display",
        "value": "14 pollici Full HD, touch"
      },
      {
        "label": "Tastiera",
        "value": "Retroilluminata"
      },
      {
        "label": "Batteria",
        "value": "Eccellente"
      },
      {
        "label": "Scocca",
        "value": "Rugged, con maniglia integrata"
      },
      {
        "label": "Condizioni",
        "value": "Usato, funzionante"
      }
    ],
    "highlights": [
      "Scocca rugged resistente agli urti",
      "Schermo 14\" Full HD touch",
      "Tastiera retroilluminata",
      "Batteria in condizioni eccellenti"
    ],
    "tags": [
      "notebook",
      "dell",
      "latitude",
      "rugged",
      "touch",
      "usato"
    ],
    "featured": true,
    "updatedAt": "2026-09-28"
  },
  {
    "slug": "lenovo-thinkcentre-m710q-tiny",
    "name": "Lenovo ThinkCentre M710q Tiny",
    "brand": "lenovo",
    "kind": "Mini PC",
    "condition": "used",
    "shortDescription": "Mini PC con Core i5-6500T, 4 GB DDR4 (uno slot libero), HDD 500 GB e slot NVMe libero. Senza Windows.",
    "description": [
      "Il ThinkCentre M710q Tiny è un mini PC da ufficio grande quanto un libro: si nasconde dietro il monitor, consuma poco ed è silenzioso.",
      "Questo esemplare ha un Intel Core i5-6500T, 4 GB di memoria DDR4 con uno slot libero per arrivare a più RAM e un disco da 500 GB. C'è anche uno slot NVMe libero per aggiungere un SSD veloce. Viene venduto senza sistema operativo.",
      "È una buona base per un PC da ufficio, un media center o un piccolo server domestico. Le foto sono dell'esemplare in vendita."
    ],
    "price": 9900,
    "sku": "USD-M710Q-I5-4-500",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-1.jpg",
        "alt": "Lenovo ThinkCentre M710q Tiny tenuto in mano, pannello frontale",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-2.jpg",
        "alt": "Due Lenovo ThinkCentre Tiny impilati, vista frontale",
        "width": 1600,
        "height": 1200,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-3.jpg",
        "alt": "Pannello frontale del Lenovo ThinkCentre M710q Tiny con porte USB e audio",
        "width": 1600,
        "height": 418,
        "source": "foto originale AventiPC",
        "license": "own"
      },
      {
        "src": "/images/products/lenovo-thinkcentre-m710q-tiny-4.jpg",
        "alt": "Retro del Lenovo ThinkCentre M710q Tiny con porte USB, Ethernet, VGA e DisplayPort",
        "width": 535,
        "height": 1600,
        "source": "foto originale AventiPC",
        "license": "own"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core i5-6500T"
      },
      {
        "label": "Memoria",
        "value": "4 GB DDR4 (uno slot libero)"
      },
      {
        "label": "Archiviazione",
        "value": "HDD 500 GB + slot NVMe libero"
      },
      {
        "label": "Grafica",
        "value": "Intel HD 530 integrata"
      },
      {
        "label": "Sistema operativo",
        "value": "Non incluso"
      },
      {
        "label": "Formato",
        "value": "Mini PC, 1 litro"
      },
      {
        "label": "Condizioni",
        "value": "Usato, funzionante"
      }
    ],
    "highlights": [
      "Intel Core i5-6500T a basso consumo",
      "Slot RAM e slot NVMe liberi per aggiornarlo",
      "Formato tiny, montabile dietro il monitor"
    ],
    "tags": [
      "mini pc",
      "lenovo",
      "thinkcentre",
      "usato",
      "ufficio"
    ],
    "featured": false,
    "updatedAt": "2026-09-28"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(slug: string): Product[] {
  return products.filter((p) => p.brand === slug);
}

/** Featured products first, then the rest in catalogue order. */
export function getFeaturedProducts(limit = 8): Product[] {
  return [...products].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, limit);
}

/** Case- and accent-insensitive match on name, brand, description, tags and specs. */
export function searchProducts(query: string): Product[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return products;
  return products.filter((p) => {
    const haystack = normalize([p.name, p.brand, p.kind, p.shortDescription, ...(p.tags ?? []), ...p.specs.map((s) => s.value)].join(" "));
    return terms.every((t) => haystack.includes(t));
  });
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products.filter((p) => p.slug !== product.slug).slice(0, limit);
}
