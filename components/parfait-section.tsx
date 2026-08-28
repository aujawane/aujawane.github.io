import { Container } from "@/components/container";
import { ProductMedia } from "@/components/product-media";
import { parfait } from "@/content/parfait";

const [conversationToExecution, groundedAi, durableArchitecture, safeStateChanges] = parfait.beats;

export function ParfaitSection() {
  return (
    <section aria-labelledby="parfait-heading" className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-32">
          {/* Intro */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.08em]">
              <span className="text-ink-secondary">{parfait.eyebrow.label}</span>
              <span className="mx-2 text-ink-muted">·</span>
              <span className="text-accent">{parfait.eyebrow.status}</span>
            </p>

            <h2
              id="parfait-heading"
              className="text-section-display mt-4 font-semibold text-ink"
            >
              {parfait.headline}
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-ink-secondary sm:text-2xl">
              {parfait.summary}
            </p>

            <p className="mt-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
              {parfait.intro}
            </p>
          </div>

          {/* Beat 1 -- Conversation -> Execution. The largest visual on the
              site: text above, full-width hero-level product visual below. */}
          <div className="flex flex-col gap-10">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {conversationToExecution.heading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary sm:text-lg">
                {conversationToExecution.copy}
              </p>
            </div>

            <ProductMedia
              src={conversationToExecution.media[0].src}
              alt={conversationToExecution.media[0].alt}
              placeholderLabel={conversationToExecution.media[0].placeholderLabel}
              aspectRatio={conversationToExecution.media[0].aspectRatio}
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
            />
          </div>

          {/* Beat 2 -- Grounded AI. Narrower, paired treatment: copy first
              (mobile and desktop DOM order), visual alongside on desktop. */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {groundedAi.heading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary sm:text-lg">
                {groundedAi.copy}
              </p>
              {groundedAi.supportingLine ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {groundedAi.supportingLine}
                </p>
              ) : null}
            </div>

            <ProductMedia
              src={groundedAi.media[0].src}
              alt={groundedAi.media[0].alt}
              placeholderLabel={groundedAi.media[0].placeholderLabel}
              aspectRatio={groundedAi.media[0].aspectRatio}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>

          {/* Beat 3 -- Durable async architecture. Same paired pattern as
              Beat 2, mirrored on desktop (visual left) for variation --
              copy still comes first in source order / on mobile. */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {durableArchitecture.heading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary sm:text-lg">
                {durableArchitecture.copy}
              </p>
            </div>

            <ProductMedia
              src={durableArchitecture.media[0].src}
              alt={durableArchitecture.media[0].alt}
              placeholderLabel={durableArchitecture.media[0].placeholderLabel}
              aspectRatio={durableArchitecture.media[0].aspectRatio}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="lg:order-1"
            />
          </div>

          {/* Beat 4 -- Safe AI state changes. Text, then a medium task/
              deliverable visual, a bridging line, then the largest closing
              visual (Project Brain) at hero scale -- the section's final
              and most technically sophisticated visual moment. */}
          <div className="flex flex-col gap-10">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {safeStateChanges.heading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary sm:text-lg">
                {safeStateChanges.copy}
              </p>
            </div>

            <ProductMedia
              src={safeStateChanges.media[0].src}
              alt={safeStateChanges.media[0].alt}
              placeholderLabel={safeStateChanges.media[0].placeholderLabel}
              aspectRatio={safeStateChanges.media[0].aspectRatio}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="mx-auto w-full max-w-3xl"
            />

            {safeStateChanges.closingLine ? (
              <p className="text-center text-lg font-medium text-ink sm:text-xl">
                {safeStateChanges.closingLine}
              </p>
            ) : null}

            <ProductMedia
              src={safeStateChanges.media[1].src}
              alt={safeStateChanges.media[1].alt}
              placeholderLabel={safeStateChanges.media[1].placeholderLabel}
              aspectRatio={safeStateChanges.media[1].aspectRatio}
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>

          {/* Closing: quiet credibility line, tech context, status. */}
          <div className="flex max-w-2xl flex-col gap-3 border-t border-hairline pt-10">
            <p className="text-sm text-ink-muted">{parfait.engineeringRigor}</p>
            <p className="text-sm text-ink-muted">{parfait.techContext}</p>
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-accent">
              {parfait.status}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
