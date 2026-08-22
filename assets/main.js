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
