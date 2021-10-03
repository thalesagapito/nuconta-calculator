<script lang="ts" setup>
import CalculatorInput from './components/calculator-input.vue'
import CalculatorOutput from './components/calculator-output.vue'
import { useNuContaReturnsCalculator } from './composables/nu-conta-returns-calculator'

const { amount, firstDepositAmount, grossAmount, months } = useNuContaReturnsCalculator()
</script>

<template>
  <div class="calculator-wrapper">
    <calculator-input
      v-model:firstDepositAmount="firstDepositAmount"
      v-model:months="months"
      class="input"
    />

    <calculator-output
      :gross-amount="grossAmount"
      :months="months"
      :amount="amount"
      class="output"
    />
  </div>
</template>

<style lang="postcss" scoped>
.calculator-wrapper {
  @apply p-8 flex flex-col md:flex-row;
  .input {
    @apply mb-20;
  }
  .output {
  }
}
</style>
