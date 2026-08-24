import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { tracks, type Track } from "@/data/site";

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export function CareerPaths() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FieldNote index={1}>Career Paths</FieldNote>
        <h2 className="mt-5 max-w-[520px] font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-text)] md:text-[36px]">
          Choose your technology career path
        </h2>

        <div className="mt-12 grid divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {(Object.entries(tracks) as [Track, (typeof tracks)[Track]][]).map(
            ([key, t], i) => (
              <a
                key={key}
                href={t.href}
                className="group flex flex-col px-1 py-8 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <span className="font-[var(--font-mono)] text-[12px] text-[var(--color-text-tertiary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 font-[var(--font-display)] text-[22px] font-semibold"
                  style={{ color: trackColor[key] }}
                >
                  {t.label}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-text-secondary)]">
                  {t.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[12.5px] text-[var(--color-text-tertiary)]">
                  {t.chips.map((chip, idx) => (
                    <span key={chip}>
                      {chip}
                      {idx < t.chips.length - 1 && <span className="ml-3 text-[var(--color-border-strong)]">/</span>}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--color-text)]">
                  Explore {t.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
