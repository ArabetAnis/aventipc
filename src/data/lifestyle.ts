/** Images used by the site chrome. The hero reuses a real product photo. */

export interface LifestyleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const lifestyleImages = {
  hero: {
    src: "/images/products/dell-latitude-14-rugged-5414-1.jpg",
    alt: "Dell Latitude 14 Rugged 5414 usato, aperto su un tavolo in legno",
    width: 756,
    height: 1008,
  },
} satisfies Record<string, LifestyleImage>;
