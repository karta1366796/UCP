<template>
  <div class="layout-footer">
    <img :src="footerImage()" alt="Logo" height="20" />
    <span class="font-medium">{{ $t('base.copyright') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
  // computed: {
  //   darkTheme() {
  //     return this.$appState.darkTheme;
  //   }
  // },
  methods: {
    footerImage() {
      return 'layout/images/logo.svg';
    }
  }
});
</script>
