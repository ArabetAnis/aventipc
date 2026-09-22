import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { mainNav } from "@/content/nav";
import { Wordmark } from "@/components/brand/Wordmark";
import { CartBadge } from "@/components/cart/CartBadge";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SearchForm } from "@/components/layout/SearchForm";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-page items-center gap-4 px-6 md:px-8 lg:h-[4.5rem]">
        <Link href="/" aria-label="AventiPC, torna alla home" className="flex shrink-0 items-center">
          <Wordmark variant="light" className="h-7 w-auto lg:h-8" />
        </Link>

        <nav aria-label="Menu principale" className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-6">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.9375rem] font-semibold text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <SearchForm className="hidden w-64 md:block xl:w-80" />
          <Link
            href="/carrello"
            aria-label="Carrello"
            className="relative flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper-tint"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            <CartBadge />
          </Link>
          <MobileMenu links={mainNav} />
        </div>
      </div>
      <div className="border-t border-line px-6 py-2 md:hidden">
        <SearchForm />
      </div>
    </header>
  );
}
