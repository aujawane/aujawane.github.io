import Image from "next/image";

import { Container } from "@/components/container";
import { site } from "@/content/site";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="top" className="pb-24 pt-10 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-24">
      <Container>
        <div className={styles.hero}>
          <p
            className={`${styles.identity} text-sm font-medium uppercase tracking-[0.08em] text-ink-secondary`}
          >
            Software Engineer
          </p>

          <h1 className={`${styles.headline} text-display max-w-3xl font-semibold text-ink`}>
            I build software that turns ambitious ideas into real products.
          </h1>

          <p className={`${styles.copy} text-body-lg max-w-xl text-ink-secondary`}>
            Software engineer focused on full-stack products, applied AI, and the systems
            that make them reliable. Currently seeking 2027 New Grad Software Engineering
            and Forward Deployed Engineering opportunities.
          </p>

          <div className={`${styles.cta} flex flex-wrap items-center gap-4`}>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View My Work
            </a>
            <a
              href={site.resumeHref}
              download
              className="inline-flex items-center justify-center rounded-lg border border-hairline px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-secondary"
            >
              Download Resume
            </a>
          </div>

          <div className={styles.portrait}>
            <div className={styles.portraitFrame}>
              <Image
                src="/portrait.png"
                alt="Portrait of Aditya Ujawane"
                fill
                priority
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 360px, 320px"
                className="object-cover"
              />
            </div>
          </div>

          <div className={`${styles.social} flex items-center gap-5 text-sm text-ink-muted`}>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              GitHub
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
              Email
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
