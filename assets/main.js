// Rotating role word in hero (fade-based, robust across fonts/sizes — no CSS em-stacking)
(function(){
  var el = document.getElementById('role-rotator');
  if (!el) return;
  var roles = ['SOC Analyst', 'Ethical Hacker', 'GenAI Engineer', 'Data Analyst', 'ML Engineer'];
  var i = 0;
  setInterval(function(){
    el.style.opacity = '0';
    setTimeout(function(){
      i = (i + 1) % roles.length;
      el.textContent = roles[i];
      el.style.opacity = '1';
    }, 180);
  }, 1400);
})();

// Skill IT Education — shared site behaviors
(function(){
  // Scroll-reveal: fade/slide elements into view as they enter viewport
  if ('IntersectionObserver' in window) {
    var els = document.querySelectorAll('.pillar-card, .course-card, .project-card, .curriculum, .stats-strip, .compare-wrap, .location-card, .map-frame, .step');
    var seen = new WeakSet();
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function(el, i){
      el.classList.add('reveal-init');
      el.style.transitionDelay = (Math.min(i % 6, 5) * 60) + 'ms';
      io.observe(el);
    });
  }
})();

// Upcoming course batches hero — injected so the homepage keeps one source of truth for the navigation and content below it.
(function(){
  function initUpcomingBatches(){
    var oldHero = document.querySelector('.hero');
    if (!oldHero || document.querySelector('.upcoming-batches-hero')) return;

    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'assets/upcoming-batches.css';
    document.head.appendChild(css);

    var section = document.createElement('section');
    section.className = 'upcoming-batches-hero';
    section.setAttribute('aria-labelledby','upcoming-batches-title');
    section.innerHTML = `
      <div class="wrap upcoming-batches-inner">
        <div class="upcoming-kicker">Our Upcoming Course Batch</div>
        <h1 id="upcoming-batches-title" class="upcoming-batches-title">Start Your Tech Career Here</h1>
        <div class="upcoming-date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
          <span>SEP 10th, 2026</span>
        </div>

        <div class="upcoming-course-grid">
          <article class="upcoming-course cyber">
            <span class="curve" aria-hidden="true"></span>
            <div class="upcoming-copy">
              <span class="upcoming-course-tag">Cyber Security</span>
              <h2>Cyber Security</h2>
              <div class="upcoming-level">Level 1 — Security Foundations</div>
              <p>Build the fundamentals behind modern cyber defense — networking, security concepts, threats, vulnerabilities and the practical mindset used in real security teams.</p>
              <div class="upcoming-highlights">
                <span class="upcoming-highlight">Security Fundamentals</span>
                <span class="upcoming-highlight">Threats &amp; Vulnerabilities</span>
                <span class="upcoming-highlight">Hands-on Labs</span>
              </div>
              <a class="upcoming-explore" href="cyber-security.html">Explore Full Cyber Security Curriculum <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </div>
            <img class="upcoming-student" src="assets/hero-students.png" alt="College student learning Cyber Security with a laptop and backpack">
          </article>

          <article class="upcoming-course ai">
            <span class="curve" aria-hidden="true"></span>
            <div class="upcoming-copy">
              <span class="upcoming-course-tag">AI Engineering</span>
              <h2>AI Engineering</h2>
              <div class="upcoming-level">Level 1 — AI Foundations</div>
              <p>Start with the foundations of modern AI — Python, machine learning concepts, Generative AI, LLM basics and the building blocks behind real AI applications.</p>
              <div class="upcoming-highlights">
                <span class="upcoming-highlight">Python for AI</span>
                <span class="upcoming-highlight">ML Foundations</span>
                <span class="upcoming-highlight">GenAI &amp; LLM Basics</span>
              </div>
              <a class="upcoming-explore" href="ai-engineering-course.html">Explore AI Engineering Curriculum <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </div>
            <img class="upcoming-student" src="assets/hero-students.png" alt="College student learning AI Engineering with a laptop and backpack">
          </article>
        </div>

        <p class="upcoming-note"><strong>Limited seats for the September 10 batch.</strong> Explore the curriculum before you choose your path.</p>
      </div>`;

    oldHero.replaceWith(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initUpcomingBatches);
  else initUpcomingBatches();
})();
