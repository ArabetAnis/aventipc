"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { LanguageLink } from "@/components/layout/LanguageSwitcher";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  languages: LanguageLink[];
  labels: { open: string; close: string; menu: string; language: string };
}

export function MobileMenu({ links, languages, labels }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  // Close the panel when the route changes (state adjusted during render, no effect needed).
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper-tint"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>
      {open ? (
        <div id={panelId} className="absolute inset-x-0 top-full border-b border-line bg-paper/95 backdrop-blur-md">
          <nav aria-label={labels.menu} className="mx-auto max-w-page px-6 py-4 md:px-8">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href} className="border-b border-line last:border-0">
                  <Link href={link.href} className="block py-3.5 text-base font-semibold text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold text-ink-muted">{labels.language}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {languages.map((l) => (
                <li key={l.locale}>
                  <Link
                    href={l.href}
                    hrefLang={l.locale}
                    lang={l.locale}
                    aria-current={l.current ? "true" : undefined}
                    className={`inline-flex h-10 items-center rounded-full border px-4 text-sm font-semibold ${l.current ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-soft"}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
