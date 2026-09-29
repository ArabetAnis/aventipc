import type { Dictionary } from "../types";

/**
 * French — France and Belgium. Translated and adapted from it.ts.
 * SEO: each keyword page uses its keyword naturally about once every 100 words.
 */
const fr: Dictionary = {
  meta: {
    homeTitle: "AventiPC — Ordinateurs portables d'occasion comme neufs",
    homeDescription:
      "PC et portables d'occasion comme neufs : Lenovo ThinkBook et Dell Latitude testés, avec photos réelles de l'exemplaire. Achat protégé sur Vinted.",
    tagline: "PC et ordinateurs portables d'occasion comme neufs, photographiés et décrits tels qu'ils sont.",
    ogTagline: "PC et portables d'occasion comme neufs, avec photos réelles",
    ogBadge: "Comme neuf · Photos réelles · Achat sur Vinted",
  },
  countries: { IT: "Italie", FR: "France", BE: "Belgique", ES: "Espagne", DE: "Allemagne" },
  ui: {
    skipToContent: "Aller au contenu",
    homeAria: "AventiPC, retour à l'accueil",
    mainMenu: "Menu principal",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    breadcrumb: "Fil d'Ariane",
    home: "Accueil",
    nav: { products: "Produits", howToBuy: "Comment acheter", about: "Qui sommes-nous", contact: "Contact" },
    footer: {
      products: "Produits",
      allProducts: "Tous les produits",
      searches: "Recherches fréquentes",
      info: "Informations",
      faq: "Questions fréquentes",
      company: "Entreprise",
      note: "Prix en euros. Vente via Vinted. Les images du modèle sont indicatives, les photos réelles montrent l'exemplaire mis en vente.",
    },
    product: {
      likeNew: "Comme neuf",
      available: "Disponible",
      sold: "Vendu",
      comingSoon: "Bientôt disponible",
      buyOnVinted: "Acheter sur Vinted",
      askAvailability: "Demander la disponibilité",
      priceOnRequest: "Prix sur demande",
      vintedNote: "Vous payez sur Vinted avec la Protection acheteurs de la plateforme.",
      photosNote: "La première image montre le modèle, les autres sont des photos réelles de l'exemplaire en vente.",
      questions: "Des questions ou besoin d'autres photos ?",
      writeUs: "Écrivez-nous",
      description: "Description",
      specs: "Fiche technique",
      specsCaption: (name) => `Caractéristiques techniques du ${name}`,
      related: "Autres ordinateurs en vente",
      gallery: (name) => `Images du ${name}`,
      showImage: (i, n) => `Afficher l'image ${i} sur ${n}`,
      modelImage: "Image du modèle",
      realPhoto: "Photo réelle de l'exemplaire",
    },
    catalog: {
      title: "PC et portables d'occasion comme neufs en vente",
      h1: "PC et ordinateurs portables d'occasion en vente",
      intro:
        "Ordinateurs portables et mini PC d'occasion en état comme neuf, testés et photographiés un par un. Chaque ordinateur s'achète sur Vinted avec la Protection acheteurs.",
      metaDescription:
        "Tous les PC et portables d'occasion AventiPC : Lenovo ThinkBook, Dell Latitude Rugged et ThinkCentre comme neufs, avec photos réelles. Achat sur Vinted.",
      count: (n) => (n === 1 ? "1 ordinateur en vente" : `${n} ordinateurs en vente`),
    },
    brand: {
      count: (n) => (n === 1 ? "1 ordinateur disponible" : `${n} ordinateurs disponibles`),
      others: "Autres marques",
      empty: "Aucun ordinateur de cette marque pour le moment. Découvrez les autres produits en vente.",
    },
    contact: {
      hours: "Du lundi au vendredi, de 9 h à 18 h",
      form: {
        name: "Nom",
        email: "E-mail",
        message: "Message",
        submit: "Envoyer le message",
        sent: "Message envoyé. Nous vous répondons sous un jour ouvré.",
      },
    },
    legalUpdated: "Dernière mise à jour : 29 septembre 2026",
    notFound: {
      title: "Cette page n'existe pas.",
      text: "Le lien a peut-être changé ou l'ordinateur a déjà été vendu. Repartez des produits en vente.",
      home: "Retour à l'accueil",
      products: "Voir les produits",
    },
    error: {
      title: "Un problème est survenu.",
      text: "La page ne s'est pas chargée correctement. Réessayez dans un instant.",
      retry: "Réessayer",
    },
  },
  home: {
    hero: {
      title: "PC et portables d'occasion, comme neufs.",
      subtitle:
        "Des Lenovo et Dell professionnels en état quasi parfait, testés et photographiés tels qu'ils sont. Vous les achetez sur Vinted, avec la Protection acheteurs.",
      primaryCta: "Voir les produits",
      secondaryCta: "Comment acheter",
      imageAlt: "Lenovo ThinkBook 14 IIL, ordinateur portable d'occasion comme neuf",
    },
    reassurance: [
      { icon: "check", title: "Comme neufs", text: "État proche de 100/100 : chaque ordinateur est testé avant la vente." },
      { icon: "camera", title: "Photos réelles", text: "En plus de l'image du modèle, vous voyez les photos de l'exemplaire que vous recevez." },
      { icon: "bag", title: "Achat protégé sur Vinted", text: "Vous payez sur Vinted et bénéficiez de la Protection acheteurs de la plateforme." },
      { icon: "headset", title: "Contact direct", text: "Écrivez-nous pour d'autres photos ou des détails techniques avant d'acheter." },
    ],
    featuredTitle: "Actuellement en vente",
    featuredText: "Chaque ordinateur est un exemplaire unique : une fois vendu, il disparaît du site.",
    whyTitle: "Pourquoi acheter chez AventiPC",
    searchesTitle: "PC et portables d'occasion dans votre ville",
    searchesText:
      "Guides et disponibilités pour trouver un ordinateur à Paris, Lyon, Marseille, Toulouse, Nice, Bruxelles, Liège et dans d'autres villes de France et de Belgique.",
    faqTitle: "Questions fréquentes",
    faqText: "Comment acheter, dans quel état sont les ordinateurs et comment nous contacter.",
  },
  faq: [
    {
      question: "Comment acheter un ordinateur ?",
      answer:
        "Ouvrez la fiche du produit et cliquez sur « Acheter sur Vinted ». L'annonce du même ordinateur s'ouvre : vous payez et recevez la livraison via Vinted, avec la Protection acheteurs de la plateforme.",
    },
    {
      question: "Les photos sont-elles celles de l'ordinateur que je reçois ?",
      answer:
        "Oui. La première image montre le modèle sur fond blanc, toutes les autres sont des photos réelles de l'exemplaire en vente, prises par nos soins.",
    },
    {
      question: "Dans quel état sont les ordinateurs ?",
      answer:
        "Ils sont d'occasion, mais en état comme neuf, proche de 100/100. Nous les allumons et les testons avant la vente, et la fiche indique l'état de la batterie et chaque détail.",
    },
    {
      question: "Livrez-vous en dehors de l'Italie ?",
      answer:
        "Nous vendons via Vinted : au moment de l'achat, Vinted affiche les options de livraison disponibles pour votre adresse, en France, en Belgique et dans les autres pays où la plateforme est présente.",
    },
    {
      question: "Le système d'exploitation est-il inclus ?",
      answer:
        "Cela dépend de l'ordinateur, et c'est toujours indiqué dans la fiche technique. Certains ont Windows installé, d'autres sont vendus sans système d'exploitation.",
    },
    {
      question: "Puis-je voir l'ordinateur en personne ?",
      answer: "Oui, à Milan, sur rendez-vous. Écrivez-nous ou appelez-nous pour fixer un horaire.",
    },
  ],
  products: {
    "lenovo-thinkbook-14-iil": {
      kind: "PC portable",
      title: "Lenovo ThinkBook 14 IIL d'occasion, comme neuf",
      shortDescription:
        "PC portable 14\" Full HD IPS avec Intel Core i3-1005G1, 8 Go DDR4 et SSD NVMe 256 Go. D'occasion, comme neuf, clavier rétroéclairé.",
      description: [
        "Le Lenovo ThinkBook 14 IIL est l'ordinateur portable professionnel de Lenovo pour le travail et les études : coque en aluminium Mineral Grey, clavier rétroéclairé et webcam avec cache de confidentialité.",
        "Cet exemplaire d'occasion est en état comme neuf. Il embarque un Intel Core i3-1005G1 de 10e génération, 8 Go de mémoire DDR4 extensible et un SSD M.2 NVMe de 256 Go pour un démarrage rapide. L'écran de 14 pouces est Full HD IPS antireflet.",
        "Il convient à la navigation, à Office, aux visioconférences et aux cours à distance. Il est vendu avec Windows 10 Pro, prêt pour la mise à jour vers Windows 11. Les photos réelles sont celles de l'exemplaire en vente.",
      ],
      highlights: [
        "État comme neuf, testé",
        "Intel Core i3-1005G1 avec 8 Go DDR4",
        "SSD NVMe 256 Go, démarrage rapide",
        "Écran 14\" Full HD IPS antireflet",
        "Clavier rétroéclairé et webcam avec cache",
      ],
      specs: [
        { label: "Processeur", value: "Intel Core i3-1005G1 (2 cœurs, 4 threads, jusqu'à 3,4 GHz)" },
        { label: "Mémoire", value: "8 Go DDR4, extensible" },
        { label: "Stockage", value: "SSD M.2 NVMe 256 Go" },
        { label: "Écran", value: "14\" Full HD (1920×1080) IPS antireflet" },
        { label: "Carte graphique", value: "Intel UHD Graphics" },
        { label: "Système d'exploitation", value: "Windows 10 Pro, compatible Windows 11" },
        { label: "Clavier", value: "Rétroéclairé" },
        { label: "Webcam", value: "Intégrée, avec cache de confidentialité" },
        { label: "Châssis", value: "Aluminium, coloris Mineral Grey" },
        { label: "Batterie", value: "En bon état" },
        { label: "État", value: "D'occasion, comme neuf" },
      ],
      imageAlts: [
        "Lenovo ThinkBook 14 IIL, image du modèle sur fond blanc",
        "Lenovo ThinkBook 14 IIL d'occasion ouvert, vue de face avec le clavier",
        "Lenovo ThinkBook 14 IIL fermé, capot en aluminium gris avec logo ThinkBook",
        "Lenovo ThinkBook 14 IIL, côté gauche avec ports USB, HDMI et USB-C",
        "Lenovo ThinkBook 14 IIL, côté droit avec lecteur de cartes et ports USB",
        "Étiquette sous le Lenovo ThinkBook 14-IIL avec le modèle 20SL",
      ],
    },
    "dell-latitude-14-rugged-5414": {
      kind: "PC portable durci",
      title: "Dell Latitude 5414 Rugged d'occasion, comme neuf",
      shortDescription:
        "PC portable durci 14\" Full HD tactile, Intel Core i5-6300U, 8 Go et SSD 256 Go. Ports série RS232, clavier rétroéclairé, comme neuf.",
      description: [
        "Le Dell Latitude 5414 Rugged est un ordinateur portable durci, conçu pour travailler hors du bureau : son châssis résiste aux chocs, aux vibrations, à la poussière et à l'humidité, ses angles sont protégés et sa poignée est intégrée.",
        "Cet exemplaire d'occasion est en état comme neuf, testé et parfaitement fonctionnel. Il dispose d'un Intel Core i5-6300U, de 8 Go de mémoire, d'un SSD de 256 Go et d'un écran tactile Full HD (1920×1080) de 14 pouces. Le clavier rétroéclairé reste lisible dans l'obscurité ou à bord d'un véhicule de service.",
        "Les ports série RS232 (DB9) natifs permettent de brancher des outils de diagnostic, en plus de l'Ethernet RJ-45, de l'USB 3.0, du HDMI et du VGA. Idéal pour les garages, les chantiers, les entrepôts et les techniciens sur le terrain. La batterie est en excellent état.",
      ],
      highlights: [
        "État comme neuf, testé à 100 %",
        "Châssis durci, résistant aux chocs et à la poussière",
        "Écran tactile 14\" Full HD",
        "Ports série RS232 natifs",
        "Clavier rétroéclairé, batterie en excellent état",
      ],
      specs: [
        { label: "Processeur", value: "Intel Core i5-6300U" },
        { label: "Mémoire", value: "8 Go" },
        { label: "Stockage", value: "SSD 256 Go" },
        { label: "Écran", value: "14\" Full HD (1920×1080), tactile" },
        { label: "Clavier", value: "Rétroéclairé" },
        { label: "Ports", value: "Série RS232 (DB9), Ethernet RJ-45, USB 3.0, HDMI, VGA" },
        { label: "Châssis", value: "Durci : résiste aux chocs, aux vibrations, à la poussière et à l'humidité, poignée intégrée" },
        { label: "Batterie", value: "Excellent état" },
        { label: "État", value: "D'occasion, comme neuf, testé et fonctionnel à 100 %" },
      ],
      imageAlts: [
        "Dell Latitude 14 Rugged, image du modèle sur fond blanc",
        "Dell Latitude 5414 Rugged d'occasion ouvert sur une table en bois",
        "Dell Latitude 5414 Rugged allumé, avec clavier rétroéclairé rouge",
        "Dell Latitude 5414 Rugged fermé, angles renforcés et poignée",
        "Clavier rétroéclairé du Dell Latitude 5414 Rugged",
        "Dell Latitude 5414 Rugged, côté avec ports protégés par des caches",
      ],
    },
    "lenovo-thinkcentre-m710q-tiny": {
      kind: "Mini PC",
      title: "Lenovo ThinkCentre M710q Tiny d'occasion",
      shortDescription:
        "Mini PC Intel Core i5-6500T, 4 Go DDR4 (un emplacement libre), disque dur 500 Go et emplacement NVMe libre. Comme neuf, sans système d'exploitation.",
      description: [
        "Le Lenovo ThinkCentre M710q Tiny est un mini PC de bureau pas plus grand qu'un livre : il se fixe derrière l'écran, consomme peu et reste silencieux.",
        "Cet exemplaire d'occasion est en état comme neuf. Il dispose d'un Intel Core i5-6500T à quatre cœurs, de 4 Go de mémoire DDR4 avec un emplacement libre pour en ajouter et d'un disque de 500 Go. Un emplacement M.2 NVMe libre permet aussi d'installer un SSD rapide.",
        "Il est vendu sans système d'exploitation et constitue une bonne base pour un PC de bureau, un media center ou un petit serveur domestique. Les photos réelles sont celles de l'exemplaire en vente.",
      ],
      highlights: [
        "État comme neuf",
        "Intel Core i5-6500T basse consommation",
        "Emplacements RAM et NVMe libres pour le faire évoluer",
        "Format Tiny, se fixe derrière l'écran",
      ],
      specs: [
        { label: "Processeur", value: "Intel Core i5-6500T (4 cœurs)" },
        { label: "Mémoire", value: "4 Go DDR4, un emplacement libre" },
        { label: "Stockage", value: "Disque dur 500 Go + emplacement M.2 NVMe libre" },
        { label: "Carte graphique", value: "Intel HD Graphics 530" },
        { label: "Système d'exploitation", value: "Non inclus" },
        { label: "Format", value: "Mini PC Tiny, environ 1 litre" },
        { label: "État", value: "D'occasion, comme neuf" },
      ],
      imageAlts: [
        "Lenovo ThinkCentre M710 Tiny, image du modèle : face avant et arrière sur fond blanc",
        "Lenovo ThinkCentre M710q Tiny d'occasion tenu en main, face avant",
        "Deux Lenovo ThinkCentre Tiny empilés, vue de face",
        "Face avant du Lenovo ThinkCentre M710q Tiny avec ports USB et audio",
        "Arrière du Lenovo ThinkCentre M710q Tiny avec ports USB, Ethernet, VGA et DisplayPort",
      ],
    },
  },
  brands: {
    lenovo: {
      title: "Lenovo d'occasion : ThinkBook et ThinkCentre",
      metaDescription:
        "Ordinateurs portables et mini PC Lenovo d'occasion comme neufs, avec photos réelles et caractéristiques vérifiées. Achat protégé sur Vinted.",
      tagline: "ThinkBook et ThinkCentre d'occasion, comme neufs.",
      whyTitle: "Pourquoi choisir un Lenovo d'occasion",
      description: [
        "Les gammes professionnelles de Lenovo sont conçues pour le bureau : claviers confortables, coques solides et composants faciles à remplacer. C'est pour cela qu'elles vieillissent bien et comptent parmi les ordinateurs d'occasion les plus avantageux.",
        "Chaque Lenovo en vente est photographié par nos soins et décrit avec ses caractéristiques réelles, y compris les emplacements libres pour ajouter de la mémoire ou un SSD.",
      ],
    },
    dell: {
      title: "Dell d'occasion : Latitude Rugged comme neufs",
      metaDescription:
        "Portables Dell Latitude d'occasion comme neufs, y compris en version durcie, avec photos réelles et caractéristiques vérifiées. Achat protégé sur Vinted.",
      tagline: "Latitude d'occasion, y compris en version durcie.",
      whyTitle: "Pourquoi choisir un Dell Latitude d'occasion",
      description: [
        "Les Dell Latitude sont des ordinateurs portables professionnels conçus pour durer. La version Rugged ajoute un châssis renforcé, une poignée et des ports protégés, pour ceux qui travaillent sur un chantier, dans un atelier ou en extérieur.",
        "Chaque Dell en vente est photographié par nos soins et décrit avec ses caractéristiques réelles : processeur, mémoire, disque, écran et état de la batterie.",
      ],
    },
  },
  pages: {
    about: {
      title: "Qui sommes-nous",
      metaTitle: "Qui sommes-nous : PC d'occasion à Milan",
      metaDescription:
        "AventiPC est une petite boutique de PC d'occasion à Milan : nous choisissons des ordinateurs professionnels comme neufs, les testons et les photographions.",
      intro:
        "AventiPC est une petite boutique d'ordinateurs d'occasion à Milan. Nous choisissons des ordinateurs portables et des mini PC professionnels en état comme neuf, nous les testons et nous les mettons en vente avec des photos réelles et une description honnête.",
      sections: [
        {
          heading: "Ce que nous faisons",
          paragraphs: [
            "Nous sélectionnons des ordinateurs conçus pour durer, comme les Lenovo ThinkBook et ThinkCentre et les Dell Latitude. Chaque exemplaire est allumé, testé et photographié avant d'être mis en vente.",
          ],
        },
        {
          heading: "Pourquoi nous vendons sur Vinted",
          paragraphs: [
            "Nous sommes une petite structure. Vendre sur Vinted vous permet de payer avec des moyens que vous connaissez déjà et de bénéficier de la Protection acheteurs de la plateforme.",
          ],
        },
        {
          heading: "À votre écoute",
          paragraphs: [
            "Si vous avez un doute sur un ordinateur, écrivez-nous : nous vous répondons, nous vous envoyons d'autres photos et, si vous passez par Milan, vous pouvez le voir en personne sur rendez-vous.",
          ],
        },
      ],
    },
    howToBuy: {
      title: "Comment acheter",
      metaTitle: "Comment acheter sur Vinted en toute sécurité",
      metaDescription:
        "Les ordinateurs AventiPC s'achètent sur Vinted : le paiement, la livraison et la Protection acheteurs sont gérés par la plateforme.",
      intro: "Sur ce site, vous trouvez les photos et les caractéristiques des ordinateurs en vente. L'achat lui-même se fait sur Vinted.",
      sections: [
        {
          heading: "Choisissez l'ordinateur",
          paragraphs: ["Regardez les photos réelles et la fiche technique. S'il vous manque une information, écrivez-nous avant d'acheter."],
        },
        {
          heading: "Achetez sur Vinted",
          paragraphs: [
            "Sur la fiche du produit, cliquez sur « Acheter sur Vinted » : l'annonce du même ordinateur s'ouvre. Vous payez avec les moyens proposés par Vinted et bénéficiez de la Protection acheteurs.",
          ],
        },
        {
          heading: "Livraison et retrait",
          paragraphs: [
            "La livraison se choisit sur Vinted au moment du paiement. Si vous êtes à Milan, vous pouvez aussi retirer l'ordinateur en personne, sur rendez-vous.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      metaTitle: "Contact",
      metaDescription:
        "Écrivez à info@aventipc.com ou appelez le +39 02 1234 5678 du lundi au vendredi, de 9 h à 18 h, pour toute question sur les ordinateurs en vente.",
      intro: "Pour une question sur un ordinateur, d'autres photos ou un rendez-vous pour le voir en personne, vous pouvez nous écrire ou nous appeler.",
      sections: [
        { heading: "E-mail", paragraphs: ["Écrivez à info@aventipc.com. Nous répondons généralement sous un jour ouvré."] },
        { heading: "Téléphone", paragraphs: ["Appelez le +39 02 1234 5678 du lundi au vendredi, de 9 h à 18 h."] },
        { heading: "Où nous trouver", paragraphs: ["Via Alessandro Volta 12, 20121 Milano (Italie). Visites uniquement sur rendez-vous."] },
      ],
    },
    privacy: {
      title: "Confidentialité",
      metaTitle: "Politique de confidentialité",
      metaDescription:
        "Les données personnelles que collecte AventiPC quand vous visitez le site ou nous contactez, pourquoi nous les utilisons et vos droits selon le RGPD.",
      intro:
        "Cette politique explique quelles données personnelles nous traitons lorsque vous visitez le site ou nous écrivez, et quels sont vos droits selon le règlement (UE) 2016/679 (RGPD).",
      sections: [
        {
          heading: "Responsable du traitement",
          paragraphs: [
            "Le responsable du traitement est AventiPC, Via Alessandro Volta 12, 20121 Milano (Italie). Pour toute demande relative à vos données, écrivez à info@aventipc.com.",
          ],
        },
        {
          heading: "Données collectées",
          paragraphs: [
            "Si vous nous écrivez via le formulaire de contact ou par e-mail, nous traitons votre nom, votre adresse e-mail et le contenu du message, uniquement pour vous répondre.",
            "Les achats ont lieu sur Vinted : les données de paiement et de livraison sont traitées par Vinted, selon sa propre politique de confidentialité.",
          ],
        },
        { heading: "Cookies", paragraphs: ["Le site n'utilise ni cookies de profilage ni outils de suivi publicitaire."] },
        {
          heading: "Durée de conservation",
          paragraphs: ["Nous conservons les messages le temps nécessaire pour vous répondre, et au maximum 24 mois, puis nous les supprimons."],
        },
        {
          heading: "Vos droits",
          paragraphs: [
            "Vous pouvez demander l'accès, la rectification ou l'effacement de vos données en écrivant à info@aventipc.com. Vous pouvez aussi introduire une réclamation auprès du Garante per la protezione dei dati personali, l'autorité italienne, ou de l'autorité de protection des données de votre pays : la CNIL en France, l'APD en Belgique.",
          ],
        },
      ],
    },
    terms: {
      title: "Conditions générales",
      metaTitle: "Conditions générales d'utilisation",
      metaDescription:
        "Conditions d'utilisation du site AventiPC : le site présente des ordinateurs d'occasion, la vente a lieu sur Vinted selon les conditions de la plateforme.",
      intro: "Ce site présente les ordinateurs d'occasion mis en vente par AventiPC. En l'utilisant, vous acceptez les conditions suivantes.",
      sections: [
        {
          heading: "Qui sommes-nous",
          paragraphs: ["Le site est géré par AventiPC, Via Alessandro Volta 12, 20121 Milano (Italie), e-mail info@aventipc.com."],
        },
        {
          heading: "Informations sur les produits",
          paragraphs: [
            "Les descriptions et les photos réelles se rapportent à chaque exemplaire en vente ; les images du modèle sont indicatives. En cas de différence, l'annonce sur Vinted fait foi.",
          ],
        },
        {
          heading: "Achat",
          paragraphs: [
            "Le contrat de vente est conclu sur Vinted et suit les conditions de la plateforme, y compris pour le paiement, la livraison et la Protection acheteurs.",
          ],
        },
        { heading: "Droit applicable", paragraphs: ["Le droit italien s'applique."] },
      ],
    },
  },
  themes: {
    used: {
      keyword: "ordinateur portable d'occasion",
      label: "Ordinateurs portables d'occasion",
      hub: {
        title: "Ordinateurs portables d'occasion comme neufs",
        h1: "Ordinateurs portables d'occasion en France et en Belgique",
        metaDescription:
          "Ordinateurs portables d'occasion comme neufs : Lenovo ThinkBook et Dell Latitude testés, avec photos réelles. Livrés en France et en Belgique via Vinted.",
        intro: [
          "Nos ordinateurs portables d'occasion sont des modèles professionnels Lenovo et Dell en état comme neuf, proche de 100/100. Chaque ordinateur est testé, décrit en détail et photographié tel qu'il est.",
          "Choisissez votre ville pour savoir comment le portable arrive chez vous, ou découvrez tout de suite les ordinateurs disponibles.",
        ],
        citiesTitle: "Ordinateurs portables d'occasion dans les grandes villes",
        productsTitle: "Ordinateurs portables d'occasion disponibles",
      },
      city: {
        title: (c) => `Ordinateur portable d'occasion à ${c.name}`,
        h1: (c) => `Ordinateur portable d'occasion à ${c.name}`,
        metaDescription: (c) =>
          `Ordinateur portable d'occasion à ${c.name}${c.priceFrom ? `, à partir de ${c.priceFrom}` : ""} : Lenovo et Dell comme neufs, testés, avec photos réelles. Achat protégé sur Vinted.`,
        intro: (c) => [
          `Vous cherchez un ordinateur portable d'occasion à ${c.name} ? AventiPC sélectionne des modèles professionnels Lenovo et Dell en état comme neuf : chaque ordinateur est testé, décrit en détail et photographié tel qu'il est.`,
          c.pickup
            ? `À ${c.name}, vous pouvez aussi voir et retirer l'ordinateur en personne, sur rendez-vous. Sinon, vous l'achetez sur Vinted et le recevez avec la livraison de la plateforme.`
            : `L'ordinateur arrive à ${c.name} avec la livraison Vinted : vous payez sur la plateforme et bénéficiez de la Protection acheteurs jusqu'à la réception.`,
        ],
        productsTitle: (c) => `Ordinateurs portables d'occasion en vente à ${c.name}`,
        guideTitle: (c) => `Comment choisir un ordinateur portable d'occasion à ${c.name}`,
        guide: (c) => [
          "Un portable professionnel d'occasion coûte moins cher qu'un portable neuf d'entrée de gamme et il est souvent mieux construit : coque robuste, clavier confortable et composants faciles à remplacer. Les gammes Lenovo ThinkBook et Dell Latitude sont conçues pour l'entreprise et vieillissent bien.",
          "Avant d'acheter, regardez le processeur, la mémoire et le disque. Un Intel Core i3 ou i5 avec 8 Go de RAM et un SSD suffit pour la navigation, Office, les visioconférences et les études. Vérifiez aussi la batterie et l'écran : nos fiches les indiquent toujours.",
          `Tous nos portables sont en état quasi parfait et accompagnés de photos réelles de l'exemplaire en vente. Si vous êtes à ${c.name} et avez un doute, écrivez-nous avant l'achat : nous vous répondons et vous envoyons d'autres photos.`,
        ],
        faqTitle: (c) => `Questions sur les ordinateurs portables d'occasion à ${c.name}`,
        faq: (c) => [
          {
            question: `Livrez-vous des ordinateurs portables d'occasion à ${c.name} ?`,
            answer: `Oui. Vous achetez l'ordinateur sur Vinted et le recevez à ${c.name} avec la livraison choisie au moment du paiement, couverte par la Protection acheteurs.`,
          },
          {
            question: `Puis-je voir l'ordinateur en personne à ${c.name} ?`,
            answer: c.pickup
              ? `Oui, à ${c.name}, vous pouvez le voir et le retirer sur rendez-vous. Écrivez-nous pour fixer un horaire.`
              : `Le retrait en personne n'est possible qu'à Milan, sur rendez-vous. À ${c.name}, vous recevez l'ordinateur avec la livraison Vinted ; avant l'achat, nous pouvons vous envoyer d'autres photos.`,
          },
          {
            question: "Dans quel état sont les portables d'occasion ?",
            answer:
              "Ils sont en état comme neuf, proche de 100/100. Nous les testons avant la vente et la fiche indique l'état de la batterie et chaque détail.",
          },
        ],
        otherCitiesTitle: () => "Portables d'occasion dans d'autres villes",
        otherThemesTitle: (c) => `Autres recherches à ${c.name}`,
      },
    },
    cheap: {
      keyword: "pc portable pas cher",
      label: "PC portables pas chers",
      hub: {
        title: "PC portables pas chers, d'occasion comme neufs",
        h1: "PC portables pas chers en France et en Belgique",
        metaDescription:
          "PC portables pas chers mais fiables : Lenovo et Dell d'occasion comme neufs, avec photos réelles. Livraison en France et en Belgique, achat sur Vinted.",
        intro: [
          "Un PC portable pas cher ne doit pas forcément être un compromis. Nos modèles sont des portables professionnels d'occasion, en état comme neuf, qui coûtent moins qu'un portable neuf d'entrée de gamme et sont mieux construits.",
          "Choisissez votre ville ou découvrez tout de suite les modèles disponibles, classés du moins cher au plus cher.",
        ],
        citiesTitle: "PC portables pas chers dans les grandes villes",
        productsTitle: "PC portables pas chers disponibles",
      },
      city: {
        title: (c) => `PC portable pas cher à ${c.name}, comme neuf`,
        h1: (c) => `PC portable pas cher à ${c.name}`,
        metaDescription: (c) =>
          `PC portable pas cher à ${c.name}${c.priceFrom ? `, à partir de ${c.priceFrom}` : ""} : Lenovo et Dell d'occasion comme neufs, avec photos réelles. Achat protégé sur Vinted.`,
        intro: (c) => [
          `Vous cherchez un PC portable pas cher à ${c.name} ? Plutôt qu'un portable neuf d'entrée de gamme, nous vous proposons des modèles professionnels d'occasion, en état comme neuf${c.priceFrom ? `, à partir de ${c.priceFrom}` : ""}.`,
          c.pickup
            ? `À ${c.name}, vous pouvez retirer le portable en personne sur rendez-vous, ou l'acheter sur Vinted et le recevoir avec la livraison de la plateforme.`
            : `Vous les achetez sur Vinted et les recevez à ${c.name} avec la livraison choisie au paiement, couverte par la Protection acheteurs.`,
        ],
        productsTitle: (c) => `PC portables pas chers disponibles à ${c.name}`,
        guideTitle: (c) => `Comment choisir un PC portable pas cher à ${c.name}`,
        guide: (c) => [
          "Beaucoup de portables neufs à petit prix ont une coque en plastique fin, un disque lent et un écran peu lumineux. Au même prix, un portable professionnel d'occasion offre généralement un SSD, un meilleur clavier et une coque plus solide.",
          "Pour dépenser peu sans se tromper, choisissez au moins 8 Go de RAM et un SSD, et vérifiez l'état de la batterie. Évitez un disque dur mécanique comme unique stockage : il ralentit tout le système.",
          `Nos portables à petit prix sont testés, décrits avec précision et présentés avec des photos réelles. Si vous êtes à ${c.name} et souhaitez un conseil pour choisir, écrivez-nous.`,
        ],
        faqTitle: (c) => `Questions sur les PC portables pas chers à ${c.name}`,
        faq: (c) => [
          {
            question: "Combien coûte le portable le moins cher ?",
            answer: c.priceFrom
              ? `En ce moment, le portable le moins cher coûte ${c.priceFrom}. C'est le prix de l'annonce sur Vinted.`
              : "Les prix sont indiqués sur chaque fiche et correspondent aux annonces sur Vinted.",
          },
          {
            question: `Livrez-vous des PC portables pas chers à ${c.name} ?`,
            answer: `Oui. Vous achetez sur Vinted et recevez le portable à ${c.name} avec la livraison choisie au moment du paiement.`,
          },
          {
            question: "Un portable d'occasion à petit prix est-il fiable ?",
            answer:
              "Oui, s'il s'agit d'un modèle professionnel en bon état. Les nôtres sont comme neufs, testés avant la vente et décrits jusque dans l'état de la batterie et de l'écran.",
          },
        ],
        otherCitiesTitle: () => "Portables pas chers dans d'autres villes",
        otherThemesTitle: (c) => `Autres recherches à ${c.name}`,
      },
    },
    students: {
      keyword: "ordinateur portable étudiant",
      label: "Ordinateurs portables pour étudiants",
      hub: {
        title: "Ordinateur portable étudiant d'occasion",
        h1: "Ordinateurs portables pour étudiants en France et en Belgique",
        metaDescription:
          "Ordinateur portable étudiant fiable et abordable : Lenovo et Dell d'occasion comme neufs, avec SSD et photos réelles. Achat protégé sur Vinted.",
        intro: [
          "Un ordinateur portable étudiant doit être facile à emporter en cours, rapide à démarrer et assez robuste pour tenir toutes vos études. Les portables professionnels d'occasion comme neufs réunissent ces qualités à un prix accessible.",
          "Choisissez votre ville universitaire ou découvrez tout de suite les modèles disponibles.",
        ],
        citiesTitle: "Ordinateurs portables pour étudiants dans les villes universitaires",
        productsTitle: "Ordinateurs portables pour étudiants disponibles",
      },
      city: {
        title: (c) => `Ordinateur portable étudiant à ${c.name}`,
        h1: (c) => `Ordinateur portable étudiant à ${c.name}`,
        metaDescription: (c) =>
          `Ordinateur portable étudiant à ${c.name}${c.priceFrom ? `, à partir de ${c.priceFrom}` : ""} : Lenovo et Dell d'occasion comme neufs, avec SSD et photos réelles. Achat sur Vinted.`,
        intro: (c) => [
          c.universities
            ? `Vous étudiez à ${c.name} (${c.universities}) ? Il vous faut un ordinateur portable étudiant fiable pour les notes, les recherches, les cours en ligne et les examens à distance, sans payer le prix d'un modèle neuf.`
            : `Vous étudiez à ${c.name} ? Il vous faut un ordinateur portable étudiant fiable pour les notes, les recherches, les cours en ligne et les examens à distance, sans payer le prix d'un modèle neuf.`,
          `Nos portables d'occasion sont en état comme neuf, avec SSD et 8 Go de RAM. Vous les achetez sur Vinted et les recevez à ${c.name} avec la Protection acheteurs.`,
        ],
        productsTitle: (c) => `Ordinateurs portables pour étudiants disponibles à ${c.name}`,
        guideTitle: () => "Comment choisir un ordinateur portable étudiant",
        guide: (c) => [
          "À l'université, la réactivité compte plus que la puissance brute : avec un SSD et 8 Go de RAM, le portable démarre en quelques secondes et gère sans effort le navigateur, Office, les PDF et les plateformes de cours en ligne.",
          "Un écran de 14 pouces offre le meilleur compromis entre lisibilité et poids. Vérifiez aussi la batterie, la webcam pour les examens en ligne et le confort du clavier pour prendre des notes et rédiger votre mémoire.",
          `Nos portables sont des modèles professionnels conçus pour durer des années. Si vous étudiez à ${c.name} et hésitez, écrivez-nous : nous vous aidons à choisir selon votre cursus.`,
        ],
        faqTitle: (c) => `Questions sur l'ordinateur portable étudiant à ${c.name}`,
        faq: (c) => [
          {
            question: "Un portable d'occasion convient-il pour les études ?",
            answer:
              "Oui. Un portable professionnel avec SSD et 8 Go de RAM suffit largement pour les études, Office et les cours en ligne. Les nôtres sont comme neufs et testés avant la vente.",
          },
          {
            question: `Livrez-vous des portables pour étudiants à ${c.name} ?`,
            answer: c.pickup
              ? `Oui. À ${c.name}, vous pouvez aussi le retirer en personne sur rendez-vous ; sinon, vous l'achetez sur Vinted et le recevez chez vous.`
              : `Oui. Vous achetez sur Vinted et recevez le portable à ${c.name} avec la livraison choisie au paiement.`,
          },
          {
            question: "Quel ordinateur portable étudiant conseillez-vous ?",
            answer:
              "Pour la plupart des cursus, nous conseillons le Lenovo ThinkBook 14 IIL : léger, avec SSD et écran Full HD. Le Dell Latitude Rugged est idéal pour les filières techniques et les travaux pratiques en laboratoire.",
          },
        ],
        otherCitiesTitle: () => "Portables pour étudiants dans d'autres villes",
        otherThemesTitle: (c) => `Autres recherches à ${c.name}`,
      },
    },
  },
};

export default fr;
