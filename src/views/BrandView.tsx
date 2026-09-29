import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { href } from "@/i18n/routes";
import { brands, brandName } from "@/data/brands";
import { products, sortedProducts } from "@/data/products";
import type { BrandSlug } from "@/types/catalog";
import { breadcrumbJsonLd, itemListJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CollectionLinks } from "@/components/catalog/CollectionLinks";
import { homeCrumb, crumb } from "@/views/shared";

export function BrandView({ locale, dict, slug }: { locale: Locale; dict: Dictionary; slug: BrandSlug }) {
  const t = dict.brands[slug];
  const name = brandName(slug);
  const list = sortedProducts(products.filter((p) => p.brand === slug));
  const path = href(locale, { kind: "brand", slug });
  const crumbs = [homeCrumb(locale, dict), crumb(locale, name, { kind: "brand", slug })];
  const others = brands
    .filter((b) => b.slug !== slug)
    .map((b) => ({ name: b.name, tagline: dict.brands[b.slug].tagline, href: href(locale, { kind: "brand", slug: b.slug }) }));

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} label={dict.ui.breadcrumb} />
        <h1 className="mt-6 text-display md:text-hero">{name}</h1>
        <p className="mt-4 max-w-[46ch] text-lead text-ink-soft">{t.tagline}</p>
        <p className="mt-3 text-sm text-ink-muted">{dict.ui.brand.count(list.length)}</p>
      </Container>
      <Container as="section" aria-label={name} className="mt-12">
        {list.length > 0 ? (
          <ProductGrid products={list} locale={locale} dict={dict} priorityCount={3} />
        ) : (
          <div className="rounded-tile border border-line bg-white p-10 text-center">
            <p className="text-ink-soft">{dict.ui.brand.empty}</p>
            <ButtonLink href={href(locale, { kind: "catalog" })} className="mt-5">
              {dict.ui.footer.allProducts}
            </ButtonLink>
          </div>
        )}
      </Container>
      <Container as="section" aria-labelledby="perche-marchio" className="mt-20 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div>
          <h2 id="perche-marchio" className="text-heading md:text-title">
            {t.whyTitle}
          </h2>
          <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed text-ink-soft">
            {t.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <CollectionLinks title={dict.ui.brand.others} items={others} />
      </Container>
      <JsonLd
        data={[
          collectionPageJsonLd({ name: t.title, description: t.metaDescription, path, locale }),
          itemListJsonLd(list.map((p) => ({ name: p.name, path: href(locale, { kind: "product", slug: p.slug }) })), name),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
