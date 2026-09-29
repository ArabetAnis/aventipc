import type { Dictionary } from "../types";

/**
 * Spanish (Spain) — translated and adapted from it.ts.
 * SEO: each keyword page uses its keyword naturally about once every 100 words.
 */
const es: Dictionary = {
  meta: {
    homeTitle: "AventiPC — Portátiles y PC de segunda mano como nuevos",
    homeDescription:
      "Portátiles y PC de segunda mano como nuevos: Lenovo ThinkBook y Dell Latitude probados, con fotos reales de cada unidad. Compra protegida en Vinted.",
    tagline: "Portátiles y PC de segunda mano como nuevos, fotografiados y descritos tal como son.",
    ogTagline: "Portátiles y PC de segunda mano como nuevos, con fotos reales",
    ogBadge: "Como nuevo · Fotos reales · Compra en Vinted",
  },
  countries: { IT: "Italia", FR: "Francia", BE: "Bélgica", ES: "España", DE: "Alemania" },
  ui: {
    skipToContent: "Ir al contenido",
    homeAria: "AventiPC, volver al inicio",
    mainMenu: "Menú principal",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    language: "Idioma",
    breadcrumb: "Ruta de navegación",
    home: "Inicio",
    nav: { products: "Productos", howToBuy: "Cómo comprar", about: "Quiénes somos", contact: "Contacto" },
    footer: {
      products: "Productos",
      allProducts: "Todos los productos",
      searches: "Búsquedas frecuentes",
      info: "Información",
      faq: "Preguntas frecuentes",
      company: "Empresa",
      note: "Precios en euros. Venta a través de Vinted. Las imágenes del modelo son orientativas; las fotos reales muestran la unidad a la venta.",
    },
    product: {
      likeNew: "Como nuevo",
      available: "Disponible",
      sold: "Vendido",
      comingSoon: "Próximamente",
      buyOnVinted: "Comprar en Vinted",
      askAvailability: "Consultar disponibilidad",
      priceOnRequest: "Precio a consultar",
      vintedNote: "Pagas en Vinted con la Protección al comprador de la plataforma.",
      photosNote: "La primera imagen muestra el modelo; las demás son fotos reales de la unidad a la venta.",
      questions: "¿Tienes preguntas o quieres más fotos?",
      writeUs: "Escríbenos",
      description: "Descripción",
      specs: "Ficha técnica",
      specsCaption: (name) => `Especificaciones técnicas de ${name}`,
      related: "Otros ordenadores a la venta",
      gallery: (name) => `Imágenes de ${name}`,
      showImage: (i, n) => `Mostrar imagen ${i} de ${n}`,
      modelImage: "Imagen del modelo",
      realPhoto: "Foto real de la unidad",
    },
    catalog: {
      title: "PC y portátiles de segunda mano como nuevos",
      h1: "PC y portátiles de segunda mano a la venta",
      intro:
        "Portátiles y mini PC de segunda mano en estado como nuevo, probados y fotografiados uno a uno. Cada ordenador se compra en Vinted con la Protección al comprador.",
      metaDescription:
        "PC y portátiles de segunda mano de AventiPC: Lenovo ThinkBook, Dell Latitude Rugged y ThinkCentre como nuevos, con fotos reales. Compra en Vinted.",
      count: (n) => (n === 1 ? "1 ordenador a la venta" : `${n} ordenadores a la venta`),
    },
    brand: {
      count: (n) => (n === 1 ? "1 ordenador disponible" : `${n} ordenadores disponibles`),
      others: "Otras marcas",
      empty: "Ahora mismo no hay ordenadores de esta marca. Echa un vistazo a los demás productos a la venta.",
    },
    contact: {
      hours: "De lunes a viernes, 9:00–18:00",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar el mensaje",
        sent: "Mensaje enviado. Te respondemos en un día laborable.",
      },
    },
    legalUpdated: "Última actualización: 29 de septiembre de 2026",
    notFound: {
      title: "Esta página no existe.",
      text: "Puede que el enlace haya cambiado o que el ordenador ya se haya vendido. Vuelve a los productos a la venta.",
      home: "Volver al inicio",
      products: "Ver los productos",
    },
    error: {
      title: "Algo ha salido mal.",
      text: "La página no se ha cargado bien. Vuelve a intentarlo en un momento.",
      retry: "Reintentar",
    },
  },
  home: {
    hero: {
      title: "Portátiles y PC de segunda mano, como nuevos.",
      subtitle:
        "Lenovo y Dell profesionales en un estado casi perfecto, probados y fotografiados tal como son. Los compras en Vinted, con la Protección al comprador.",
      primaryCta: "Ver los productos",
      secondaryCta: "Cómo comprar",
      imageAlt: "Lenovo ThinkBook 14 IIL, portátil de segunda mano como nuevo",
    },
    reassurance: [
      { icon: "check", title: "Como nuevos", text: "Estado casi perfecto: cada ordenador se prueba antes de ponerlo a la venta." },
      { icon: "camera", title: "Fotos reales", text: "Además de la imagen del modelo, ves las fotos de la unidad que vas a recibir." },
      { icon: "bag", title: "Compra protegida en Vinted", text: "Pagas en Vinted y te cubre la Protección al comprador de la plataforma." },
      { icon: "headset", title: "Contacto directo", text: "Escríbenos si quieres más fotos o detalles técnicos antes de comprar." },
    ],
    featuredTitle: "A la venta ahora",
    featuredText: "Cada ordenador es una unidad única: cuando se vende, desaparece de la web.",
    whyTitle: "Por qué comprar en AventiPC",
    searchesTitle: "Portátiles de segunda mano en tu ciudad",
    searchesText: "Guías y disponibilidad para quien busca un ordenador en Madrid, Barcelona, Valencia, Sevilla y Zaragoza.",
    faqTitle: "Preguntas frecuentes",
    faqText: "Cómo se compra, en qué estado están los ordenadores y cómo contactar con nosotros.",
  },
  faq: [
    {
      question: "¿Cómo se compra un ordenador?",
      answer:
        "Abre la ficha del producto y pulsa «Comprar en Vinted». Se abre el anuncio de ese mismo ordenador: pagas y recibes el envío a través de Vinted, con la Protección al comprador de la plataforma.",
    },
    {
      question: "¿Las fotos son del ordenador que voy a recibir?",
      answer:
        "Sí. La primera imagen muestra el modelo sobre fondo blanco; todas las demás son fotos reales de la unidad a la venta, hechas por nosotros.",
    },
    {
      question: "¿En qué estado están los ordenadores?",
      answer:
        "Son de segunda mano, pero están como nuevos, en un estado casi perfecto. Los encendemos y los probamos antes de venderlos, y en la ficha indicamos el estado de la batería y cualquier detalle.",
    },
    {
      question: "¿Hacéis envíos a España?",
      answer:
        "Vendemos a través de Vinted: al comprar, Vinted te muestra las opciones de envío disponibles para tu dirección, en España y en los demás países donde opera.",
    },
    {
      question: "¿Incluye sistema operativo?",
      answer: "Depende del ordenador y siempre se indica en la ficha técnica. Algunos llevan Windows instalado y otros se venden sin sistema operativo.",
    },
    {
      question: "¿Puedo ver el ordenador en persona?",
      answer: "Sí, en Milán y con cita previa. Escríbenos o llámanos para acordar una hora.",
    },
  ],
  products: {
    "lenovo-thinkbook-14-iil": {
      kind: "Portátil",
      title: "Lenovo ThinkBook 14 IIL de segunda mano",
      shortDescription:
        "Portátil de 14\" Full HD IPS con Intel Core i3-1005G1, 8 GB DDR4 y SSD NVMe de 256 GB. De segunda mano, como nuevo, con teclado retroiluminado.",
      description: [
        "El Lenovo ThinkBook 14 IIL es el portátil profesional de Lenovo para trabajar y estudiar: carcasa de aluminio Mineral Grey, teclado retroiluminado y webcam con tapa de privacidad.",
        "Esta unidad de segunda mano está como nueva. Lleva un Intel Core i3-1005G1 de 10.ª generación con 8 GB de memoria DDR4 ampliable y un SSD M.2 NVMe de 256 GB para un arranque rápido. La pantalla de 14 pulgadas es Full HD IPS antirreflejos.",
        "Es adecuado para navegar, usar Office, hacer videollamadas y seguir clases a distancia. Se vende con Windows 10 Pro, listo para actualizar a Windows 11. Las fotos reales son de la unidad a la venta.",
      ],
      highlights: [
        "Estado como nuevo, probado",
        "Intel Core i3-1005G1 con 8 GB DDR4",
        "SSD NVMe de 256 GB, arranque rápido",
        "Pantalla de 14\" Full HD IPS antirreflejos",
        "Teclado retroiluminado y webcam con tapa",
      ],
      specs: [
        { label: "Procesador", value: "Intel Core i3-1005G1 (2 núcleos, 4 hilos, hasta 3,4 GHz)" },
        { label: "Memoria", value: "8 GB DDR4, ampliable" },
        { label: "Almacenamiento", value: "SSD M.2 NVMe de 256 GB" },
        { label: "Pantalla", value: "14\" Full HD (1920×1080) IPS antirreflejos" },
        { label: "Gráficos", value: "Intel UHD Graphics" },
        { label: "Sistema operativo", value: "Windows 10 Pro, compatible con Windows 11" },
        { label: "Teclado", value: "Retroiluminado" },
        { label: "Webcam", value: "Integrada, con tapa de privacidad" },
        { label: "Carcasa", value: "Aluminio, color Mineral Grey" },
        { label: "Batería", value: "En buen estado" },
        { label: "Estado", value: "De segunda mano, como nuevo" },
      ],
      imageAlts: [
        "Lenovo ThinkBook 14 IIL, imagen del modelo sobre fondo blanco",
        "Lenovo ThinkBook 14 IIL de segunda mano abierto, vista frontal con el teclado",
        "Lenovo ThinkBook 14 IIL cerrado, tapa de aluminio gris con el logotipo ThinkBook",
        "Lenovo ThinkBook 14 IIL, lateral izquierdo con puertos USB, HDMI y USB-C",
        "Lenovo ThinkBook 14 IIL, lateral derecho con lector de tarjetas y puertos USB",
        "Etiqueta en la base del Lenovo ThinkBook 14-IIL con el modelo 20SL",
      ],
    },
    "dell-latitude-14-rugged-5414": {
      kind: "Portátil rugerizado",
      title: "Dell Latitude 5414 Rugged de segunda mano",
      shortDescription:
        "Portátil rugerizado de 14\" Full HD táctil con Intel Core i5-6300U, 8 GB y SSD de 256 GB. Puertos serie RS232, teclado retroiluminado, como nuevo.",
      description: [
        "El Dell Latitude 5414 Rugged es un portátil reforzado para trabajar fuera de la oficina: el chasis resiste golpes, vibraciones, polvo y humedad, las esquinas están protegidas y lleva el asa integrada.",
        "Esta unidad de segunda mano está como nueva, probada y funcionando perfectamente. Tiene un Intel Core i5-6300U, 8 GB de memoria, un SSD de 256 GB y una pantalla táctil de 14 pulgadas Full HD (1920×1080). El teclado retroiluminado se lee bien incluso a oscuras o dentro de un vehículo de servicio.",
        "Los puertos serie RS232 (DB9) nativos permiten conectar equipos de diagnóstico, junto con Ethernet RJ-45, USB 3.0, HDMI y VGA. Es ideal para talleres, obras, almacenes y técnicos de campo. La batería está en un estado excelente.",
      ],
      highlights: [
        "Estado como nuevo, probado al 100 %",
        "Chasis rugerizado, resistente a golpes y polvo",
        "Pantalla táctil de 14\" Full HD",
        "Puertos serie RS232 nativos",
        "Teclado retroiluminado, batería excelente",
      ],
      specs: [
        { label: "Procesador", value: "Intel Core i5-6300U" },
        { label: "Memoria", value: "8 GB" },
        { label: "Almacenamiento", value: "SSD de 256 GB" },
        { label: "Pantalla", value: "14\" Full HD (1920×1080), táctil" },
        { label: "Teclado", value: "Retroiluminado" },
        { label: "Puertos", value: "Serie RS232 (DB9), Ethernet RJ-45, USB 3.0, HDMI, VGA" },
        { label: "Carcasa", value: "Rugerizada: resiste golpes, vibraciones, polvo y humedad, asa integrada" },
        { label: "Batería", value: "Excelente" },
        { label: "Estado", value: "De segunda mano, como nuevo, probado y 100 % funcional" },
      ],
      imageAlts: [
        "Dell Latitude 14 Rugged, imagen del modelo sobre fondo blanco",
        "Dell Latitude 5414 Rugged de segunda mano abierto sobre una mesa de madera",
        "Dell Latitude 5414 Rugged encendido con el teclado retroiluminado en rojo",
        "Dell Latitude 5414 Rugged cerrado, esquinas reforzadas y asa",
        "Teclado retroiluminado del Dell Latitude 5414 Rugged",
        "Dell Latitude 5414 Rugged, lateral con puertos protegidos por tapas",
      ],
    },
    "lenovo-thinkcentre-m710q-tiny": {
      kind: "Mini PC",
      title: "Lenovo ThinkCentre M710q Tiny de segunda mano",
      shortDescription:
        "Mini PC con Intel Core i5-6500T, 4 GB DDR4 con una ranura libre, HDD de 500 GB y ranura NVMe libre. Como nuevo, sin sistema operativo.",
      description: [
        "El Lenovo ThinkCentre M710q Tiny es un mini PC de oficina del tamaño de un libro: se monta detrás del monitor, consume poco y es silencioso.",
        "Esta unidad de segunda mano está como nueva. Tiene un Intel Core i5-6500T de cuatro núcleos, 4 GB de memoria DDR4 con una ranura libre para ampliarla y un disco de 500 GB. También tiene una ranura M.2 NVMe libre para añadir un SSD rápido.",
        "Se vende sin sistema operativo y es una buena base para un PC de oficina, un centro multimedia o un pequeño servidor doméstico. Las fotos reales son de la unidad a la venta.",
      ],
      highlights: [
        "Estado como nuevo",
        "Intel Core i5-6500T de bajo consumo",
        "Ranura de RAM y ranura NVMe libres para ampliarlo",
        "Formato Tiny, se monta detrás del monitor",
      ],
      specs: [
        { label: "Procesador", value: "Intel Core i5-6500T (4 núcleos)" },
        { label: "Memoria", value: "4 GB DDR4, una ranura libre" },
        { label: "Almacenamiento", value: "HDD de 500 GB + ranura M.2 NVMe libre" },
        { label: "Gráficos", value: "Intel HD Graphics 530" },
        { label: "Sistema operativo", value: "No incluido" },
        { label: "Formato", value: "Mini PC Tiny, aprox. 1 litro" },
        { label: "Estado", value: "De segunda mano, como nuevo" },
      ],
      imageAlts: [
        "Lenovo ThinkCentre M710 Tiny, imagen del modelo: parte delantera y trasera sobre fondo blanco",
        "Lenovo ThinkCentre M710q Tiny de segunda mano sujeto con la mano, panel frontal",
        "Dos Lenovo ThinkCentre Tiny apilados, vista frontal",
        "Panel frontal del Lenovo ThinkCentre M710q Tiny con puertos USB y de audio",
        "Parte trasera del Lenovo ThinkCentre M710q Tiny con puertos USB, Ethernet, VGA y DisplayPort",
      ],
    },
  },
  brands: {
    lenovo: {
      title: "Lenovo de segunda mano: ThinkBook y ThinkCentre",
      metaDescription:
        "Portátiles y mini PC Lenovo de segunda mano como nuevos, con fotos reales y características comprobadas. Compra protegida en Vinted.",
      tagline: "ThinkBook y ThinkCentre de segunda mano, como nuevos.",
      whyTitle: "Por qué elegir un Lenovo de segunda mano",
      description: [
        "Las gamas profesionales de Lenovo están pensadas para la oficina: teclados cómodos, carcasas sólidas y componentes fáciles de sustituir. Por eso aguantan bien el paso de los años y están entre los ordenadores de segunda mano que más compensan.",
        "Cada Lenovo a la venta lo fotografiamos nosotros y lo describimos con sus características reales, incluidas las ranuras libres para añadir memoria o un SSD.",
      ],
    },
    dell: {
      title: "Dell Latitude Rugged de segunda mano",
      metaDescription:
        "Portátiles Dell Latitude de segunda mano como nuevos, también rugerizados, con fotos reales y características comprobadas. Compra protegida en Vinted.",
      tagline: "Latitude de segunda mano, también en versión rugerizada.",
      whyTitle: "Por qué elegir un Dell Latitude de segunda mano",
      description: [
        "Los Dell Latitude son portátiles profesionales construidos para durar. La versión rugerizada añade un chasis reforzado, asa y puertos protegidos, para quien trabaja en obra, en el taller o al aire libre.",
        "Cada Dell a la venta lo fotografiamos nosotros y lo describimos con sus características reales: procesador, memoria, disco, pantalla y estado de la batería.",
      ],
    },
  },
  pages: {
    about: {
      title: "Quiénes somos",
      metaTitle: "Quiénes somos: PC de segunda mano desde Milán",
      metaDescription:
        "AventiPC es una pequeña tienda de ordenadores de segunda mano en Milán: elegimos equipos profesionales como nuevos, los probamos y los fotografiamos.",
      intro:
        "AventiPC es una pequeña tienda de ordenadores de segunda mano en Milán. Elegimos portátiles y mini PC profesionales en estado como nuevo, los probamos y los ponemos a la venta con fotos reales y una descripción honesta.",
      sections: [
        {
          heading: "Qué hacemos",
          paragraphs: [
            "Seleccionamos ordenadores construidos para durar, como los Lenovo ThinkBook y ThinkCentre y los Dell Latitude. Cada unidad se enciende, se prueba y se fotografía antes de ponerla a la venta.",
          ],
        },
        {
          heading: "Por qué vendemos en Vinted",
          paragraphs: [
            "Somos una empresa pequeña. Vender en Vinted te permite pagar con medios que ya conoces y contar con la Protección al comprador de la plataforma.",
          ],
        },
        {
          heading: "Hablamos contigo",
          paragraphs: [
            "Si tienes alguna duda sobre un ordenador, escríbenos: te respondemos, te enviamos más fotos y, si estás en Milán, puedes verlo en persona con cita previa.",
          ],
        },
      ],
    },
    howToBuy: {
      title: "Cómo comprar",
      metaTitle: "Cómo comprar en Vinted con seguridad",
      metaDescription:
        "Los ordenadores de AventiPC se compran en Vinted: la plataforma gestiona el pago, el envío y la Protección al comprador.",
      intro: "En esta web encontrarás las fotos y las características de los ordenadores a la venta. La compra en sí se hace en Vinted.",
      sections: [
        {
          heading: "Elige el ordenador",
          paragraphs: ["Mira las fotos reales y la ficha técnica. Si necesitas más información, escríbenos antes de comprar."],
        },
        {
          heading: "Compra en Vinted",
          paragraphs: [
            "En la ficha del producto pulsa «Comprar en Vinted»: se abre el anuncio de ese mismo ordenador. Pagas con los métodos que ofrece Vinted y te cubre la Protección al comprador.",
          ],
        },
        {
          heading: "Envío y recogida",
          paragraphs: [
            "El envío se elige en Vinted al pagar. Si estás en Milán, también puedes recoger el ordenador en persona con cita previa.",
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      metaTitle: "Contacto",
      metaDescription:
        "Escribe a info@aventipc.com o llama al +39 02 1234 5678 de lunes a viernes, de 9 a 18 h, si tienes preguntas sobre los ordenadores a la venta.",
      intro: "Si tienes preguntas sobre un ordenador, quieres más fotos o una cita para verlo en persona, puedes escribirnos o llamarnos.",
      sections: [
        { heading: "Email", paragraphs: ["Escribe a info@aventipc.com. Solemos responder en un día laborable."] },
        { heading: "Teléfono", paragraphs: ["Llama al +39 02 1234 5678 de lunes a viernes, de 9:00 a 18:00."] },
        { heading: "Dónde estamos", paragraphs: ["Via Alessandro Volta 12, 20121 Milano (Italia). Visitas solo con cita previa."] },
      ],
    },
    privacy: {
      title: "Privacidad",
      metaTitle: "Política de privacidad",
      metaDescription:
        "Qué datos personales recoge AventiPC cuando visitas la web o nos contactas, para qué los usa y qué derechos tienes según el RGPD.",
      intro:
        "Esta política explica qué datos personales tratamos cuando visitas la web o nos escribes, y qué derechos tienes según el Reglamento (UE) 2016/679 (RGPD).",
      sections: [
        {
          heading: "Responsable del tratamiento",
          paragraphs: [
            "El responsable es AventiPC, Via Alessandro Volta 12, 20121 Milano (Italia). Para cualquier solicitud sobre privacidad, escribe a info@aventipc.com.",
          ],
        },
        {
          heading: "Qué datos recogemos",
          paragraphs: [
            "Si nos escribes desde el formulario de contacto o por email, tratamos tu nombre, tu dirección de email y el contenido del mensaje, solo para responderte.",
            "Las compras se hacen en Vinted: los datos de pago y de envío los trata Vinted, según su propia política de privacidad.",
          ],
        },
        { heading: "Cookies", paragraphs: ["La web no usa cookies de elaboración de perfiles ni herramientas de seguimiento publicitario."] },
        {
          heading: "Cuánto tiempo conservamos los datos",
          paragraphs: ["Conservamos los mensajes el tiempo necesario para responder y como máximo 24 meses; después los borramos."],
        },
        {
          heading: "Tus derechos",
          paragraphs: [
            "Puedes solicitar el acceso, la rectificación o la supresión de tus datos escribiendo a info@aventipc.com. También puedes presentar una reclamación ante la autoridad italiana de protección de datos (Garante per la protezione dei dati personali) o ante la Agencia Española de Protección de Datos (AEPD).",
          ],
        },
      ],
    },
    terms: {
      title: "Términos y condiciones",
      metaTitle: "Términos y condiciones",
      metaDescription:
        "Condiciones de uso de la web de AventiPC: la web presenta ordenadores de segunda mano y la venta se hace en Vinted según las condiciones de la plataforma.",
      intro: "Esta web presenta los ordenadores de segunda mano que AventiPC pone a la venta. Al usarla, aceptas las condiciones siguientes.",
      sections: [
        {
          heading: "Quiénes somos",
          paragraphs: ["La web la gestiona AventiPC, Via Alessandro Volta 12, 20121 Milano (Italia), email info@aventipc.com."],
        },
        {
          heading: "Información sobre los productos",
          paragraphs: [
            "Las descripciones y las fotos reales se refieren a cada unidad a la venta; las imágenes del modelo son orientativas. En caso de diferencias, prevalece el anuncio de Vinted.",
          ],
        },
        {
          heading: "Compra",
          paragraphs: [
            "El contrato de compraventa se celebra en Vinted y se rige por las condiciones de la plataforma, incluidos el pago, el envío y la Protección al comprador.",
          ],
        },
        { heading: "Ley aplicable", paragraphs: ["Se aplica la ley italiana."] },
      ],
    },
  },
  themes: {
    used: {
      keyword: "portátiles de segunda mano",
      label: "Portátiles de segunda mano",
      hub: {
        title: "Portátiles de segunda mano como nuevos",
        h1: "Portátiles de segunda mano en España",
        metaDescription:
          "Portátiles de segunda mano como nuevos: Lenovo ThinkBook y Dell Latitude probados, con fotos reales. Envío a España con compra protegida en Vinted.",
        intro: [
          "Nuestros portátiles de segunda mano son equipos profesionales Lenovo y Dell en estado como nuevo, casi perfectos. Cada ordenador se prueba, se describe al detalle y se fotografía tal como es.",
          "Elige tu ciudad para ver cómo te llegan a casa los portátiles de segunda mano, o mira ya los ordenadores disponibles.",
        ],
        citiesTitle: "Portátiles de segunda mano en las principales ciudades",
        productsTitle: "Portátiles de segunda mano disponibles",
      },
      city: {
        title: (c) => `Portátiles de segunda mano en ${c.name}`,
        h1: (c) => `Portátiles de segunda mano en ${c.name}`,
        metaDescription: (c) =>
          `Portátiles de segunda mano en ${c.name}${c.priceFrom ? ` desde ${c.priceFrom}` : ""}: Lenovo y Dell como nuevos, probados y con fotos reales. Compra protegida en Vinted.`,
        intro: (c) => [
          `¿Buscas portátiles de segunda mano en ${c.name}? En AventiPC seleccionamos equipos profesionales Lenovo y Dell en estado como nuevo: cada ordenador se prueba, se describe al detalle y se fotografía tal como es.`,
          c.pickup
            ? `En ${c.name} también puedes ver y recoger el ordenador en persona, con cita previa. Si lo prefieres, lo compras en Vinted y lo recibes con el envío de la plataforma.`
            : `El ordenador te llega a ${c.name} con el envío de Vinted: pagas en la plataforma y te cubre la Protección al comprador hasta la entrega.`,
        ],
        productsTitle: (c) => `Portátiles de segunda mano a la venta en ${c.name}`,
        guideTitle: (c) => `Cómo elegir un portátil de segunda mano en ${c.name}`,
        guide: (c) => [
          "Un portátil profesional usado cuesta menos que un portátil nuevo básico y a menudo está mejor construido: carcasas robustas, teclados cómodos y componentes fáciles de sustituir. Las gamas Lenovo ThinkBook y Dell Latitude están pensadas para empresas y aguantan bien el paso de los años.",
          "Antes de comprar, fíjate en el procesador, la memoria y el disco. Un Intel Core i3 o i5 con 8 GB de RAM y SSD basta para navegar, usar Office, hacer videollamadas y estudiar. Revisa también la batería y la pantalla: en nuestras fichas siempre están indicadas.",
          `Todos nuestros portátiles de segunda mano están en un estado casi perfecto y tienen fotos reales de la unidad a la venta. Si estás en ${c.name} y tienes alguna duda, escríbenos antes de comprar: te respondemos y te enviamos más fotos.`,
        ],
        faqTitle: (c) => `Preguntas sobre portátiles de segunda mano en ${c.name}`,
        faq: (c) => [
          {
            question: `¿Enviáis portátiles de segunda mano a ${c.name}?`,
            answer: `Sí. Compras el ordenador en Vinted y lo recibes en ${c.name} con el envío que elijas al pagar, cubierto por la Protección al comprador.`,
          },
          {
            question: `¿Puedo ver el ordenador en persona en ${c.name}?`,
            answer: c.pickup
              ? `Sí, en ${c.name} puedes verlo y recogerlo con cita previa. Escríbenos para acordar una hora.`
              : `La recogida en persona solo es posible en Milán, con cita previa. En ${c.name} recibes el ordenador con el envío de Vinted; antes de comprar podemos enviarte más fotos.`,
          },
          {
            question: "¿En qué estado están los ordenadores?",
            answer:
              "Están como nuevos, en un estado casi perfecto. Los probamos antes de venderlos y en la ficha indicamos el estado de la batería y cualquier detalle.",
          },
        ],
        otherCitiesTitle: () => "Portátiles de segunda mano en otras ciudades",
        otherThemesTitle: (c) => `Otras búsquedas en ${c.name}`,
      },
    },
    cheap: {
      keyword: "portátiles baratos",
      label: "Portátiles baratos",
      hub: {
        title: "Portátiles baratos de segunda mano en España",
        h1: "Portátiles baratos en España",
        metaDescription:
          "Portátiles baratos pero fiables: equipos Lenovo y Dell de segunda mano como nuevos, con fotos reales. Envío a España y compra protegida en Vinted.",
        intro: [
          "Un portátil barato no tiene por qué ser un sacrificio. Nuestros portátiles baratos son equipos profesionales de segunda mano, en estado como nuevo, que cuestan menos que un modelo nuevo de gama baja y están mejor construidos.",
          "Elige tu ciudad o mira ya los portátiles baratos disponibles, ordenados de menor a mayor precio.",
        ],
        citiesTitle: "Portátiles baratos en las principales ciudades",
        productsTitle: "Portátiles baratos disponibles",
      },
      city: {
        title: (c) => `Portátiles baratos en ${c.name}, como nuevos`,
        h1: (c) => `Portátiles baratos en ${c.name}`,
        metaDescription: (c) =>
          `Portátiles baratos en ${c.name}${c.priceFrom ? ` desde ${c.priceFrom}` : ""}: equipos Lenovo y Dell de segunda mano como nuevos, con fotos reales. Compra protegida en Vinted.`,
        intro: (c) => [
          `¿Buscas portátiles baratos en ${c.name}? En lugar de un portátil nuevo de gama baja, te ofrecemos equipos profesionales de segunda mano en estado como nuevo${c.priceFrom ? `, desde ${c.priceFrom}` : ""}.`,
          c.pickup
            ? `En ${c.name} puedes recoger el portátil en persona con cita previa, o comprarlo en Vinted y recibirlo con el envío de la plataforma.`
            : `Los compras en Vinted y los recibes en ${c.name} con el envío que elijas al pagar, cubierto por la Protección al comprador.`,
        ],
        productsTitle: (c) => `Portátiles baratos disponibles en ${c.name}`,
        guideTitle: (c) => `Cómo elegir un portátil barato en ${c.name}`,
        guide: (c) => [
          "Muchos portátiles nuevos de gama baja llevan plástico fino, discos lentos y pantallas poco luminosas. Por el mismo precio, un portátil profesional de segunda mano suele ofrecer un SSD, un teclado mejor y una carcasa más sólida.",
          "Para gastar poco sin equivocarte, elige al menos 8 GB de RAM y un SSD, y comprueba el estado de la batería. Evita los equipos con un disco mecánico como único disco: ralentiza todo el sistema.",
          `Nuestros portátiles baratos están probados, descritos con precisión y se muestran con fotos reales. Si estás en ${c.name} y quieres que te aconsejemos cuál elegir, escríbenos.`,
        ],
        faqTitle: (c) => `Preguntas sobre portátiles baratos en ${c.name}`,
        faq: (c) => [
          {
            question: "¿Cuánto cuesta el portátil más barato?",
            answer: c.priceFrom
              ? `Ahora mismo el portátil más barato cuesta ${c.priceFrom}. El precio es el del anuncio en Vinted.`
              : "Los precios se indican en cada ficha y coinciden con los de los anuncios en Vinted.",
          },
          {
            question: `¿Enviáis portátiles baratos a ${c.name}?`,
            answer: `Sí. Compras en Vinted y recibes el portátil en ${c.name} con el envío que elijas al pagar.`,
          },
          {
            question: "¿Es fiable un portátil de segunda mano?",
            answer:
              "Sí, si es un modelo profesional en buen estado. Los nuestros están como nuevos, se prueban antes de la venta y se describen hasta el detalle de la batería y la pantalla.",
          },
        ],
        otherCitiesTitle: () => "Portátiles baratos en otras ciudades",
        otherThemesTitle: (c) => `Otras búsquedas en ${c.name}`,
      },
    },
    students: {
      keyword: "portátiles para estudiantes",
      label: "Portátiles para estudiantes",
      hub: {
        title: "Portátiles para estudiantes de segunda mano",
        h1: "Portátiles para estudiantes en España",
        metaDescription:
          "Portátiles para estudiantes fiables y asequibles: equipos Lenovo y Dell de segunda mano como nuevos, con SSD y fotos reales. Compra protegida en Vinted.",
        intro: [
          "Los portátiles para estudiantes tienen que ser ligeros para llevarlos a clase, arrancar rápido y aguantar toda la carrera. Los portátiles profesionales de segunda mano como nuevos reúnen estas cualidades a un precio asequible.",
          "Elige tu ciudad universitaria o mira ya los portátiles para estudiantes disponibles.",
        ],
        citiesTitle: "Portátiles para estudiantes en las ciudades universitarias",
        productsTitle: "Portátiles para estudiantes disponibles",
      },
      city: {
        title: (c) => `Portátiles para estudiantes en ${c.name}`,
        h1: (c) => `Portátiles para estudiantes en ${c.name}`,
        metaDescription: (c) =>
          `Portátiles para estudiantes en ${c.name}${c.priceFrom ? ` desde ${c.priceFrom}` : ""}: Lenovo y Dell de segunda mano como nuevos, con SSD y fotos reales. Compra en Vinted.`,
        intro: (c) => [
          c.universities
            ? `¿Estudias en ${c.name} (${c.universities})? Aquí tienes portátiles para estudiantes fiables con los que tomar apuntes, buscar información, seguir clases online y hacer exámenes a distancia, sin pagar lo que cuesta un modelo nuevo.`
            : `¿Estudias en ${c.name}? Aquí tienes portátiles para estudiantes fiables con los que tomar apuntes, buscar información, seguir clases online y hacer exámenes a distancia, sin pagar lo que cuesta un modelo nuevo.`,
          `Nuestros portátiles de segunda mano están como nuevos, con SSD y 8 GB de RAM. Los compras en Vinted y los recibes en ${c.name} con la Protección al comprador.`,
        ],
        productsTitle: (c) => `Portátiles para estudiantes disponibles en ${c.name}`,
        guideTitle: () => "Cómo elegir un portátil para la universidad",
        guide: (c) => [
          "En la universidad importa más la agilidad que la potencia bruta: con un SSD y 8 GB de RAM, el portátil arranca en pocos segundos y mueve sin esfuerzo el navegador, Office, los PDF y las plataformas de clases online.",
          "Una pantalla de 14 pulgadas es el mejor equilibrio entre legibilidad y peso. Comprueba también la batería, la webcam para los exámenes online y que el teclado sea cómodo para tomar apuntes y escribir el TFG.",
          `Nuestros portátiles para estudiantes son modelos profesionales construidos para durar años. Si estudias en ${c.name} y no sabes cuál elegir, escríbenos: te ayudamos a decidir según tu carrera.`,
        ],
        faqTitle: (c) => `Preguntas sobre portátiles para estudiantes en ${c.name}`,
        faq: (c) => [
          {
            question: "¿Sirve un portátil de segunda mano para la universidad?",
            answer:
              "Sí. Un portátil profesional con SSD y 8 GB de RAM es más que suficiente para estudiar, usar Office y seguir clases online. Los nuestros están como nuevos y se prueban antes de la venta.",
          },
          {
            question: `¿Enviáis portátiles para estudiantes a ${c.name}?`,
            answer: c.pickup
              ? `Sí. En ${c.name} también puedes recogerlo en persona con cita previa; si no, lo compras en Vinted y lo recibes en casa.`
              : `Sí. Compras en Vinted y recibes el portátil en ${c.name} con el envío que elijas al pagar.`,
          },
          {
            question: "¿Qué portátil recomendáis para estudiar?",
            answer:
              "Para la mayoría de las carreras recomendamos el Lenovo ThinkBook 14 IIL: ligero, con SSD y pantalla Full HD. El Dell Latitude Rugged es ideal para estudios técnicos y laboratorios.",
          },
        ],
        otherCitiesTitle: () => "Portátiles para estudiantes en otras ciudades",
        otherThemesTitle: (c) => `Otras búsquedas en ${c.name}`,
      },
    },
  },
};

export default es;
