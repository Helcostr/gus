import { createApp } from 'vue';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/js/dist/collapse';

// webpackChunking (probably too small to chunk)
// Promise.all([
//   import(/* webpackChunkName: "localStore" */ 'vue-the-storages'),
//   import(/* webpackChunkName: "main" */ './App.vue'),
//   import(/* webpackChunkName: "router" */ './router'),
//   import(/* webpackChunkName: "store" */ './store')
// ]).then(([vueTheStorages, App, router, store]) => {
//   createApp(App.default)
//     .use(vueTheStorages)
//     .use(store.default)
//     .use(router.default)
//     .mount('#app');
// });

import vueTheStorages from 'vue-the-storages';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(vueTheStorages)
  .use(store)
  .use(router)
  .mount('#app')
