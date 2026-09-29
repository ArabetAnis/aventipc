import Link from "next/link";
import { Globe } from "lucide-react";
import type { Locale } from "@/i18n/config";

export interface LanguageLink {
  locale: Locale;
  href: string;
  label: string;
  current: boolean;
  /** True when the link points to the same page in that language (not just its home). */
  exact: boolean;
}

/** Native <details> dropdown: works without JavaScript and every option is a crawlable link. */
export function LanguageSwitcher({ links, label }: { links: LanguageLink[]; label: string }) {
  const current = links.find((l) => l.current);
  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className="flex h-11 cursor-pointer list-none items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-ink-soft hover:bg-paper-tint hover:text-ink"
      >
        <Globe aria-hidden="true" className="size-4" />
        <span className="uppercase">{current?.locale}</span>
      </summary>
      <ul className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-card border border-line bg-white py-1 shadow-[0_20px_40px_-20px_rgba(21,18,29,0.25)]">
        {links.map((l) => (
          <li key={l.locale}>
            <Link
              href={l.href}
              hrefLang={l.locale}
              lang={l.locale}
              data-lang-choice={l.locale}
              aria-current={l.current ? "true" : undefined}
              className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-paper-tint ${l.current ? "font-bold text-ink" : "text-ink-soft"}`}
            >
              {l.label}
              <span className="text-xs uppercase text-ink-muted">{l.locale}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
