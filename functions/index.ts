/**
 * Cloudflare Pages Function for "/" only (other URLs never run this code).
 *
 * Sends visitors from the home address to their language with a 302:
 *   1. the language they picked before (cookie set by the language links), else
 *   2. the first supported language in their browser's Accept-Language header.
 * Visitors with no supported language — including search-engine crawlers, which send no
 * Accept-Language — get the language chooser, which is the hreflang x-default page.
 * A 302 (not 301) and "Vary" keep caches and search engines from storing one visitor's redirect.
 */

const SUPPORTED = ["it", "fr", "es", "de", "nl"];
const COOKIE = "aventipc_lang";

interface Context {
  request: Request;
  next: () => Promise<Response>;
}

function fromCookie(header: string | null): string | null {
  const match = header?.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([a-z]{2})`));
  return match && SUPPORTED.includes(match[1]) ? match[1] : null;
}

/** "en-US,en;q=0.9,fr;q=0.8" → "fr" (highest-weighted supported language). */
function fromAcceptLanguage(header: string | null): string | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q.slice(2)) || 0 : 1, index };
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  return ranked.find((entry) => SUPPORTED.includes(entry.lang))?.lang ?? null;
}

export async function onRequest({ request, next }: Context): Promise<Response> {
  if (request.method !== "GET" && request.method !== "HEAD") return next();

  const lang = fromCookie(request.headers.get("Cookie")) ?? fromAcceptLanguage(request.headers.get("Accept-Language"));
  if (lang) {
    const url = new URL(request.url);
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/${lang}/${url.search}`,
        Vary: "Accept-Language, Cookie",
        "Cache-Control": "private, no-store",
      },
    });
  }

  const page = await next();
  const response = new Response(page.body, page);
  response.headers.set("Vary", "Accept-Language, Cookie");
  response.headers.set("Cache-Control", "private, no-cache");
  return response;
}
