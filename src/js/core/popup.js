'use strict';

/* global utils */

const elBadgeCheckbox = document.getElementById('badge');

/**
 * @exports popup
 */
const popup = {
  async init () {
    const option = await browser.storage.local.get(defaults);
    elBadgeCheckbox.checked = option.enable_badge;

    const behaviour = await browser.browserSettings.imageAnimationBehavior.get({});
    const allowedValues = ['normal', 'once', 'none'];

    if (!allowedValues.includes(behaviour.value)) {
      behaviour.value = 'none';
    }

    document.getElementById('behaviour_' + behaviour.value).checked = true;
  }
};

popup.init();

[...document.querySelectorAll('input[name=behaviour')].forEach(function (el) {
  el.addEventListener('change', (e) => {
    browser.browserSettings.imageAnimationBehavior.set({ value : e.target.value });
    utils.setBadge();
  });
});

elBadgeCheckbox.addEventListener('change', (e) => {
  browser.storage.local.set({ enable_badge : e.target.checked });
  utils.setBadge();
});
