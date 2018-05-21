import Vue from 'vue';
import MobileDetect from 'mobile-detect';

const deviceDetect = {};

deviceDetect.install = function(Vue, options) {
  Vue.mixin({
    beforeMount() {
      let md = new MobileDetect(navigator.userAgent);
      let currentDevice = 'desktop';
      if (md.tablet()) currentDevice = 'tablet';
      if (md.phone()) currentDevice = 'mobile';

      Vue.prototype.$device = {
        get type() {
          return currentDevice;
        },
        get uaString() {
          return md.ua;
        },
        get os() {
          return md.os();
        },
        get userAgent() {
          return md.userAgent();
        },
        get maxWidth() {
          return window.innerWidth;
        },
        get mobile() {
          return md.mobile();
        },
        get phone() {
          return md.phone();
        },
        get tablet() {
          return md.tablet();
        },
        get bot() {
          return md.is('bot');
        },
        get xbox() {
          return md.match('xbox');
        },
        get playstation() {
          return md.match('playstation');
        },
        get isTouchEnabled() {
          return document.documentElement.ontouchstart !== undefined;
        },
        get landscape() {
          return /landscape/.test(window.screen.orientation.type);
        },
        get portrait() {
          return /portrait/.test(window.screen.orientation.type);
        }
      };
    }
  });
};

Vue.use(deviceDetect);
