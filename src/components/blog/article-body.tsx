import type { BlogBlock } from "@/data/blog-posts";

export function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-editorial">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-9 font-[var(--font-display)] text-[21px] font-semibold text-[var(--color-text)] first:mt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mt-4 text-[16px] leading-[1.75] text-[var(--color-text-secondary)]">
              {block.text}
            </p>
          );
        }
        // ul / ol
        const Tag = block.type;
        return (
          <Tag key={i} className="mt-4 ml-5 list-disc space-y-2 text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </Tag>
        );
      })}
    </div>
  );
}
