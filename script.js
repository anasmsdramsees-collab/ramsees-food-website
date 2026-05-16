// Ramsees Food — interactions
(() => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header shadow on scroll + scroll-top button
  const header = document.getElementById('siteHeader');
  const topBtn = document.getElementById('scrollTop');
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 8);
    if (topBtn) topBtn.classList.toggle('visible', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // Product tabs
  const tabs = document.querySelectorAll('#productTabs .tab');
  const panels = document.querySelectorAll('.tab-panel');

  function activateTab(tabId) {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    const target = document.querySelector(`#productTabs .tab[data-tab="${tabId}"]`);
    const panel = document.getElementById(tabId);
    if (target) target.classList.add('active');
    if (panel) {
      panel.classList.add('active');
      // Force all products visible when tab activates (fixes mobile IntersectionObserver gap)
      panel.querySelectorAll('.product').forEach(p => p.classList.add('in-view'));
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  });

  // Brand cards → jump to matching product tab
  document.querySelectorAll('.brand-card[data-goto-tab]').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const tabId = card.dataset.gotoTab;
      activateTab(tabId);
      document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  const setActive = () => {
    const y = window.scrollY + 140;
    let current = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= y) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active-link',
        a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.section, .brand-card, .product, .feature, .news-card')
    .forEach(el => io.observe(el));

  // On page load: immediately reveal products in the default active panel
  const defaultPanel = document.querySelector('.tab-panel.active');
  if (defaultPanel) {
    defaultPanel.querySelectorAll('.product').forEach(p => p.classList.add('in-view'));
  }
})();
