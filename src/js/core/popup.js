'use strict';

/**
 * @exports newtaboverride
 */
const popup = {
  async init () {
      const behaviour = await browser.browserSettings.imageAnimationBehavior.get({});
      document.getElementById('behaviour_' + behaviour.value).checked = true;
  }
};

popup.init();
