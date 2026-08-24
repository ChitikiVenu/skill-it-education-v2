import { cn } from "@/lib/utils";

/**
 * Recurring signature element for the editorial direction: section
 * eyebrows read like a field-note dateline — a short italic serif
 * caption beside a thin rule — the way a photo essay marks each new
 * entry, rather than a numbered circle or a terminal-style tag.
 */
export function FieldNote({
  index,
  children,
  tone = "ink",
  className,
}: {
  index?: number | string;
  children: React.ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "h-px w-8",
          tone === "ink" ? "bg-[var(--color-border-strong)]" : "bg-white/25"
        )}
      />
      <span
        className={cn(
          "font-[var(--font-display)] text-[14px] italic",
          tone === "ink" ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-on-dark-secondary)]"
        )}
      >
        {index !== undefined && <span className="mr-1.5 not-italic">{String(index).padStart(2, "0")}.</span>}
        {children}
      </span>
    </div>
  );
}
