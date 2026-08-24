export const courses = [
  {
    slug: 'cyber-security',
    name: 'Cyber Security',
    level: 'Level 1 — Security Foundations',
    description: 'Networking, security fundamentals, threats, vulnerabilities, ethical hacking basics, security tools and hands-on labs.',
    accent: 'blue',
    bullets: ['Network & Security Fundamentals', 'Threats, Vulnerabilities & Attacks', 'Security Tools & Technologies', 'Hands-on Labs & Practical Learning'],
  },
  {
    slug: 'ai-engineering',
    name: 'AI Engineering',
    level: 'Level 1 — AI Foundations',
    description: 'Python, machine learning, Generative AI, LLM fundamentals, retrieval, agents and real-world AI projects.',
    accent: 'violet',
    bullets: ['Python for AI & Data Handling', 'Machine Learning Fundamentals', 'Generative AI & LLM Basics', 'Real-world Projects & Labs'],
  },
  {
    slug: 'data-science',
    name: 'Data Science',
    level: 'Level 1 — Data Foundations',
    description: 'Python, SQL, statistics, analytics, visualization, machine learning and practical data projects.',
    accent: 'cyan',
    bullets: ['Python & SQL', 'Statistics & Data Analysis', 'Visualization & BI', 'Machine Learning Projects'],
  },
] as const;
