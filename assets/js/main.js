/* Main site interactivity */
(function () {
  'use strict';

  /* ── Navbar ── */
  const navbar = document.getElementById('navbar');
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');

  // Mark active link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', open);
    });
  }

  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle && toggle.classList.remove('active');
    });
  });

  /* ── Scroll-indicator ── */
  const scrollBtn = document.querySelector('.scroll-ind');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      const next = document.querySelector('.section');
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    });
    scrollBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') scrollBtn.click();
    });
  }

  /* ── Fade-in on scroll ── */
  const fiEls = document.querySelectorAll('.fi');
  if (fiEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fiEls.forEach(el => obs.observe(el));
  }

  /* ── Animated counters ── */
  function countUp(el, target, dur) {
    const step = target / (dur / 16);
    let cur = 0;
    const run = () => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur);
      if (cur < target) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }

  const counters = document.querySelectorAll('.metric-num[data-target]');
  if (counters.length) {
    const obs2 = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          countUp(e.target, +e.target.dataset.target, 1400);
          obs2.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(c => obs2.observe(c));
  }

  /* ── Keyboard nav for hero scroll ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu) {
      menu.classList.remove('open');
      toggle && toggle.classList.remove('active');
    }
  });
})();
