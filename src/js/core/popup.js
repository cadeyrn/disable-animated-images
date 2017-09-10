'use strict';

/**
 * @exports popup
 */
const popup = {
  async init () {
      const behaviour = await browser.browserSettings.imageAnimationBehavior.get({});
      document.getElementById('behaviour_' + behaviour.value).checked = true;
  }
};

popup.init();

[...document.querySelectorAll('input[name=behaviour')].forEach(function (el) {
  el.addEventListener('change', (e) => {
    browser.browserSettings.imageAnimationBehavior.set({ value : e.target.value });
  });
});
