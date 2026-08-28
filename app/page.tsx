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
          "View My Work" CTA. Parfait is implemented; GradeFlow is a
          separate, upcoming phase built from its own approved spec and
          will be added here as a second child, after Parfait.
        */}
        <section id="work" aria-label="Selected work">
          <ParfaitSection />
        </section>
      </main>
    </>
  );
}
