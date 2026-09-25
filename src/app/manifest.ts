import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { BASE_PATH } from "@/lib/catalog";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    lang: "it",
    start_url: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#fdfcfe",
    theme_color: "#fdfcfe",
    icons: [
      { src: `${BASE_PATH}/brand/icon.svg`, sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: `${BASE_PATH}/brand/icon-512.png`, sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: `${BASE_PATH}/brand/icon-192.png`, sizes: "192x192", type: "image/png" },
    ],
  };
}
