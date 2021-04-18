<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="customNavigate(navigate)"
      :class="isActive ? activeLinkClass : inactiveLinkClass"
      data-bs-toggle="collapse"
      :data-bs-target="`#${pid}`"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'AppLink',
  props: {
    // add @ts-ignore if using TypeScript
    ...RouterLink.props,
    pid: String,
  },
  data() {
    return {
      activeLinkClass: 'active',
      inactiveLinkClass: ''
    };
  },
  methods:{
    customNavigate(cb) {
      // Ignored cancelled navigation
      cb();
    }
  },
  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}
</script>
