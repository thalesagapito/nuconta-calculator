<script lang="ts" setup>
import { useVModels } from '@vueuse/core'
import MonthSlider from './calculator-input-month-slider.vue'
import FirstDepositInput from './calculator-input-first-deposit-input.vue'

const props = withDefaults(
  defineProps<{
    firstDepositAmount: number
    months: number
  }>(),
  {
    firstDepositAmount: 1000,
    months: 1,
  },
)

const emit = defineEmits<{
  (e: 'update:firstDepositAmount', value: number): void
  (e: 'update:months', value: number): void
}>()

const {
  firstDepositAmount: writableFirstDepositAmount,
  months: writableMonths,
} = useVModels(props, emit)
</script>

<template>
  <div class="calculator-input-wrapper">
    <first-deposit-input v-model:firstDepositAmount="writableFirstDepositAmount" />
    <month-slider v-model:months="writableMonths" />
  </div>
</template>

<style lang="postcss" scoped>
.calculator-input-wrapper {
  @apply flex flex-col flex-shrink-0 space-y-8;
}
</style>
