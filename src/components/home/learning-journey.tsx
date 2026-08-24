import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { learningJourney } from "@/data/site";

export function LearningJourney() {
  return (
    <section className="bg-[var(--color-ink-950)] py-20 md:py-28">
      <Container>
        <FieldNote index={4} tone="paper">
          Learning Journey
        </FieldNote>
        <h2 className="mt-5 max-w-[520px] font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-text-on-dark)] md:text-[36px]">
          How the training actually works
        </h2>

        <ol className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {learningJourney.map((item, i) => (
            <li key={item.step}>
              <div className="font-[var(--font-mono)] text-[12px] text-[var(--color-track-ai)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-[var(--font-display)] text-[16px] font-semibold text-[var(--color-text-on-dark)]">
                {item.step}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-on-dark-secondary)]">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
