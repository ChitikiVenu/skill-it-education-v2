import { Container } from "@/components/ui/container";
import { LogTag } from "@/components/ui/log-tag";
import { whyFeatures } from "@/data/site";

export function WhySection() {
  return (
    <section className="bg-[var(--color-surface-muted)] py-20 md:py-28">
      <Container>
        <LogTag index={2}>Why Skill IT</LogTag>
        <h2 className="mt-4 max-w-[560px] font-[var(--font-display)] text-[30px] font-bold leading-tight text-[var(--color-text)] md:text-[38px]">
          Learn skills. Build projects. Become career-ready.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((f, i) => (
            <div key={f.title} className="bg-white p-7">
              <span className="font-[var(--font-mono)] text-[12px] text-[var(--color-text-tertiary)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16.5px] font-bold text-[var(--color-text)]">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
