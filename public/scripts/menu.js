document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  const nav = document.getElementById('site-navigation');

  if (!toggle || !nav) return;

  function setOpen(open) {
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      // focus first link
      const first = nav.querySelector('a');
      if (first) first.focus();
    }
  }

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  // close on click outside
  document.addEventListener('click', function (e) {
    if (!body.classList.contains('nav-open')) return;
    if (toggle.contains(e.target) || nav.contains(e.target)) return;
    setOpen(false);
  });

  // close on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
});
