import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { ArticleBody } from "@/components/blog/article-body";
import { FinalCta } from "@/components/home/final-cta";
import { blogPosts } from "@/data/blog-posts";

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return {};
  return { title: post.title, description: post.sub };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return notFound();

  return (
    <>
      <section className="border-b border-[var(--color-border)] pb-12 pt-14 md:pb-16 md:pt-20">
        <Container className="max-w-[720px]">
          <FieldNote>{post.tag}</FieldNote>
          <h1 className="mt-5 font-[var(--font-display)] text-[32px] font-semibold leading-[1.2] text-[var(--color-text)] md:text-[40px]">
            {post.title}
          </h1>
          <p className="mt-5 text-[16.5px] leading-relaxed text-[var(--color-text-secondary)]">
            {post.sub}
          </p>
          <div className="mt-6 font-[var(--font-mono)] text-[12px] text-[var(--color-text-tertiary)]">
            {post.readTime} · Skill IT Education
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container className="max-w-[720px]">
          <ArticleBody blocks={post.body} />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
