import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap rounded-[var(--radius-sm)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-ink-950)] text-[var(--color-paper-raised)] hover:bg-[var(--color-ink-800)]",
        onDark:
          "bg-[var(--color-paper-raised)] text-[var(--color-ink-950)] hover:bg-white",
        outline:
          "border border-[var(--color-border-strong)] text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)]",
        outlineOnDark:
          "border border-white/25 text-white hover:bg-white/10",
        ghost: "text-[var(--color-text)] hover:bg-[var(--color-surface-sunken)] rounded-[var(--radius-sm)]",
        link: "text-[var(--color-brand)] underline underline-offset-4 decoration-[var(--color-border-strong)] hover:decoration-current",
      },
      size: {
        default: "h-12 px-6 text-[15px]",
        sm: "h-9 px-4 text-[13.5px]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & { href?: string };

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonStyles({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children as React.ReactNode}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}
