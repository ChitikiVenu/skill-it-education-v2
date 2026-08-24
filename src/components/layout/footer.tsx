import Link from "next/link";
import { org, tracks } from "@/data/site";

const columns = [
  {
    title: "Tracks",
    links: Object.values(tracks).map((t) => ({ label: t.label, href: t.href })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Career Paths", href: "/career-paths" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 font-[var(--font-display)] font-extrabold text-[17px] text-[var(--color-text)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-ink-950)] text-[var(--color-paper-raised)] text-[13px] font-[var(--font-mono)]">
                SI
              </span>
              Skill IT Education
            </div>
            <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed">
              Practical Cyber Security, Generative AI and Data Science training
              in {org.location}.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14px] hover:text-[var(--color-text)] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Skill IT Education. All rights reserved.</p>
          <div className="flex gap-5">
            <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="hover:text-[var(--color-text)]">
              {org.phone}
            </a>
            <a href={`mailto:${org.email}`} className="hover:text-[var(--color-text)]">
              {org.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
