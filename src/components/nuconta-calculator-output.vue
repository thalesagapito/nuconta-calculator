<script setup lang="ts">
import { computed } from 'vue'
import { formatAmountInCents } from '../composables/formatters'

const props = withDefaults(defineProps<{
  grossAmountInCents: number
  amountInCents: number
  months: number
}>(), {
  grossAmountInCents: 0,
  amountInCents: 0,
  months: 12,
})

const formattedGrossAmountInCents = computed(() => formatAmountInCents(props.grossAmountInCents))
const formattedAmountInCents = computed(() => formatAmountInCents(props.amountInCents))
</script>

<template>
  <div class="output-wrapper">
    <img
      src="../assets/relaxing.png"
      class="relaxing-illustration"
      alt="Illustration of person laying back and relaxing."
    >

    <div class="after-n-months">
      after 12 months you would have
    </div>
    <div class="amount">
      {{ formattedAmountInCents }}
    </div>
    <div class="gross-amount">
      (gross amount {{ formattedGrossAmountInCents }})
    </div>

    <p class="disclaimer">
      This estimate does not constitute a guarantee of future earnings. It is only an estimate based on today's Interbank Deposite rate for the entire period that your deposit would remain in your Nuconta account, and considering no withdrawals.
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.output-wrapper {
  @apply bg-white shadow px-9 pb-8 mt-16 flex flex-col justify-start;

  .relaxing-illustration {
    @apply w-auto h-32 -mt-16 mb-8 self-center;
  }

  .after-n-months,
  .gross-amount {
    @apply text-gray-300 text-sm;
  }

  .amount {
    @apply text-5xl text-brand-purple mt-3 mb-4;
  }

  .disclaimer {
    @apply text-gray-300 text-sm mt-8;
  }
}
</style>
