import Image from "next/image";
import type { Category } from "@/types/catalog";

interface CollectionHeaderProps {
  title: string;
  tagline: string;
  count: number;
  image?: Category["image"];
}

export function CollectionHeader({ title, tagline, count, image }: CollectionHeaderProps) {
  return (
    <div className={`grid items-center gap-8 ${image ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}>
      <div>
        <h1 className="text-display md:text-hero">{title}</h1>
        <p className="mt-4 max-w-[46ch] text-lead text-ink-soft">{tagline}</p>
        <p className="mt-3 text-sm text-ink-muted">
          <span className="font-semibold text-ink tabular">{count}</span> {count === 1 ? "prodotto disponibile" : "prodotti disponibili"}
        </p>
      </div>
      {image ? (
        <div className="relative">
          <div aria-hidden="true" className="brand-halo absolute -inset-x-6 -inset-y-8 -z-10 rounded-[50%] opacity-80" />
          <div className="relative aspect-[3/2] overflow-hidden rounded-tile border border-white/60 bg-white">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
