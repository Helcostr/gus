<template>
  <header class="py-3 mb-3 border-bottom">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{t('title.short')}}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <AppLink class="nav-link" to="/" pid="navbarCollapse">Home</AppLink>
            </li>
            <li class="nav-item">
              <AppLink class="nav-link" to="/search" pid="navbarCollapse">Search</AppLink>
            </li>
            <li class="nav-item">
              <AppLink class="nav-link" to="/settings" pid="navbarCollapse">Settings</AppLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="flex-shrink-0">
    <div class="container">
      <router-view/>
      <!-- <p v-for="line in lipsum_debug" v-bind:key="line">{{line}}</p> -->
    </div>
  </main>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">{{t( 'lastUpdated.text', { time:getLocaleTime(), interpolation: { escapeValue: false } } )}}</span>
    </div>
  </footer>
</template>

<style lang="scss">
  

  // Custom Code
  main .container {
    padding-top: 60px;
  }
  .i18n-cloak {
    display: none !important;
  }
</style>
<script>
  import { mapState } from 'vuex';
  import i18next from 'i18next';
  import HttpApi from 'i18next-http-backend';
  import LanguageDetector from 'i18next-browser-languagedetector';
  import lipsum from '@/lipsum_debug.txt';
  import AppLink from '@/components/AppLink.vue';  

  const setStyle = style => document.getElementById('theme_css').innerHTML = style;

  export default {
    components:{
      AppLink
    },
    beforeCreate () {
      const i18nextOptions = {
        fallbackLng: 'en-US',
        debug: true,
        ns: ['gusText', 'category', 'lang'],
        defaultNS: 'gusText',
        backend: {
          // Production Path
          // loadPath: '../common/locales/{{lng}}/{{ns}}.json',
          // Development Path
          loadPath: 'common/locales/{{lng}}/{{ns}}.json',
          requestOptions: {
            mode: 'no-cors',
            credentials: 'same-origin',
            cache: 'default'
          }
        }
      };
      const i18nextPromise = i18next
        .use(HttpApi)
        .use(LanguageDetector)
        .init(i18nextOptions);
      Promise.all([
        i18nextPromise,
        import(/* webpackChunkName: "Themes" */ '@/theme')
      ]).then(([t,{default:{ DarkTheme, LightTheme, DarkThemeRTL, LightThemeRTL }}])=>{
        this.$store.commit('update', {
          t,
          DarkTheme,
          LightTheme,
          DarkThemeRTL,
          LightThemeRTL
        });
        this.$store.commit('update_lang');
        this.setTheme(this.isDarkMode);

        // Display after loading all required
        document.querySelector(".i18n-cloak")
          .classList.remove("i18n-cloak");
      });
      fetch('common/stat/gus.json', {
        cache: 'no-cache'
      }).then(async e => {
        this.$store.commit('update',{
          gus_data: await e.json()
        });
      });
    },
    data() {
      return {
        // t: (...param) => param[0],
        lipsum_debug: lipsum.split('\n')
      }
    },
    computed: mapState(['t','isDarkMode','dir','DarkTheme','LightTheme','DarkThemeRTL','LightThemeRTL']),
    methods:{
      getLocaleTime() {
        const date = this.$store.state.gus_data?.lastupdated;

        return typeof date === 'string' ? (new Date(date)).toLocaleString(this.$store.state.lang) : this.t('lastUpdated.loading');
      },
      setTheme(isDarkMode) {
        if (this.dir === 'ltr')
          if (isDarkMode)
            setStyle(this.DarkTheme);
          else
            setStyle(this.LightTheme);
        else
          if (isDarkMode)
            setStyle(this.DarkThemeRTL);
          else
            setStyle(this.LightThemeRTL);
      }
    },
    watch: {
      isDarkMode(isDarkMode) {
        this.setTheme(isDarkMode);
      },
      dir() {
        this.setTheme(this.isDarkMode);
      }
    }
  }
</script>
