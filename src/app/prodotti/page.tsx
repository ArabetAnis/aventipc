import type { Metadata } from "next";
import { Suspense } from "react";
import { categories } from "@/content/categories";
import { brands } from "@/content/brands";
import { pageMetadata, itemListJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { parseQuery, applyQuery, catalogTitle, catalogTagline, IS_STATIC_EXPORT } from "@/lib/catalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchForm } from "@/components/layout/SearchForm";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { CatalogClient } from "@/components/catalog/CatalogClient";
import { EmptyResults } from "@/components/catalog/EmptyResults";

type Props = PageProps<"/prodotti">;

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Tutti i prodotti", href: "/prodotti" },
];

const defaultMetadata = () =>
  pageMetadata({
    title: "Tutti i prodotti: notebook, desktop, gaming e workstation",
    description: "Il catalogo completo AventiPC: notebook, PC desktop, gaming, workstation e mini PC con spedizione gratuita in Italia e garanzia 2 anni.",
    path: "/prodotti",
  });

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  // The static export cannot read search parameters, so it keeps the generic metadata.
  if (IS_STATIC_EXPORT) return defaultMetadata();
  const query = parseQuery(await searchParams);
  const onlySort = !query.ordina || query.ordina === "rilevanza";
  if (query.q) {
    return pageMetadata({ title: `Risultati per “${query.q}”`, description: `Prodotti che corrispondono a “${query.q}” nel catalogo AventiPC.`, path: "/prodotti", noindex: true });
  }
  if (query.categoria && !query.marca && onlySort) {
    const c = categories.find((x) => x.slug === query.categoria)!;
    return { ...pageMetadata({ title: c.name, description: c.seoDescription, path: `/categorie/${c.slug}` }), title: { absolute: c.seoTitle } };
  }
  if (query.marca && !query.categoria && onlySort) {
    const b = brands.find((x) => x.slug === query.marca)!;
    return { ...pageMetadata({ title: b.name, description: b.seoDescription, path: `/marchi/${b.slug}` }), title: { absolute: b.seoTitle } };
  }
  return { ...defaultMetadata(), robots: query.categoria || query.marca || !onlySort ? { index: false, follow: true } : undefined };
}

export default async function CatalogPage({ searchParams }: Props) {
  if (IS_STATIC_EXPORT) {
    return (
      <>
        <Container className="pt-6 md:pt-8">
          <Breadcrumbs items={crumbs} />
        </Container>
        <Suspense fallback={<Container className="mt-6"><h1 className="text-title md:text-display">Tutti i prodotti</h1></Container>}>
          <CatalogClient />
        </Suspense>
        <JsonLd data={breadcrumbJsonLd(crumbs)} />
      </>
    );
  }

  const query = parseQuery(await searchParams);
  const list = applyQuery(query);
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const title = catalogTitle(query);

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-title md:text-display">{title}</h1>
            <p className="mt-2 max-w-[52ch] text-ink-soft">{catalogTagline(query)}</p>
          </div>
          <SearchForm size="lg" defaultValue={query.q} className="w-full md:w-96" />
        </div>
      </Container>
      <Container className="mt-8">
        <CatalogFilters query={query} total={list.length} />
      </Container>
      <Container className="mt-8">
        {list.length > 0 ? <ProductGrid products={list} brandNames={brandNames} priorityCount={4} /> : <EmptyResults query={query.q} />}
      </Container>
      <JsonLd data={[itemListJsonLd(list, title), breadcrumbJsonLd(crumbs)]} />
    </>
  );
}
