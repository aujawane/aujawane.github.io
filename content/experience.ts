export type ExperienceGroupId = "professional" | "leadership";

export const experienceGroups: Record<ExperienceGroupId, { label: string }> = {
  professional: { label: "Professional Experience" },
  leadership: { label: "Leadership & Teaching" },
};

export type ExperienceEntry = {
  id: string;
  group: ExperienceGroupId;
  organization: string;
  role: string;
  dates: string;
  narrative: string;
  outcomes: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "zip-launchpad",
    group: "professional",
    organization: "ZIP Launchpad",
    role: "AI & Software Engineering Intern",
    dates: "May 2026 – Present",
    narrative:
      "At ZIP Launchpad, I build applied-AI workflows and internal tools that remove repetitive manual work from day-to-day operations — spanning content production, market research, and internal data tooling.",
    outcomes: [
      "Built an end-to-end AI marketing pipeline orchestrating script generation, AI avatars, voice synthesis, and video creation, cutting content-production time by 71%",
      "Automated daily market intelligence for a concierge startup and built an internal tool to scrape and structure event data, eliminating roughly 6 hours a week of manual research",
    ],
  },
  {
    id: "gradeflow",
    group: "professional",
    organization: "GradeFlow",
    role: "Software Engineering Intern",
    dates: "February 2026 – Present",
    narrative:
      "At GradeFlow, I work as a software engineering intern leading full-stack development of the platform's Marketplace — built end-to-end with Next.js, React, and FastAPI — and collaborating directly with stakeholders on product direction.",
    outcomes: [
      "Lead development of the Marketplace platform, architecting and implementing full-stack functionality end-to-end",
      "Engineered a 6-agent LLM orchestration system spanning project management, architecture, sprint planning, development, QA, and monitoring, reducing feature-delivery time by 32%",
      "Designed and deployed an AI-powered marketing agent used by 80+ active users, combining structured data extraction, prompt engineering, and the NanoBanana API to generate personalized marketing assets in about 30 seconds",
    ],
  },
  {
    id: "pares-ai",
    group: "professional",
    organization: "Pares AI",
    role: "Software Development Intern",
    dates: "July 2025 – October 2025",
    narrative:
      "As a software development intern at Pares AI, I worked across the stack on a small Agile engineering team — from backend data infrastructure to production-facing CRM features.",
    outcomes: [
      "Built a Python ETL pipeline transforming and loading 10,000+ CSV records into Supabase/PostgreSQL, reducing manual data-ingestion time by 86%",
      "Shipped 5+ production frontend enhancements and bug fixes for a CRM, contributing across REST APIs, SQL, Git, Docker, and CI/CD workflows",
    ],
  },
  {
    id: "eleet-coders-club",
    group: "leadership",
    organization: "eLeet Coders Club",
    role: "Co-President",
    dates: "February 2026 – Present",
    narrative:
      "eLeet Coders Club is SDSU's technical interview-preparation organization, serving 50+ students. As Co-President, I help lead the club's strategy and technical programming while mentoring students through their own interview preparation.",
    outcomes: [
      "Organize LeetCode workshops, resume reviews, hackathons, and industry speaker events",
      "Mentor students in data structures, algorithms, and technical interview preparation",
    ],
  },
  {
    id: "sdsu-si-leader",
    group: "leadership",
    organization: "San Diego State University",
    role: "Supplemental Instruction Leader",
    dates: "January 2024 – Present",
    narrative:
      "As a Supplemental Instruction Leader at SDSU, I run weekly collaborative study sessions for Calculus I, helping students build stronger conceptual understanding and problem-solving habits outside the classroom.",
    outcomes: [
      "Facilitate 2+ weekly Calculus I sessions",
      "Contributed to a 15.8% increase in average grades and a 14% higher course passing rate among participating students",
    ],
  },
];
