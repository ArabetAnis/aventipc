# Hosting on aventipc.com (Cloudflare, cheapest setup)

Cost: the domain only, about $10.46/year at Cloudflare Registrar (rises to $11.17 on 1 November 2026).
Hosting, HTTPS and email forwarding are free. The deploy runs from GitHub Actions
(`.github/workflows/deploy-cloudflare.yml`) and stays off until the two secrets below exist.

## One-time setup (Cloudflare dashboard)

1. Sign up at https://dash.cloudflare.com/sign-up and verify your email.
2. Domain Registration → Register domains → search `aventipc.com` → Purchase (1 year or more).
3. My Profile → API Tokens → Create Token → Custom token. Permission: Account · Cloudflare Pages · Edit.
   Account resources: your account. Create and copy the token.
4. Workers & Pages → copy the Account ID.
5. GitHub repo → Settings → Secrets and variables → Actions → New repository secret:
   - `CLOUDFLARE_API_TOKEN` = the token
   - `CLOUDFLARE_ACCOUNT_ID` = the account ID
6. Actions → "Deploy to Cloudflare Pages" → Run workflow (branch main). It creates the `aventipc`
   Pages project and deploys. Check https://aventipc.pages.dev.
   Do not create the project with wrangler from an AI-agent terminal: it would create a Workers project.
7. Workers & Pages → aventipc → Custom domains → Set up a custom domain → `aventipc.com` → Activate.
   Wait for "Active". Do not add the DNS record by hand first.
8. aventipc.com → DNS → Add record: type A, name `www`, IPv4 `192.0.2.1`, Proxied (orange cloud).
9. aventipc.com → Rules → Create rule → Redirect Rule "www to root":
   Wildcard pattern, request URL `http*://www.aventipc.com/*`,
   target `https://aventipc.com/${2}`, status 301, preserve query string.
10. SSL/TLS → Edge Certificates → Always Use HTTPS: on.
11. Optional: Email → Email Routing → forward `info@aventipc.com` to your Gmail.
12. Once https://aventipc.com works: GitHub repo → Settings → Pages → unpublish,
    then Settings → General → Change visibility → Private.
    (The GitHub Pages workflow already skips itself once the Cloudflare secrets exist.)

## After going live

- Google Search Console: add the domain property, submit `https://aventipc.com/sitemap.xml`.
- Bing Webmaster Tools: import from Search Console.
