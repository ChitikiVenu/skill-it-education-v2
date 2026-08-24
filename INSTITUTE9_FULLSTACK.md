# Institute 9 — Full-Stack Platform

The production direction for Institute 9 is now a real application under `platform/` rather than a static-only landing page.

## Architecture

- **Frontend:** Next.js App Router + React + TypeScript
- **Backend:** Next.js Route Handlers running on Node.js
- **Database:** PostgreSQL
- **ORM / migrations:** Prisma 7
- **Validation:** Zod
- **Local database:** Docker Compose PostgreSQL
- **SEO:** Next metadata + route-level metadata
- **Responsive UI:** premium light interface aligned to the approved blue/purple visual direction

Next.js is a full-stack React framework, so the application can keep the public UI and server-side application logic in one maintainable codebase. citeturn3search1

## Localhost setup

Requirements: Node.js 20.9+ and Docker Desktop.

```bash
git clone https://github.com/ChitikiVenu/skill-it-education-v2.git
cd skill-it-education-v2
git checkout institute9-fullstack
npm install
cp platform/.env.example platform/.env.local
docker compose up -d
npm run db:generate
npm run db:migrate -- --name init
npm run db:seed
npm run dev
```

Open **http://localhost:3000**.

Prisma's development migration flow is `prisma migrate dev`; production should use `prisma migrate deploy`, not `migrate dev`. citeturn2search0turn2search1

## Main routes

- `/` — Institute 9 homepage
- `/courses/cyber-security`
- `/courses/ai-engineering`
- `/courses/data-science`
- `/about`
- `/insights`
- `/insights/[slug]`
- `/api/leads` — admissions lead API
- `/api/courses` — course API
- `/api/insights` — published insights API

## Lead capture

The Free Session form validates name, email, phone, course interest and consent on the server and writes the lead to PostgreSQL. This gives Institute 9 a real admissions data layer instead of a mailto-only form.

## Next production layers

The architecture is ready to add:

1. Admin / admissions dashboard
2. Lead assignment and status pipeline
3. CRM integration
4. WhatsApp lead automation
5. Email notifications
6. Course CMS
7. Student application flow
8. Payment gateway
9. Student portal / LMS
10. Analytics and conversion tracking

The current branch intentionally establishes the core platform first so these features can be added without rebuilding the public website.
