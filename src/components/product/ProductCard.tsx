import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { href } from "@/i18n/routes";
import { brandName } from "@/data/brands";
import { Price } from "@/components/ui/Price";
import { Badge } from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
  locale: Locale;
  dict: Dictionary;
  priority?: boolean;
}

export function ProductCard({ product, locale, dict, priority = false }: ProductCardProps) {
  const text = dict.products[product.slug];
  const image = product.images[0];
  const url = href(locale, { kind: "product", slug: product.slug });
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-colors duration-200 hover:border-lilac">
      <div className="relative aspect-[4/3] bg-white">
        {image ? (
          <Image
            src={image.src}
            alt={text.imageAlts[0] ?? product.name}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`transition-transform duration-300 ease-out-soft group-hover:scale-[1.02] ${image.kind === "model" ? "object-contain p-5" : "object-cover"}`}
            priority={priority}
          />
        ) : null}
        {product.condition === "used" ? (
          <span className="absolute top-3 left-3">
            <Badge tone="overlay">{dict.ui.product.likeNew}</Badge>
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col border-t border-line p-5">
        <p className="text-xs font-semibold text-ink-muted">
          {brandName(product.brand)} · {text.kind}
        </p>
        <h3 className="mt-1 font-sans text-base font-semibold leading-snug">
          <Link href={url} className="after:absolute after:inset-0 after:content-['']">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">{text.shortDescription}</p>
        <div className="mt-auto pt-4">
          <Price price={product.price} locale={locale} onRequestLabel={dict.ui.product.priceOnRequest} size="sm" />
        </div>
      </div>
    </article>
  );
}
