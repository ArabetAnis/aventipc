import type { Locale, ThemeKey } from "@/i18n/config";
import { themeKeys } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { citiesFor, type City } from "@/i18n/cities";
import { href } from "@/i18n/routes";
import { breadcrumbJsonLd, itemListJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkChips } from "@/components/ui/LinkChips";
import { Faq } from "@/components/home/Faq";
import { ProductGrid } from "@/components/product/ProductGrid";
import { homeCrumb, crumb, productsForTheme, cityContext } from "@/views/shared";

/**
 * Keyword × city landing page. Built from real data (products, prices, universities,
 * pickup rules) so each page answers the search instead of repeating a template.
 */
export function CityView({ locale, dict, theme, city }: { locale: Locale; dict: Dictionary; theme: ThemeKey; city: City }) {
  const t = dict.themes[theme];
  const list = productsForTheme(theme);
  const c = cityContext(locale, dict, city, list);
  const path = href(locale, { kind: "city", theme, city: city.id });
  const crumbs = [
    homeCrumb(locale, dict),
    crumb(locale, t.label, { kind: "theme", theme }),
    crumb(locale, c.name, { kind: "city", theme, city: city.id }),
  ];
  const sameCountry = citiesFor(locale).filter((x) => x.country === city.country);
  const otherCountries = citiesFor(locale).filter((x) => x.country !== city.country);

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} label={dict.ui.breadcrumb} />
        <h1 className="mt-6 max-w-[22ch] text-display md:text-hero">{t.city.h1(c)}</h1>
        <div className="mt-5 max-w-[62ch] space-y-4 text-lead text-ink-soft">
          {t.city.intro(c).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>

      <Container as="section" aria-labelledby="prodotti-citta" className="mt-14">
        <h2 id="prodotti-citta" className="mb-8 text-heading md:text-title">
          {t.city.productsTitle(c)}
        </h2>
        <ProductGrid products={list} locale={locale} dict={dict} priorityCount={3} />
      </Container>

      <Container as="section" aria-labelledby="guida" className="mt-20">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <h2 id="guida" className="text-heading md:text-title">
              {t.city.guideTitle(c)}
            </h2>
            <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed text-ink-soft">
              {t.city.guide(c).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-heading">{t.city.faqTitle(c)}</h2>
            <div className="mt-5">
              <Faq items={t.city.faq(c)} />
            </div>
          </div>
        </div>
      </Container>

      <Container as="nav" aria-labelledby="altre-citta" className="mt-20 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 id="altre-citta" className="text-heading">
            {t.city.otherCitiesTitle(c)}
          </h2>
          <div className="mt-5">
            <LinkChips
              items={[...sameCountry, ...otherCountries].map((x) => ({
                label: x.names[locale]!.name,
                href: href(locale, { kind: "city", theme, city: x.id }),
                current: x.id === city.id,
              }))}
            />
          </div>
        </div>
        <div>
          <h2 className="text-heading">{t.city.otherThemesTitle(c)}</h2>
          <div className="mt-5">
            <LinkChips
              items={themeKeys
                .filter((k) => k !== theme)
                .map((k) => ({ label: dict.themes[k].city.h1(c), href: href(locale, { kind: "city", theme: k, city: city.id }) }))}
            />
          </div>
        </div>
      </Container>

      <JsonLd
        data={[
          collectionPageJsonLd({
            name: t.city.h1(c),
            description: t.city.metaDescription(c),
            path,
            locale,
            city: { name: c.name, country: c.country },
          }),
          itemListJsonLd(list.map((p) => ({ name: p.name, path: href(locale, { kind: "product", slug: p.slug }) })), t.city.productsTitle(c)),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
