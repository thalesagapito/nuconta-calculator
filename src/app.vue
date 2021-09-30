<script setup lang="ts">
import NucontaCalculatorInput from './components/nuconta-calculator-input.vue'
import NucontaCalculatorOutput from './components/nuconta-calculator-output.vue'
</script>

<template>
  <div class="nuconta-calculator-wrapper">
    <nuconta-calculator-input />
    <nuconta-calculator-output />
  </div>
</template>

<style>
.nuconta-calculator-wrapper {
  @apply flex flex-col sm:flex-row p-6 space-y-6;
}
</style>
