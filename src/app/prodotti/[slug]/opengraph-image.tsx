import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { products, getProductBySlug } from "@/data/products";
import { brands } from "@/content/brands";
import { formatPrice } from "@/lib/format";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const brand = brands.find((b) => b.slug === product?.brand)?.name ?? "";
  let picture: string | null = null;
  if (product?.images[0]) {
    // Satori only understands PNG/JPEG, so everything is normalised to PNG.
    const file = await readFile(path.join(process.cwd(), "public", product.images[0].src));
    const png = await sharp(file).resize({ width: 900, height: 900, fit: "inside" }).png().toBuffer();
    picture = `data:image/png;base64,${png.toString("base64")}`;
  }
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#fdfcfe",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(61,123,240,0.22), transparent 55%), radial-gradient(circle at 100% 100%, rgba(180,140,225,0.25), transparent 55%)",
        }}
      >
        <div style={{ width: 520, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 48 }}>
          <div style={{ width: 424, height: 424, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", borderRadius: 32, border: "1px solid #e8e3f0" }}>
            {picture ? (
               
              <img src={picture} alt="" style={{ maxWidth: 360, maxHeight: 360, objectFit: "contain" }} />
            ) : null}
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 64 }}>
          <div style={{ fontSize: 26, color: "#5a5566" }}>{brand}</div>
          <div style={{ marginTop: 8, fontSize: 56, fontWeight: 700, color: "#15121d", lineHeight: 1.08 }}>{product?.name ?? "AventiPC"}</div>
          {product ? <div style={{ marginTop: 28, fontSize: 44, fontWeight: 700, color: "#15121d" }}>{formatPrice(product.price)}</div> : null}
          <div style={{ marginTop: 10, fontSize: 22, color: "#5a5566" }}>IVA inclusa · spedizione gratuita in Italia</div>
          <div style={{ marginTop: 40, fontSize: 30, fontWeight: 700, color: "#3d7bf0" }}>AventiPC</div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, display: "flex", backgroundImage: "linear-gradient(90deg,#3d7bf0,#7c7de8,#b48ce1,#d8a6dc,#ebc7d9,#f4e4df)" }} />
      </div>
    ),
    size,
  );
}
