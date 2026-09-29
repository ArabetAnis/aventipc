import type { Locale } from "@/i18n/config";
import { themeKeys } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { href } from "@/i18n/routes";
import { sortedProducts } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LinkChips } from "@/components/ui/LinkChips";
import { ProductGrid } from "@/components/product/ProductGrid";
import { homeCrumb, crumb } from "@/views/shared";

export function CatalogView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const list = sortedProducts();
  const c = dict.ui.catalog;
  const crumbs = [homeCrumb(locale, dict), crumb(locale, dict.ui.nav.products, { kind: "catalog" })];
  const path = href(locale, { kind: "catalog" });
  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} label={dict.ui.breadcrumb} />
        <h1 className="mt-6 text-title md:text-display">{c.h1}</h1>
        <p className="mt-3 max-w-[60ch] text-lead text-ink-soft">{c.intro}</p>
        <p className="mt-3 text-sm text-ink-muted">{c.count(list.length)}</p>
      </Container>
      <Container as="section" aria-label={c.h1} className="mt-10">
        <ProductGrid products={list} locale={locale} dict={dict} priorityCount={3} />
      </Container>
      <Container as="nav" aria-label={dict.ui.footer.searches} className="mt-16">
        <h2 className="text-heading">{dict.ui.footer.searches}</h2>
        <div className="mt-5">
          <LinkChips items={themeKeys.map((theme) => ({ label: dict.themes[theme].label, href: href(locale, { kind: "theme", theme }) }))} />
        </div>
      </Container>
      <JsonLd
        data={[
          collectionPageJsonLd({ name: c.title, description: c.metaDescription, path, locale }),
          itemListJsonLd(list.map((p) => ({ name: p.name, path: href(locale, { kind: "product", slug: p.slug }) })), c.h1),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
