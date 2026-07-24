# TinyBundle

Marketing site for tinybundle.com — four parenting apps, one bundle.

## Stack

- Next.js (App Router, Turbopack)
- Tailwind CSS v4
- Fonts: Fraunces (headings) + Nunito Sans (body) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` — main landing page (hero, apps, values, newsletter)
- `/tinyhaven`, `/tinylayers`, `/tinyblooms`, `/tinymeals` — per-app landing pages, driven by `src/lib/apps.ts`

## Deployment

Hosted on Vercel — pushes to `main` deploy to production at
[tinybundle.com](https://tinybundle.com); every other branch gets a preview
URL. Setup and DNS details: [DEPLOYMENT.md](./DEPLOYMENT.md).

## Workflow

`dev` is the integration branch. Each landing-page section was built on its own `feature/*` branch and merged into `dev`.
