import type { Metadata } from "next";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { brands } from "@/content/brands";
import { faq } from "@/content/faq";
import { getFeaturedProducts } from "@/data/products";
import { faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/home/Hero";
import { Reassurance } from "@/components/home/Reassurance";
import { Faq } from "@/components/home/Faq";
import { ProductGrid } from "@/components/product/ProductGrid";

const title = `${site.name} — PC e notebook usati con foto reali`;

export const metadata: Metadata = {
  title: { absolute: title },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title, description: site.description, url: "/", locale: "it_IT", type: "website", siteName: site.name },
};

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));

  return (
    <>
      <Hero />

      <Container as="section" aria-labelledby="in-vendita" className="mt-12 md:mt-20">
        <SectionHeading
          id="in-vendita"
          title={home.sections.featured}
          text="Ogni computer è un esemplare unico: quando è venduto, sparisce dal sito."
          link={{ label: "Tutti i prodotti", href: "/prodotti" }}
        />
        <ProductGrid products={featured} brandNames={brandNames} />
      </Container>

      <Container as="section" aria-labelledby="perche" className="mt-20 md:mt-28">
        <h2 id="perche" className="sr-only">
          {home.sections.why}
        </h2>
        <Reassurance />
      </Container>

      <Container as="section" aria-labelledby="domande-frequenti" className="mt-20 md:mt-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="domande-frequenti" className="scroll-mt-24 text-heading md:text-title">
              {home.sections.faq}
            </h2>
            <p className="mt-2 max-w-[36ch] text-ink-soft">Come si compra, in che condizioni sono i computer e come contattarci.</p>
          </div>
          <Faq items={faq} />
        </div>
      </Container>

      <JsonLd data={faqJsonLd(faq)} />
    </>
  );
}
