export type ParfaitMedia = {
  /** Populate once a real, optimized screenshot exists. Undefined renders
   *  the restrained development placeholder instead. */
  src?: string;
  alt: string;
  placeholderLabel: string;
  /** width / height */
  aspectRatio: number;
};

export type ParfaitBeat = {
  id: string;
  heading: string;
  copy: string;
  /** Beat 2 only: the evaluation-harness line. */
  supportingLine?: string;
  /** Beat 4 only: the bridging line between its two visuals. */
  closingLine?: string;
  media: ParfaitMedia[];
};

const beats: ParfaitBeat[] = [
  {
    id: "conversation-to-execution",
    heading: "From what was said to what gets shipped",
    copy: "A conversation becomes a commitment. A commitment becomes tasks, each one still connected to the moment it was agreed to. Parfait isn't organizing notes — it's building the execution layer a meeting was missing.",
    media: [
      {
        alt: "Parfait commitment workspace showing a commitment, its linked tasks, and the transcript evidence each one is grounded in.",
        placeholderLabel: "Commitment workspace — Atlas Mobile Launch demo",
        aspectRatio: 16 / 9,
      },
    ],
  },
  {
    id: "grounded-ai",
    heading: "AI that shows its work",
    copy: "Every commitment and task Parfait extracts stays linked to the transcript it came from — the exact quote and source segment. Extraction goes through structured, schema-validated output and a deterministic verification step before anything is treated as real.",
    supportingLine:
      "A quantitative evaluation harness measures precision, recall, grounding, hallucination, duplication, and ownership accuracy — extraction quality is measured, not assumed.",
    media: [
      {
        alt: "Parfait interface showing an extracted commitment with its source quote and transcript segment reference.",
        placeholderLabel: "Evidence-linked extraction — Atlas Mobile Launch demo",
        aspectRatio: 4 / 3,
      },
    ],
  },
  {
    id: "durable-architecture",
    heading: "Built to survive real infrastructure limits",
    copy: "A full meeting analysis can run longer than a single serverless request allows. Parfait breaks the work into stages, checkpoints progress between them, and continues safely in the background — with visible progress the whole way, running on Next.js and Vercel.",
    media: [
      {
        alt: "Parfait meeting analysis in progress, showing the current processing stage and progress.",
        placeholderLabel: "Analysis in progress — Atlas Mobile Launch demo",
        aspectRatio: 4 / 3,
      },
    ],
  },
  {
    id: "safe-ai-state-changes",
    heading: "AI that proposes. You decide.",
    copy: "Re-running analysis on a meeting never silently overwrites a correction you already made. And when Parfait's Project Brain suggests a change to a project — a new dependency, a shifted deadline — it's presented as a proposal. Nothing is applied until you review it and approve it.",
    closingLine: "For project-plan changes, AI proposes; you decide what gets applied.",
    media: [
      {
        alt: "Parfait task workspace showing a task and its deliverable.",
        placeholderLabel: "Task and deliverable workspace — Atlas Mobile Launch demo",
        aspectRatio: 3 / 2,
      },
      {
        alt: "Parfait Project Brain proposal review showing a proposed project change awaiting explicit approval.",
        placeholderLabel: "Project Brain proposal review — Atlas Mobile Launch demo",
        aspectRatio: 16 / 9,
      },
    ],
  },
];

export const parfait = {
  eyebrow: {
    label: "Flagship Project",
    status: "Launching Soon",
  },
  headline: "Turn conversations into execution.",
  summary:
    "Parfait turns meeting conversations into evidence-grounded commitments and tasks, then carries that work through to execution.",
  intro:
    "A summary is only the starting point. Parfait extracts what was actually committed to — tied back to the conversation it came from — and carries it into a workspace built for finishing the work, not just remembering it.",
  beats,
  engineeringRigor:
    "Critical extraction, lifecycle, and concurrency behavior is covered by a 791-test automated suite.",
  techContext: "Next.js · TypeScript · Supabase/Postgres · OpenAI · Recall.ai · Vercel",
  status: "Launching Soon",
};

/**
 * Fictional demo dataset used to seed the real Parfait app when producing
 * the screenshots referenced by parfait.beats[].media above. Not rendered
 * anywhere on the page -- Atlas Mobile Launch is not a real customer, and
 * these are not real users or production data.
 */
export const atlasMobileLaunchDemo = {
  meeting: {
    title: "Atlas Mobile — Launch Readiness Sync",
    date: "September 3",
  },
  participants: [
    { name: "Maya Chen", role: "Product" },
    { name: "Sam Rivera", role: "Design" },
    { name: "Jordan Patel", role: "Engineering" },
    { name: "Priya Nair", role: "Marketing" },
  ],
  transcriptExcerpt: [
    { speaker: "Maya Chen", line: "We need the onboarding redesign live before the September 18 launch." },
    { speaker: "Sam Rivera", line: "I can have the new copy finalized by the 10th." },
    { speaker: "Jordan Patel", line: "I'll get analytics instrumentation done in parallel so we're not blocked at the end." },
    { speaker: "Priya Nair", line: "I'll start drafting the launch announcement once beta QA looks clean." },
  ],
  commitment: {
    title: "Ship onboarding redesign by September 18",
    owner: "Maya Chen",
    status: "In progress",
    dueDate: "September 18",
  },
  tasks: [
    { title: "Finalize onboarding copy", owner: "Sam Rivera", dueDate: "September 10" },
    { title: "Complete analytics instrumentation", owner: "Jordan Patel", dueDate: "September 12" },
    { title: "Run beta QA", owner: "Jordan Patel", dueDate: "September 15" },
    { title: "Prepare launch announcement", owner: "Priya Nair", dueDate: "September 17" },
  ],
  evidenceExample: {
    quote: "I can have the new copy finalized by the 10th.",
    source: "Sam Rivera, 14:32",
  },
  deliverable: {
    title: "Onboarding Copy — Draft v2",
    status: "Accepted",
    excerpt:
      "Welcome to Atlas. Let's get your account set up in under two minutes. Step 1: Connect your calendar so we can suggest your first focus block automatically.",
  },
  projectBrainProposal: {
    change: "Add a dependency: Run beta QA depends on Complete analytics instrumentation",
    dateShift: { task: "Run beta QA", from: "September 15", to: "September 16" },
    reason: "Beta QA needs working analytics instrumentation in place to validate the flow.",
  },
} as const;
