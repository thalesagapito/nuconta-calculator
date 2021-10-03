import { getTaxPercentage } from './get-tax-percentage'
import { calculateTaxAmount } from './calculate-tax-amount'
import { validateNuContaReturnsCalculatorInput } from './validate-input'
import { calculateCompoundInterest } from './calculate-compound-interest'
import { CalculateNuContaReturnsArgs, CalculateNuContaReturnsResponse } from './types'

export function calculateNuContaReturns(args: CalculateNuContaReturnsArgs): CalculateNuContaReturnsResponse {
  const { hasViolations, violations } = validateNuContaReturnsCalculatorInput(args)
  if (hasViolations) return { gross: 0, tax: 0, violations }

  const { period, 'initial-amount': initialAmount } = args
  const gross = calculateCompoundInterest(args)
  const taxPercentage = getTaxPercentage({ period })
  const tax = calculateTaxAmount({ gross, initialAmount, taxPercentage })

  return { violations, gross, tax }
}
