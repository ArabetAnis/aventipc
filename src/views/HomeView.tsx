import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { themeKeys } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { citiesFor } from "@/i18n/cities";
import { href } from "@/i18n/routes";
import { sortedProducts } from "@/data/products";
import { faqJsonLd, itemListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkChips } from "@/components/ui/LinkChips";
import { Hero } from "@/components/home/Hero";
import { Reassurance } from "@/components/home/Reassurance";
import { Faq } from "@/components/home/Faq";
import { ProductGrid } from "@/components/product/ProductGrid";

export function HomeView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const list = sortedProducts();
  const cities = citiesFor(locale);
  return (
    <>
      <Hero
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        primary={{ label: dict.home.hero.primaryCta, href: href(locale, { kind: "catalog" }) }}
        secondary={{ label: dict.home.hero.secondaryCta, href: href(locale, { kind: "page", page: "howToBuy" }) }}
        image={{ src: "/images/hero/lenovo-thinkbook-14-iil.webp", alt: dict.home.hero.imageAlt, width: 842, height: 575 }}
      />

      <Container as="section" aria-labelledby="in-vendita" className="mt-12 md:mt-20">
        <SectionHeading
          id="in-vendita"
          title={dict.home.featuredTitle}
          text={dict.home.featuredText}
          link={{ label: dict.ui.footer.allProducts, href: href(locale, { kind: "catalog" }) }}
        />
        <ProductGrid products={list} locale={locale} dict={dict} priorityCount={3} />
      </Container>

      <Container as="section" aria-labelledby="perche" className="mt-20 md:mt-28">
        <h2 id="perche" className="sr-only">
          {dict.home.whyTitle}
        </h2>
        <Reassurance items={dict.home.reassurance} />
      </Container>

      <Container as="section" aria-labelledby="ricerche" className="mt-20 md:mt-28">
        <SectionHeading id="ricerche" title={dict.home.searchesTitle} text={dict.home.searchesText} />
        <div className="grid gap-8 lg:grid-cols-3">
          {themeKeys.map((theme) => (
            <div key={theme}>
              <h3 className="font-display text-lg font-semibold">
                <Link href={href(locale, { kind: "theme", theme })} className="hover:text-aventi-blue">
                  {dict.themes[theme].label}
                </Link>
              </h3>
              <div className="mt-3">
                <LinkChips
                  items={cities.map((c) => ({
                    label: c.names[locale]!.name,
                    href: href(locale, { kind: "city", theme, city: c.id }),
                  }))}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" aria-labelledby="domande-frequenti" className="mt-20 md:mt-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="domande-frequenti" className="scroll-mt-24 text-heading md:text-title">
              {dict.home.faqTitle}
            </h2>
            <p className="mt-2 max-w-[36ch] text-ink-soft">{dict.home.faqText}</p>
          </div>
          <Faq items={dict.faq} />
        </div>
      </Container>

      <JsonLd
        data={[
          faqJsonLd(dict.faq),
          itemListJsonLd(
            list.map((p) => ({ name: p.name, path: href(locale, { kind: "product", slug: p.slug }) })),
            dict.home.featuredTitle,
          ),
        ]}
      />
    </>
  );
}
