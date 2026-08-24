import { Container } from "@/components/ui/container";
import { LogTag } from "@/components/ui/log-tag";
import { learningJourney } from "@/data/site";

export function LearningJourney() {
  return (
    <section className="bg-[var(--color-ink-950)] py-20 md:py-28">
      <Container>
        <LogTag index={4} tone="dark">
          Learning Journey
        </LogTag>
        <h2 className="mt-4 max-w-[520px] font-[var(--font-display)] text-[30px] font-bold leading-tight text-white md:text-[38px]">
          How the training actually works
        </h2>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {learningJourney.map((item, i) => (
            <li key={item.step} className="relative">
              <div className="font-[var(--font-mono)] text-[13px] text-[var(--color-track-ai)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 h-px w-full bg-white/15" />
              <h3 className="mt-4 text-[15.5px] font-bold text-white">{item.step}</h3>
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
