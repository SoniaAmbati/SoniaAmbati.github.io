// Smooth scroll for nav links & CTA
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const target = document.querySelector(href);
      const offset = 70; // header height approx
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({top, behavior:'smooth'});
      // close mobile menu if open
      document.body.classList.remove('menu-open');
    }
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for fade-ins & skill bar animation
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.12 };
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');

      // if element contains progress-bars, animate them
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        const percent = bar.getAttribute('data-progress') || 0;
        bar.style.width = percent + '%';
      });

      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in targets
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
