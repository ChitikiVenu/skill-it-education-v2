import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FieldNote } from "@/components/ui/field-note";
import { org } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to a career advisor about Cyber Security, Generative AI or Data Science training at Skill IT Education, Madhapur, Hyderabad.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-[720px]">
        <FieldNote>Contact</FieldNote>
        <h1 className="mt-5 font-[var(--font-display)] text-[34px] font-semibold leading-tight text-[var(--color-text)] md:text-[42px]">
          Talk to a career advisor
        </h1>
        <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-[var(--color-text-secondary)]">
          Reach out on WhatsApp or by phone for current batch dates, fees and
          which track fits your background — or visit the Madhapur campus
          directly.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={org.whatsapp} size="lg">
            <MessageCircle className="h-4 w-4" />
            Message on WhatsApp
          </Button>
          <Button href={`tel:${org.phone.replace(/\s/g, "")}`} variant="outline" size="lg">
            <Phone className="h-4 w-4" />
            {org.phone}
          </Button>
        </div>

        <div className="mt-14 grid gap-8 border-t border-[var(--color-border)] pt-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
              <Mail className="h-4 w-4" /> Email
            </div>
            <a
              href={`mailto:${org.email}`}
              className="mt-2 block text-[15px] text-[var(--color-text)] hover:underline"
            >
              {org.email}
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
              <MapPin className="h-4 w-4" /> Campus
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text)]">
              {org.address}
            </p>
            <a
              href={org.mapUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block text-[13.5px] text-[var(--color-brand)] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
