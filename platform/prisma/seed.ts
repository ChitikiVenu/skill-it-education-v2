import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const courses = [
  { slug: 'cyber-security', name: 'Cyber Security', shortName: 'Cyber Security', level: 'Level 1 — Security Foundations', description: 'Networking, security fundamentals, threats, vulnerabilities, ethical hacking basics, security tools and hands-on labs.', color: 'blue' },
  { slug: 'ai-engineering', name: 'AI Engineering', shortName: 'AI Engineering', level: 'Level 1 — AI Foundations', description: 'Python, machine learning, Generative AI, LLM fundamentals, RAG, agents and real-world AI projects.', color: 'violet' },
  { slug: 'data-science', name: 'Data Science', shortName: 'Data Science', level: 'Level 1 — Data Foundations', description: 'Python, SQL, statistics, analytics, visualization, machine learning and practical data projects.', color: 'cyan' },
];

const posts = [
  { slug: 'cyber-security-roadmap-2026', title: 'Cyber Security Career Roadmap 2026', category: 'Cyber Security', excerpt: 'A practical path from security foundations to SOC and offensive security roles.', content: 'A practical Institute 9 guide covering foundations, labs, projects, certifications and interview preparation.', published: true, publishedAt: new Date() },
  { slug: 'ai-engineer-roadmap', title: 'What an AI Engineer Actually Builds', category: 'AI Engineering', excerpt: 'Understand the tools, systems and projects behind modern AI engineering.', content: 'AI engineering connects software engineering with machine learning, LLM applications, retrieval, evaluation and production systems.', published: true, publishedAt: new Date() },
  { slug: 'data-analyst-vs-data-scientist', title: 'Data Analyst vs Data Scientist', category: 'Data Science', excerpt: 'Compare the roles, skills, tools and career paths before choosing your track.', content: 'A role-by-role comparison designed to help learners choose a practical starting point.', published: true, publishedAt: new Date() },
];

async function main() {
  for (const course of courses) await prisma.course.upsert({ where: { slug: course.slug }, update: course, create: course });
  for (const post of posts) await prisma.blogPost.upsert({ where: { slug: post.slug }, update: post, create: post });
  console.log('Institute 9 seed complete');
}

main().finally(() => prisma.$disconnect());
