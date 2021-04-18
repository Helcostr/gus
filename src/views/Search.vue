<template>
  <h1>This is the search page</h1>
  <form v-on:submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="primaryLangSelect" class="form-label">Primary Language</label>
      <select
        class="form-select form-select-lg"
        v-model="primaryLang"
        id="primaryLangSelect"
      >
        <option
          v-for="(obj,key) in lang_select"
          :key="key"
          :value="key"
        >
          {{t(`lang:${key}`)}}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="secondaryLangSelect" class="form-label">Secondary Language</label>
      <select
        class="form-select form-select-lg"
        v-model="secondaryLang"
        id="secondaryLangSelect"
      >
        <option
          v-for="(obj,key) in lang_select"
          :key="key"
          :value="key"
        >
          {{t(`lang:${key}`)}}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="textSearchSelect" class="form-label">Title Search</label>
      <input id="textSearchSelect" class="form-control form-control-lg me-2" type="search" :placeholder="t('search.placeholder')" aria-label="Search"/>
    </div>
    <div class="mb-3">
      <label for="textSearchSelect" class="form-label">Text Search</label>
      <input id="textSearchSelect" class="form-control form-control-lg me-2" type="search" :placeholder="t('search.placeholder')" aria-label="Search"/>
    </div>
    <div class="mb-3">
      <button class="btn btn-outline-success" type="submit">{{t('search.button')}}</button>
    </div>
  </form>
</template>
<script>
  import { mapState } from 'vuex';
  import lang_select from '@/lang_select.json';
  export default {
    data(){
      return {
        lang_select,
        primaryLang:null,
        secondaryLang:null
      }
    },
    name: 'Home',
    /*components: {
      HelloWorld
    }*/
    computed: mapState(['t','gus_data']),
    methods: {
      onSubmit(event) {
        console.log('Test on submit',event);
      },
    }
  }
</script>
