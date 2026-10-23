const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.resume-profile, .resume-body, .certifications, .skills-section').forEach((section) => {
  section.classList.add('reveal', 'resume-reveal');
});

document.querySelectorAll('.resume-column article, .cert-list article, .skills-grid article').forEach((item, index) => {
  item.classList.add('reveal', 'resume-item-reveal');
  item.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('.brand-mark path, .hero-symbol path').forEach((path) => {
    path.style.strokeDasharray = '1';
    path.style.strokeDashoffset = '1';
    requestAnimationFrame(() => {
      path.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)';
      path.style.strokeDashoffset = '0';
    });
  });
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });
