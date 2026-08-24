import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FieldNote } from "@/components/ui/field-note";

const indicators = [
  "Hands-on labs",
  "Industry-focused curriculum",
  "Working mentors",
  "Career guidance",
];

export function Hero() {
  return (
    <section className="border-b border-[var(--color-border)] pb-16 pt-14 md:pb-24 md:pt-20">
      <Container>
        <FieldNote>Madhapur, Hyderabad — new batches forming</FieldNote>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1 className="max-w-[560px] font-[var(--font-display)] text-[42px] font-semibold leading-[1.14] text-[var(--color-text)] md:text-[54px]">
              Build the skills companies are hiring for.
            </h1>
            <p className="mt-6 max-w-[440px] text-[17px] leading-relaxed text-[var(--color-text-secondary)]">
              Cyber Security, Generative AI and Data Science — taught through
              real labs and real projects, by people who work in these
              roles.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/career-paths" size="lg">
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to a Career Advisor
              </Button>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[var(--color-border)] pt-6 sm:flex sm:flex-wrap">
              {indicators.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-[var(--color-text-secondary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial figure: a documentary-style spot illustration standing
              in for campus photography, framed and captioned like a magazine
              plate rather than a decorative hero graphic. */}
          <figure className="m-0">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-ink-950)]">
              <svg viewBox="0 0 480 560" className="h-full w-full" role="img" aria-label="Illustration of a lab workstation with layered data panels">
                <rect width="480" height="560" fill="var(--color-ink-950)" />
                <g opacity="0.5" stroke="#8a8367" strokeWidth="1">
                  <line x1="0" y1="140" x2="480" y2="140" />
                  <line x1="0" y1="420" x2="480" y2="420" />
                  <line x1="160" y1="0" x2="160" y2="560" />
                </g>
                <rect x="60" y="190" width="220" height="150" rx="4" fill="none" stroke="#c9c0a5" strokeWidth="1.5" opacity="0.8" />
                <rect x="90" y="220" width="120" height="8" fill="#a8752b" opacity="0.85" />
                <rect x="90" y="240" width="160" height="6" fill="#c9c0a5" opacity="0.5" />
                <rect x="90" y="256" width="90" height="6" fill="#c9c0a5" opacity="0.5" />
                <rect x="90" y="280" width="150" height="34" fill="none" stroke="#5c8069" strokeWidth="1.2" opacity="0.8" />
                <polyline points="98,306 118,292 138,300 158,282 178,296 198,286 220,298" fill="none" stroke="#5c8069" strokeWidth="1.6" />
                <rect x="230" y="150" width="190" height="230" rx="4" fill="none" stroke="#c9c0a5" strokeWidth="1.5" opacity="0.55" />
                <circle cx="325" cy="245" r="46" fill="none" stroke="#a8752b" strokeWidth="1.2" opacity="0.7" />
                <circle cx="325" cy="245" r="30" fill="none" stroke="#a8752b" strokeWidth="1" opacity="0.5" />
                <line x1="325" y1="199" x2="325" y2="291" stroke="#a8752b" strokeWidth="0.75" opacity="0.4" />
                <line x1="279" y1="245" x2="371" y2="245" stroke="#a8752b" strokeWidth="0.75" opacity="0.4" />
                <g opacity="0.85">
                  <rect x="270" y="315" width="24" height="10" fill="#3a4f7a" />
                  <rect x="298" y="305" width="24" height="20" fill="#3a4f7a" />
                  <rect x="326" y="295" width="24" height="30" fill="#5c8069" />
                  <rect x="354" y="300" width="24" height="25" fill="#3a4f7a" />
                  <rect x="382" y="290" width="24" height="35" fill="#a8752b" />
                </g>
                <text x="60" y="470" fill="#f8f4ea" fontFamily="var(--font-display)" fontStyle="italic" fontSize="17">
                  Fig. 01 — a lab session, in progress
                </text>
                <text x="60" y="495" fill="#c9c0a5" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.05em">
                  MODULE 3 · LOG ANALYSIS · MADHAPUR CAMPUS
                </text>
              </svg>
            </div>
            <figcaption className="mt-3 text-[13px] italic text-[var(--color-text-tertiary)]">
              Real datasets, real lab environments — not simulations.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
