"use client";

import { useEffect, useId, useState } from "react";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <a
            href="#top"
            className="text-[15px] font-medium tracking-tight text-ink"
          >
            {site.name}
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-secondary transition-colors hover:text-ink"
            >
              Resume
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-secondary transition-colors hover:text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu: compact inline disclosure, not a full-screen takeover */}
        <div
          id={menuId}
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out md:hidden",
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <nav aria-label="Mobile" className="min-h-0">
            <ul className="flex flex-col gap-1 border-t border-hairline py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-ink-secondary transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm text-ink-secondary transition-colors hover:text-ink"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
