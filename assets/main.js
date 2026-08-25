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

// Homepage hero — odometer-style single-role roller (one role visible at a time,
// slow slide+fade transition, stays on the same line as the H1 prefix).
// The role container is measured and locked to the widest role's rendered
// width so the constant prefix text never shifts as the role changes.
(function(){
  var el = document.getElementById('role-roll-text');
  var wrap = document.querySelector('.role-roll');
  if (!el || !wrap) return;
  var roles = ['Cybersecurity Professional', 'Ethical Hacker', 'SOC Analyst', 'Security Engineer', 'Generative AI Professional', 'Data Scientist', 'AI Engineer'];
  var i = 0;
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function lockWidth(){
    var h1 = document.querySelector('.hero .hero-h1-inline');
    if (h1 && getComputedStyle(h1).whiteSpace === 'normal') {
      // Mobile wrap fallback: role sits on its own centered line, no fixed width needed
      wrap.style.width = '';
      return;
    }
    // Measure every role at the current computed font, lock the container
    // to the widest one so it never resizes/recenters as roles change.
    var measurer = document.createElement('span');
    var cs = getComputedStyle(el);
    measurer.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none;top:-9999px;left:-9999px;' +
      'font-family:' + cs.fontFamily + ';font-size:' + cs.fontSize + ';font-weight:' + cs.fontWeight + ';letter-spacing:' + cs.letterSpacing + ';';
    document.body.appendChild(measurer);
    var max = 0;
    for (var r = 0; r < roles.length; r++) {
      measurer.textContent = roles[r];
      max = Math.max(max, measurer.offsetWidth);
    }
    document.body.removeChild(measurer);
    wrap.style.width = max + 'px';
  }

  lockWidth();
  var resizeTimer;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(lockWidth, 150);
  });

  function next(){
    if (prefersReduced) {
      i = (i + 1) % roles.length;
      el.textContent = roles[i];
      return;
    }
    el.classList.add('roll-out');
    setTimeout(function(){
      i = (i + 1) % roles.length;
      el.textContent = roles[i];
      el.classList.remove('roll-out');
      el.classList.add('no-transition', 'roll-in');
      void el.offsetWidth; // force reflow so the jump below applies instantly
      el.classList.remove('no-transition');
      requestAnimationFrame(function(){
        el.classList.remove('roll-in'); // animates back to resting position
      });
    }, 600);
  }

  setInterval(next, 2600);
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
