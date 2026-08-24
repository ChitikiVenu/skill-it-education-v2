import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)]",
        onDark:
          "bg-white text-[var(--color-ink-950)] hover:bg-white/90",
        outline:
          "border border-[var(--color-border-strong)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
        outlineOnDark:
          "border border-white/25 text-white hover:bg-white/10",
        ghost: "text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
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
