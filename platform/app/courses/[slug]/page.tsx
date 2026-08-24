import { notFound } from 'next/navigation';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { courses } from '@/lib/courses';

export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();
  return <main>
    <section className={`course-hero ${course.accent}`}><div className="section"><Link className="back-link" href="/">← Institute 9</Link><div className="eyebrow">INSTITUTE 9 COURSE</div><h1>{course.name}</h1><p className="course-hero-lead">{course.level}. Build practical capability through concepts, labs, projects and career preparation.</p><a className="primary-button inline" href="#enquire">Book a Free Session →</a></div></section>
    <section className="section course-content"><div><div className="eyebrow">WHAT YOU'LL LEARN</div><h2>Foundations first. Real work next.</h2><p className="lead">This program is structured to remove the gap between knowing terminology and being able to work with the tools and workflows used by technology teams.</p><div className="curriculum-grid">{course.bullets.map((item, i)=><article key={item}><span>0{i+1}</span><h3>{item}</h3><p>Instructor-led concepts, guided practice, checkpoints and applied exercises.</p></article>)}</div></div><aside className="course-side"><h3>Program snapshot</h3><dl><div><dt>Track</dt><dd>{course.name}</dd></div><div><dt>Starting level</dt><dd>Foundation</dd></div><div><dt>Learning model</dt><dd>Labs + Projects</dd></div><div><dt>Career support</dt><dd>Interview-focused</dd></div></dl><Link className="outline-dark" href="#enquire">Talk to Admissions</Link></aside></div></section>
    <section className="dark-section"><div className="section"><div className="eyebrow light">HOW WE TEACH</div><h2>Understand it. Use it. Explain it.</h2><div className="method-grid"><div><strong>01</strong><h3>Concepts</h3><p>Build the mental model before reaching for tools.</p></div><div><strong>02</strong><h3>Labs</h3><p>Practice workflows with guided hands-on exercises.</p></div><div><strong>03</strong><h3>Projects</h3><p>Turn the skill into portfolio evidence.</p></div><div><strong>04</strong><h3>Career</h3><p>Connect your learning to roles and interviews.</p></div></div></div></section>
    <section className="section form-section" id="enquire"><div><div className="eyebrow">FREE CAREER SESSION</div><h2>Want the detailed curriculum?</h2><p className="lead">Leave your details and our admissions team can walk you through the complete learning path, schedule and next batch.</p></div><LeadForm/></section>
  </main>;
}
