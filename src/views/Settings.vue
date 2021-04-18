<template>
  <h1>This is an settings page</h1>
  <form>
    <div class="mb-3">
      <label for="langSelect" class="form-label">Language</label>
      <select
        class="form-select form-select-sm"
        @change="change_lang"
        id="langSelect"
      >
        <option
          v-for="(obj,key) in lang_select"
          :key="key"
          :value="key"
          :selected="isLangSelected(key)" 
          :dir="obj.dir"
        >
          {{obj.name}}
        </option>
      </select>
    </div>
    <div class="mb-3 form-check form-switch">
      <input class="form-check-input"
        type="checkbox" id="darkModeSwitch"
        :checked="isDarkMode"
        @input="setDarkMode"
      />
      <label class="form-check-label" for="darkModeSwitch">Dark Mode</label>
    </div>
  </form>  
</template>
<script>
  import { mapState } from 'vuex';
  import lang_select from '@/lang_select.json';
  import i18next from 'i18next';

  export default {
    data() {
      return {
        lang_select
      }
    },
    computed:mapState([
      't',
      'lang',
      'isDarkMode'
    ]),
    methods:{
      isLangSelected(key) {
        if (!this.lang)
          return false;
        return this.lang.includes(key);
      },
      change_lang(event) {
        // Get value of dropdown
        const lang = event.target.value;

        //Store into 
        i18next.changeLanguage(lang)
          .then(()=>this.$store.commit('update_lang'));
      },
      setDarkMode(event) {
        const val = event.target.checked;
        console.log('Switch dark mode',val);
        this.$store.commit('update',{
          isDarkMode:val
        })
      }
    }
  }
</script>
