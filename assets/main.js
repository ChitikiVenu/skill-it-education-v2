// Homepage role rotation
(function(){
  var el = document.getElementById('role-rotator');
  if (!el) return;
  var roles = ['SOC Analyst', 'Ethical Hacker', 'GenAI Engineer', 'AI Engineer', 'Data Analyst', 'ML Engineer'];
  var i = 0;
  setInterval(function(){
    el.classList.add('role-changing');
    setTimeout(function(){
      i = (i + 1) % roles.length;
      el.textContent = roles[i];
      el.classList.remove('role-changing');
    }, 220);
  }, 1900);
})();

(function(){
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
