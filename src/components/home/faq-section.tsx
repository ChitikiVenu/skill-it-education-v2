import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
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
      <Container className="max-w-[720px]">
        <FieldNote index={5}>FAQ</FieldNote>
        <h2 className="mt-5 font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-text)] md:text-[36px]">
          Common questions
        </h2>

        <Accordion type="single" collapsible className="mt-10 border-t border-[var(--color-border)]">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="font-[var(--font-display)] font-semibold">{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
