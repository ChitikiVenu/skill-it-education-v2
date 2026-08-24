import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LogTag } from "@/components/ui/log-tag";
import { ArrowUpRight } from "lucide-react";

const indicators = [
  "Hands-on labs",
  "Industry-focused curriculum",
  "Working mentors",
  "Career guidance",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink-950)] pt-20 pb-24 md:pt-28 md:pb-32">
      {/* signature: faint terminal grid, clipped, no motion for reduced-motion safety */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Container className="relative">
        <LogTag tone="dark">Madhapur, Hyderabad</LogTag>

        <h1 className="mt-6 max-w-[720px] font-[var(--font-display)] text-[40px] font-extrabold leading-[1.08] text-white md:text-[58px]">
          Build the skills companies are hiring for.
        </h1>

        <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--color-text-on-dark-secondary)] md:text-[19px]">
          Cyber Security, Generative AI and Data Science — taught through real
          labs and real projects, by people who work in these roles.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/career-paths" variant="onDark" size="lg">
            Explore Programs
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="outlineOnDark" size="lg">
            Talk to a Career Advisor
          </Button>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {indicators.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[13.5px] font-medium text-[var(--color-text-on-dark-secondary)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-light)]" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
