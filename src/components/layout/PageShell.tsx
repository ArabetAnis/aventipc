import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { alternatesFor, href, type RouteKey } from "@/i18n/routes";
import { locales, localeMeta } from "@/i18n/config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import type { LanguageLink } from "@/components/layout/LanguageSwitcher";

/** Language links for the current page: same page in each language, or that language's home. */
export function languageLinks(locale: Locale, key: RouteKey): LanguageLink[] {
  const alts = alternatesFor(key);
  return locales.map((l) => {
    const alt = alts.find((a) => a.locale === l);
    return {
      locale: l,
      href: alt?.path ?? href(l, { kind: "home" }),
      label: localeMeta[l].nativeName,
      current: l === locale,
      exact: Boolean(alt),
    };
  });
}

export function PageShell({
  locale,
  dict,
  routeKey,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  routeKey: RouteKey;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader locale={locale} dict={dict} languages={languageLinks(locale, routeKey)} />
      <main id="contenuto" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
