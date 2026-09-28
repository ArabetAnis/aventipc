"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/types/catalog";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const active = images[index] ?? images[0];
  if (!active) return null;

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-tile border border-line bg-paper-tint">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-contain"
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-4 grid grid-cols-5 gap-2 sm:gap-3" aria-label={`Immagini di ${productName}`}>
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                aria-label={`Mostra immagine ${i + 1} di ${images.length}`}
                className={`relative block aspect-square w-full overflow-hidden rounded-card border bg-white transition-colors ${
                  i === index ? "border-lilac" : "border-line hover:border-line-strong"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="(min-width: 640px) 96px, 20vw" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
