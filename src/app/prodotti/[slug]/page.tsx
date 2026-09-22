import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { brands } from "@/content/brands";
import { categories } from "@/content/categories";
import { site } from "@/content/site";
import { pageMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Price } from "@/components/ui/Price";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Rating } from "@/components/product/Rating";
import { SpecTable } from "@/components/product/SpecTable";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { ProductGrid } from "@/components/product/ProductGrid";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/prodotti/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const brand = brands.find((b) => b.slug === product.brand);
  const title = `${product.name} — prezzo e scheda tecnica`;
  const description = product.shortDescription;
  return {
    ...pageMetadata({ title, description, path: `/prodotti/${product.slug}` }),
    title: brand && !product.name.startsWith(brand.name) ? `${brand.name} ${product.name} — prezzo e scheda tecnica` : title,
  };
}

const availabilityText = {
  in_stock: "Disponibile, spedizione in 24–48 ore",
  preorder: "In preordine, spedizione alla data di uscita",
  out_of_stock: "Non disponibile al momento",
} as const;

export default async function ProductPage({ params }: PageProps<"/prodotti/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const brand = brands.find((b) => b.slug === product.brand);
  const category = categories.find((c) => c.slug === product.category);
  const brandName = brand?.name ?? product.brand;
  const categoryName = category?.name ?? product.category;
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const related = getRelatedProducts(product, 4);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: categoryName, href: `/categorie/${product.category}` },
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
          <Link href={`/marchi/${product.brand}`} className="text-sm font-semibold text-ink-muted hover:text-ink">
            {brandName}
          </Link>
          <h1 className="mt-2 text-title md:text-display">{product.name}</h1>
          {product.rating ? (
            <div className="mt-3">
              <Rating value={product.rating.value} count={product.rating.count} />
            </div>
          ) : null}
          <p className="mt-4 max-w-[60ch] text-lead text-ink-soft">{product.shortDescription}</p>

          <div className="mt-8 rounded-tile border border-line bg-white p-6">
            <Price price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
            <p className="mt-1 text-sm text-ink-muted">IVA inclusa · Codice {product.sku}</p>
            <p className={`mt-4 flex items-center gap-2 text-sm font-semibold ${product.availability === "out_of_stock" ? "text-danger" : "text-success"}`}>
              <span aria-hidden="true" className="size-2 rounded-full bg-current" />
              {availabilityText[product.availability]}
            </p>
            <div className="mt-5">
              <AddToCartButton slug={product.slug} disabled={product.availability === "out_of_stock"} />
            </div>
            <ul className="mt-6 grid gap-2.5 border-t border-line pt-5 text-sm text-ink-soft">
              <li className="flex items-center gap-2.5">
                <Truck aria-hidden="true" className="size-4 text-aventi-blue" /> Spedizione gratuita in tutta Italia
              </li>
              <li className="flex items-center gap-2.5">
                <RotateCcw aria-hidden="true" className="size-4 text-aventi-blue" /> Reso gratuito entro {site.returnDays} giorni
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck aria-hidden="true" className="size-4 text-aventi-blue" /> Garanzia ufficiale {site.warrantyYears} anni
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
          <SectionHeading id="correlati" title="Potrebbero interessarti" link={{ label: `Tutti i ${categoryName.toLowerCase()}`, href: `/categorie/${product.category}` }} />
          <ProductGrid products={related} brandNames={brandNames} />
        </Container>
      ) : null}

      <JsonLd data={[productJsonLd(product, brandName, categoryName), breadcrumbJsonLd(crumbs)]} />
    </>
  );
}
