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
  @apply p-6 grid grid-cols-1 gap-x-12 gap-y-16
  mx-auto min-h-screen items-center;
}

@screen sm {
  .calculator-wrapper {
    @apply p-8;
    max-width: 82rem;
  }
}

@screen md {
  .calculator-wrapper {
    @apply grid-cols-2 py-3.5;
    max-width: 82rem;

    .input {
      @apply pl-12 pr-4 pt-28;
    }
  }
}
</style>
