import { cn } from "@/lib/utils";

/**
 * Recurring signature element: section eyebrows and step numbers are
 * styled like a terminal/log line — `[ 01 ] LABEL` with a blinking
 * cursor — instead of generic numbered circles. It's drawn from the
 * subject's own vernacular (SOC dashboards, terminal output, AI agent
 * logs) rather than a decorative default.
 */
export function LogTag({
  index,
  children,
  tone = "light",
  className,
}: {
  index?: number | string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-[var(--font-mono)] text-[12px] font-medium uppercase tracking-[0.14em]",
        tone === "light" ? "text-[var(--color-brand)]" : "text-[var(--color-track-ai)]",
        className
      )}
    >
      {index !== undefined && (
        <span className="opacity-70">[{String(index).padStart(2, "0")}]</span>
      )}
      <span>{children}</span>
      <span className="inline-block h-[11px] w-[6px] translate-y-[1px] animate-pulse bg-current" />
    </div>
  );
}
