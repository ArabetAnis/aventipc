import type { NextConfig } from "next";

/**
 * NEXT_PUBLIC_STATIC_EXPORT=1 builds the fully static site that is deployed (Cloudflare Pages,
 * GitHub Pages showcase). NEXT_PUBLIC_BASE_PATH sets a sub-path (GitHub Pages only).
 * Every URL ends with "/" in all modes so canonical, hreflang and sitemap URLs always match.
 */
const isStatic = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(isStatic ? { output: "export", basePath: basePath || undefined } : {}),
  images: isStatic
    ? { loader: "custom", loaderFile: "./src/lib/image-loader.ts" }
    : {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
        imageSizes: [64, 96, 128, 256, 384],
      },
  experimental: { globalNotFound: true },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
