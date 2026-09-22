import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";
import { Price } from "@/components/ui/Price";
import { Badge } from "@/components/ui/Badge";
import { discountPercent } from "@/lib/format";

interface ProductCardProps {
  product: Product;
  brandName: string;
  /** Set on the first cards above the fold so their images load eagerly. */
  priority?: boolean;
}

export function ProductCard({ product, brandName, priority = false }: ProductCardProps) {
  const image = product.images[0];
  const discount = discountPercent(product.price, product.compareAtPrice);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-colors duration-200 hover:border-lilac">
      <Link href={`/prodotti/${product.slug}`} className="relative block aspect-[4/3] bg-white">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-5 transition-transform duration-300 ease-out-soft group-hover:scale-[1.03]"
            priority={priority}
          />
        ) : null}
        {discount !== null ? (
          <span className="absolute top-3 left-3">
            <Badge tone="success">−{discount}%</Badge>
          </span>
        ) : null}
        {product.availability === "preorder" ? (
          <span className="absolute top-3 right-3">
            <Badge tone="brand">Preordine</Badge>
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold text-ink-muted">{brandName}</p>
        <h3 className="mt-1 font-sans text-base font-semibold leading-snug">
          <Link href={`/prodotti/${product.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">{product.shortDescription}</p>
        <div className="mt-auto pt-4">
          <Price price={product.price} compareAtPrice={product.compareAtPrice} size="sm" />
        </div>
      </div>
    </article>
  );
}
