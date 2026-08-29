import { Container } from "@/components/container";
import { experience, experienceGroups, type ExperienceGroupId } from "@/content/experience";
import { cn } from "@/lib/cn";

const groupOrder: ExperienceGroupId[] = ["professional", "leadership"];

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="py-24 sm:py-32 lg:py-40">
      <Container>
        <h2 id="experience-heading" className="text-section-display max-w-2xl font-semibold text-ink">
          Experience &amp; Leadership
        </h2>

        <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24 lg:mt-24 lg:gap-28">
          {groupOrder.map((groupId) => {
            const entries = experience.filter((entry) => entry.group === groupId);
            const isProfessional = groupId === "professional";

            return (
              <div key={groupId}>
                <h3
                  id={`${groupId}-group-heading`}
                  className="text-sm font-medium uppercase tracking-[0.08em] text-ink-secondary"
                >
                  {experienceGroups[groupId].label}
                </h3>

                <div
                  aria-labelledby={`${groupId}-group-heading`}
                  className="mt-8 flex flex-col gap-14 sm:mt-10 sm:gap-16 lg:gap-20"
                >
                  {entries.map((entry, index) => (
                    <article
                      key={entry.id}
                      aria-labelledby={`${entry.id}-heading`}
                      className={cn(
                        index > 0 && "border-t border-hairline pt-14 sm:pt-16 lg:pt-20",
                      )}
                    >
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr] lg:gap-16">
                        <p className="text-sm font-medium uppercase tracking-[0.08em] text-ink-secondary lg:pt-1">
                          {entry.dates}
                        </p>

                        <div className="max-w-2xl">
                          <h4
                            id={`${entry.id}-heading`}
                            className={cn(
                              "font-semibold text-ink",
                              isProfessional ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                            )}
                          >
                            {entry.organization}{" "}
                            <span className="text-ink-secondary">— {entry.role}</span>
                          </h4>

                          <p className="mt-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
                            {entry.narrative}
                          </p>

                          <ul className="mt-6 flex flex-col gap-2">
                            {entry.outcomes.map((outcome) => (
                              <li
                                key={outcome}
                                className="flex gap-3 text-sm leading-relaxed text-ink-secondary sm:text-base"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.65em] h-1 w-1 flex-none rounded-full bg-ink-muted"
                                />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
