import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Ujawane — Software Engineer",
  description:
    "Aditya Ujawane is a software engineer focused on full-stack products, applied AI, and the systems that make them reliable. Seeking 2027 New Grad Software Engineering and Forward Deployed Engineering opportunities.",
};

/**
 * Sets data-theme on <html> before first paint, so the correct theme is
 * already applied by the time React hydrates -- avoids a flash of the
 * wrong theme. Runs synchronously, before Tailwind's CSS variables are
 * read for the first paint.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (error) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
