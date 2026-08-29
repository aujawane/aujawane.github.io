import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ParfaitSection } from "@/components/parfait-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        {/*
          Selected Work anchor target for the nav link and the hero's
          "View My Work" CTA. Parfait is the only deep product showcase --
          GradeFlow was internship work at another company and is not
          presented as a standalone product section (see experience.ts).
        */}
        <section id="work" aria-label="Selected work">
          <ParfaitSection />
        </section>

        <section id="experience" aria-label="Experience and leadership">
          <ExperienceSection />
        </section>
      </main>
    </>
  );
}
