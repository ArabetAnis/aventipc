import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/content/categories";
import { brands } from "@/content/brands";
import { getProductsByCategory } from "@/data/products";
import { pageMetadata, absoluteUrl, breadcrumbJsonLd, itemListJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CollectionHeader } from "@/components/catalog/CollectionHeader";
import { CollectionLinks } from "@/components/catalog/CollectionLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/categorie/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    ...pageMetadata({
      title: category.name,
      description: category.seoDescription,
      path: `/categorie/${category.slug}`,
      image: { url: absoluteUrl(category.image.src), width: category.image.width, height: category.image.height, alt: category.image.alt },
    }),
    title: { absolute: category.seoTitle },
  };
}

export default async function CategoryPage({ params }: PageProps<"/categorie/[slug]">) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const list = getProductsByCategory(category.slug);
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const crumbs = [
    { name: "Home", href: "/" },
    { name: category.name, href: `/categorie/${category.slug}` },
  ];
  const others = categories.filter((c) => c.slug !== category.slug).map((c) => ({ name: c.name, tagline: c.tagline, href: `/categorie/${c.slug}` }));

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <Container className="mt-8">
        <CollectionHeader title={category.name} tagline={category.tagline} count={list.length} image={category.image} />
      </Container>
      <Container as="section" aria-label={`Prodotti: ${category.name}`} className="mt-14">
        {list.length > 0 ? (
          <ProductGrid products={list} brandNames={brandNames} priorityCount={4} />
        ) : (
          <div className="rounded-tile border border-line bg-white p-10 text-center">
            <p className="text-ink-soft">Stiamo aggiornando questa categoria. Nel frattempo dai un’occhiata al catalogo completo.</p>
            <ButtonLink href="/prodotti" className="mt-5">Tutti i prodotti</ButtonLink>
          </div>
        )}
      </Container>
      <Container as="section" aria-labelledby="guida" className="mt-20 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div>
          <h2 id="guida" className="text-heading md:text-title">Come scegliere</h2>
          <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed text-ink-soft">
            {category.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <CollectionLinks title="Altre categorie" items={others} />
      </Container>
      <JsonLd
        data={[
          collectionPageJsonLd({ name: category.seoTitle, description: category.seoDescription, path: `/categorie/${category.slug}` }),
          itemListJsonLd(list, category.name),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
