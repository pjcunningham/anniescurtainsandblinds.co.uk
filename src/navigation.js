export function initNavigation(root = document) {
  const toggle = root.querySelector('[data-nav-toggle]');
  const panel = root.querySelector('#mobile-navigation');
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  // Without JavaScript, mobile links stay available and the inert toggle is hidden.
  toggle.hidden = false;
  setOpen(false);
  toggle.addEventListener('click', () => setOpen(panel.hidden));
  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 64rem)').addEventListener('change', () => setOpen(false));
}
