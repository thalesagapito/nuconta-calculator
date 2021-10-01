<script setup lang="ts">
import CalculatorInput from './components/calculator-input.vue'
import CalculatorOutput from './components/calculator-output.vue'
</script>

<template>
  <div class="calculator-wrapper">
    <calculator-input />
    <calculator-output />
  </div>
</template>

<style lang="postcss" scoped>
.calculator-wrapper {
  @apply flex flex-col sm:flex-row p-8;
}
</style>
