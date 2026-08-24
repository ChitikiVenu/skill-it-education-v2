import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { whyFeatures } from "@/data/site";

export function WhySection() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-muted)] py-20 md:py-28">
      <Container>
        <FieldNote index={2}>Why Skill IT</FieldNote>
        <h2 className="mt-5 max-w-[560px] font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-text)] md:text-[36px]">
          Learn skills. Build projects. Become career-ready.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((f, i) => (
            <div key={f.title} className="border-t border-[var(--color-border)] pt-5">
              <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-text)]">
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
