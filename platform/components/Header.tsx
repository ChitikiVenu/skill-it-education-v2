'use client';

import Link from 'next/link';
import { useState } from 'react';
import { courses } from '@/lib/courses';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Institute 9 home">
          <img src="/assets/institute-9-logo.svg" alt="Institute 9" />
        </Link>
        <nav className={`main-nav ${open ? 'mobile-open' : ''}`}>
          <div className="course-menu">
            <button className="nav-link" onClick={() => setOpen((v) => !v)} aria-expanded={open}>Courses <span>⌄</span></button>
            <div className="course-panel">
              {courses.map((course) => (
                <Link key={course.slug} href={`/courses/${course.slug}`} className="course-item" onClick={() => setOpen(false)}>
                  <span className={`course-icon ${course.accent}`}>{course.accent === 'violet' ? '✦' : course.accent === 'cyan' ? '▥' : '◈'}</span>
                  <span><strong>{course.name}</strong><small>{course.level}</small></span><b>›</b>
                </Link>
              ))}
            </div>
          </div>
          <Link className="nav-link" href="/about">About Us</Link>
          <Link className="nav-link" href="/insights">Insights / Blog</Link>
        </nav>
        <div className="nav-actions">
          <a className="whatsapp" href="https://wa.me/916362868562" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">◔</a>
          <Link className="session-button" href="#session"><span>Book a</span><strong>Free Session</strong><em>→</em></Link>
          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">☰</button>
        </div>
      </div>
    </header>
  );
}
