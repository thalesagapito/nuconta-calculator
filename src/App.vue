<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="outer">
    <div class="inner">
      help
    </div>
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
.outer .inner {
  @apply bg-brand-purple;
}
</style>
