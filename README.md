# Skill IT Education — Next.js Rebuild, Editorial direction (in progress)

This branch (`nextjs-rebuild-editorial`, off `nextjs-rebuild`) applies an
"editorial & calm" visual direction to the homepage: a warm paper ground,
a literary serif for display type, and field-note-style captions in place
of the earlier dark/terminal aesthetic. The `main` branch remains the live
static HTML site — nothing here has been deployed or merged anywhere.

## Design direction

- **Palette (updated)**: white ground with a rich blue primary (`#2C46D6`)
  and violet secondary accent (`#7C4FE0`), per direction requested after
  the initial warm/paper version. Blue and violet are used deliberately
  as solid colors for actions/links/track markers, not as a gradient
  wash, to avoid reading as the generic "electric blue-to-violet
  gradient on dark" AI-template look.
- **Type**: Source Serif 4 (a calm, low-contrast literary serif) for
  headlines, Inter for body copy, JetBrains Mono for small utility labels
  — kept from the original editorial direction since it's what keeps the
  cooler palette from reading as a generic SaaS dashboard.
- **Signature**: section eyebrows are styled as a field-note dateline —
  a thin rule beside a short italic caption — and the hero uses a
  captioned spot illustration (styled like a documentary photo plate)
  rather than fabricated stock photography of "real students," since no
  real campus photography exists yet to use honestly.

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

## What's built so far

- Homepage (Hero, Career Paths, Why Skill IT, Featured Programs, Learning
  Journey, FAQ, Final CTA)
- Vertical hub pages: `/cyber-security`, `/generative-ai`, `/data-science`
  — each with a track-colored hero and the full list of programs in that
  track (18 programs total, pulled from the real static site)
- `/career-paths` — all 18 programs grouped by track on one page
- `/contact` — real address, phone, email, WhatsApp link (Madhapur campus)
- `/courses/[slug]` — all 18 individual course detail pages (curriculum
  modules, project, FAQ), data-driven from `src/data/course-details.ts`,
  extracted from the real static course pages
- `/blog` and `/blog/[slug]` — all 27 blog posts, full body content,
  data-driven from `src/data/blog-posts.ts`, extracted from the real
  static blog posts
- Header, Footer, reusable UI primitives (Button, Accordion, FieldNote)

Verified: `tsc --noEmit` clean, `next build` clean (55 static routes, 45
of them SSG'd course/blog pages), zero horizontal overflow at
375/390/768/1440px across every page type.

## Not built yet

Still ~200 pages of the original 254-page site to go, same data-driven-
template approach as the course/blog pages:

- ~140 glossary term pages, 8 certification pages, 7 comparison pages,
  12 career roadmaps, 11 interview-question pages, 6 free tools, 8
  location/training-near pages, About, Careers, Locations, Resources,
  Events, legal pages (privacy/terms/refund/disclaimer)
- Lead form (`Zod` validated) + CRM integration seam (`lib/crm`)
- Database (Prisma + Postgres) / CMS (Sanity) — needs real credentials
- Full technical SEO pass, analytics, accessibility audit

**This branch has not been merged to `main` and should not be merged
until the full site is rebuilt and explicitly reviewed/approved** —
merging partial rebuild work to `main` previously caused a production
outage on the live site.

## Running locally

```bash
npm install
npm run dev
```

## Content

All copy and course data currently comes from the live static site (see
`main` branch) as the factual source of truth — no invented claims,
statistics, testimonials, or placement numbers.
