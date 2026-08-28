import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /**
   * "wide" is the section/media width used by the nav, hero, and future
   * product sections. "narrow" is the comfortable reading width for
   * prose-heavy sections added later (About, etc.).
   */
  size?: "wide" | "narrow";
};

export function Container({ children, className, size = "wide" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "wide" ? "max-w-[1280px]" : "max-w-[720px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
