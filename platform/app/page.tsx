import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { courses } from '@/lib/courses';

const heroImage = 'https://raw.githubusercontent.com/ChitikiVenu/skill-it-education-v2/main/assets/hero-students.png';

export default function HomePage() {
  return <>
    <main>
      <section className="hero" id="top">
        <div className="hero-orbit blue"/><div className="hero-orbit purple"/>
        <div className="hero-head">
          <span className="batch-pill">OUR UPCOMING COURSE BATCH</span>
          <h1>BATCH STARTING<br/><span>SEP 10<sup>th</sup>, 2026</span></h1>
          <div className="date-rule"/>
          <p>Kickstart your career in high-demand technology fields with practical, industry-ready foundational skills.</p>
        </div>
        <div className="batch-grid">
          {courses.slice(0, 2).map((course, index) => <article className={`batch-card ${course.accent}`} key={course.slug}>
            <div className="card-copy">
              <div className="course-round">{index === 0 ? '◈' : '✦'}</div>
              <div className="course-title">{course.name}</div>
              <div className="course-level">{course.level}</div>
              <p>{course.description}</p>
              <ul>{course.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className="explore" href={`/courses/${course.slug}`}>EXPLORE FULL {course.name.toUpperCase()} CURRICULUM <b>→</b></Link>
            </div>
            <div className="student-wrap"><img src={heroImage} alt="Institute 9 student learning technology skills"/></div>
          </article>)}
        </div>
        <div className="feature-strip">
          <div><b>▣</b><span><strong>Industry-Relevant Skills</strong><small>Learn what companies are looking for.</small></span></div>
          <div><b>⚙</b><span><strong>Hands-on Learning</strong><small>Practical labs, projects &amp; real scenarios.</small></span></div>
          <div><b>▤</b><span><strong>Career-Ready Path</strong><small>Strong foundations for advanced courses.</small></span></div>
          <div><b>♙</b><span><strong>Expert Mentorship</strong><small>Learn from practitioners and mentors.</small></span></div>
        </div>
      </section>

      <section className="section" id="programs">
        <div className="eyebrow">THREE CAREER TRACKS</div><h2>Build skills that compound.</h2>
        <p className="lead">Institute 9 is built around the skills modern technology teams actually use. Learn the fundamentals, work in guided labs, build portfolio projects and progress into advanced role-based learning.</p>
        <div className="track-grid">{courses.map((course, i) => <Link className="track-card" href={`/courses/${course.slug}`} key={course.slug}><span className="number">0{i + 1}</span><h3>{course.name}</h3><p>{course.description}</p><span className="track-link">Explore {course.name} →</span></Link>)}</div>
      </section>

      <section className="dark-section"><div className="section dark-grid">
        <div><div className="eyebrow light">WHY INSTITUTE 9</div><h2>Less passive learning.<br/>More applied skill.</h2><p className="dark-copy">Technology changes quickly. Your learning model should keep up. Our programs connect concepts to tools, labs, projects, reviews and the career context behind them.</p><Link className="outline-button" href="/about">Discover our approach →</Link></div>
        <div className="principles"><div><strong>01</strong><h3>Learn</h3><p>Clear foundations before advanced tools.</p></div><div><strong>02</strong><h3>Build</h3><p>Guided practical work and portfolio projects.</p></div><div><strong>03</strong><h3>Prove</h3><p>Review, refine and prepare for interviews.</p></div></div>
      </div></section>

      <section className="section"><div className="eyebrow">WHAT YOU CAN BUILD</div><h2>From first lab to real project.</h2><div className="project-grid"><article><span>CYBER SECURITY</span><h3>SOC Alert Investigation</h3><p>Analyze alerts, inspect logs, trace attack paths and document incidents using realistic workflows.</p></article><article><span>AI ENGINEERING</span><h3>RAG Knowledge Assistant</h3><p>Build a grounded AI application with documents, embeddings, retrieval, evaluation and an LLM.</p></article><article><span>DATA SCIENCE</span><h3>Business Intelligence Dashboard</h3><p>Clean data, query it with SQL, uncover patterns and communicate decisions through dashboards.</p></article></div></section>

      <section className="section insights"><div className="eyebrow">INSIGHTS / BLOG</div><h2>Learn before you enroll.</h2><p className="lead">Practical explainers, career roadmaps, interview preparation and technology insights from the Institute 9 team.</p><div className="insight-grid"><Link href="/insights/cyber-security-roadmap-2026"><small>CYBER SECURITY</small><h3>Cyber Security Career Roadmap 2026</h3><span>Read insight →</span></Link><Link href="/insights/ai-engineer-roadmap"><small>AI ENGINEERING</small><h3>What an AI Engineer Actually Builds</h3><span>Read insight →</span></Link><Link href="/insights/data-analyst-vs-data-scientist"><small>DATA SCIENCE</small><h3>Data Analyst vs Data Scientist</h3><span>Read insight →</span></Link></div></section>

      <section className="cta" id="session"><div className="cta-inner"><div><div className="eyebrow">START WITH A CONVERSATION</div><h2>Not sure which track fits you?</h2><p>Tell us your background, goal and timeline. We'll help you choose the right starting point.</p></div><a className="session-button large" href="#free-session"><span>Book a</span><strong>Free Session</strong><em>→</em></a></div></section>

      <section className="section form-section" id="free-session"><div className="form-intro"><div className="eyebrow">FREE CAREER SESSION</div><h2>Make your next move with a clear plan.</h2><p className="lead">No pressure. We'll understand where you are today, recommend the most relevant track and explain the learning path.</p></div><LeadForm/></section>
    </main>
    <footer className="footer"><div className="footer-grid"><div><img src="/assets/institute-9-logo.svg" alt="Institute 9"/><p>Career-focused learning in Cyber Security, AI Engineering and Data Science.</p></div><div><h4>Courses</h4>{courses.map(c=><Link key={c.slug} href={`/courses/${c.slug}`}>{c.name}</Link>)}</div><div><h4>Institute</h4><Link href="/about">About Us</Link><Link href="/insights">Insights / Blog</Link><Link href="#free-session">Free Session</Link></div><div><h4>Connect</h4><a href="https://wa.me/916362868562">WhatsApp</a><a href="mailto:info@skilliteducation.com">info@skilliteducation.com</a><a href="tel:+916362868562">+91 63628 68562</a></div></div><div className="copyright">© 2026 Institute 9. All rights reserved.</div></footer>
  </>;
}
