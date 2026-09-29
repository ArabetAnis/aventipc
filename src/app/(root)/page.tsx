import type { Metadata } from "next";
import Link from "next/link";
import { locales, localeMeta } from "@/i18n/config";
import { href } from "@/i18n/routes";
import { absoluteUrl, languageAlternates, organizationJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { JsonLd } from "@/components/seo/JsonLd";
import { LanguageHint } from "@/components/layout/LanguageHint";

const title = "AventiPC — Used PCs and laptops, like new";
const description =
  "Used Lenovo and Dell laptops in like-new condition, with real photos. Italiano · Français · Español · Deutsch · Nederlands.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteUrl("/"), languages: languageAlternates({ kind: "home" }) },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: site.name,
    title,
    description,
    images: [{ url: absoluteUrl("/og/it.png"), width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og/it.png")] },
};

const headline: Record<string, string> = {
  it: "PC e portatili usati, come nuovi",
  fr: "PC et ordinateurs portables d'occasion, comme neufs",
  es: "Ordenadores y portátiles de segunda mano, como nuevos",
  de: "Gebrauchte PCs und Laptops, wie neu",
  nl: "Tweedehands pc's en laptops, als nieuw",
};

export default function LanguageChooser() {
  return (
    <main className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-6 py-16 md:px-8">
      <Wordmark variant="light" className="h-10 w-auto self-start md:h-12" />
      <h1 className="mt-10 max-w-[20ch] text-display md:text-hero">Choose your language</h1>
      <p className="mt-4 max-w-[60ch] text-lead text-ink-soft">
        Scegli la lingua · Choisissez votre langue · Elige tu idioma · Sprache wählen · Kies je taal
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={href(l, { kind: "home" })}
              hrefLang={l}
              lang={l}
              data-locale={l}
              data-lang-choice={l}
              className="group flex h-full flex-col rounded-tile border border-line bg-white p-6 transition-colors hover:border-lilac data-[suggested=true]:border-aventi-blue"
            >
              <span className="font-display text-heading font-semibold text-ink group-hover:text-aventi-blue">{localeMeta[l].nativeName}</span>
              <span className="mt-1 text-sm text-ink-muted">{localeMeta[l].markets}</span>
              <span className="mt-4 text-sm text-ink-soft">{headline[l]}</span>
            </Link>
          </li>
        ))}
      </ul>
      <LanguageHint />
      <JsonLd data={organizationJsonLd("Used PCs and laptops in like-new condition, sold through Vinted.")} />
    </main>
  );
}
