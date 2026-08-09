# Mugavai.co

Marketing/product site for **Mugavai.co**, built with Next.js (App Router) and full SEO
optimization: per-page metadata, Open Graph + Twitter cards, Organization + SoftwareApplication
JSON-LD, an auto-generated `sitemap.xml` and `robots.txt`, and semantic, accessible HTML.

## What's included

- **Pages**: Home, About, Products (index + 4 dynamic product pages), Contact
- **SEO**: `src/app/layout.tsx` sets global metadata; each page exports its own
  `metadata`/`generateMetadata`; `src/app/sitemap.ts` and `src/app/robots.ts` are generated
  automatically at build time from `src/lib/products.ts`
- **Content**: All copy — company details, the four products (Flowmark, Basecue, Pulsegrid,
  Loopwise), stats — lives in `src/lib/products.ts` as **placeholder content**. Replace it with
  your real product names, descriptions, and company details; every page pulls from this one file.
- **Design system**: tokens in `src/app/globals.css` (colors, type stack), a reusable gradient
  logo mark (`src/components/Logo.tsx`) derived from your uploaded logo, and a signature
  "ribbon" divider (`src/components/Ribbon.tsx`) that echoes the logo's swoosh.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Before you deploy

1. **Content** — edit `src/lib/products.ts` with your real company info and products.
2. **Domain** — the site assumes `https://www.mugavai.co`. Update `siteUrl` in
   `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` if that changes.
3. **Fonts** — this build environment couldn't reach Google Fonts, so it currently ships with
   system-font fallbacks (`--font-display` / `--font-body` / `--font-mono` in `globals.css`).
   Once you have normal internet access, swap in `next/font/google` for Space Grotesk, Inter,
   and IBM Plex Mono for pixel-perfect typography (see git history / comments in
   `src/app/layout.tsx` for the exact setup).
4. **OG image** — add a real `public/og-image.png` (1200×630) for social share previews.
5. **Favicon/logo** — `public/favicon.ico` is the Next.js default; replace it and add
   `public/logo.png` (referenced by the JSON-LD) with your actual logo assets.
6. **Forms** — the contact form in `src/app/contact/page.tsx` is unwired (no submit handler).
   Connect it to your email/CRM provider of choice (Resend, Formspree, HubSpot, etc.).

## Build & deploy

```bash
npm run build
npm run start
```

Deploys cleanly to Vercel, or any Node/static host that supports Next.js App Router.
