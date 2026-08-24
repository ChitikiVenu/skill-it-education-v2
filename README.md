# Skill IT Education — Next.js Rebuild (in progress)

This branch (`nextjs-rebuild`) is a ground-up rebuild of the marketing site
as a production Next.js application. The `main` branch remains the live
static HTML site — nothing here has been deployed yet.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 4** — design tokens defined in `src/app/globals.css`
- Hand-built component primitives in the shadcn/ui style (`src/components/ui`),
  backed by **Radix UI** for accessible interaction (accordion, etc.)
- **Framer Motion**, **lucide-react**, **Zod** installed and ready for use
- Fonts self-hosted via `@fontsource/*` (Manrope for display, Inter for body,
  JetBrains Mono for the "log line" UI signature) rather than fetched from
  Google Fonts at build time

## What's built so far

- Design system / tokens (`src/app/globals.css`)
- `Header`, `Footer` (`src/components/layout`)
- Homepage (`src/app/page.tsx`) assembled from real content:
  Hero, Career Paths, Why Skill IT, Featured Programs, Learning Journey,
  FAQ, Final CTA
- Typed content layer (`src/data/site.ts`) — pulled from the existing
  static site's real copy, course names, durations and contact info.
  **This is the intended seam for a future CMS** (Sanity, etc.): components
  read from these exports, never from hardcoded JSX, so swapping the data
  source later shouldn't require touching UI code.

Verified: `tsc --noEmit` clean, `next build` clean, zero horizontal overflow
at 375/390/430/768/1024/1280/1440/1920px viewports.

## Not built yet

This is Phase 1–4 of a much larger brief (see project notes). Still to do:

- Individual course pages, Cyber Security / Generative AI / Data Science
  hub pages, career-paths, about, contact, blog
- Lead form (`Zod` validated) + CRM integration seam (`lib/crm`)
- Analytics event tracking
- Database (Prisma + Postgres) — **needs real credentials**, not something
  that can be stood up from this environment
- CMS wiring (Sanity) — **needs a real Sanity project/token**
- Full technical SEO pass (structured data, sitemap, redirects from old URLs)
- Accessibility and performance QA pass across all pages

## Running locally

```bash
npm install
npm run dev
```

## Content

All copy and course data currently comes from the live static site (see
`main` branch) as the factual source of truth — no invented claims,
statistics, testimonials, or placement numbers.
