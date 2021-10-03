import { CalculateNuContaReturnsArgs, Violation } from './types'

type ValidateInputResponse = {
  hasViolations: boolean
  violations: Violation[]
}

export function validateNuContaReturnsCalculatorInput(args: CalculateNuContaReturnsArgs): ValidateInputResponse {
  const violations: Violation[] = []
  const { period, interest, 'initial-amount': initialAmount } = args

  if (initialAmount <= 0) violations.push('invalid-initial-amount')
  if (interest <= 0) violations.push('invalid-interest')
  if (period <= 0) violations.push('invalid-period')

  const hasViolations = violations.length > 0

  return { hasViolations, violations }
}
