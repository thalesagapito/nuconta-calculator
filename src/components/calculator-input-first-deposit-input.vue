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
const isDecrementDisabled = computed(() => props.firstDepositAmount === 0)

function decrementFirstDepositAmount() {
  const newAmount = Math.max(0, props.firstDepositAmount - INCREMENT_OR_DECREMENT_VALUE)
  emit('update:firstDepositAmount', newAmount)
}

function incrementFirstDepositAmount() {
  const newAmount = props.firstDepositAmount + INCREMENT_OR_DECREMENT_VALUE
  emit('update:firstDepositAmount', newAmount)
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

      <button
        class="button"
        :aria-label="t('decrement')"
        :disabled="isDecrementDisabled"
        @click="decrementFirstDepositAmount"
      >
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
  @apply flex flex-col flex-shrink-0;

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
        @apply w-5 h-px absolute bg-brand-purple transition;
      }

      &:disabled {
        @apply border-gray-200 cursor-not-allowed;
        .line {
          @apply bg-gray-200;
        }
      }

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        @apply bg-brand-purple bg-opacity-10;
      }

      &:active {
        @apply bg-brand-purple bg-opacity-30;
      }
    }
  }
}
</style>
