<script setup lang="ts">
import Button from './components/AriButton.vue'
</script>

<template>
  <div class="h-full w-full bg-main-text-secondary">
      <Button outlined label="Button"/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  @apply overflow-hidden h-screen
}
</style>
