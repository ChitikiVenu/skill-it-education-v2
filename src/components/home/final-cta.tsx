import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { org } from "@/data/site";

export function FinalCta() {
  return (
    <section className="bg-[var(--color-surface-muted)] py-20 md:py-28">
      <Container className="flex flex-col items-start gap-8 rounded-[var(--radius-lg)] bg-[var(--color-ink-950)] p-10 md:flex-row md:items-center md:justify-between md:p-16">
        <div>
          <h2 className="max-w-[440px] font-[var(--font-display)] text-[28px] font-bold leading-tight text-white md:text-[34px]">
            Ready to build your next technology career?
          </h2>
          <p className="mt-3 max-w-[440px] text-[15px] text-[var(--color-text-on-dark-secondary)]">
            Talk to an advisor about which program fits where you are today.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/career-paths" variant="onDark" size="lg">
            Explore Programs
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button href={org.whatsapp} variant="outlineOnDark" size="lg">
            <MessageCircle className="h-4 w-4" />
            WhatsApp an Advisor
          </Button>
        </div>
      </Container>
    </section>
  );
}
