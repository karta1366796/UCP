<template>
  <div class="layout-menu-container">
    <router-link class="layout-topbar-logo" to="/">
      <p>UCP3.0</p>
    </router-link>

    <br />
    <div class="flex align-items-center justify-content-between border-round surface-400 px-1 py-1">
      <Button class="p-button-sm w-9rem" label="前台" />
      <Button class="p-button-text p-button-sm w-9rem" label="後台" />
    </div>
    <br />

    <AppSubmenu
      :items="model"
      :root="true"
      class="layout-menu"
      @keydown="onKeyDown"
      @menuitem-click="onMenuItemClick"
    />
  </div>
</template>

<script lang="ts">
import AppSubmenu from '@/AppSubmenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  // computed: {
  //   darkTheme() {
  //     return this.$appState.darkTheme;
  //   }
  // },
  components: {
    AppSubmenu: AppSubmenu
  },
  props: {
    model: Array
  },
  emits: ['menuitem-click'],
  methods: {
    onMenuItemClick(event: Event) {
      this.$emit('menuitem-click', event);
    },
    onKeyDown(event: any) {
      const nodeElement = event.target;
      if (event.code === 'Enter' || event.code === 'Space') {
        nodeElement.click();
        event.preventDefault();
      }
    }
  }
});
</script>
