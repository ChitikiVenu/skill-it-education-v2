// Content sourced from the existing skilliteducation.com site.
// This is the seam where a CMS (Sanity, etc.) would plug in later —
// components read from these typed exports, never from hardcoded JSX.

export const org = {
  name: "Skill IT Education",
  location: "Madhapur, Hyderabad",
  phone: "+91 63628 68562",
  whatsapp: "https://wa.me/916362868562",
  email: "info@skilliteducation.com",
};

export type Track = "cyber" | "ai" | "data";

export const tracks: Record<
  Track,
  { label: string; blurb: string; chips: string[]; href: string }
> = {
  cyber: {
    label: "Cyber Security",
    blurb:
      "Defend real systems — SOC operations, penetration testing, cloud and network security.",
    chips: ["SOC Analyst", "Ethical Hacking", "VAPT"],
    href: "/cyber-security",
  },
  ai: {
    label: "Generative AI",
    blurb:
      "Build with LLMs, RAG pipelines and AI agents — from prototype to a working application.",
    chips: ["LLM Engineering", "RAG", "AI Agents"],
    href: "/generative-ai",
  },
  data: {
    label: "Data Science",
    blurb:
      "Turn raw data into decisions — Python, statistics, machine learning and dashboards.",
    chips: ["Data Analyst", "Machine Learning", "Power BI"],
    href: "/data-science",
  },
};

export type Program = {
  track: Track;
  title: string;
  duration: string;
  level: string;
  desc: string;
  href: string;
};

export const programs: Program[] = [
  {
    track: "cyber",
    title: "SOC Analyst Training",
    duration: "16 weeks",
    level: "Beginner–Intermediate",
    desc: "From an incoming alert to log review, investigation, escalation and incident documentation.",
    href: "/courses/soc-analyst",
  },
  {
    track: "cyber",
    title: "Ethical Hacking & VAPT",
    duration: "14 weeks",
    level: "Intermediate",
    desc: "Reconnaissance, exploitation and reporting — practiced in isolated lab environments.",
    href: "/courses/ethical-hacking",
  },
  {
    track: "ai",
    title: "GenAI & LLM Engineering",
    duration: "12 weeks",
    level: "Intermediate",
    desc: "Prompt engineering, RAG pipelines, vector databases and AI agents, built into a shipped project.",
    href: "/courses/genai-llm-engineering",
  },
  {
    track: "ai",
    title: "AI Engineering Foundations",
    duration: "10 weeks",
    level: "Beginner",
    desc: "AI APIs, automation workflows and the fundamentals behind modern AI products.",
    href: "/courses/ai-engineering",
  },
  {
    track: "data",
    title: "Data Analyst Track",
    duration: "12 weeks",
    level: "Beginner",
    desc: "Python, SQL and Power BI — joining and analyzing real business datasets end to end.",
    href: "/courses/data-analyst",
  },
  {
    track: "data",
    title: "Machine Learning Track",
    duration: "16 weeks",
    level: "Intermediate",
    desc: "From a clean dataset to a deployed model, with evaluation and monitoring built in.",
    href: "/courses/machine-learning",
  },
];

export const whyFeatures = [
  {
    title: "Industry-focused curriculum",
    desc: "Modules built around what SOC teams, AI teams and data teams actually do day to day, not a generic syllabus.",
  },
  {
    title: "Hands-on labs",
    desc: "Real datasets, real lab environments and real tools — the same ones used on the job, not simulations.",
  },
  {
    title: "Working mentors",
    desc: "Taught by people currently working in security operations, AI engineering and data roles.",
  },
  {
    title: "Portfolio you can show",
    desc: "Every track ends in a project you built yourself, ready to walk an interviewer through.",
  },
  {
    title: "Interview preparation",
    desc: "Role-specific interview questions and mock rounds for the paths you're actually training for.",
  },
  {
    title: "Career guidance",
    desc: "One-on-one guidance on which track fits your background and where it can lead.",
  },
] as const;

export const learningJourney = [
  { step: "Learn", desc: "Core concepts taught the way they're used in the field." },
  { step: "Practice", desc: "Guided labs on real tools and real datasets." },
  { step: "Build", desc: "Apply what you've learned to a real-scope project." },
  { step: "Portfolio", desc: "Package your work into something you can show." },
  { step: "Interview prep", desc: "Practice the questions your target role actually asks." },
  { step: "Career support", desc: "Guidance on next steps once training wraps up." },
] as const;

export const faqs = [
  {
    q: "Who is Skill IT Education for?",
    a: "People starting or switching into Cyber Security, Generative AI or Data Science roles — from complete beginners to working professionals upskilling into a new track.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Yes. Each track has beginner-friendly entry points (like AI Engineering Foundations or the Data Analyst Track) as well as more intermediate programs for people with some background already.",
  },
  {
    q: "Are real projects included?",
    a: "Yes — every program builds toward a project done on real data and real tools, not a slide-deck exercise.",
  },
  {
    q: "Is there career guidance?",
    a: "Yes, including interview preparation specific to the role you're training for.",
  },
  {
    q: "Where is Skill IT Education located?",
    a: "Madhapur, Hyderabad.",
  },
  {
    q: "Is classroom training available?",
    a: "Talk to an advisor about current batch formats and availability for classroom and online training.",
  },
] as const;
