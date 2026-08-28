import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        {/*
          Selected Work anchor target for the nav link and the hero's
          "View My Work" CTA. Intentionally empty -- Parfait and GradeFlow
          are a separate, upcoming implementation phase built from their
          own approved specs. No placeholder cards or lorem ipsum here.
        */}
        <section id="work" className="min-h-[50vh]" aria-label="Selected work" />
      </main>
    </>
  );
}
