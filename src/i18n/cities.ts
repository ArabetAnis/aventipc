import type { CountryCode, Locale } from "./config";

export interface City {
  id: string;
  country: CountryCode;
  /** Localized name and URL slug for each language that has pages for this city. */
  names: Partial<Record<Locale, { name: string; slug: string }>>;
  /** Main universities (proper names). Used on the student pages. */
  universities: string[];
  /** In-person pickup is possible (Milan only). */
  pickup?: boolean;
}

/** 5 cities per country. Belgian cities have French and Dutch pages. */
export const cities: City[] = [
  // Italy
  { id: "roma", country: "IT", names: { it: { name: "Roma", slug: "roma" } }, universities: ["Sapienza", "Tor Vergata", "Roma Tre"] },
  { id: "milano", country: "IT", names: { it: { name: "Milano", slug: "milano" } }, universities: ["Politecnico di Milano", "Università Statale", "Bocconi", "Bicocca"], pickup: true },
  { id: "napoli", country: "IT", names: { it: { name: "Napoli", slug: "napoli" } }, universities: ["Federico II", "Parthenope", "L'Orientale"] },
  { id: "torino", country: "IT", names: { it: { name: "Torino", slug: "torino" } }, universities: ["Politecnico di Torino", "Università di Torino"] },
  { id: "bologna", country: "IT", names: { it: { name: "Bologna", slug: "bologna" } }, universities: ["Università di Bologna"] },
  // France
  { id: "paris", country: "FR", names: { fr: { name: "Paris", slug: "paris" } }, universities: ["Sorbonne Université", "Université Paris Cité", "Université PSL"] },
  { id: "marseille", country: "FR", names: { fr: { name: "Marseille", slug: "marseille" } }, universities: ["Aix-Marseille Université"] },
  { id: "lyon", country: "FR", names: { fr: { name: "Lyon", slug: "lyon" } }, universities: ["Université Claude Bernard Lyon 1", "Université Lumière Lyon 2", "Université Jean Moulin Lyon 3"] },
  { id: "toulouse", country: "FR", names: { fr: { name: "Toulouse", slug: "toulouse" } }, universities: ["Université Toulouse Capitole", "Université Toulouse Jean Jaurès"] },
  { id: "nice", country: "FR", names: { fr: { name: "Nice", slug: "nice" } }, universities: ["Université Côte d'Azur"] },
  // Belgium (French + Dutch)
  { id: "bruxelles", country: "BE", names: { fr: { name: "Bruxelles", slug: "bruxelles" }, nl: { name: "Brussel", slug: "brussel" } }, universities: ["ULB", "VUB"] },
  { id: "anvers", country: "BE", names: { fr: { name: "Anvers", slug: "anvers" }, nl: { name: "Antwerpen", slug: "antwerpen" } }, universities: ["Universiteit Antwerpen"] },
  { id: "gand", country: "BE", names: { fr: { name: "Gand", slug: "gand" }, nl: { name: "Gent", slug: "gent" } }, universities: ["Universiteit Gent"] },
  { id: "charleroi", country: "BE", names: { fr: { name: "Charleroi", slug: "charleroi" }, nl: { name: "Charleroi", slug: "charleroi" } }, universities: [] },
  { id: "liege", country: "BE", names: { fr: { name: "Liège", slug: "liege" }, nl: { name: "Luik", slug: "luik" } }, universities: ["Université de Liège"] },
  // Spain
  { id: "madrid", country: "ES", names: { es: { name: "Madrid", slug: "madrid" } }, universities: ["Universidad Complutense", "Universidad Autónoma de Madrid", "Universidad Politécnica de Madrid"] },
  { id: "barcelona", country: "ES", names: { es: { name: "Barcelona", slug: "barcelona" } }, universities: ["Universitat de Barcelona", "UPC", "UAB"] },
  { id: "valencia", country: "ES", names: { es: { name: "Valencia", slug: "valencia" } }, universities: ["Universitat de València", "Universitat Politècnica de València"] },
  { id: "sevilla", country: "ES", names: { es: { name: "Sevilla", slug: "sevilla" } }, universities: ["Universidad de Sevilla"] },
  { id: "zaragoza", country: "ES", names: { es: { name: "Zaragoza", slug: "zaragoza" } }, universities: ["Universidad de Zaragoza"] },
  // Germany
  { id: "berlin", country: "DE", names: { de: { name: "Berlin", slug: "berlin" } }, universities: ["Freie Universität", "Humboldt-Universität", "TU Berlin"] },
  { id: "hamburg", country: "DE", names: { de: { name: "Hamburg", slug: "hamburg" } }, universities: ["Universität Hamburg", "TU Hamburg"] },
  { id: "muenchen", country: "DE", names: { de: { name: "München", slug: "muenchen" } }, universities: ["LMU München", "TU München"] },
  { id: "koeln", country: "DE", names: { de: { name: "Köln", slug: "koeln" } }, universities: ["Universität zu Köln"] },
  { id: "frankfurt", country: "DE", names: { de: { name: "Frankfurt am Main", slug: "frankfurt" } }, universities: ["Goethe-Universität"] },
];

export function citiesFor(locale: Locale): City[] {
  return cities.filter((c) => c.names[locale]);
}
