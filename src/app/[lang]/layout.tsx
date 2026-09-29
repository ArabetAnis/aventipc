import "../globals.css";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { fontClasses } from "@/lib/fonts";
import { baseMetadata, baseViewport } from "@/lib/base-metadata";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientBackdrop } from "@/components/layout/GradientBackdrop";
import { LanguagePreference } from "@/components/layout/LanguagePreference";

export const metadata = baseMetadata;
export const viewport = baseViewport;
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** Root layout per language: <html lang> is correct in the prerendered HTML of every page. */
export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return (
    <html lang={lang} className={`${fontClasses} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {dict.ui.skipToContent}
        </a>
        <GradientBackdrop />
        {children}
        <LanguagePreference />
        <JsonLd data={[organizationJsonLd(dict.meta.tagline), websiteJsonLd(lang)]} />
      </body>
    </html>
  );
}
