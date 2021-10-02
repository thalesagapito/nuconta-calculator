<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCurrencyFormatter } from '../composables/formatters'

const INCREMENT_OR_DECREMENT_VALUE = 100

const props = withDefaults(
  defineProps<{
    firstDepositAmount: number
  }>(),
  {
    firstDepositAmount: 0,
  },
)

const emit = defineEmits<{
  (e: 'update:firstDepositAmount', value: number): void
}>()

const { t } = useI18n()
const { formatCurrency } = useCurrencyFormatter()

const formattedFirstDepositAmount = computed(() => formatCurrency({ amount: props.firstDepositAmount }))

function incrementFirstDepositAmount() {
  emit('update:firstDepositAmount', props.firstDepositAmount + INCREMENT_OR_DECREMENT_VALUE)
}

function decrementFirstDepositAmount() {
  emit('update:firstDepositAmount', props.firstDepositAmount - INCREMENT_OR_DECREMENT_VALUE)
}
</script>

<template>
  <div class="first-deposit-input-wrapper">
    <div class="first-deposit">
      {{ t('firstDeposit') }}
    </div>

    <div class="amount-wrapper">
      <div class="first-deposit-amount">
        {{ formattedFirstDepositAmount }}
      </div>

      <button class="button" :aria-label="t('decrement')" @click="decrementFirstDepositAmount">
        <span class="line" aria-hidden="true" />
      </button>

      <button class="button" :aria-label="t('increment')" @click="incrementFirstDepositAmount">
        <span class="line" aria-hidden="true" />
        <span class="line transform rotate-90" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.first-deposit-input-wrapper {
  @apply flex flex-col;

  .first-deposit {
    @apply text-lg text-gray-300;
  }

  .amount-wrapper {
    @apply flex justify-between items-center pt-2;

    .first-deposit-amount {
      @apply text-lg mr-auto;
    }

    .button {
      @apply w-14 h-14 ml-4 flex justify-center items-center relative border border-brand-purple rounded-full transition;

      .line {
        @apply w-5 h-px absolute bg-brand-purple;
      }

      &:hover, &:focus {
        @apply bg-brand-purple bg-opacity-10;
      }
      &:active {
        @apply bg-brand-purple bg-opacity-30;
      }
    }
  }
}
</style>
