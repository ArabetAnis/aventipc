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
      <div className="relative aspect-[4/3] overflow-hidden rounded-tile border border-line bg-white">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-contain p-8 md:p-12"
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-4 flex gap-3" aria-label={`Immagini di ${productName}`}>
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                aria-label={`Mostra immagine ${i + 1} di ${images.length}`}
                className={`relative block size-20 overflow-hidden rounded-card border bg-white transition-colors ${
                  i === index ? "border-lilac" : "border-line hover:border-line-strong"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="80px" className="object-contain p-2" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
