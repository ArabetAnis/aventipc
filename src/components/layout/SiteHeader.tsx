import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { href } from "@/i18n/routes";
import { Wordmark } from "@/components/brand/Wordmark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LanguageSwitcher, type LanguageLink } from "@/components/layout/LanguageSwitcher";

export function navLinks(locale: Locale, dict: Dictionary) {
  return [
    { label: dict.ui.nav.products, href: href(locale, { kind: "catalog" }) },
    { label: dict.ui.nav.howToBuy, href: href(locale, { kind: "page", page: "howToBuy" }) },
    { label: dict.ui.nav.about, href: href(locale, { kind: "page", page: "about" }) },
    { label: dict.ui.nav.contact, href: href(locale, { kind: "page", page: "contact" }) },
  ];
}

export function SiteHeader({ locale, dict, languages }: { locale: Locale; dict: Dictionary; languages: LanguageLink[] }) {
  const links = navLinks(locale, dict);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-page items-center gap-4 px-6 md:px-8 lg:h-[4.5rem]">
        <Link href={href(locale, { kind: "home" })} aria-label={dict.ui.homeAria} className="flex shrink-0 items-center">
          <Wordmark variant="light" className="h-7 w-auto lg:h-8" />
        </Link>

        <nav aria-label={dict.ui.mainMenu} className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.9375rem] font-semibold text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <div className="hidden lg:block">
            <LanguageSwitcher links={languages} label={dict.ui.language} />
          </div>
          <MobileMenu
            links={links}
            languages={languages}
            labels={{ open: dict.ui.openMenu, close: dict.ui.closeMenu, menu: dict.ui.mainMenu, language: dict.ui.language }}
          />
        </div>
      </div>
    </header>
  );
}
