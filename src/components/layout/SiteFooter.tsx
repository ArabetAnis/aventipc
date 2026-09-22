import Link from "next/link";
import { site } from "@/content/site";
import { footerNav } from "@/content/nav";
import { Wordmark } from "@/components/brand/Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="mx-auto max-w-page px-6 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label="AventiPC" className="inline-block">
              <Wordmark variant="dark" className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-white/70">{site.tagline}</p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-white/70">
              {site.legalName}
              <br />
              {site.address.street}, {site.address.postalCode} {site.address.city} ({site.address.region})
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <br />
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </address>
          </div>
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-sans text-sm font-bold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} · P.IVA {site.vat}
          </p>
          <p>Prezzi in euro, IVA inclusa. Immagini dei prodotti a scopo illustrativo.</p>
        </div>
      </div>
    </footer>
  );
}
