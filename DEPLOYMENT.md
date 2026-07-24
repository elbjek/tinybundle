# Deploying to Vercel

The site is a zero-config Next.js app — Vercel detects and builds it
automatically (`npm install` + `next build`). No environment variables are
required; the canonical URL is fixed in `src/lib/seo.ts`.

## 1. Create the Vercel project

1. Go to <https://vercel.com/new> and sign in (use "Continue with GitHub" so
   the Git integration is set up in the same step).
2. Import the **elbjek/tinybundle** repository. If it isn't listed, click
   "Adjust GitHub App Permissions" and grant Vercel access to the repo.
3. Leave every setting at its default (Framework Preset: Next.js, root
   directory `./`) and click **Deploy**.

That first deploy gives you a `*.vercel.app` URL. From then on:

- every push to **`main`** → production deployment
- every push to any other branch / PR → preview deployment with its own URL

`main` is the production branch. `dev` and `feature/*` branches get preview
URLs automatically, so merging to `main` is the release step.

## 2. Attach the domain

In the Vercel project: **Settings → Domains → Add**.

1. Add `tinybundle.com` — choose it as the **primary** domain.
2. Add `www.tinybundle.com` — choose **Redirect to tinybundle.com** when
   prompted (308 permanent). All SEO metadata canonicalizes to the apex, so
   the apex must be primary.

Vercel will flag both domains as "Invalid Configuration" until DNS is
updated — that's expected; continue below.

## 3. Update DNS

Vercel offers two ways to connect the domain — use **one**, not both. Either
way, the change is made at the **registrar** (the account where
tinybundle.com was purchased), not in the Vercel dashboard.

### Option A — Vercel nameservers (chosen for this project)

Vercel manages the whole DNS zone. The zone already exists on Vercel with
auto-created ALIAS records for the apex and `*` wildcard.

1. **Before switching**, recreate any records from the old DNS provider
   that must keep working (MX for email, SPF/DKIM/verification TXT,
   subdomains) in the Vercel zone: **Domains → tinybundle.com → DNS
   Records → Add**. The apex/`www` website records are handled
   automatically — don't recreate those.
2. At the registrar, replace the domain's nameservers with:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Wait for propagation (minutes to a few hours; the old records have a
   1-hour TTL). The Domains page flips to "Valid Configuration" and TLS is
   issued automatically.

A manually added `A @ 76.76.21.21` record in the Vercel zone is redundant —
the locked ALIAS record already covers the apex; delete the manual one.

### Option B — keep current DNS provider, point records at Vercel

| Type    | Name  | Current value     | New value              |
|---------|-------|-------------------|------------------------|
| A       | `@`   | `207.148.248.143` | `216.198.79.1`         |
| A/CNAME | `www` | `207.148.248.143` | `cname.vercel-dns.com` |

- The dashboard's **DNS Records** tab is authoritative for the apex IP
  (`216.198.79.1` is the current recommendation; the legacy `76.76.21.21`
  also still works).
- Delete the old A records pointing at `207.148.248.143`; don't just add
  new ones alongside them.
- Leave MX/TXT records untouched — only the `@` and `www` address records
  change, so email is unaffected.

> **Heads-up:** `207.148.248.143` is a Vultr server. Whatever that server
> is currently hosting at tinybundle.com stops receiving traffic once DNS
> cuts over. If anything besides this site lives there (e.g. an API on a
> subdomain), leave those subdomain records alone.

## 4. Verify

After DNS propagates:

```bash
# Both should return 200 from Vercel (look for the `x-vercel-id` header)
curl -sI https://tinybundle.com | grep -iE 'HTTP|x-vercel'
# www should 308-redirect to the apex
curl -sI https://www.tinybundle.com | grep -iE 'HTTP|location'
```

Then check `https://tinybundle.com/sitemap.xml` and `robots.txt` render, and
submit the sitemap in Google Search Console if not already done.
