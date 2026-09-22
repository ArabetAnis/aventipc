import type { Metadata } from "next";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { categories } from "@/content/categories";
import { brands } from "@/content/brands";
import { faq } from "@/content/faq";
import { products, getFeaturedProducts } from "@/data/products";
import { faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { Reassurance } from "@/components/home/Reassurance";
import { Faq } from "@/components/home/Faq";
import { BrandStrip } from "@/components/home/BrandStrip";
import { ProductGrid } from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Notebook, PC desktop, gaming e workstation` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Notebook, PC desktop, gaming e workstation`,
    description: site.description,
    url: "/",
    locale: "it_IT",
    type: "website",
    siteName: site.name,
  },
};

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));
  const counts = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <Hero />

      <Container as="section" aria-labelledby="categorie" className="mt-12 md:mt-20">
        <SectionHeading id="categorie" title={home.sections.categories} link={{ label: "Tutti i prodotti", href: "/prodotti" }} />
        <CategoryTiles categories={categories} counts={counts} />
      </Container>

      <Container as="section" aria-labelledby="in-evidenza" className="mt-20 md:mt-28">
        <SectionHeading
          id="in-evidenza"
          title={home.sections.featured}
          text="Le configurazioni più richieste questa settimana, pronte per la spedizione."
          link={{ label: "Vedi il catalogo", href: "/prodotti" }}
        />
        <ProductGrid products={featured} brandNames={brandNames} />
      </Container>

      <Container as="section" aria-labelledby="perche" className="mt-20 md:mt-28">
        <h2 id="perche" className="sr-only">
          {home.sections.why}
        </h2>
        <Reassurance />
      </Container>

      <Container as="section" aria-labelledby="marchi" className="mt-16 md:mt-20">
        <SectionHeading id="marchi" title="Marchi" text="Solo prodotti originali con garanzia ufficiale per l'Italia." />
        <BrandStrip brands={brands} />
      </Container>

      <Container as="section" aria-labelledby="domande-frequenti" className="mt-20 md:mt-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="domande-frequenti" className="scroll-mt-24 text-heading md:text-title">
              {home.sections.faq}
            </h2>
            <p className="mt-2 max-w-[36ch] text-ink-soft">
              Spedizioni, resi, garanzia e pagamenti: tutto quello che serve sapere prima di ordinare.
            </p>
          </div>
          <Faq items={faq} />
        </div>
      </Container>

      <JsonLd data={faqJsonLd(faq)} />
    </>
  );
}
