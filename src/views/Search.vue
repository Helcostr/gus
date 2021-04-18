<template>
  <div class="row">
    <h1>This is the search page</h1>
    <form v-on:submit.prevent="onSubmit" class="d-flex col-md-4">
      <input class="form-control form-control-lg me-2" type="search" v-bind:placeholder="t('search.placeholder')" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">{{t('search.button')}}</button>
    </form>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Home',
    /*components: {
      HelloWorld
    }*/
    computed: mapState(['t']),
    methods: {
      onSubmit(event) {
        console.log('Test on submit',event);
      }
    }
  }
</script>
