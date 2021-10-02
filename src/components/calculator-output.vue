<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

withDefaults(
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
</script>

<template>
  <div class="output-wrapper">
    <img
      src="../assets/relaxing.png"
      class="relaxing-illustration"
      alt="Illustration of person laying back and relaxing."
    >

    <div class="after-n-months">
      {{ t('afterNMonths', { n: months }) }}
    </div>

    <div class="amount">
      {{ amount }}
    </div>

    <div class="gross-amount">
      {{ t('grossAmount', { formattedAmount: grossAmount }) }}
    </div>

    <p class="disclaimer">
      {{ t('disclaimer') }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.output-wrapper {
  @apply bg-white shadow px-8 pb-8 mt-14 flex flex-col justify-start;

  .relaxing-illustration {
    @apply w-auto mb-9 self-center;
    margin-top: -3.75rem;
    height: 7.5rem;
  }

  .after-n-months,
  .gross-amount {
    @apply text-gray-300 text-sm;
  }

  .amount {
    @apply text-5xl text-brand-purple mt-2.5 mb-4;
  }

  .disclaimer {
    @apply text-gray-300 text-sm leading-normal mt-8;
  }
}
</style>
