# Skill IT Education — Website (Phase 1)

Premium static marketing site for Skill IT Education, a Cyber Security + Generative AI + Data Science academy in Madhapur, Hyderabad.

## Scope of this build
This is **Phase 1**: the public marketing website — homepage, About, Contact, and a Cyber Security hub page — built to a premium visual standard with a full mega menu, transparent logo, social integration and honest placeholders where real data (trainer bios, reviews, placement stats) isn't available yet.

**Not included** (would require real backend infrastructure — database, auth, payment gateway):
- CRM / lead management system
- LMS / student dashboard / course delivery
- Payments, admissions, certificate issuance
- Job board, internship portal, community features

These are described in the original spec as later phases and can be scoped as a separate engineering project.

## Structure
- `index.html` — homepage
- `about.html` — about / methodology
- `contact.html` — contact + enquiry form (front-end only; needs a backend/CRM connection to receive submissions)
- `cyber-security.html` — Cyber Security vertical hub
- `assets/style.css` — design system
- `assets/logo.png` — transparent logo
- `sitemap.xml`, `robots.txt`

## To do before going live
- Connect the contact form to a real CRM/email endpoint
- Add real trainer bios, student stories, campus photography (marked as placeholders currently)
- Add YouTube / Instagram / Facebook / X links (currently placeholder `#`, LinkedIn is live)
- Build out remaining course/career/blog pages per the original content plan
