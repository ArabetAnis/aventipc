import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Locale, PageKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { site } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/pages/ContactForm";
import { homeCrumb, crumb } from "@/views/shared";

export function StaticPageView({ locale, dict, page }: { locale: Locale; dict: Dictionary; page: PageKey }) {
  const t = dict.pages[page];
  const crumbs = [homeCrumb(locale, dict), crumb(locale, t.title, { kind: "page", page })];
  const isContact = page === "contact";
  const isLegal = page === "privacy" || page === "terms";

  return (
    <>
      <Container className="pt-6 md:pt-8">
        <Breadcrumbs items={crumbs} label={dict.ui.breadcrumb} />
      </Container>
      <Container as="article" className="mt-8">
        <h1 className="text-display md:text-hero">{t.title}</h1>
        <p className="mt-5 max-w-[60ch] text-lead text-ink-soft">{t.intro}</p>

        <div className={`mt-12 grid gap-12 ${isContact ? "lg:grid-cols-2" : ""}`}>
          {isContact ? (
            <div className="space-y-8">
              <div className="rounded-tile border border-line bg-white p-6">
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Mail aria-hidden="true" className="size-5 text-aventi-blue" />
                    <a href={`mailto:${site.email}`} className="font-semibold hover:underline">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone aria-hidden="true" className="size-5 text-aventi-blue" />
                    <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="font-semibold hover:underline">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin aria-hidden="true" className="size-5 text-aventi-blue" />
                    <span>
                      {site.address.street}, {site.address.postalCode} {site.address.city}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Clock aria-hidden="true" className="size-5 text-aventi-blue" />
                    <span>{dict.ui.contact.hours}</span>
                  </li>
                </ul>
              </div>
              <ContactForm labels={dict.ui.contact.form} />
            </div>
          ) : null}

          <div className="max-w-[70ch] space-y-10">
            {t.sections.map((section, i) => (
              <section key={i}>
                {section.heading ? <h2 className="text-heading">{section.heading}</h2> : null}
                <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
            {isLegal ? <p className="text-sm text-ink-muted">{dict.ui.legalUpdated}</p> : null}
          </div>
        </div>
      </Container>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
