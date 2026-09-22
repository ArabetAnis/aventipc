import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { staticPages } from "@/content/pages";
import { site } from "@/content/site";
import { lifestyleImages } from "@/data/lifestyle";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/pages/ContactForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return staticPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = staticPages.find((p) => p.slug === slug);
  if (!page) return {};
  const meta = pageMetadata({ title: page.title, description: page.seoDescription, path: `/${page.slug}` });
  return page.seoTitle.includes(site.name) ? { ...meta, title: { absolute: page.seoTitle } } : meta;
}

export default async function StaticPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = staticPages.find((p) => p.slug === slug);
  if (!page) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: page.title, href: `/${page.slug}` },
  ];
  const isContact = page.slug === "contatti";
  const isAbout = page.slug === "chi-siamo";
  const isLegal = page.slug === "privacy" || page.slug === "termini";

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <Container as="article" className="mt-8">
        <h1 className="text-display md:text-hero">{page.title}</h1>
        <p className="mt-5 max-w-[60ch] text-lead text-ink-soft">{page.intro}</p>

        {isAbout ? (
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-tile border border-line bg-paper-tint">
            <Image src={lifestyleImages.about.src} alt={lifestyleImages.about.alt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          </div>
        ) : null}

        <div className={`mt-12 grid gap-12 ${isContact ? "lg:grid-cols-[1fr_1fr]" : ""}`}>
          {isContact ? (
            <div className="space-y-8">
              <div className="rounded-tile border border-line bg-white p-6">
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><Mail aria-hidden="true" className="size-5 text-aventi-blue" /><a href={`mailto:${site.email}`} className="font-semibold hover:underline">{site.email}</a></li>
                  <li className="flex gap-3"><Phone aria-hidden="true" className="size-5 text-aventi-blue" /><a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="font-semibold hover:underline">{site.phone}</a></li>
                  <li className="flex gap-3"><MapPin aria-hidden="true" className="size-5 text-aventi-blue" /><span>{site.address.street}, {site.address.postalCode} {site.address.city}</span></li>
                  <li className="flex gap-3"><Clock aria-hidden="true" className="size-5 text-aventi-blue" /><span>Lunedì–venerdì, 9:00–18:00</span></li>
                </ul>
              </div>
              <ContactForm />
            </div>
          ) : null}

          <div className="max-w-[70ch] space-y-10">
            {page.sections.map((section, i) => (
              <section key={i}>
                {section.heading ? <h2 className="text-heading">{section.heading}</h2> : null}
                <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
            {isLegal ? <p className="text-sm text-ink-muted">Ultimo aggiornamento: 22 settembre 2026</p> : null}
          </div>
        </div>
      </Container>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
