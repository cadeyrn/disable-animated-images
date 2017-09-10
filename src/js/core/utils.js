'use strict';

/**
 * @exports utils
 */
const utils = {
  async setBadge() {
    const options = await browser.storage.local.get(defaults);

    if (options.enable_badge) {
      const behaviour = await browser.browserSettings.imageAnimationBehavior.get({});

      switch (behaviour.value) {
        case 'once':
          browser.browserAction.setBadgeBackgroundColor({ color : '#ff9400' });
          break;
        case 'none':
          browser.browserAction.setBadgeBackgroundColor({ color : '#ff0039' });
          break;
        case 'normal':
        default:
          browser.browserAction.setBadgeBackgroundColor( {color : '#30e60b' });
      }

      browser.browserAction.setBadgeText({ text : ' ' });
    }
    else {
      browser.browserAction.setBadgeText({ text : '' });
    }
  }
};
