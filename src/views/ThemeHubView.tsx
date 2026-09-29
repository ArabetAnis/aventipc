import type { Locale, ThemeKey } from "@/i18n/config";
import { localeMeta, themeKeys } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { citiesFor } from "@/i18n/cities";
import { href } from "@/i18n/routes";
import { breadcrumbJsonLd, itemListJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkChips } from "@/components/ui/LinkChips";
import { ProductGrid } from "@/components/product/ProductGrid";
import { homeCrumb, crumb, productsForTheme, cityContext } from "@/views/shared";

export function ThemeHubView({ locale, dict, theme }: { locale: Locale; dict: Dictionary; theme: ThemeKey }) {
  const t = dict.themes[theme];
  const list = productsForTheme(theme);
  const path = href(locale, { kind: "theme", theme });
  const crumbs = [homeCrumb(locale, dict), crumb(locale, t.label, { kind: "theme", theme })];
  const countries = localeMeta[locale].countries;
  const cities = citiesFor(locale);

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} label={dict.ui.breadcrumb} />
        <h1 className="mt-6 max-w-[22ch] text-display md:text-hero">{t.hub.h1}</h1>
        <div className="mt-5 max-w-[62ch] space-y-4 text-lead text-ink-soft">
          {t.hub.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>

      <Container as="section" aria-labelledby="citta" className="mt-12">
        <h2 id="citta" className="text-heading">
          {t.hub.citiesTitle}
        </h2>
        <div className="mt-5 space-y-6">
          {countries.map((country) => (
            <div key={country}>
              {countries.length > 1 ? <h3 className="mb-3 text-sm font-bold text-ink-soft">{dict.countries[country]}</h3> : null}
              <LinkChips
                items={cities
                  .filter((c) => c.country === country)
                  .map((c) => ({ label: t.city.h1(cityContext(locale, dict, c, list)), href: href(locale, { kind: "city", theme, city: c.id }) }))}
              />
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" aria-labelledby="prodotti-tema" className="mt-16">
        <h2 id="prodotti-tema" className="mb-8 text-heading md:text-title">
          {t.hub.productsTitle}
        </h2>
        <ProductGrid products={list} locale={locale} dict={dict} priorityCount={3} />
      </Container>

      <Container as="nav" aria-label={dict.ui.footer.searches} className="mt-16">
        <h2 className="text-heading">{dict.ui.footer.searches}</h2>
        <div className="mt-5">
          <LinkChips
            items={themeKeys.map((k) => ({ label: dict.themes[k].label, href: href(locale, { kind: "theme", theme: k }), current: k === theme }))}
          />
        </div>
      </Container>

      <JsonLd
        data={[
          collectionPageJsonLd({ name: t.hub.h1, description: t.hub.metaDescription, path, locale }),
          itemListJsonLd(list.map((p) => ({ name: p.name, path: href(locale, { kind: "product", slug: p.slug }) })), t.hub.productsTitle),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
