"use client";

import { useEffect, useState } from "react";

/**
 * Icon visibility is driven purely by CSS reacting to the [data-theme]
 * attribute the blocking init script already set on <html> before this
 * component mounts -- so there's no server/client render mismatch to
 * reconcile. `isDark` (used only for aria-pressed) is corrected in an
 * effect after mount, which is a normal post-hydration update, not a
 * hydration mismatch.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
    setIsDark(next === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-secondary transition-colors hover:text-ink"
    >
      <svg
        className="theme-icon-light h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2.5v2.25M12 19.25v2.25M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.25M19.25 12h2.25M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      </svg>
      <svg
        className="theme-icon-dark h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
      </svg>
    </button>
  );
}
