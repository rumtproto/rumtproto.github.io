/* Translation-layer behaviour only.
   The mirror's own scripts stay inline in the layout and are reused verbatim:
   they must run during parsing, before first paint (theme attribute, media
   placeholders, nav breakpoint state), so moving them into this file would
   introduce a flash. This file therefore only adds what differs on the Russian
   site, and never redefines mirror logic. */
(function () {
  'use strict';

  /* The mirror's theme script writes an English title/aria-label whenever the
     theme changes. Rather than forking that script, observe the button it owns
     and localise the strings it produces. The equality guards stop the observer
     from reacting to its own writes. */
  const NAMES: Record<string, string> = { auto: 'системная', light: 'светлая', dark: 'тёмная' };
  const button = document.querySelector<HTMLButtonElement>('.theme-toggle');
  if (!button) return;
  const themeButton = button;

  function localize() {
    const mode = themeButton.dataset.mode || 'auto';
    const title = 'Цветовая тема: ' + (NAMES[mode] || mode);
    const label = title + '. Нажмите, чтобы переключить.';
    if (themeButton.title !== title) themeButton.title = title;
    if (themeButton.getAttribute('aria-label') !== label) themeButton.setAttribute('aria-label', label);
  }

  if (window.MutationObserver) {
    new MutationObserver(localize).observe(themeButton, {
      attributes: true,
      attributeFilter: ['data-mode', 'title', 'aria-label'],
    });
  } else {
    themeButton.addEventListener('click', function () { setTimeout(localize, 0); });
  }
  localize();
})();
