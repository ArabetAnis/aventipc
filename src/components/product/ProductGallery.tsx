"use client";

import { useState } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  kind: "model" | "real";
}

interface ProductGalleryProps {
  images: GalleryImage[];
  labels: { gallery: string; showImage: string[]; modelImage: string; realPhoto: string };
}

/** Main image + thumbnails. Every image says whether it shows the model or the real item. */
export function ProductGallery({ images, labels }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const active = images[index] ?? images[0];
  if (!active) return null;

  return (
    <div>
      <figure>
        <div className={`relative aspect-[4/3] overflow-hidden rounded-tile border border-line ${active.kind === "model" ? "bg-white" : "bg-paper-tint"}`}>
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 640px, 100vw"
            className={active.kind === "model" ? "object-contain p-6 md:p-10" : "object-contain"}
          />
        </div>
        <figcaption className="mt-2 text-xs text-ink-muted">{active.kind === "model" ? labels.modelImage : labels.realPhoto}</figcaption>
      </figure>
      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-6 gap-2 sm:gap-3" aria-label={labels.gallery}>
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                aria-label={labels.showImage[i]}
                className={`relative block aspect-square w-full overflow-hidden rounded-card border bg-white transition-colors ${
                  i === index ? "border-lilac" : "border-line hover:border-line-strong"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="(min-width: 640px) 96px, 16vw" className={image.kind === "model" ? "object-contain p-1.5" : "object-cover"} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
