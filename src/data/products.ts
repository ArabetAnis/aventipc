import type { Product } from "@/types/catalog";
import { normalize } from "@/lib/format";

export const products: Product[] = [
  {
    "slug": "aventipc-nova-rtx-5070",
    "name": "AventiPC Nova",
    "brand": "aventipc",
    "category": "gaming",
    "shortDescription": "PC gaming con Ryzen 7 9700X e GeForce RTX 5070 12 GB: 1440p fluido, 32 GB DDR5 e SSD 1 TB, assemblato in Italia.",
    "description": [
      "AventiPC Nova è il PC gaming che assembliamo per chi gioca in 1440p senza compromessi. Il Ryzen 7 9700X a 8 core e la GeForce RTX 5070 con 12 GB di GDDR7 gestiscono i titoli più recenti con DLSS 4 e ray tracing attivi, mantenendo frame rate alti anche nei giochi competitivi.",
      "I 32 GB di DDR5-6000 e l'SSD NVMe da 1 TB riducono i caricamenti a pochi secondi e lasciano spazio a decine di titoli installati. L'alimentatore da 750 W 80 Plus Gold e il dissipatore a liquido da 240 mm mantengono temperature e rumorosità sotto controllo anche dopo ore di gioco.",
      "Ogni Nova viene montato a mano nel nostro laboratorio, con cavi ordinati, BIOS aggiornato e Windows 11 Home già attivato. Prima della spedizione eseguiamo 24 ore di test di stabilità e includiamo 2 anni di garanzia con assistenza in italiano."
    ],
    "price": 239900,
    "sku": "AVP-NOVA-9700X-5070",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/aventipc-nova-rtx-5070-1.jpg",
        "alt": "PC gaming AventiPC Nova con pannello laterale aperto: ventole ARGB, dissipatore a liquido e scheda grafica GeForce RTX bianca",
        "width": 2000,
        "height": 1500,
        "source": "https://images.unsplash.com/photo-1756576630180-653cbd594433?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-nova-rtx-5070-2.jpg",
        "alt": "Dettaglio interno di AventiPC Nova: radiatore con tre ventole ARGB, tubi del dissipatore a liquido e scheda grafica GeForce RTX",
        "width": 2000,
        "height": 1500,
        "source": "https://images.unsplash.com/photo-1754928338671-f6acf67d2d89?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-nova-rtx-5070-3.jpg",
        "alt": "Interno di AventiPC Nova a luci spente: scheda madre, dissipatore a liquido, memorie DDR5 e scheda grafica GeForce RTX bianca",
        "width": 2000,
        "height": 1500,
        "source": "https://images.unsplash.com/photo-1756575802474-b2348cef95c3?w=2000&q=85",
        "license": "unsplash"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "AMD Ryzen 7 9700X, 8 core / 16 thread, fino a 5,5 GHz"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA GeForce RTX 5070 12 GB GDDR7"
      },
      {
        "label": "Memoria",
        "value": "32 GB (2×16 GB) DDR5-6000 CL30"
      },
      {
        "label": "Archiviazione",
        "value": "SSD NVMe PCIe 4.0 da 1 TB"
      },
      {
        "label": "Scheda madre",
        "value": "AMD B850, socket AM5"
      },
      {
        "label": "Raffreddamento",
        "value": "Dissipatore a liquido AIO da 240 mm"
      },
      {
        "label": "Alimentatore",
        "value": "750 W 80 Plus Gold, modulare"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3, Ethernet 2,5 Gbit"
      },
      {
        "label": "Porte",
        "value": "1× USB-C 20 Gbit/s, 6× USB-A, 3× DisplayPort 2.1, 1× HDMI 2.1"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Dimensioni e peso",
        "value": "465 × 230 × 480 mm, circa 12 kg (mid tower con vetro temperato)"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "Ryzen 7 9700X a 8 core e 16 thread",
      "GeForce RTX 5070 con 12 GB GDDR7 e DLSS 4",
      "32 GB DDR5-6000 in dual channel",
      "SSD NVMe PCIe 4.0 da 1 TB",
      "Wi-Fi 6E e Bluetooth 5.3 integrati"
    ],
    "rating": {
      "value": 4.7,
      "count": 86
    },
    "tags": [
      "pc gaming",
      "rtx 5070",
      "ryzen 7",
      "1440p",
      "pc assemblato"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "aventipc-vega-rtx-5080",
    "name": "AventiPC Vega",
    "brand": "aventipc",
    "category": "gaming",
    "shortDescription": "PC gaming di punta con Ryzen 7 9800X3D, GeForce RTX 5080 16 GB, 32 GB DDR5, SSD 2 TB e AIO da 360 mm per il 4K.",
    "description": [
      "AventiPC Vega è la configurazione che consigliamo a chi vuole giocare in 4K o a frequenze altissime in 1440p. Il Ryzen 7 9800X3D, con i suoi 96 MB di cache 3D V-Cache, è il processore da gioco più veloce che si possa montare oggi, e la GeForce RTX 5080 con 16 GB di GDDR7 gli tiene testa con DLSS 4 e generazione multi-frame.",
      "Il dissipatore a liquido da 360 mm mantiene il processore fresco e silenzioso, mentre l'alimentatore da 1000 W 80 Plus Gold lascia margine per futuri aggiornamenti. I 32 GB di DDR5-6000 e l'SSD NVMe PCIe 5.0 da 2 TB completano una piattaforma pensata per durare anni.",
      "Il case con vetro temperato e illuminazione ARGB regolabile mostra il montaggio curato che facciamo a mano su ogni Vega. Windows 11 Home è preinstallato e attivato, il BIOS è aggiornato e il PC arriva testato per 24 ore, con 2 anni di garanzia e assistenza in italiano."
    ],
    "price": 391900,
    "compareAtPrice": 419900,
    "sku": "AVP-VEGA-9800X3D-5080",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/aventipc-vega-rtx-5080-1.jpg",
        "alt": "PC gaming AventiPC Vega in case bianco con pannello aperto: scheda madre ROG bianca, raffreddamento a liquido e scheda grafica GeForce RTX AORUS",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1769773724495-5103f0ee108f?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-vega-rtx-5080-2.jpg",
        "alt": "Dettaglio del raffreddamento a liquido di AventiPC Vega: waterblock trasparente, memorie DDR5 e ventola bianca",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1759836096334-e65e1706bb59?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-vega-rtx-5080-3.jpg",
        "alt": "Primo piano dell'interno bianco di AventiPC Vega: waterblock CPU, moduli DDR5 e scheda grafica GeForce RTX",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1769773724507-532c3ecd35a3?w=2000&q=85",
        "license": "unsplash"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "AMD Ryzen 7 9800X3D, 8 core / 16 thread, fino a 5,2 GHz, 96 MB L3 3D V-Cache"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA GeForce RTX 5080 16 GB GDDR7"
      },
      {
        "label": "Memoria",
        "value": "32 GB (2×16 GB) DDR5-6000 CL30"
      },
      {
        "label": "Archiviazione",
        "value": "SSD NVMe PCIe 5.0 da 2 TB"
      },
      {
        "label": "Scheda madre",
        "value": "AMD X870E, socket AM5"
      },
      {
        "label": "Raffreddamento",
        "value": "Dissipatore a liquido AIO da 360 mm con ventole ARGB"
      },
      {
        "label": "Alimentatore",
        "value": "1000 W 80 Plus Gold, modulare, ATX 3.1"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 7, Bluetooth 5.4, Ethernet 2,5 Gbit"
      },
      {
        "label": "Porte",
        "value": "2× USB-C 40 Gbit/s, 8× USB-A, 3× DisplayPort 2.1, 1× HDMI 2.1"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Dimensioni e peso",
        "value": "480 × 240 × 505 mm, circa 15 kg (mid tower con vetro temperato)"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "Ryzen 7 9800X3D con 3D V-Cache, il più veloce nei giochi",
      "GeForce RTX 5080 con 16 GB GDDR7 per il 4K",
      "Dissipatore a liquido AIO da 360 mm",
      "SSD NVMe PCIe 5.0 da 2 TB",
      "Alimentatore da 1000 W 80 Plus Gold"
    ],
    "rating": {
      "value": 4.8,
      "count": 54
    },
    "tags": [
      "pc gaming",
      "rtx 5080",
      "9800x3d",
      "4k",
      "pc assemblato",
      "raffreddamento a liquido"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "aventipc-forge-threadripper",
    "name": "AventiPC Forge",
    "brand": "aventipc",
    "category": "workstation",
    "shortDescription": "Workstation con Threadripper 9960X a 24 core, RTX PRO 4500 Blackwell 32 GB, 128 GB DDR5 ECC e SSD 4 TB per rendering e AI.",
    "description": [
      "AventiPC Forge è la workstation che costruiamo per studi di rendering, montaggio video, simulazione e sviluppo AI. Il Ryzen Threadripper 9960X mette a disposizione 24 core Zen 5 e 48 thread, con 80 linee PCIe 5.0 per alimentare scheda grafica, storage e schede di acquisizione senza colli di bottiglia.",
      "La NVIDIA RTX PRO 4500 Blackwell con 32 GB di GDDR7 ECC accelera Blender, DaVinci Resolve, SOLIDWORKS e i framework di machine learning con driver certificati. I 128 GB di DDR5 ECC registrata e l'SSD NVMe PCIe 5.0 da 4 TB gestiscono scene e dataset di grandi dimensioni senza compromessi sull'integrità dei dati.",
      "L'alimentatore da 1200 W 80 Plus Platinum e il case full tower con filtri antipolvere sono pensati per lavorare a pieno carico 24 ore su 24. Ogni Forge è assemblata su ordinazione, collaudata con test di stress prolungati e consegnata con Windows 11 Pro attivato e 3 anni di garanzia con intervento on-site."
    ],
    "price": 1036900,
    "sku": "AVP-FORGE-9960X-PRO4500",
    "availability": "preorder",
    "images": [
      {
        "src": "/images/products/aventipc-forge-threadripper-1.jpg",
        "alt": "Workstation AventiPC Forge, vista frontale del case nero con griglia a lamelle verticali e ventole interne",
        "width": 2000,
        "height": 3000,
        "source": "https://images.unsplash.com/photo-1778333895674-9158b2ce5371?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-forge-threadripper-2.jpg",
        "alt": "Dettaglio della scheda grafica NVIDIA professionale installata nella workstation AventiPC Forge",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1778333895694-78d7ddfeafa5?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-forge-threadripper-3.jpg",
        "alt": "Workstation AventiPC Forge con pannello laterale rimosso: dissipatore ad aria a doppia torre e ventole silenziose",
        "width": 2000,
        "height": 3000,
        "source": "https://images.unsplash.com/photo-1591238372408-8b98667c0460?w=2000&q=85",
        "license": "unsplash"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "AMD Ryzen Threadripper 9960X, 24 core / 48 thread, fino a 5,4 GHz"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA RTX PRO 4500 Blackwell 32 GB GDDR7 ECC"
      },
      {
        "label": "Memoria",
        "value": "128 GB (4×32 GB) DDR5-6400 ECC RDIMM"
      },
      {
        "label": "Archiviazione",
        "value": "SSD NVMe PCIe 5.0 da 4 TB"
      },
      {
        "label": "Scheda madre",
        "value": "AMD TRX50, socket sTR5, 4 canali di memoria"
      },
      {
        "label": "Raffreddamento",
        "value": "Dissipatore a liquido AIO da 360 mm per sTR5"
      },
      {
        "label": "Alimentatore",
        "value": "1200 W 80 Plus Platinum, modulare, ATX 3.1"
      },
      {
        "label": "Connettività",
        "value": "Ethernet 10 Gbit + 2,5 Gbit, Wi-Fi 7, Bluetooth 5.4"
      },
      {
        "label": "Porte",
        "value": "2× USB4 40 Gbit/s, 8× USB-A, 4× DisplayPort 2.1 (scheda grafica)"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Pro"
      },
      {
        "label": "Dimensioni e peso",
        "value": "560 × 250 × 580 mm, circa 22 kg (full tower)"
      },
      {
        "label": "Garanzia",
        "value": "3 anni con assistenza on-site"
      }
    ],
    "highlights": [
      "Threadripper 9960X: 24 core, 48 thread, 80 linee PCIe 5.0",
      "RTX PRO 4500 Blackwell con 32 GB GDDR7 ECC",
      "128 GB DDR5-6400 ECC registrata",
      "SSD NVMe PCIe 5.0 da 4 TB",
      "Windows 11 Pro e 3 anni di garanzia on-site"
    ],
    "rating": {
      "value": 4.9,
      "count": 17
    },
    "tags": [
      "workstation",
      "threadripper",
      "rtx pro",
      "rendering",
      "intelligenza artificiale"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "aventipc-atlas-core-ultra",
    "name": "AventiPC Atlas",
    "brand": "aventipc",
    "category": "desktop",
    "shortDescription": "PC desktop per ufficio e famiglia con Core Ultra 5 235, 16 GB DDR5, SSD 1 TB, Wi-Fi 6 e Windows 11 Home: silenzioso e pronto all'uso.",
    "description": [
      "AventiPC Atlas è il PC desktop per chi lavora da casa, studia o gestisce un piccolo ufficio. Il Core Ultra 5 235 con 14 core (6 Performance e 8 Efficient) apre decine di schede del browser, videochiamate e fogli di calcolo senza rallentamenti, e la grafica Intel integrata pilota due monitor 4K.",
      "Con 16 GB di DDR5 e un SSD NVMe da 1 TB il sistema si avvia in pochi secondi e resta reattivo anche dopo anni. Il Wi-Fi 6 e il Bluetooth 5.3 evitano cavi in giro per casa, mentre il dissipatore a torre e l'alimentatore 80 Plus Gold lo rendono quasi inudibile sulla scrivania.",
      "Atlas arriva con Windows 11 Home attivato, driver aggiornati e senza software preinstallato inutile. Il case compatto in acciaio ha filtri antipolvere lavabili e spazio per aggiungere in futuro una scheda grafica o un secondo SSD; la garanzia di 2 anni include assistenza telefonica in italiano."
    ],
    "price": 124900,
    "sku": "AVP-ATLAS-CU5-235-IGP",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/aventipc-atlas-core-ultra-1.jpg",
        "alt": "PC desktop AventiPC Atlas in case bianco con pannello laterale in vetro, vista frontale angolata su sfondo grigio",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1660855551550-2696677aaf28?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-atlas-core-ultra-2.jpg",
        "alt": "PC desktop AventiPC Atlas, case bianco con frontale in mesh, vista frontale in penombra",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1660855551570-dd44e0ab800c?w=2000&q=85",
        "license": "unsplash"
      },
      {
        "src": "/images/products/aventipc-atlas-core-ultra-3.jpg",
        "alt": "PC desktop AventiPC Atlas in case bianco sulla scrivania con luce blu interna",
        "width": 2000,
        "height": 1333,
        "source": "https://images.unsplash.com/photo-1660855551740-4474188debdb?w=2000&q=85",
        "license": "unsplash"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core Ultra 5 235, 14 core (6P + 8E), fino a 5,0 GHz"
      },
      {
        "label": "Grafica",
        "value": "Intel Graphics integrata (4 Xe core)"
      },
      {
        "label": "Memoria",
        "value": "16 GB (2×8 GB) DDR5-5600"
      },
      {
        "label": "Archiviazione",
        "value": "SSD NVMe PCIe 4.0 da 1 TB"
      },
      {
        "label": "Scheda madre",
        "value": "Intel B860, socket LGA 1851"
      },
      {
        "label": "Raffreddamento",
        "value": "Dissipatore ad aria a torre da 120 mm"
      },
      {
        "label": "Alimentatore",
        "value": "550 W 80 Plus Gold"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6, Bluetooth 5.3, Ethernet 2,5 Gbit"
      },
      {
        "label": "Porte",
        "value": "1× USB-C 10 Gbit/s, 6× USB-A, 1× HDMI 2.1, 1× DisplayPort 1.4"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Dimensioni e peso",
        "value": "400 × 200 × 430 mm, circa 7 kg (mini tower)"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "Core Ultra 5 235 con 14 core e NPU integrata",
      "16 GB DDR5-5600 e SSD NVMe da 1 TB",
      "Grafica Intel integrata per due monitor 4K",
      "Wi-Fi 6 e Bluetooth 5.3",
      "Silenzioso: meno di 25 dB in uso ufficio"
    ],
    "rating": {
      "value": 4.6,
      "count": 132
    },
    "tags": [
      "pc ufficio",
      "pc desktop",
      "core ultra",
      "famiglia",
      "pc silenzioso"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "apple-macbook-air-13-m4",
    "name": "MacBook Air 13\" M4",
    "brand": "apple",
    "category": "notebook",
    "shortDescription": "Notebook da 1,24 kg con chip M4, 16 GB di memoria, SSD da 256 GB e fino a 18 ore di autonomia. Colore mezzanotte.",
    "description": [
      "Il MacBook Air 13 pollici con chip M4 è il portatile Apple più venduto per chi lavora e studia in mobilità. Il chip M4 con CPU 10-core e GPU 8-core gestisce senza fatica fogli di calcolo, videochiamate, fotoritocco e montaggi video in 4K, e lo fa in silenzio: non c'è alcuna ventola. I 16 GB di memoria unificata di serie tengono aperte decine di schede e app senza rallentamenti.",
      "Il display Liquid Retina da 13,6 pollici raggiunge 500 nit di luminosità con gamma cromatica P3 e True Tone. La videocamera 12MP Center Stage inquadra sempre chi parla, mentre i quattro altoparlanti con audio spaziale rendono le riunioni più chiare. Con il coperchio aperto puoi collegare fino a due monitor esterni.",
      "La batteria arriva a 18 ore di riproduzione video e si ricarica tramite MagSafe 3, lasciando libere le due porte Thunderbolt 4. La scocca in alluminio riciclato nella finitura mezzanotte pesa 1,24 kg ed è spessa 1,13 cm: entra in qualsiasi zaino. Include Touch ID e macOS con aggiornamenti gratuiti."
    ],
    "price": 89900,
    "compareAtPrice": 99900,
    "sku": "APL-MBA13-M4-256-MN",
    "gtin": "0195949838248",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/apple-macbook-air-13-m4-1.jpg",
        "alt": "MacBook Air 13 pollici M4 color mezzanotte, aperto, vista frontale",
        "width": 872,
        "height": 560,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202503?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-macbook-air-13-m4-2.jpg",
        "alt": "MacBook Air 13 pollici M4 color mezzanotte, aperto, profilo laterale con jack cuffie",
        "width": 602,
        "height": 600,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-size-unselect-202601-gallery-2?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Apple M4, CPU 10-core (4 performance + 6 efficiency), Neural Engine 16-core"
      },
      {
        "label": "Memoria",
        "value": "16 GB di memoria unificata"
      },
      {
        "label": "Archiviazione",
        "value": "SSD da 256 GB"
      },
      {
        "label": "Display",
        "value": "Liquid Retina 13,6\", 2560×1664 pixel, 500 nit, gamma P3, True Tone"
      },
      {
        "label": "Grafica",
        "value": "GPU 8-core con ray tracing hardware, fino a 2 monitor esterni"
      },
      {
        "label": "Sistema operativo",
        "value": "macOS (Sequoia preinstallato, aggiornamenti gratuiti)"
      },
      {
        "label": "Porte",
        "value": "2× Thunderbolt 4 / USB 4, MagSafe 3, jack cuffie 3,5 mm"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E (802.11ax), Bluetooth 5.3"
      },
      {
        "label": "Batteria",
        "value": "53,8 Wh, fino a 18 ore di riproduzione video, alimentatore USB-C da 30 W"
      },
      {
        "label": "Peso",
        "value": "1,24 kg"
      },
      {
        "label": "Dimensioni",
        "value": "1,13 × 30,41 × 21,50 cm"
      },
      {
        "label": "Colore",
        "value": "Mezzanotte"
      }
    ],
    "highlights": [
      "Chip Apple M4 con CPU 10-core e GPU 8-core, senza ventola",
      "16 GB di memoria unificata e SSD da 256 GB",
      "Display Liquid Retina 13,6\" da 500 nit con True Tone",
      "Fino a 18 ore di autonomia, ricarica MagSafe 3",
      "Solo 1,24 kg e 1,13 cm di spessore"
    ],
    "rating": {
      "value": 4.8,
      "count": 186
    },
    "tags": [
      "macbook",
      "notebook",
      "ultraleggero",
      "studenti",
      "apple silicon",
      "portatile"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "apple-macbook-pro-14-m4-pro",
    "name": "MacBook Pro 14\" M4 Pro",
    "brand": "apple",
    "category": "notebook",
    "shortDescription": "Chip M4 Pro 12-core, 24 GB di memoria, SSD da 512 GB e display Liquid Retina XDR da 14,2\" a 120 Hz. Nero siderale.",
    "description": [
      "Il MacBook Pro 14 pollici con chip M4 Pro è il portatile per chi lavora davvero con video, codice, 3D e grandi dataset. La CPU 12-core e la GPU 16-core con ray tracing hardware compilano, esportano e renderizzano più in fretta della maggior parte dei notebook Windows di pari peso, e i 24 GB di memoria unificata tengono in RAM progetti pesanti senza swap.",
      "Il display Liquid Retina XDR da 14,2 pollici usa un pannello mini-LED da 1.000 nit continui in SDR e 1.600 nit di picco in HDR, con ProMotion fino a 120 Hz: le timeline scorrono fluide e i colori sono affidabili per stampa e broadcast. Le tre porte Thunderbolt 5 raggiungono 120 Gb/s, mentre HDMI, slot SDXC e MagSafe 3 evitano gli adattatori.",
      "La batteria da 72,4 Wh arriva a 22 ore di riproduzione video e le prestazioni restano le stesse anche scollegato dalla corrente. La finitura nero siderale ha un'anodizzazione che riduce le impronte. Videocamera 12MP Center Stage, sei altoparlanti e tre microfoni in qualità studio completano una macchina pensata per lavorare ovunque."
    ],
    "price": 199900,
    "sku": "APL-MBP14-M4P-512-SB",
    "gtin": "0195949874949",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/apple-macbook-pro-14-m4-pro-1.jpg",
        "alt": "MacBook Pro 14 pollici M4 Pro nero siderale, aperto, vista frontale",
        "width": 882,
        "height": 563,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-macbook-pro-14-m4-pro-2.jpg",
        "alt": "MacBook Pro 14 pollici M4 Pro nero siderale, vista dall'alto di tastiera e trackpad",
        "width": 1679,
        "height": 1044,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-gallery2-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-macbook-pro-14-m4-pro-3.jpg",
        "alt": "MacBook Pro 14 pollici M4 Pro nero siderale, profili laterali con porte Thunderbolt 5, HDMI, MagSafe 3 e slot SDXC",
        "width": 2080,
        "height": 456,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-gallery4-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Apple M4 Pro, CPU 12-core (8 performance + 4 efficiency), Neural Engine 16-core"
      },
      {
        "label": "Memoria",
        "value": "24 GB di memoria unificata, 273 GB/s di banda"
      },
      {
        "label": "Archiviazione",
        "value": "SSD da 512 GB"
      },
      {
        "label": "Display",
        "value": "Liquid Retina XDR 14,2\", 3024×1964 pixel, mini-LED, 1.000 nit SDR / 1.600 nit HDR, ProMotion 120 Hz"
      },
      {
        "label": "Grafica",
        "value": "GPU 16-core con ray tracing hardware, fino a 2 monitor esterni (fino a 6K)"
      },
      {
        "label": "Sistema operativo",
        "value": "macOS (Sequoia preinstallato, aggiornamenti gratuiti)"
      },
      {
        "label": "Porte",
        "value": "3× Thunderbolt 5 (fino a 120 Gb/s), HDMI, slot SDXC, MagSafe 3, jack cuffie 3,5 mm"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        "label": "Batteria",
        "value": "72,4 Wh, fino a 22 ore di riproduzione video, alimentatore USB-C da 70 W"
      },
      {
        "label": "Peso",
        "value": "1,60 kg"
      },
      {
        "label": "Dimensioni",
        "value": "1,55 × 31,26 × 22,12 cm"
      },
      {
        "label": "Colore",
        "value": "Nero siderale"
      }
    ],
    "highlights": [
      "Chip M4 Pro con CPU 12-core e GPU 16-core",
      "24 GB di memoria unificata, SSD da 512 GB",
      "Display Liquid Retina XDR 14,2\" mini-LED a 120 Hz, 1.600 nit HDR",
      "3× Thunderbolt 5, HDMI, slot SDXC e MagSafe 3",
      "Fino a 22 ore di autonomia"
    ],
    "rating": {
      "value": 4.9,
      "count": 94
    },
    "tags": [
      "macbook pro",
      "notebook",
      "creativi",
      "professionale",
      "apple silicon"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "apple-imac-24-m4",
    "name": "iMac 24\" M4",
    "brand": "apple",
    "category": "desktop",
    "shortDescription": "All-in-one con display Retina 4,5K da 24\", chip M4 10-core, 16 GB, SSD da 256 GB, tastiera e mouse coordinati. Blu.",
    "description": [
      "L'iMac 24 pollici con chip M4 è il computer da scrivania che non ha bisogno di nulla: display, altoparlanti, videocamera, tastiera e mouse sono tutti nella scatola, in un blu coordinato. Con la CPU 10-core e la GPU 10-core gestisce con disinvoltura lavoro d'ufficio, didattica a distanza, foto e montaggi video in 4K, in un corpo spesso appena 11,5 mm.",
      "Il display Retina 4,5K da 23,5 pollici (4480×2520 pixel) raggiunge 500 nit con gamma cromatica P3 e True Tone, che adatta il bianco alla luce della stanza. La videocamera 12MP Center Stage con Desk View e il sistema a sei altoparlanti con audio spaziale rendono videochiamate e film molto migliori di un monitor tradizionale.",
      "Questo modello a 10-core include quattro porte Thunderbolt 4 / USB-C, Gigabit Ethernet integrata nell'alimentatore, Magic Keyboard con Touch ID e Magic Mouse in tinta. I 16 GB di memoria unificata e la SSD da 256 GB sono adeguati per la famiglia e lo studio; per archivi grandi consigliamo un disco esterno Thunderbolt."
    ],
    "price": 179900,
    "compareAtPrice": 202900,
    "sku": "APL-IMAC24-M4-256-BL",
    "gtin": "0195949597398",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/apple-imac-24-m4-1.jpg",
        "alt": "iMac 24 pollici M4 blu con Magic Keyboard e Magic Mouse coordinati, vista frontale",
        "width": 1524,
        "height": 1385,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-blue-gallery-1-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-imac-24-m4-2.jpg",
        "alt": "iMac 24 pollici M4 blu, retro con logo Apple, porte Thunderbolt e pulsante di accensione",
        "width": 1522,
        "height": 1295,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-blue-gallery-2-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-imac-24-m4-3.jpg",
        "alt": "iMac 24 pollici M4 blu, profilo laterale sottile con supporto",
        "width": 467,
        "height": 1295,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-blue-gallery-3-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Apple M4, CPU 10-core (4 performance + 6 efficiency), Neural Engine 16-core"
      },
      {
        "label": "Memoria",
        "value": "16 GB di memoria unificata"
      },
      {
        "label": "Archiviazione",
        "value": "SSD da 256 GB"
      },
      {
        "label": "Display",
        "value": "Retina 4,5K 23,5\", 4480×2520 pixel, 500 nit, gamma P3, True Tone"
      },
      {
        "label": "Grafica",
        "value": "GPU 10-core con ray tracing hardware, un monitor esterno fino a 6K"
      },
      {
        "label": "Sistema operativo",
        "value": "macOS (Sequoia preinstallato, aggiornamenti gratuiti)"
      },
      {
        "label": "Porte",
        "value": "4× Thunderbolt 4 / USB-C, jack cuffie 3,5 mm; Gigabit Ethernet sull'alimentatore"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        "label": "Accessori inclusi",
        "value": "Magic Keyboard con Touch ID, Magic Mouse e cavo USB-C intrecciato, in blu coordinato"
      },
      {
        "label": "Peso",
        "value": "4,44 kg"
      },
      {
        "label": "Dimensioni",
        "value": "46,1 × 54,7 × 14,7 cm con supporto, spessore 11,5 mm"
      },
      {
        "label": "Colore",
        "value": "Blu"
      }
    ],
    "highlights": [
      "Display Retina 4,5K da 24\" con 500 nit e True Tone",
      "Chip M4 con CPU 10-core e GPU 10-core",
      "Quattro porte Thunderbolt 4 e Gigabit Ethernet",
      "Magic Keyboard con Touch ID e Magic Mouse inclusi, in blu",
      "Videocamera 12MP Center Stage e sei altoparlanti"
    ],
    "rating": {
      "value": 4.7,
      "count": 63
    },
    "tags": [
      "imac",
      "all-in-one",
      "desktop",
      "famiglia",
      "apple silicon"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "apple-mac-mini-m4",
    "name": "Mac mini M4",
    "brand": "apple",
    "category": "mini-pc",
    "shortDescription": "Desktop da 12,7 cm di lato con chip M4 10-core, 16 GB di memoria, SSD da 256 GB, tre Thunderbolt 4 e HDMI.",
    "description": [
      "Il Mac mini con chip M4 sta nel palmo di una mano, 12,7 × 12,7 cm per 5 cm di altezza, ma è un desktop completo: CPU 10-core, GPU 10-core con ray tracing e 16 GB di memoria unificata di serie. È il modo più economico per entrare nel mondo Mac, e basta collegare monitor, tastiera e mouse che hai già.",
      "Sul retro trovi tre porte Thunderbolt 4, HDMI fino a 8K e Gigabit Ethernet; sul davanti due USB-C a 10 Gb/s e il jack cuffie. Può pilotare fino a tre display contemporaneamente e resta silenzioso anche sotto carico grazie al sistema di raffreddamento riprogettato.",
      "Consuma pochissimo ed è il primo Mac dichiarato a impatto carbonico zero. È ideale come postazione da ufficio, media center o piccolo server domestico: prende posto sotto il monitor, dietro la TV o su una mensola, e lo dimentichi finché non ti serve."
    ],
    "price": 69900,
    "sku": "APL-MMINI-M4-256",
    "gtin": "0195949080418",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/apple-mac-mini-m4-1.jpg",
        "alt": "Mac mini M4 argento, vista frontale con due porte USB-C e jack cuffie",
        "width": 845,
        "height": 385,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202410?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-mac-mini-m4-2.jpg",
        "alt": "Mac mini M4, retro con porte Thunderbolt 4, HDMI, Gigabit Ethernet e alimentazione",
        "width": 986,
        "height": 441,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-chip-unselect-202608-gallery-2?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-mac-mini-m4-3.jpg",
        "alt": "Mac mini M4, vista dall'alto con logo Apple",
        "width": 770,
        "height": 798,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-chip-unselect-202608-gallery-3?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Apple M4, CPU 10-core (4 performance + 6 efficiency), Neural Engine 16-core"
      },
      {
        "label": "Memoria",
        "value": "16 GB di memoria unificata"
      },
      {
        "label": "Archiviazione",
        "value": "SSD da 256 GB"
      },
      {
        "label": "Grafica",
        "value": "GPU 10-core con ray tracing hardware, fino a 3 display (fino a 8K su HDMI)"
      },
      {
        "label": "Sistema operativo",
        "value": "macOS (Sequoia preinstallato, aggiornamenti gratuiti)"
      },
      {
        "label": "Porte posteriori",
        "value": "3× Thunderbolt 4 / USB 4, HDMI, Gigabit Ethernet, presa di alimentazione"
      },
      {
        "label": "Porte frontali",
        "value": "2× USB-C (10 Gb/s), jack cuffie 3,5 mm"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        "label": "Alimentazione",
        "value": "Alimentatore integrato, cavo di alimentazione incluso"
      },
      {
        "label": "Peso",
        "value": "0,67 kg"
      },
      {
        "label": "Dimensioni",
        "value": "5,0 × 12,7 × 12,7 cm"
      },
      {
        "label": "Colore",
        "value": "Argento"
      }
    ],
    "highlights": [
      "Chip M4 con CPU 10-core e GPU 10-core",
      "16 GB di memoria unificata, SSD da 256 GB",
      "3× Thunderbolt 4, HDMI, Gigabit Ethernet e 2× USB-C frontali",
      "Supporta fino a tre display",
      "Solo 12,7 × 12,7 × 5 cm e 670 g"
    ],
    "rating": {
      "value": 4.8,
      "count": 214
    },
    "tags": [
      "mac mini",
      "mini pc",
      "compatto",
      "ufficio",
      "apple silicon"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "apple-mac-studio-m4-max",
    "name": "Mac Studio M4 Max",
    "brand": "apple",
    "category": "workstation",
    "shortDescription": "Workstation compatta con M4 Max 14-core CPU / 32-core GPU, 36 GB di memoria, SSD da 512 GB e quattro Thunderbolt 5.",
    "description": [
      "Il Mac Studio con chip M4 Max porta in 9,5 cm di altezza la potenza di una workstation da torre. La CPU 14-core e la GPU 32-core con ray tracing hardware rendono fluidi montaggi multicam in 8K, rendering 3D, sessioni audio con centinaia di tracce e modelli di machine learning, mentre i 36 GB di memoria unificata a 410 GB/s eliminano i colli di bottiglia tra CPU e GPU.",
      "La connettività è pensata per lo studio: quattro porte Thunderbolt 5 a 120 Gb/s, Ethernet 10Gb, HDMI, due USB-A e jack cuffie ad alta impedenza sul retro, più due USB-C e uno slot SDXC sul frontale. Può pilotare fino a cinque display, uno dei quali anche a 8K.",
      "Il sistema termico a doppio soffiante mantiene il rumore sotto la soglia di attenzione anche con carichi prolungati, così puoi tenerlo sulla scrivania accanto ai monitor. La SSD da 512 GB si affianca facilmente ad archiviazione esterna Thunderbolt 5, ideale per librerie video e archivi di progetto."
    ],
    "price": 279900,
    "sku": "APL-MSTUDIO-M4MAX-512",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/apple-mac-studio-m4-max-1.jpg",
        "alt": "Mac Studio M4 Max argento, vista frontale con due porte USB-C e slot SDXC",
        "width": 914,
        "height": 487,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-hero-202503?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-mac-studio-m4-max-2.jpg",
        "alt": "Mac Studio M4 Max, retro con quattro porte Thunderbolt 5, Ethernet 10Gb, USB-A, HDMI e jack cuffie",
        "width": 996,
        "height": 528,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-chip-unselect-202608-gallery-2?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/apple-mac-studio-m4-max-3.jpg",
        "alt": "Mac Studio M4 Max, vista dall'alto con logo Apple",
        "width": 753,
        "height": 782,
        "source": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-chip-unselect-202608-gallery-3?wid=2000&hei=2000&fmt=jpeg&qlt=90",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Apple M4 Max, CPU 14-core (10 performance + 4 efficiency), Neural Engine 16-core"
      },
      {
        "label": "Memoria",
        "value": "36 GB di memoria unificata, 410 GB/s di banda"
      },
      {
        "label": "Archiviazione",
        "value": "SSD da 512 GB"
      },
      {
        "label": "Grafica",
        "value": "GPU 32-core con ray tracing hardware, fino a 5 display (uno fino a 8K)"
      },
      {
        "label": "Sistema operativo",
        "value": "macOS (Sequoia preinstallato, aggiornamenti gratuiti)"
      },
      {
        "label": "Porte posteriori",
        "value": "4× Thunderbolt 5 (120 Gb/s), 2× USB-A (5 Gb/s), HDMI, Ethernet 10Gb, jack cuffie 3,5 mm"
      },
      {
        "label": "Porte frontali",
        "value": "2× USB-C (10 Gb/s), slot SDXC (UHS-II)"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        "label": "Raffreddamento",
        "value": "Sistema termico attivo a doppio soffiante, silenzioso sotto carico"
      },
      {
        "label": "Peso",
        "value": "2,74 kg"
      },
      {
        "label": "Dimensioni",
        "value": "9,5 × 19,7 × 19,7 cm"
      },
      {
        "label": "Colore",
        "value": "Argento"
      }
    ],
    "highlights": [
      "Chip M4 Max con CPU 14-core e GPU 32-core",
      "36 GB di memoria unificata a 410 GB/s, SSD da 512 GB",
      "4× Thunderbolt 5, Ethernet 10Gb, HDMI e 2× USB-A",
      "Fino a cinque display, uno anche a 8K",
      "Silenzioso anche sotto carico, solo 9,5 cm di altezza"
    ],
    "rating": {
      "value": 4.9,
      "count": 27
    },
    "tags": [
      "mac studio",
      "workstation",
      "video editing",
      "3d",
      "apple silicon"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "dell-xps-14",
    "name": "Dell XPS 14",
    "brand": "dell",
    "category": "notebook",
    "shortDescription": "Ultraportatile in alluminio con display OLED 3.2K, Core Ultra 7 e 16 GB di RAM: potenza e autonomia per chi lavora ovunque.",
    "description": [
      "Il Dell XPS 14 unisce un telaio in alluminio lavorato dal pieno a un display OLED 3.2K da 14,5 pollici con copertura DCI-P3 al 100%, ideale per fotoritocco, video e lunghe sessioni di lavoro.",
      "Il processore Intel Core Ultra 7 con NPU integrata accelera le funzioni AI di Windows 11, mentre i 16 GB di memoria LPDDR5x e l'SSD da 512 GB garantiscono reattività in ogni scenario. La tastiera a doppio livello e il touchpad in vetro senza bordi completano l'esperienza premium."
    ],
    "price": 189900,
    "compareAtPrice": 204900,
    "sku": "DEL-XPS14-U7-16-512",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/dell-xps-14-1.webp",
        "alt": "Dell XPS 14 aperto, vista angolare, colore platino",
        "width": 2060,
        "height": 1941,
        "source": "https://www.dell.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/dell-xps-14-3.webp",
        "alt": "Dell XPS 14 di profilo, chiuso",
        "width": 2053,
        "height": 1206,
        "source": "https://www.dell.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/dell-xps-14-4.webp",
        "alt": "Dell XPS 14 aperto, vista frontale",
        "width": 2057,
        "height": 1230,
        "source": "https://www.dell.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core Ultra 7 155H, 16 core"
      },
      {
        "label": "Memoria",
        "value": "16 GB LPDDR5x 7467 MT/s"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 512 GB PCIe 4.0 NVMe"
      },
      {
        "label": "Display",
        "value": "14,5\" OLED 3.2K (3200×2000), 120 Hz, touch"
      },
      {
        "label": "Grafica",
        "value": "Intel Arc integrata"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Porte",
        "value": "3× Thunderbolt 4, microSD, jack cuffie"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        "label": "Batteria",
        "value": "69,5 Wh, ricarica USB-C 100 W"
      },
      {
        "label": "Peso",
        "value": "1,68 kg"
      },
      {
        "label": "Colore",
        "value": "Platino"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "Display OLED 3.2K da 14,5 pollici a 120 Hz",
      "Core Ultra 7 con NPU per le funzioni AI",
      "Telaio in alluminio, tastiera retroilluminata",
      "3 porte Thunderbolt 4"
    ],
    "rating": {
      "value": 4.6,
      "count": 58
    },
    "tags": [
      "notebook",
      "oled",
      "ultraportatile",
      "intel"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "dell-precision-3680-tower",
    "name": "Dell Precision 3680 Tower",
    "brand": "dell",
    "category": "workstation",
    "shortDescription": "Workstation tower certificata ISV con Core i7, 32 GB e NVIDIA RTX A2000 per CAD, rendering e analisi dati.",
    "description": [
      "La Precision 3680 è una workstation tower pensata per studi tecnici e uffici di progettazione: certificazioni ISV per AutoCAD, SolidWorks e Revit, alimentatore da 500 W e uno chassis facilmente espandibile senza attrezzi.",
      "La configurazione proposta abbina un Core i7-14700 a 20 core, 32 GB di memoria DDR5 e una NVIDIA RTX A2000 da 12 GB, con SSD NVMe da 1 TB. Windows 11 Pro preinstallato e 3 anni di garanzia on-site del produttore."
    ],
    "price": 229900,
    "sku": "DEL-P3680-I7-32-1T",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/dell-precision-3680-tower-3.webp",
        "alt": "Dell Precision 3680 Tower, vista frontale",
        "width": 1034,
        "height": 2060,
        "source": "https://www.dell.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/dell-precision-3680-tower-1.webp",
        "alt": "Dell Precision 3680 Tower, vista angolare",
        "width": 2060,
        "height": 3151,
        "source": "https://www.dell.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core i7-14700, 20 core"
      },
      {
        "label": "Memoria",
        "value": "32 GB DDR5 4400 MT/s (2×16 GB)"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 1 TB PCIe NVMe"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA RTX A2000 12 GB"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Pro"
      },
      {
        "label": "Alimentatore",
        "value": "500 W 80 Plus Platinum"
      },
      {
        "label": "Porte",
        "value": "USB-C 3.2, 6× USB-A, 4× DisplayPort, RJ-45"
      },
      {
        "label": "Connettività",
        "value": "Ethernet 1 Gb, Wi-Fi 6E opzionale"
      },
      {
        "label": "Dimensioni",
        "value": "36,5 × 17,5 × 42,4 cm"
      },
      {
        "label": "Garanzia",
        "value": "3 anni on-site"
      }
    ],
    "highlights": [
      "Certificata ISV per AutoCAD, SolidWorks e Revit",
      "NVIDIA RTX A2000 12 GB",
      "Espandibile senza attrezzi",
      "3 anni di garanzia on-site"
    ],
    "rating": {
      "value": 4.7,
      "count": 21
    },
    "tags": [
      "workstation",
      "cad",
      "rendering",
      "intel"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "hp-omen-35l-rtx-5070",
    "name": "HP OMEN 35L",
    "brand": "hp",
    "category": "gaming",
    "shortDescription": "Desktop gaming con RTX 5070, Ryzen 7 e 32 GB DDR5: 1440p ad alto frame rate, già assemblato e aggiornabile.",
    "description": [
      "L'OMEN 35L è il desktop gaming compatto di HP: telaio da 35 litri con pannello in vetro temperato, raffreddamento a liquido per la CPU e componenti standard, così puoi aggiornarlo come un PC assemblato.",
      "Con RTX 5070 da 12 GB, Ryzen 7 8700G e 32 GB di DDR5 gioca in 1440p con ray tracing e DLSS 4 attivi. SSD da 1 TB e Wi-Fi 6E di serie."
    ],
    "price": 179900,
    "sku": "HP-OMEN35L-R7-5070",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/hp-omen-35l-rtx-5070-3.jpg",
        "alt": "HP OMEN 35L, vista frontale con pannello in vetro",
        "width": 1254,
        "height": 2429,
        "source": "https://www.hp.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/hp-omen-35l-rtx-5070-4.jpg",
        "alt": "HP OMEN 35L, vista angolare",
        "width": 1723,
        "height": 2427,
        "source": "https://www.hp.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "AMD Ryzen 7 8700G, 8 core"
      },
      {
        "label": "Memoria",
        "value": "32 GB DDR5 5200 MT/s"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 1 TB PCIe 4.0 NVMe"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA GeForce RTX 5070 12 GB"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Raffreddamento",
        "value": "AIO 120 mm per la CPU"
      },
      {
        "label": "Alimentatore",
        "value": "800 W 80 Plus Gold"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3, Ethernet 2,5 Gb"
      },
      {
        "label": "Dimensioni",
        "value": "41,5 × 22 × 41 cm"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "RTX 5070 con DLSS 4",
      "Componenti standard, facile da aggiornare",
      "Raffreddamento a liquido della CPU",
      "Pannello laterale in vetro temperato"
    ],
    "rating": {
      "value": 4.5,
      "count": 34
    },
    "tags": [
      "gaming",
      "desktop",
      "rtx 5070",
      "amd"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "hp-spectre-x360-14",
    "name": "HP Spectre x360 14",
    "brand": "hp",
    "category": "notebook",
    "shortDescription": "Convertibile 2 in 1 con OLED 2.8K touch, Core Ultra 7, 16 GB e 1 TB: elegante per lavoro e creatività.",
    "description": [
      "Lo Spectre x360 14 è il convertibile premium di HP: cerniera a 360 gradi, penna inclusa e un display OLED 2.8K touch da 14 pollici con rapporto 16:10 e 120 Hz.",
      "Il Core Ultra 7 con 16 GB di RAM e SSD da 1 TB affronta senza sforzo fogli di calcolo, montaggio leggero e videochiamate con la webcam 9 MP. Autonomia fino a 15 ore."
    ],
    "price": 169900,
    "sku": "HP-SPX360-U7-16-1T",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/hp-spectre-x360-14-1.webp",
        "alt": "HP Spectre x360 14 aperto, vista angolare, colore blu notte",
        "width": 2060,
        "height": 1738,
        "source": "https://www.hp.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/hp-spectre-x360-14-2.webp",
        "alt": "HP Spectre x360 14 in modalità tenda",
        "width": 2060,
        "height": 1340,
        "source": "https://www.hp.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core Ultra 7 155H"
      },
      {
        "label": "Memoria",
        "value": "16 GB LPDDR5x"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 1 TB PCIe 4.0 NVMe"
      },
      {
        "label": "Display",
        "value": "14\" OLED 2.8K (2880×1800) touch, 120 Hz"
      },
      {
        "label": "Grafica",
        "value": "Intel Arc integrata"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Porte",
        "value": "2× Thunderbolt 4, USB-A, jack cuffie"
      },
      {
        "label": "Batteria",
        "value": "68 Wh"
      },
      {
        "label": "Peso",
        "value": "1,44 kg"
      },
      {
        "label": "Colore",
        "value": "Blu notte"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "Convertibile a 360 gradi con penna inclusa",
      "OLED 2.8K touch a 120 Hz",
      "Webcam 9 MP con otturatore fisico",
      "Fino a 15 ore di autonomia"
    ],
    "rating": {
      "value": 4.5,
      "count": 27
    },
    "tags": [
      "notebook",
      "convertibile",
      "oled",
      "intel"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "lenovo-thinkpad-x1-carbon-gen-13",
    "name": "Lenovo ThinkPad X1 Carbon Gen 13",
    "brand": "lenovo",
    "category": "notebook",
    "shortDescription": "Il business notebook da meno di 1 kg: Core Ultra 7, 32 GB, 1 TB e display OLED 2.8K con tastiera ThinkPad.",
    "description": [
      "Il ThinkPad X1 Carbon Gen 13 pesa 986 grammi grazie al telaio in fibra di carbonio e alluminio riciclato, ed è certificato MIL-STD-810H per resistere a urti, polvere e temperature estreme.",
      "Core Ultra 7 268V con NPU da 48 TOPS, 32 GB di memoria e SSD da 1 TB. La tastiera ThinkPad e il TrackPoint restano il riferimento per chi scrive molto. Autonomia fino a 17 ore."
    ],
    "price": 219900,
    "compareAtPrice": 234900,
    "sku": "LEN-X1C13-U7-32-1T",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/lenovo-thinkpad-x1-carbon-gen-13-1.jpg",
        "alt": "Lenovo ThinkPad X1 Carbon Gen 13 aperto, vista frontale, nero",
        "width": 1715,
        "height": 1325,
        "source": "https://www.lenovo.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/lenovo-thinkpad-x1-carbon-gen-13-2.jpg",
        "alt": "Lenovo ThinkPad X1 Carbon Gen 13, vista angolare",
        "width": 1717,
        "height": 1075,
        "source": "https://www.lenovo.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/lenovo-thinkpad-x1-carbon-gen-13-3.jpg",
        "alt": "Lenovo ThinkPad X1 Carbon Gen 13 chiuso",
        "width": 1698,
        "height": 512,
        "source": "https://www.lenovo.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core Ultra 7 268V"
      },
      {
        "label": "Memoria",
        "value": "32 GB LPDDR5x 8533 MT/s"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 1 TB PCIe 4.0 NVMe"
      },
      {
        "label": "Display",
        "value": "14\" OLED 2.8K (2880×1800), 120 Hz"
      },
      {
        "label": "Grafica",
        "value": "Intel Arc 140V integrata"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Pro"
      },
      {
        "label": "Porte",
        "value": "2× Thunderbolt 4, 2× USB-A, HDMI 2.1"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 7, Bluetooth 5.4"
      },
      {
        "label": "Batteria",
        "value": "57 Wh"
      },
      {
        "label": "Peso",
        "value": "986 g"
      },
      {
        "label": "Garanzia",
        "value": "3 anni"
      }
    ],
    "highlights": [
      "Meno di 1 kg, certificato MIL-STD-810H",
      "Tastiera ThinkPad con TrackPoint",
      "OLED 2.8K a 120 Hz",
      "Windows 11 Pro e 3 anni di garanzia"
    ],
    "rating": {
      "value": 4.8,
      "count": 73
    },
    "tags": [
      "notebook",
      "business",
      "oled",
      "intel"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "lenovo-legion-pro-7-16",
    "name": "Lenovo Legion Pro 7i 16",
    "brand": "lenovo",
    "category": "gaming",
    "shortDescription": "Notebook gaming da 16 pollici con RTX 5080, Core Ultra 9 e display OLED 240 Hz: prestazioni da desktop, ovunque.",
    "description": [
      "Il Legion Pro 7i è il portatile gaming di punta di Lenovo: GeForce RTX 5080 da 16 GB fino a 175 W, Core Ultra 9 275HX e raffreddamento Coldfront Vapor con camera di vapore.",
      "Il display OLED 16 pollici 2.5K a 240 Hz con 500 nit copre il 100% DCI-P3. 32 GB DDR5 e SSD da 1 TB PCIe 5.0, tastiera con illuminazione per tasto."
    ],
    "price": 329900,
    "sku": "LEN-LP7I16-U9-5080",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/lenovo-legion-pro-7-16-1.jpg",
        "alt": "Lenovo Legion Pro 7i 16 aperto, vista frontale",
        "width": 1722,
        "height": 1677,
        "source": "https://www.lenovo.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/lenovo-legion-pro-7-16-2.jpg",
        "alt": "Lenovo Legion Pro 7i 16, vista angolare",
        "width": 1755,
        "height": 1175,
        "source": "https://www.lenovo.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/lenovo-legion-pro-7-16-3.jpg",
        "alt": "Lenovo Legion Pro 7i 16, retro con prese d'aria",
        "width": 1578,
        "height": 1728,
        "source": "https://www.lenovo.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core Ultra 9 275HX, 24 core"
      },
      {
        "label": "Memoria",
        "value": "32 GB DDR5 6400 MT/s"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 1 TB PCIe 5.0 NVMe"
      },
      {
        "label": "Display",
        "value": "16\" OLED 2.5K (2560×1600), 240 Hz"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA GeForce RTX 5080 16 GB"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Porte",
        "value": "Thunderbolt 4, 3× USB-A, HDMI 2.1, RJ-45"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 7, Bluetooth 5.4"
      },
      {
        "label": "Batteria",
        "value": "99,9 Wh"
      },
      {
        "label": "Peso",
        "value": "2,7 kg"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "RTX 5080 fino a 175 W",
      "OLED 2.5K a 240 Hz",
      "Camera di vapore Coldfront",
      "SSD PCIe 5.0 da 1 TB"
    ],
    "rating": {
      "value": 4.7,
      "count": 41
    },
    "tags": [
      "gaming",
      "notebook",
      "rtx 5080",
      "intel"
    ],
    "featured": true,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "asus-rog-zephyrus-g14",
    "name": "ASUS ROG Zephyrus G14",
    "brand": "asus",
    "category": "gaming",
    "shortDescription": "Gaming sottile da 14 pollici con RTX 5070 Ti, Ryzen AI 9 e OLED 120 Hz: 1,5 kg di potenza silenziosa.",
    "description": [
      "Lo Zephyrus G14 è il portatile gaming più elegante in catalogo: chassis in alluminio CNC da 1,59 cm, display ROG Nebula OLED 3K a 120 Hz e altoparlanti con woofer.",
      "Ryzen AI 9 HX 370 e GeForce RTX 5070 Ti da 12 GB con 32 GB di memoria e SSD da 1 TB. Compatibile con G-Sync sul display integrato e con ricarica USB-C."
    ],
    "price": 249900,
    "sku": "ASU-G14-R9-5070TI",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/asus-rog-zephyrus-g14-1.webp",
        "alt": "ASUS ROG Zephyrus G14 aperto, vista angolare, grigio",
        "width": 1412,
        "height": 1007,
        "source": "https://www.asus.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/asus-rog-zephyrus-g14-2.webp",
        "alt": "ASUS ROG Zephyrus G14, vista frontale",
        "width": 1412,
        "height": 872,
        "source": "https://www.asus.com",
        "license": "manufacturer"
      },
      {
        "src": "/images/products/asus-rog-zephyrus-g14-3.png",
        "alt": "ASUS ROG Zephyrus G14 chiuso, vista laterale con le porte",
        "width": 1411,
        "height": 194,
        "source": "https://www.asus.com",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "AMD Ryzen AI 9 HX 370, 12 core"
      },
      {
        "label": "Memoria",
        "value": "32 GB LPDDR5x 7500 MT/s"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 1 TB PCIe 4.0 NVMe"
      },
      {
        "label": "Display",
        "value": "14\" OLED 3K (2880×1800), 120 Hz"
      },
      {
        "label": "Grafica",
        "value": "NVIDIA GeForce RTX 5070 Ti 12 GB"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Home"
      },
      {
        "label": "Porte",
        "value": "USB4, USB-C 3.2, 2× USB-A, HDMI 2.1, microSD"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        "label": "Batteria",
        "value": "73 Wh"
      },
      {
        "label": "Peso",
        "value": "1,5 kg"
      },
      {
        "label": "Garanzia",
        "value": "2 anni"
      }
    ],
    "highlights": [
      "RTX 5070 Ti in 1,5 kg",
      "ROG Nebula OLED 3K a 120 Hz",
      "Chassis in alluminio CNC",
      "Ricarica via USB-C"
    ],
    "rating": {
      "value": 4.7,
      "count": 52
    },
    "tags": [
      "gaming",
      "notebook",
      "oled",
      "amd"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  },
  {
    "slug": "asus-nuc-14-pro",
    "name": "ASUS NUC 14 Pro",
    "brand": "asus",
    "category": "mini-pc",
    "shortDescription": "Mini PC da 0,5 litri con Core Ultra 5, 16 GB e 512 GB: silenzioso e completo di porte per ufficio e casa.",
    "description": [
      "Il NUC 14 Pro sta nel palmo di una mano e si monta dietro il monitor con la staffa VESA inclusa. Core Ultra 5 125H con grafica Arc, 16 GB di DDR5 e SSD da 512 GB, il tutto con un consumo minimo.",
      "Quattro uscite video, Thunderbolt 4, Ethernet 2,5 Gb e Wi-Fi 6E: perfetto come postazione da ufficio, media center o PC per la famiglia. Immagine a scopo illustrativo."
    ],
    "price": 79900,
    "sku": "ASU-NUC14P-U5-16-512",
    "availability": "in_stock",
    "images": [
      {
        "src": "/images/products/placeholder.png",
        "alt": "ASUS NUC 14 Pro, immagine segnaposto",
        "width": 1600,
        "height": 1200,
        "source": "",
        "license": "manufacturer"
      }
    ],
    "specs": [
      {
        "label": "Processore",
        "value": "Intel Core Ultra 5 125H"
      },
      {
        "label": "Memoria",
        "value": "16 GB DDR5 5600 MT/s"
      },
      {
        "label": "Archiviazione",
        "value": "SSD 512 GB PCIe 4.0 NVMe"
      },
      {
        "label": "Grafica",
        "value": "Intel Arc integrata"
      },
      {
        "label": "Sistema operativo",
        "value": "Windows 11 Pro"
      },
      {
        "label": "Porte",
        "value": "2× Thunderbolt 4, 3× USB-A, 2× HDMI 2.1, RJ-45"
      },
      {
        "label": "Connettività",
        "value": "Wi-Fi 6E, Bluetooth 5.3, Ethernet 2,5 Gb"
      },
      {
        "label": "Dimensioni",
        "value": "11,7 × 11,2 × 3,7 cm"
      },
      {
        "label": "Garanzia",
        "value": "3 anni"
      }
    ],
    "highlights": [
      "0,5 litri, montabile dietro il monitor",
      "Fino a 4 monitor",
      "Thunderbolt 4 e Ethernet 2,5 Gb",
      "Windows 11 Pro"
    ],
    "rating": {
      "value": 4.4,
      "count": 19
    },
    "tags": [
      "mini pc",
      "ufficio",
      "intel"
    ],
    "featured": false,
    "updatedAt": "2026-09-22"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductsByBrand(slug: string): Product[] {
  return products.filter((p) => p.brand === slug);
}

/** Featured products first, then by rating. */
export function getFeaturedProducts(limit = 8): Product[] {
  return [...products]
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || (b.rating?.value ?? 0) - (a.rating?.value ?? 0))
    .slice(0, limit);
}

/** Case- and accent-insensitive match on name, brand, description and tags. */
export function searchProducts(query: string): Product[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return products;
  return products.filter((p) => {
    const haystack = normalize([p.name, p.brand, p.shortDescription, ...(p.tags ?? []), ...p.specs.map((s) => s.value)].join(" "));
    return terms.every((t) => haystack.includes(t));
  });
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const others = products.filter((p) => p.slug !== product.slug);
  const sameCategory = others.filter((p) => p.category === product.category);
  const sameBrand = others.filter((p) => p.brand === product.brand && p.category !== product.category);
  const rest = others.filter((p) => !sameCategory.includes(p) && !sameBrand.includes(p));
  return [...sameCategory, ...sameBrand, ...rest].slice(0, limit);
}
