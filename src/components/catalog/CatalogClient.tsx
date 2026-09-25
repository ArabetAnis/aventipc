"use client";

import { useSearchParams } from "next/navigation";
import { brands } from "@/content/brands";
import { parseQuery, applyQuery, catalogTitle, catalogTagline } from "@/lib/catalog";
import { Container } from "@/components/ui/Container";
import { SearchForm } from "@/components/layout/SearchForm";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { EmptyResults } from "@/components/catalog/EmptyResults";

const brandNames = Object.fromEntries(brands.map((b) => [b.slug, b.name]));

/**
 * Client-side catalogue used only by the static export (GitHub Pages showcase),
 * where the server cannot read search parameters. Production uses the server page.
 */
export function CatalogClient() {
  const sp = useSearchParams();
  const query = parseQuery(Object.fromEntries(sp.entries()));
  const list = applyQuery(query);
  return (
    <>
      <Container className="mt-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-title md:text-display">{catalogTitle(query)}</h1>
            <p className="mt-2 max-w-[52ch] text-ink-soft">{catalogTagline(query)}</p>
          </div>
          <SearchForm size="lg" defaultValue={query.q} className="w-full md:w-96" />
        </div>
      </Container>
      <Container className="mt-8">
        <CatalogFilters query={query} total={list.length} />
      </Container>
      <Container className="mt-8">
        {list.length > 0 ? <ProductGrid products={list} brandNames={brandNames} priorityCount={4} /> : <EmptyResults query={query.q} />}
      </Container>
    </>
  );
}
