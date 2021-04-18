import { createStore } from 'vuex';
import i18next from 'i18next';
// import DarkTheme from '!!css-loader!sass-loader!@/theme/light/main.scss';
// import LightTheme from '!!css-loader!sass-loader!@/theme/dark/main.scss';

// import NavHeader from './components/NavHeader.vue';

export default createStore({
  state: {
    t:()=>'Error',
    isDarkMode:true
  },
  mutations: {
    update(state,obj) {
      Object.entries(obj)
        .forEach(([key,val])=>state[key]=val);
    },
    update_lang(state) {
      const head = document.documentElement;
      head.dir = state.dir = i18next.dir();
      head.lang = state.lang = i18next.language;
    },
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    }
  },
  actions: {
  },
  modules: {
  }
})
