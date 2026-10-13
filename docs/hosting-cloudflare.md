# Hosting on findbetter.eu (cheapest setup)

Cost: the domain only. findbetter.eu at Porkbun is $5.88/year, renewal included (checked 2026-10-13).
findbetter.com is taken. Cloudflare Registrar does not sell .eu, so the domain is bought at Porkbun
and its DNS is moved to a free Cloudflare zone. Hosting, HTTPS and email forwarding are free.
A .eu address is not tied to one country, which suits a shop serving IT, FR, BE, ES and DE;
each language version is targeted with hreflang.

The deploy runs from GitHub Actions (`.github/workflows/deploy-cloudflare.yml`) and stays off until the
two secrets below exist. To use another domain, set the repository variable `SITE_URL`
(e.g. `https://findbetterpc.com`) and change the default in `src/content/site.ts`.

## One-time setup

1. Porkbun: buy `findbetter.eu` (https://porkbun.com). Check availability at purchase.
2. Cloudflare: sign up at https://dash.cloudflare.com/sign-up, verify your email, then Add a site →
   `findbetter.eu` → Free plan. Cloudflare shows two nameservers.
3. Porkbun → Domain management → findbetter.eu → Authoritative nameservers → replace with the two
   Cloudflare nameservers. Wait until Cloudflare marks the site "Active" (minutes to a few hours).
4. Cloudflare → My Profile → API Tokens → Create Token → Custom token. Permission: Account · Cloudflare
   Pages · Edit. Account resources: your account. Copy the token.
5. Cloudflare → Workers & Pages → copy the Account ID.
6. GitHub repo → Settings → Secrets and variables → Actions → New repository secret:
   - `CLOUDFLARE_API_TOKEN` = the token
   - `CLOUDFLARE_ACCOUNT_ID` = the account ID
7. GitHub → Actions → "Deploy to Cloudflare Pages" → Run workflow (branch main). It creates the
   `findbetter` Pages project and deploys. Check https://findbetter.pages.dev.
   Do not create the project with wrangler from an AI-agent terminal: it would create a Workers project.
8. Cloudflare → Workers & Pages → findbetter → Custom domains → Set up a custom domain →
   `findbetter.eu` → Activate. Wait for "Active". Do not add the DNS record by hand first.
9. findbetter.eu → DNS → Add record: type A, name `www`, IPv4 `192.0.2.1`, Proxied (orange cloud).
10. findbetter.eu → Rules → Create rule → Redirect Rule "www to root": wildcard pattern,
    request URL `http*://www.findbetter.eu/*`, target `https://findbetter.eu/${2}`, status 301,
    preserve query string.
11. SSL/TLS → Edge Certificates → Always Use HTTPS: on.
12. Optional: Email → Email Routing → forward `info@findbetter.eu` to your Gmail.
13. Once https://findbetter.eu works: GitHub repo → Settings → Pages → unpublish, then
    Settings → General → Change visibility → Private. (The GitHub Pages workflow already skips
    itself once the Cloudflare secrets exist.)

## Home page language redirect

`functions/index.ts` runs on Cloudflare for `/` only. It sends visitors to the language they chose before
(cookie `findbetter_lang`, set when they click a language link) or to their browser language, with a 302.
Visitors with no supported language, including search-engine crawlers, get the language chooser,
which is the hreflang x-default page. The GitHub Pages showcase cannot run it and always shows the chooser.

## After going live

- Google Search Console: add the domain property, submit `https://findbetter.eu/sitemap.xml`.
- Bing Webmaster Tools: import from Search Console.
