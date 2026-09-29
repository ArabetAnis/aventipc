import Link from "next/link";
import { site } from "@/content/site";
import { locales, localeMeta, themeKeys, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { href } from "@/i18n/routes";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { Wordmark } from "@/components/brand/Wordmark";

/** Dense, crawlable footer: every product, brand, keyword hub and language home is one click away. */
export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const groups = [
    {
      title: dict.ui.footer.products,
      links: [
        { label: dict.ui.footer.allProducts, href: href(locale, { kind: "catalog" }) },
        ...products.map((p) => ({ label: p.name, href: href(locale, { kind: "product", slug: p.slug }) })),
        ...brands.map((b) => ({ label: b.name, href: href(locale, { kind: "brand", slug: b.slug }) })),
      ],
    },
    {
      title: dict.ui.footer.searches,
      links: themeKeys.map((theme) => ({ label: dict.themes[theme].label, href: href(locale, { kind: "theme", theme }) })),
    },
    {
      title: dict.ui.footer.info,
      links: [
        { label: dict.ui.nav.howToBuy, href: href(locale, { kind: "page", page: "howToBuy" }) },
        { label: dict.ui.footer.faq, href: `${href(locale, { kind: "home" })}#domande-frequenti` },
        { label: dict.ui.nav.contact, href: href(locale, { kind: "page", page: "contact" }) },
      ],
    },
    {
      title: dict.ui.footer.company,
      links: [
        { label: dict.ui.nav.about, href: href(locale, { kind: "page", page: "about" }) },
        { label: dict.pages.privacy.title, href: href(locale, { kind: "page", page: "privacy" }) },
        { label: dict.pages.terms.title, href: href(locale, { kind: "page", page: "terms" }) },
      ],
    },
  ];

  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="mx-auto max-w-page px-6 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Link href={href(locale, { kind: "home" })} aria-label={dict.ui.homeAria} className="inline-block">
              <Wordmark variant="dark" className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-white/70">{dict.meta.tagline}</p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-white/70">
              {site.legalName}
              <br />
              {site.address.street}, {site.address.postalCode} {site.address.city}
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <br />
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </address>
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-sans text-sm font-bold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <nav aria-label={dict.ui.language} className="mt-12 border-t border-white/10 pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={href(l, { kind: "home" })}
                  hrefLang={l}
                  lang={l}
                  className={l === locale ? "font-semibold text-white" : "text-white/60 hover:text-white"}
                >
                  {localeMeta[l].nativeName} <span className="text-white/40">· {localeMeta[l].markets}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-3 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p className="max-w-[80ch]">{dict.ui.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
