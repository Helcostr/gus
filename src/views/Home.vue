<template>
  <h1>{{t('about.tagline')}}</h1>
  <p>{{t('about.flavorBody')}}</p>
  <h2>{{t('about.faqTitle')}}</h2>
  <div class="accordion" id="faq_accordion">
    <bsAccordionItem
      v-for="({question,answer},index) in faq" :key="index"
      :index="index"
      parent="faq_accordion"
      :header_id="`faq_header_${index}`"
      :collapse_id="`faq_collapse_${index}`"
      :question="question"
      :answer="answer"
    />
  </div>
</template>

<style>
  #faq_accordion h2 button {
    font-weight: bold;
  }
</style>

<script>
  // @ is an alias to /src
  import { mapState } from 'vuex';
  // import HelloWorld from '@/components/HelloWorld.vue'
  import bsAccordionItem from '@/components/BS_Accordian.vue';

  export default {
    name: 'Home',
    components: {
      bsAccordionItem
    },
    computed: {
      ...mapState(['t']),
      faq() {
        return this.t('about.faq',{returnObjects: true});
      }
    },
    methods: {
    }
  }
</script>
