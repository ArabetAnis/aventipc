import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brands } from "@/content/brands";
import { getProductsByBrand } from "@/data/products";
import { pageMetadata, breadcrumbJsonLd, itemListJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CollectionHeader } from "@/components/catalog/CollectionHeader";
import { CollectionLinks } from "@/components/catalog/CollectionLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/marchi/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return {};
  return {
    ...pageMetadata({ title: brand.name, description: brand.seoDescription, path: `/marchi/${brand.slug}` }),
    title: { absolute: brand.seoTitle },
  };
}

export default async function BrandPage({ params }: PageProps<"/marchi/[slug]">) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();
  const list = getProductsByBrand(brand.slug);
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const crumbs = [
    { name: "Home", href: "/" },
    { name: brand.name, href: `/marchi/${brand.slug}` },
  ];
  const others = brands.filter((b) => b.slug !== brand.slug).map((b) => ({ name: b.name, tagline: b.tagline, href: `/marchi/${b.slug}` }));

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <Container className="mt-8">
        <CollectionHeader title={brand.name} tagline={brand.tagline} count={list.length} />
      </Container>
      <Container as="section" aria-label={`Prodotti ${brand.name}`} className="mt-14">
        {list.length > 0 ? (
          <ProductGrid products={list} brandNames={brandNames} priorityCount={4} />
        ) : (
          <div className="rounded-tile border border-line bg-white p-10 text-center">
            <p className="text-ink-soft">Nessun prodotto {brand.name} al momento. Guarda il catalogo completo.</p>
            <ButtonLink href="/prodotti" className="mt-5">Tutti i prodotti</ButtonLink>
          </div>
        )}
      </Container>
      <Container as="section" aria-labelledby="perche-brand" className="mt-20 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div>
          <h2 id="perche-brand" className="text-heading md:text-title">Perché scegliere {brand.name}</h2>
          <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed text-ink-soft">
            {brand.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <CollectionLinks title="Altri marchi" items={others} />
      </Container>
      <JsonLd
        data={[
          collectionPageJsonLd({ name: brand.seoTitle, description: brand.seoDescription, path: `/marchi/${brand.slug}` }),
          itemListJsonLd(list, brand.name),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
