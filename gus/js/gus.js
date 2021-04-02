/* eslint-env browser */
/* global $, i18next, i18nextHttpBackend, i18nextBrowserLanguageDetector, Vue, VueRouter */
'use strict';
(() => {
  $(() => {
    console.log('This page has fully loaded');
    const vue_init = translator => {
      const t = translator;

      // Load CSS first
      Promise.all([
        fetch('./css/bootstrap.min.css').then(e => e.text()),
        fetch('./css/bootstrap.rtl.min.css').then(e => e.text())
      ]).then(([ltr, rtl]) => {
        const vue_options = {
          data() {
            return {
              dir: null,
              lang: null,
              lang_select: null,
              gus_data: null,
              lipsum_debug: null,
              css: { ltr, rtl }
            };
          },
          methods: {
            t,
            update_lang() {
              this.dir = i18next.dir();
              this.lang = i18next.language;
              document.getElementById('bootstrap_css').innerText = this.css[this.dir];
            },
            change_lang(event) {
              const lang = event.target.value;

              i18next.changeLanguage(lang).then(this.update_lang);
            },
            pageTitle() {
              const title = t('title.page');

              document.title = title;
            },
            onSubmit(event) {
              console.log(event);
            },
            getLocaleTime() {
              const date = this.gus_data?.lastupdated;

              return typeof date === 'string' ? (new Date(date)).toLocaleString(this.lang) : 'DEAD';
            }
          },
          mounted() {
            console.log('Vue3 Loaded');
            this.update_lang();
            this.pageTitle();
            fetch('./lang_select.json').then(e => e.json())
              .then(json => this.lang_select = json);

            // Get Recent Gus Data
            fetch('../common/stat/gus.json', {
              cache: 'no-cache'
            }).then(e => e.json())
              .then(json => {
                this.gus_data = json;
                console.log(json);
              });

            // Load lipsum debug
            fetch('./lipsum_debug.txt').then(e => e.text())
              .then(text => this.lipsum_debug = text.split('\n'));
          }
        };

        // Dummy Vue
        const dummy_route = name => ({ template: `<div>${name}</div>` });

        const routes = [
          { path: '/', component: dummy_route('About') },
          { path: '/search', component: dummy_route('Search') },
          { path: '/settings', component: dummy_route('Settings') }
        ];
        const router = VueRouter.createRouter({
          history: VueRouter.createWebHashHistory(),
          routes
        });

        Vue.createApp(vue_options)
          .use(router)
          .mount('#body');
      });

    };

    i18next
      .use(i18nextHttpBackend)
      .use(i18nextBrowserLanguageDetector)
      .init({
        fallbackLng: 'en-US',
        debug: true,
        ns: ['gusText', 'category', 'lang'],
        defaultNS: 'gusText',
        backend: {
          loadPath: '../common/locales/{{lng}}/{{ns}}.json',
          requestOptions: {
            mode: 'no-cors',
            credentials: 'same-origin',
            cache: 'default'
          }
        }
      }).then(t => {

        // initialized and ready to go!
        console.log('i18next loaded');
        vue_init(t);
      });
  });
})();
