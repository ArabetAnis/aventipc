import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — notebook, PC desktop, gaming e workstation`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
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
        { }
        <img src={wordmark} alt="" width={720} height={133} />
        <div style={{ marginTop: 44, fontSize: 34, color: "rgba(255,255,255,0.82)", maxWidth: 900, lineHeight: 1.3 }}>{site.tagline}</div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, display: "flex", backgroundImage: "linear-gradient(90deg,#3d7bf0,#7c7de8,#b48ce1,#d8a6dc,#ebc7d9,#f4e4df)" }} />
      </div>
    ),
    size,
  );
}
