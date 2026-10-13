"""Static SEO audit of the exported site.

Usage:  NEXT_PUBLIC_STATIC_EXPORT=1 pnpm build && python3 scripts/seo_audit.py [https://findbetter.eu]
Checks every page in ./out: title 10–60 chars, description 70–160, one <h1>, canonical = own URL,
<html lang> = URL language, hreflang self + reciprocity, OG/Twitter image exists, JSON-LD parses,
no broken internal links, every <img> has alt, no duplicate titles, keyword density on city pages.
Needs: pip install beautifulsoup4 lxml
"""
import collections, json, os, re, sys
from bs4 import BeautifulSoup

OUT = "out"
SITE = (sys.argv[1] if len(sys.argv) > 1 else os.environ.get("NEXT_PUBLIC_SITE_URL", "https://findbetter.eu")).rstrip("/")
KEYWORDS = {  # theme URL segment -> keyword regex
    "pc-portatili-usati": r"pc portatil[ei] usat[oi]", "portatili-economici": r"portatil[ei] economic[oi]",
    "portatili-per-studenti": r"portatil[ei] per (gli )?student[ei]",
    "ordinateur-portable-occasion": r"ordinateurs? portables? d.occasion", "pc-portable-pas-cher": r"pc portables? pas chers?",
    "ordinateur-portable-etudiant": r"ordinateurs? portables? (pour )?[ée]tudiants?",
    "portatiles-segunda-mano": r"port[áa]til(es)? de segunda mano", "portatiles-baratos": r"port[áa]til(es)? barat[oa]s?",
    "portatiles-para-estudiantes": r"port[áa]til(es)? para estudiantes",
    "gebrauchte-laptops": r"gebraucht(e|en)? laptops?", "guenstige-laptops": r"g[üu]nstige(n)? laptops?",
    "laptops-fuer-studenten": r"laptops? f[üu]r studenten",
    "tweedehands-laptops": r"tweedehands laptops?", "goedkope-laptops": r"goedkope laptops?", "laptops-voor-studenten": r"laptops? voor studenten",
}


def load_pages():
    pages = {}
    for root, _, files in os.walk(OUT):
        if "index.html" not in files:
            continue
        rel = "/" + os.path.relpath(root, OUT).replace(os.sep, "/") + "/"
        rel = "/" if rel == "/./" else rel
        if rel.startswith(("/_not-found", "/404")):
            continue
        with open(os.path.join(root, "index.html"), encoding="utf-8") as f:
            pages[rel] = BeautifulSoup(f.read(), "lxml")
    return pages


def exists(path):
    p = path.split("#")[0].split("?")[0]
    fs = os.path.join(OUT, p.lstrip("/"))
    return os.path.isfile(fs) or os.path.isfile(os.path.join(fs, "index.html"))


def main():
    pages = load_pages()
    problems = collections.defaultdict(list)
    hreflang, types, density = {}, collections.Counter(), []
    for path, s in sorted(pages.items()):
        url = SITE + path
        title = (s.title.string or "").strip() if s.title else ""
        desc = (s.find("meta", attrs={"name": "description"}) or {}).get("content", "")
        canon = (s.find("link", rel="canonical") or {}).get("href")
        lang = s.html.get("lang")
        if not 10 <= len(title) <= 60:
            problems["title length"].append(f"{path} ({len(title)}) {title}")
        if not 70 <= len(desc) <= 160:
            problems["description length"].append(f"{path} ({len(desc)})")
        if canon != url:
            problems["canonical"].append(f"{path} -> {canon}")
        if len(s.find_all("h1")) != 1:
            problems["h1 count"].append(path)
        if path != "/" and lang != path.strip("/").split("/")[0]:
            problems["html lang"].append(f"{path} lang={lang}")
        alts = {l["hreflang"]: l["href"] for l in s.find_all("link", rel="alternate") if l.get("hreflang")}
        hreflang[url] = alts
        if path != "/" and url not in alts.values():
            problems["hreflang self"].append(path)
        og = s.find("meta", property="og:image")
        tw = s.find("meta", attrs={"name": "twitter:image"})
        if not og or not tw:
            problems["og/twitter image"].append(path)
        elif not os.path.isfile(os.path.join(OUT, og["content"].replace(SITE, "").lstrip("/"))):
            problems["og image file missing"].append(og["content"])
        for sc in s.find_all("script", type="application/ld+json"):
            try:
                types[json.loads(sc.string).get("@type")] += 1
            except Exception as e:  # noqa: BLE001
                problems["json-ld parse"].append(f"{path}: {e}")
        for a in s.find_all("a", href=True):
            if a["href"].startswith("/") and not exists(a["href"]):
                problems["broken link"].append(f"{path} -> {a['href']}")
        for img in s.find_all("img"):
            if img.get("alt") is None:
                problems["img missing alt"].append(f"{path} {img.get('src', '')[:60]}")
        parts = path.strip("/").split("/")
        if len(parts) == 3 and parts[1] in KEYWORDS:
            main_el = s.find("main")
            text = main_el.get_text(" ", strip=True) if main_el else ""
            words = len(re.findall(r"\w+", text))
            hits = len(re.findall(KEYWORDS[parts[1]], text, re.I))
            density.append((path, words, hits, round(100 * hits / max(words, 1), 2)))
    for url, alts in hreflang.items():
        for code, target in alts.items():
            if code == "x-default":
                continue
            back = hreflang.get(target)
            if back is None:
                problems["hreflang target missing"].append(f"{url} -> {code} {target}")
            elif url not in back.values():
                problems["hreflang not reciprocal"].append(f"{url} -> {target}")
    for t, n in collections.Counter((p.title.string or "") for p in pages.values()).items():
        if n > 1:
            problems["duplicate title"].append(f"{n}x {t}")

    print(f"site {SITE} | pages audited: {len(pages)}")
    print("JSON-LD types:", dict(types))
    if density:
        ws, ds = [d[1] for d in density], [d[3] for d in density]
        print(f"city pages: {len(density)} | words {min(ws)}–{max(ws)} | keyword density {min(ds)}%–{max(ds)}%")
    for k, v in problems.items():
        print(f"\n[{k}] {len(v)}")
        for x in v[:10]:
            print("  ", x)
    total = sum(len(v) for v in problems.values())
    print(f"\nPROBLEMS: {total}")
    sys.exit(1 if total else 0)


if __name__ == "__main__":
    main()
