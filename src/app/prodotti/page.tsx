import type { Metadata } from "next";
import { products, searchProducts } from "@/data/products";
import { categories } from "@/content/categories";
import { brands } from "@/content/brands";
import { pageMetadata, itemListJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchForm } from "@/components/layout/SearchForm";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CatalogFilters, type CatalogQuery } from "@/components/catalog/CatalogFilters";
import { EmptyResults } from "@/components/catalog/EmptyResults";

type Props = PageProps<"/prodotti">;

function first(v: string | string[] | undefined): string | undefined {
  const s = Array.isArray(v) ? v[0] : v;
  return s ? s.slice(0, 80) : undefined;
}

async function readQuery(searchParams: Props["searchParams"]): Promise<CatalogQuery> {
  const sp = await searchParams;
  const categoria = first(sp.categoria);
  const marca = first(sp.marca);
  return {
    q: first(sp.q)?.trim() || undefined,
    categoria: categories.some((c) => c.slug === categoria) ? categoria : undefined,
    marca: brands.some((b) => b.slug === marca) ? marca : undefined,
    ordina: first(sp.ordina),
  };
}

function applyQuery(query: CatalogQuery) {
  let list = query.q ? searchProducts(query.q) : [...products];
  if (query.categoria) list = list.filter((p) => p.category === query.categoria);
  if (query.marca) list = list.filter((p) => p.brand === query.marca);
  switch (query.ordina) {
    case "prezzo-crescente":
      list.sort((a, b) => a.price - b.price);
      break;
    case "prezzo-decrescente":
      list.sort((a, b) => b.price - a.price);
      break;
    case "nome":
      list.sort((a, b) => a.name.localeCompare(b.name, "it"));
      break;
    default:
      list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }
  return list;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const query = await readQuery(searchParams);
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
  return pageMetadata({
    title: "Tutti i prodotti: notebook, desktop, gaming e workstation",
    description: "Il catalogo completo AventiPC: notebook, PC desktop, gaming, workstation e mini PC con spedizione gratuita in Italia e garanzia 2 anni.",
    path: "/prodotti",
    noindex: Boolean(query.categoria || query.marca || !onlySort),
  });
}

export default async function CatalogPage({ searchParams }: Props) {
  const query = await readQuery(searchParams);
  const list = applyQuery(query);
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const category = categories.find((c) => c.slug === query.categoria);
  const title = query.q ? `Risultati per “${query.q}”` : category ? category.name : "Tutti i prodotti";
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Tutti i prodotti", href: "/prodotti" },
  ];

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-title md:text-display">{title}</h1>
            <p className="mt-2 max-w-[52ch] text-ink-soft">
              {category ? category.tagline : "Notebook, PC desktop, gaming, workstation e mini PC. Spedizione gratuita in Italia e garanzia 2 anni."}
            </p>
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
