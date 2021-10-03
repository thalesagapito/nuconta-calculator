import { computed, ref } from 'vue'
import { BigJs, DECIMAL_PLACES_FOR_RESULT } from '../domain/nu-conta/constants'
import { calculateNuContaReturns } from '../domain/nu-conta/calculate-nu-conta-returns'

export function useNuContaReturnsCalculator() {
  const firstDepositAmount = ref(100)
  const months = ref(1)
  const interest = 0.5

  const nuContaReturns = computed(() => calculateNuContaReturns({
    'initial-amount': firstDepositAmount.value,
    'period': months.value,
    interest,
  }))

  const grossAmount = computed(() => nuContaReturns.value.gross)
  const amount = computed(() => BigJs(nuContaReturns.value.gross)
    .sub(nuContaReturns.value.tax)
    .round(DECIMAL_PLACES_FOR_RESULT)
    .toNumber(),
  )

  return {
    firstDepositAmount,
    grossAmount,
    amount,
    months,
  }
}
