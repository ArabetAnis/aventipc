import type { NextConfig } from "next";

/**
 * NEXT_PUBLIC_STATIC_EXPORT=1 builds a fully static site (used for the GitHub Pages
 * showcase); NEXT_PUBLIC_BASE_PATH sets the sub-path it is served from.
 * The default build keeps server rendering and image optimisation.
 */
const isStatic = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStatic ? { output: "export", trailingSlash: true, basePath: basePath || undefined } : {}),
  images: isStatic
    ? { loader: "custom", loaderFile: "./src/lib/image-loader.ts" }
    : {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
        imageSizes: [64, 96, 128, 256, 384],
      },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
