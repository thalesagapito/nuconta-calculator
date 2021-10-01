<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  firstDepositAmount: number
  months: number
}>(), {
  firstDepositAmount: 100000,
  months: 12,
})

const count = ref(0)
</script>

<template>
  <p>
    {{ firstDepositAmount }}
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
</style>
