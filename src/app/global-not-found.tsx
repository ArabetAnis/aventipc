import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { locales, localeMeta } from "@/i18n/config";
import { fontClasses } from "@/lib/fonts";
import { Wordmark } from "@/components/brand/Wordmark";

export const metadata: Metadata = {
  title: "404 — AventiPC",
  robots: { index: false, follow: true },
};

const text: Record<string, string> = {
  it: "Questa pagina non esiste.",
  fr: "Cette page n'existe pas.",
  es: "Esta página no existe.",
  de: "Diese Seite existiert nicht.",
  nl: "Deze pagina bestaat niet.",
};

/** One 404 for every language (the site has one root layout per language). */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontClasses} h-full antialiased`}>
      <body className="backdrop-washes flex min-h-full flex-col">
        <main className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-6 py-16 md:px-8">
          <Wordmark variant="light" className="h-9 w-auto self-start" />
          <p className="text-brand-gradient mt-10 font-display text-display font-semibold">404</p>
          <h1 className="mt-2 text-title md:text-display">Page not found</h1>
          <ul className="mt-8 space-y-3">
            {locales.map((l) => (
              <li key={l} lang={l}>
                <Link href={`/${l}/`} hrefLang={l} data-lang-choice={l} className="text-lead text-ink-soft hover:text-aventi-blue">
                  {text[l]} <span className="font-semibold text-aventi-blue">{localeMeta[l].nativeName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
