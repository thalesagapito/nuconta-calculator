<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCurrencyFormatter } from '../composables/formatters'

const props = withDefaults(
  defineProps<{
    grossAmount: number
    amount: number
    months: number
  }>(),
  {
    grossAmount: 0,
    amount: 0,
    months: 1,
  },
)

const { t } = useI18n()
const { formatCurrency } = useCurrencyFormatter()
const formattedAmount = computed(() => formatCurrency({ amount: props.amount }))
const formattedGrossAmount = computed(() => formatCurrency({
  amount: props.grossAmount,
  useGrouping: false,
}))
</script>

<template>
  <div class="calculator-output-wrapper">
    <img
      src="../assets/relaxing.png"
      class="relaxing-illustration"
      alt="Illustration of person laying back and relaxing."
    >

    <div class="after-n-months">
      {{ t('afterNMonths', { n: months }) }}
    </div>

    <div class="amount">
      {{ formattedAmount }}
    </div>

    <div class="gross-amount">
      {{ t('grossAmount', { amount: formattedGrossAmount }) }}
    </div>

    <p class="disclaimer">
      {{ t('disclaimer') }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.calculator-output-wrapper {
  @apply bg-white shadow pl-8 pr-4 pb-8 mt-14 flex flex-col justify-start;

  .relaxing-illustration {
    @apply w-auto mb-9 self-center;
    margin-top: -3.75rem;
    height: 7.5rem;
  }

  .after-n-months,
  .gross-amount {
    @apply text-gray-300 text-sm break-all;
  }

  .amount {
    @apply text-5xl text-brand-purple break-all mt-2.5 mb-4;
  }

  .disclaimer {
    @apply text-gray-300 text-sm leading-normal my-8 pr-4;
  }
}
</style>
