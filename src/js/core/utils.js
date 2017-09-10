'use strict';

/**
 * @exports utils
 */
const utils = {
  async setBadge() {
    const behaviour = await browser.browserSettings.imageAnimationBehavior.get({});

    switch (behaviour.value) {
      case 'once':
        browser.browserAction.setBadgeText({ text : ' ' });
        browser.browserAction.setBadgeBackgroundColor({ color : '#ff9400' });
        break;
      case 'none':
        browser.browserAction.setBadgeText({ text : ' ' });
        browser.browserAction.setBadgeBackgroundColor({ color : '#ff0039' });
        break;
      case 'normal':
      default:
        browser.browserAction.setBadgeText({ text : ' ' });
        browser.browserAction.setBadgeBackgroundColor( {color : '#30e60b' });
    }
  }
};
