import Link from "next/link";
import { Check, Camera, MessageCircle, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { themeKeys } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { href } from "@/i18n/routes";
import { products, type Product } from "@/data/products";
import { brandName } from "@/data/brands";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Price } from "@/components/ui/Price";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkChips } from "@/components/ui/LinkChips";
import { ProductGallery } from "@/components/product/ProductGallery";
import { SpecTable } from "@/components/product/SpecTable";
import { BuyButton } from "@/components/product/BuyButton";
import { ProductGrid } from "@/components/product/ProductGrid";
import { homeCrumb, crumb } from "@/views/shared";

export function ProductView({ locale, dict, product }: { locale: Locale; dict: Dictionary; product: Product }) {
  const t = dict.products[product.slug];
  const p = dict.ui.product;
  const brand = brandName(product.brand);
  const path = href(locale, { kind: "product", slug: product.slug });
  const related = products.filter((x) => x.slug !== product.slug);
  const crumbs = [
    homeCrumb(locale, dict),
    crumb(locale, dict.ui.nav.products, { kind: "catalog" }),
    crumb(locale, product.name, { kind: "product", slug: product.slug }),
  ];
  const availability = { in_stock: p.available, preorder: p.comingSoon, out_of_stock: p.sold }[product.availability];
  const themes = themeKeys.filter((theme) => theme !== "students" || product.form === "laptop");

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} label={dict.ui.breadcrumb} />
      </Container>

      <Container as="article" className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <ProductGallery
          images={product.images.map((img, i) => ({ ...img, alt: t.imageAlts[i] ?? product.name }))}
          labels={{
            gallery: p.gallery(product.name),
            showImage: product.images.map((_, i) => p.showImage(i + 1, product.images.length)),
            modelImage: p.modelImage,
            realPhoto: p.realPhoto,
          }}
        />

        <div>
          <div className="flex items-center gap-3">
            <Link href={href(locale, { kind: "brand", slug: product.brand })} className="text-sm font-semibold text-ink-muted hover:text-ink">
              {brand}
            </Link>
            {product.condition === "used" ? <Badge tone="brand">{p.likeNew}</Badge> : null}
          </div>
          <h1 className="mt-2 text-title md:text-display">{product.name}</h1>
          <p className="mt-4 max-w-[60ch] text-lead text-ink-soft">{t.shortDescription}</p>

          <div className="mt-8 rounded-tile border border-line bg-white p-6">
            <Price price={product.price} locale={locale} onRequestLabel={p.priceOnRequest} size="lg" />
            <p className={`mt-3 flex items-center gap-2 text-sm font-semibold ${product.availability === "out_of_stock" ? "text-danger" : "text-success"}`}>
              <span aria-hidden="true" className="size-2 rounded-full bg-current" />
              {availability}
            </p>
            <div className="mt-5">
              <BuyButton
                vinted={product.vinted}
                labels={{ buy: p.buyOnVinted, ask: p.askAvailability }}
                contactHref={href(locale, { kind: "page", page: "contact" })}
              />
            </div>
            <ul className="mt-6 grid gap-2.5 border-t border-line pt-5 text-sm text-ink-soft">
              {product.vinted ? (
                <li className="flex items-start gap-2.5">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-aventi-blue" /> {p.vintedNote}
                </li>
              ) : null}
              <li className="flex items-start gap-2.5">
                <Camera aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-aventi-blue" /> {p.photosNote}
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-aventi-blue" />
                <span>
                  {p.questions}{" "}
                  <Link href={href(locale, { kind: "page", page: "contact" })} className="font-semibold text-aventi-blue hover:underline">
                    {p.writeUs}
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <ul className="mt-8 space-y-2.5">
            {t.highlights.map((h) => (
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
            {p.description}
          </h2>
          <div className="mt-5 max-w-[65ch] space-y-4 leading-relaxed text-ink-soft">
            {t.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <LinkChips items={themes.map((theme) => ({ label: dict.themes[theme].label, href: href(locale, { kind: "theme", theme }) }))} />
          </div>
        </div>
        <div>
          <h2 className="text-heading">{p.specs}</h2>
          <div className="mt-5 rounded-tile border border-line bg-white px-6 py-2">
            <SpecTable specs={t.specs} caption={p.specsCaption(product.name)} />
          </div>
        </div>
      </Container>

      {related.length > 0 ? (
        <Container as="section" aria-labelledby="correlati" className="mt-20 lg:mt-28">
          <SectionHeading id="correlati" title={p.related} link={{ label: dict.ui.footer.allProducts, href: href(locale, { kind: "catalog" }) }} />
          <ProductGrid products={related} locale={locale} dict={dict} />
        </Container>
      ) : null}

      <JsonLd
        data={[
          productJsonLd({ product, brandName: brand, path, locale, description: t.shortDescription, kind: t.kind }),
          breadcrumbJsonLd(crumbs),
        ]}
      />
    </>
  );
}
