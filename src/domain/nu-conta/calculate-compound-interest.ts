import { CalculateNuContaReturnsArgs } from './types'
import { BigJs, DECIMAL_PLACES_FOR_RESULT } from './constants'

export type CalculateCompoundInterestArgs = CalculateNuContaReturnsArgs

export function calculateCompoundInterest(args: CalculateCompoundInterestArgs) {
  const { period, interest, 'initial-amount': initialAmount } = args

  const anyInputIsNonPositive = period <= 0 || interest <= 0 || initialAmount <= 0
  if (anyInputIsNonPositive) return 0

  const interestRate = BigJs(interest).div(100).plus(1)
  const finalAmount = interestRate.pow(period).times(initialAmount)
  return finalAmount.round(DECIMAL_PLACES_FOR_RESULT).toNumber()
}
