import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { org } from "@/data/site";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start gap-8 border-t border-[var(--color-border)] pt-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-[440px] font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-text)] md:text-[36px]">
              Ready to build your next technology career?
            </h2>
            <p className="mt-3 max-w-[440px] text-[15px] text-[var(--color-text-secondary)]">
              Talk to an advisor about which program fits where you are today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/career-paths" size="lg">
              Explore Programs
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={org.whatsapp} variant="outline" size="lg">
              <MessageCircle className="h-4 w-4" />
              WhatsApp an Advisor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
