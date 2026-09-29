import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { products, getProduct } from "@/data/products";
import { brandName } from "@/data/brands";
import { formatPrice } from "@/lib/format";

export const dynamic = "force-static";
export const dynamicParams = false;

const size = { width: 1200, height: 630 };
const gradient = "linear-gradient(90deg,#3d7bf0,#7c7de8,#b48ce1,#d8a6dc,#ebc7d9,#f4e4df)";

/** /og/{locale}.png (default) and /og/{locale}-{product}.png, generated at build time. */
export function generateStaticParams() {
  return locales.flatMap((l) => [{ file: `${l}.png` }, ...products.map((p) => ({ file: `${l}-${p.slug}.png` }))]);
}

async function dataUrl(publicPath: string, max: number): Promise<string> {
  const file = await readFile(path.join(process.cwd(), "public", publicPath));
  const png = await sharp(file).resize({ width: max, height: max, fit: "inside" }).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

function parse(file: string): { locale: Locale; slug?: string } | null {
  const name = file.replace(/\.png$/, "");
  const [first, ...rest] = name.split("-");
  if (!isLocale(first)) return null;
  return { locale: first, slug: rest.length ? rest.join("-") : undefined };
}

export async function GET(_req: Request, ctx: RouteContext<"/og/[file]">) {
  const { file } = await ctx.params;
  const parsed = parse(file);
  if (!parsed) return new Response("Not found", { status: 404 });
  const dict = getDictionary(parsed.locale);
  const product = parsed.slug ? getProduct(parsed.slug) : undefined;

  if (!product) {
    const svg = await readFile(path.join(process.cwd(), "public/brand/wordmark.svg"));
    const wordmark = `data:image/svg+xml;base64,${svg.toString("base64")}`;
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            backgroundColor: "#15121d",
            backgroundImage:
              "radial-gradient(circle at 10% 0%, rgba(61,123,240,0.45), transparent 55%), radial-gradient(circle at 90% 100%, rgba(235,199,217,0.35), transparent 55%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wordmark} alt="" width={720} height={133} />
          <div style={{ marginTop: 44, fontSize: 40, color: "rgba(255,255,255,0.88)", maxWidth: 980, lineHeight: 1.25 }}>{dict.meta.ogTagline}</div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, display: "flex", backgroundImage: gradient }} />
        </div>
      ),
      size,
    );
  }

  const picture = await dataUrl(product.images[0].src, 900);
  const price = product.price === null ? dict.ui.product.priceOnRequest : formatPrice(product.price, parsed.locale);
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
        <div style={{ width: 560, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 44 }}>
          <div
            style={{
              width: 472,
              height: 472,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: 32,
              border: "1px solid #e8e3f0",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={picture} alt="" style={{ maxWidth: 420, maxHeight: 420, objectFit: "contain" }} />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 60 }}>
          <div style={{ fontSize: 26, color: "#5a5566" }}>{brandName(product.brand)}</div>
          <div style={{ marginTop: 8, fontSize: 54, fontWeight: 700, color: "#15121d", lineHeight: 1.08 }}>{product.name}</div>
          <div style={{ marginTop: 26, fontSize: 46, fontWeight: 700, color: "#15121d" }}>{price}</div>
          <div style={{ marginTop: 12, fontSize: 24, color: "#5a5566" }}>{dict.meta.ogBadge}</div>
          <div style={{ marginTop: 36, fontSize: 30, fontWeight: 700, color: "#3d7bf0" }}>AventiPC</div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, display: "flex", backgroundImage: gradient }} />
      </div>
    ),
    size,
  );
}
