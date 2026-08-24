import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on Cyber Security, Generative AI and Data Science from Skill IT Education.",
};

export default function BlogIndexPage() {
  const posts = Object.values(blogPosts);
  return (
    <section className="py-16 md:py-24">
      <Container>
        <FieldNote>Blog</FieldNote>
        <h1 className="mt-5 max-w-[560px] font-[var(--font-display)] text-[34px] font-semibold leading-tight text-[var(--color-text)] md:text-[42px]">
          Practical notes on Cyber Security, AI and Data
        </h1>
        <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-[var(--color-text-secondary)]">
          Written by the same people teaching the courses — no filler, no
          generic listicles.
        </p>

        <div className="mt-14 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group grid gap-2 py-6 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-6"
            >
              <span className="font-[var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
                {p.tag}
              </span>
              <div>
                <h2 className="font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-text)]">
                  {p.title}
                </h2>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)] sm:max-w-[480px]">
                  {p.sub}
                </p>
              </div>
              <div className="hidden items-center gap-1.5 text-[13px] font-medium text-[var(--color-text)] sm:flex">
                {p.readTime}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
