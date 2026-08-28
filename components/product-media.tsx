import Image from "next/image";

import { cn } from "@/lib/cn";

type ProductMediaProps = {
  src?: string;
  alt: string;
  placeholderLabel: string;
  aspectRatio: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders a real product screenshot once `src` is supplied. Until then,
 * shows a restrained, clearly-labeled placeholder that holds the correct
 * aspect ratio and visual weight -- so dropping in the final optimized
 * screenshot later is a one-line change (add `src`), not a layout rework.
 *
 * The placeholder is plain, honest text -- no fake browser chrome, no
 * invented screenshot content, and no `alt` text describing an image that
 * doesn't exist yet.
 */
export function ProductMedia({
  src,
  alt,
  placeholderLabel,
  aspectRatio,
  sizes = "100vw",
  priority,
  className,
}: ProductMediaProps) {
  if (!src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-lg border border-hairline bg-surface",
          className,
        )}
        style={{ aspectRatio }}
      >
        <p className="max-w-sm px-6 text-center text-sm leading-relaxed text-ink-muted">
          {placeholderLabel}
          <br />
          <span className="text-xs">Screenshot pending final polish</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg border border-hairline", className)}
      style={{ aspectRatio }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
