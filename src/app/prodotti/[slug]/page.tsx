import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Camera, MessageCircle } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { brands } from "@/content/brands";
import { pageMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Price } from "@/components/ui/Price";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { SpecTable } from "@/components/product/SpecTable";
import { MarketplaceButtons } from "@/components/product/MarketplaceButtons";
import { ProductGrid } from "@/components/product/ProductGrid";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/prodotti/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return pageMetadata({
    title: `${product.name} usato`,
    description: product.shortDescription,
    path: `/prodotti/${product.slug}`,
  });
}

const availabilityText = {
  in_stock: "Disponibile",
  preorder: "In arrivo",
  out_of_stock: "Venduto",
} as const;

export default async function ProductPage({ params }: PageProps<"/prodotti/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const brandName = brands.find((b) => b.slug === product.brand)?.name ?? product.brand;
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const related = getRelatedProducts(product);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Prodotti", href: "/prodotti" },
    { name: product.name, href: `/prodotti/${product.slug}` },
  ];

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Container as="article" className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <ProductGallery images={product.images} productName={product.name} />

        <div>
          <div className="flex items-center gap-3">
            <Link href={`/marchi/${product.brand}`} className="text-sm font-semibold text-ink-muted hover:text-ink">
              {brandName}
            </Link>
            {product.condition === "used" ? <Badge tone="brand">Usato</Badge> : null}
          </div>
          <h1 className="mt-2 text-title md:text-display">{product.name}</h1>
          <p className="mt-4 max-w-[60ch] text-lead text-ink-soft">{product.shortDescription}</p>

          <div className="mt-8 rounded-tile border border-line bg-white p-6">
            <Price price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
            <p className={`mt-3 flex items-center gap-2 text-sm font-semibold ${product.availability === "out_of_stock" ? "text-danger" : "text-success"}`}>
              <span aria-hidden="true" className="size-2 rounded-full bg-current" />
              {availabilityText[product.availability]}
            </p>
            <div className="mt-5">
              <MarketplaceButtons product={product} />
            </div>
            <ul className="mt-6 grid gap-2.5 border-t border-line pt-5 text-sm text-ink-soft">
              <li className="flex items-center gap-2.5">
                <Camera aria-hidden="true" className="size-4 text-aventi-blue" /> Le foto sono dell&apos;esemplare in vendita
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle aria-hidden="true" className="size-4 text-aventi-blue" />
                <span>
                  Domande o altre foto?{" "}
                  <Link href="/contatti" className="font-semibold text-aventi-blue hover:underline">
                    Scrivici
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <ul className="mt-8 space-y-2.5">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-ink">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-aventi-blue" strokeWidth={2.5} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container as="section" aria-labelledby="descrizione" className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="descrizione" className="text-heading">
            Descrizione
          </h2>
          <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed text-ink-soft">
            {product.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-heading">Scheda tecnica</h2>
          <div className="mt-5 rounded-tile border border-line bg-white px-6 py-2">
            <SpecTable specs={product.specs} caption={`Specifiche tecniche di ${product.name}`} />
          </div>
        </div>
      </Container>

      {related.length > 0 ? (
        <Container as="section" aria-labelledby="correlati" className="mt-20 lg:mt-28">
          <SectionHeading id="correlati" title="Altri computer in vendita" link={{ label: "Tutti i prodotti", href: "/prodotti" }} />
          <ProductGrid products={related} brandNames={brandNames} />
        </Container>
      ) : null}

      <JsonLd data={[productJsonLd(product, brandName), breadcrumbJsonLd(crumbs)]} />
    </>
  );
}
