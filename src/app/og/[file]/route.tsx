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
const gradient = "linear-gradient(90deg,#0b1424,#2f5677,#6c8699,#c9d7e5,#f3f6fa)";

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
    const logo = await readFile(path.join(process.cwd(), "public/brand/logo-on-dark.png"));
    const wordmark = `data:image/png;base64,${logo.toString("base64")}`;
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
            backgroundColor: "#0b1424",
            backgroundImage:
              "radial-gradient(circle at 10% 0%, rgba(108,134,153,0.40), transparent 55%), radial-gradient(circle at 90% 100%, rgba(47,86,119,0.45), transparent 55%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wordmark} alt="" width={600} height={270} />
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
          backgroundColor: "#fbfcfe",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(108,134,153,0.24), transparent 55%), radial-gradient(circle at 100% 100%, rgba(47,86,119,0.18), transparent 55%)",
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
              border: "1px solid #e2e8ef",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={picture} alt="" style={{ maxWidth: 420, maxHeight: 420, objectFit: "contain" }} />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 60 }}>
          <div style={{ fontSize: 26, color: "#4e5b6b" }}>{brandName(product.brand)}</div>
          <div style={{ marginTop: 8, fontSize: 54, fontWeight: 700, color: "#0f1b2d", lineHeight: 1.08 }}>{product.name}</div>
          <div style={{ marginTop: 26, fontSize: 46, fontWeight: 700, color: "#0f1b2d" }}>{price}</div>
          <div style={{ marginTop: 12, fontSize: 24, color: "#4e5b6b" }}>{dict.meta.ogBadge}</div>
          <div style={{ marginTop: 36, fontSize: 30, fontWeight: 700, color: "#2f5677" }}>FindBetter</div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, display: "flex", backgroundImage: gradient }} />
      </div>
    ),
    size,
  );
}
