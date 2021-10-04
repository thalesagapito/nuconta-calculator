<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { useCurrencyFormatter } from '../composables/formatters'
import { BigJs, DECIMAL_PLACES_FOR_RESULT } from '../domain/nu-conta/constants'

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

const firstDepositAmountInput = ref<HTMLInputElement>()
const isDecrementDisabled = computed(() => props.firstDepositAmount === 0)
const formattedFirstDepositAmount = computed(() => formatCurrency({ amount: props.firstDepositAmount }))

function decrementFirstDepositAmount() {
  const newAmount = Math.max(0, props.firstDepositAmount - INCREMENT_OR_DECREMENT_VALUE)
  emit('update:firstDepositAmount', newAmount)
}

function incrementFirstDepositAmount() {
  const newAmount = props.firstDepositAmount + INCREMENT_OR_DECREMENT_VALUE
  emit('update:firstDepositAmount', newAmount)
}

function getAmountFromCurrencyString(currencyString: string) {
  const stringAmountWithDigitsOnly = currencyString.replace(/\D/g, '')
  const amount = Number.parseInt(stringAmountWithDigitsOnly || '0')
  return BigJs(amount).div(100).round(DECIMAL_PLACES_FOR_RESULT).toNumber()
}

function updateInputWithFormattedValue() {
  if (firstDepositAmountInput.value)
    firstDepositAmountInput.value.value = formattedFirstDepositAmount.value
}

const writableFirstDepositAmount = computed({
  get: () => formattedFirstDepositAmount.value,
  set: (value) => {
    const amount = getAmountFromCurrencyString(value)
    emit('update:firstDepositAmount', amount)
    updateInputWithFormattedValue()
  },
})
</script>

<template>
  <div class="first-deposit-input-wrapper">
    <div class="first-deposit">
      {{ t('firstDeposit') }}
    </div>

    <div class="amount-wrapper">
      <input
        ref="firstDepositAmountInput"
        v-model="writableFirstDepositAmount"
        class="first-deposit-amount"
        data-testid="input"
        inputmode="numeric"
        type="text"
      />

      <button
        class="button"
        data-testid="decrement"
        :aria-label="t('decrement')"
        :disabled="isDecrementDisabled"
        @click="decrementFirstDepositAmount"
      >
        <span class="line" aria-hidden="true" />
      </button>

      <button
        class="button"
        data-testid="increment"
        :aria-label="t('increment')"
        @click="incrementFirstDepositAmount"
      >
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
      @apply text-lg mr-auto bg-gray-100 py-2 rounded w-full min-w-0 text-black;
    }

    .button {
      @apply w-14 h-14 ml-4 flex justify-center items-center relative
      flex-shrink-0 border border-brand-purple rounded-full transition;
      touch-action: manipulation;

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
