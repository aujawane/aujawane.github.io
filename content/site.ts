export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Aditya Ujawane",
  role: "Software Engineer",
  email: "aujawane222@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/aditya-ujawane",
  githubUrl: "https://github.com/aujawane",
  resumeHref: "/resume.pdf",
} as const;

/**
 * Work/Experience/About don't exist as page sections yet -- only #work's
 * empty container is scaffolded. These anchors are intentionally left
 * pointing at future section ids per the Portfolio V2 build sequence.
 */
export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];
