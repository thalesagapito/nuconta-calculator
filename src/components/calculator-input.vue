<script lang="ts" setup>
import { ref } from 'vue'
import MonthSlider from './calculator-input-month-slider.vue'
import FirstDepositInput from './calculator-input-first-deposit-input.vue'

const props = withDefaults(
  defineProps<{
    firstDepositAmount: number
    months: number
  }>(),
  {
    firstDepositAmount: 100000,
    months: 1,
  },
)

const emit = defineEmits<{
  (e: 'update:firstDepositAmount', value: number): void
  (e: 'update:months', value: number): void
}>()

</script>

<template>
  <first-deposit-input />
  <month-slider />
</template>

<style lang="postcss" scoped>
</style>
