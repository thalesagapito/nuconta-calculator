<script lang="ts" setup>
import { ref } from 'vue'
import CalculatorInput from './components/calculator-input.vue'
import CalculatorOutput from './components/calculator-output.vue'

const firstDepositAmount = ref(1000)
const months = ref(1)
</script>

<template>
  <div class="calculator-wrapper">
    <calculator-input
      v-model:firstDepositAmount="firstDepositAmount"
      v-model:months="months"
      class="input"
    />

    <calculator-output
      :months="months"
      class="output"
    />
  </div>
</template>

<style lang="postcss" scoped>
.calculator-wrapper {
  @apply p-8 flex flex-col sm:flex-row;
  .input {
    @apply mb-20;
  }
  .output {
  }
}
</style>
