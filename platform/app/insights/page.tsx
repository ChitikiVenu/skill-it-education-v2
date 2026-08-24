import Link from 'next/link';

const posts = [
  { slug: 'cyber-security-roadmap-2026', category: 'CYBER SECURITY', title: 'Cyber Security Career Roadmap 2026', excerpt: 'A practical path from security foundations to SOC and offensive security roles.' },
  { slug: 'ai-engineer-roadmap', category: 'AI ENGINEERING', title: 'What an AI Engineer Actually Builds', excerpt: 'Understand the tools, systems and projects behind modern AI engineering.' },
  { slug: 'data-analyst-vs-data-scientist', category: 'DATA SCIENCE', title: 'Data Analyst vs Data Scientist', excerpt: 'Compare the roles, skills, tools and career paths before choosing your track.' },
];

export const metadata = { title: 'Insights & Blog | Institute 9' };
export default function InsightsPage(){return <main><section className="simple-hero"><div className="section"><div className="eyebrow">INSIGHTS / BLOG</div><h1>Useful technology career knowledge.</h1><p>Roadmaps, explainers and practical career guidance for people building skills in Cyber Security, AI Engineering and Data Science.</p></div></section><section className="section"><div className="insight-grid large">{posts.map(p=><Link href={`/insights/${p.slug}`} className="insight-card" key={p.slug}><small>{p.category}</small><h2>{p.title}</h2><p>{p.excerpt}</p><span>Read insight →</span></Link>)}</div></section></main>}
