import { Big } from 'big.js'
import { CalculateNuContaReturnsArgs } from './types'

const DECIMAL_PLACES_FOR_RESULT = 2
const DECIMAL_PLACES_FOR_CALCULATIONS = 5

Big.DP = DECIMAL_PLACES_FOR_CALCULATIONS

type CalculateCompoundInterestArgs = CalculateNuContaReturnsArgs

export function calculateCompoundInterest(args: CalculateCompoundInterestArgs) {
  const { period, interest, 'initial-amount': initialAmount } = args

  const anyInputIsNonPositive = period <= 0 || interest <= 0 || initialAmount <= 0
  if (anyInputIsNonPositive) return 0

  const interestRate = Big(interest).div(100).plus(1)
  const finalAmount = interestRate.pow(period).times(initialAmount)
  return finalAmount.round(DECIMAL_PLACES_FOR_RESULT).toNumber()
}
