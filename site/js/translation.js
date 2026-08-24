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
  var NAMES = { auto: 'системная', light: 'светлая', dark: 'тёмная' };
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function localize() {
    var mode = button.dataset.mode || 'auto';
    var title = 'Цветовая тема: ' + (NAMES[mode] || mode);
    var label = title + '. Нажмите, чтобы переключить.';
    if (button.title !== title) button.title = title;
    if (button.getAttribute('aria-label') !== label) button.setAttribute('aria-label', label);
  }

  if (window.MutationObserver) {
    new MutationObserver(localize).observe(button, {
      attributes: true,
      attributeFilter: ['data-mode', 'title', 'aria-label'],
    });
  } else {
    button.addEventListener('click', function () { setTimeout(localize, 0); });
  }
  localize();
})();
