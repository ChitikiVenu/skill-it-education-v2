"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { org } from "@/data/site";

const navItems = [
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "Generative AI", href: "/generative-ai" },
  { label: "Data Science", href: "/data-science" },
  { label: "Career Paths", href: "/career-paths" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-[var(--font-display)] font-extrabold text-[17px] text-[var(--color-ink-950)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-ink-950)] text-white text-[13px] font-[var(--font-mono)]">
            SI
          </span>
          Skill IT
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14.5px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Talk to an Advisor
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href="/contact" className="w-full">
                Talk to an Advisor
              </Button>
              <Button href={org.whatsapp} variant="outline" className="w-full">
                WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
