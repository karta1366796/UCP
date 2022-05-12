<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {
  //   const themeChangeListener = ref<(event) => void>();
  //
  //   return { themeChangeListener };
  // },
  mounted() {
    // this.themeChangeListener = (event) => {
    //   const elementId = 'theme-link';
    //   const linkElement = document.getElementById(elementId);
    //   const cloneLinkElement = linkElement.cloneNode(true);
    //   const newThemeUrl = linkElement.getAttribute('href').replace(this.$appState.theme, event.theme);
    //
    //   cloneLinkElement.setAttribute('id', elementId + '-clone');
    //   cloneLinkElement.setAttribute('href', newThemeUrl);
    //   cloneLinkElement.addEventListener('load', () => {
    //     linkElement.remove();
    //     cloneLinkElement.setAttribute('id', elementId);
    //   });
    //   linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
    // };
    // EventBus.on('theme-change', this.themeChangeListener);
  },
  beforeUnmount() {
    // EventBus.off('theme-change', this.themeChangeListener);
  }
});
</script>
