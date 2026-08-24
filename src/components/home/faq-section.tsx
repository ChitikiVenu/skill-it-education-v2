import { Container } from "@/components/ui/container";
import { LogTag } from "@/components/ui/log-tag";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FaqSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-[760px]">
        <LogTag index={5}>FAQ</LogTag>
        <h2 className="mt-4 font-[var(--font-display)] text-[30px] font-bold leading-tight text-[var(--color-text)] md:text-[38px]">
          Common questions
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
