import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";

/** Shared by both root layouts (/[lang] and the language chooser at /). */
export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

export const baseViewport: Viewport = {
  themeColor: "#fdfcfe",
  width: "device-width",
  initialScale: 1,
};
