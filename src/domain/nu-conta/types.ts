export type CalculateNuContaReturnsArgs = {
  'initial-amount': number
  'interest': number
  'period': number
}

export type Violation = 'invalid-initial-amount' | 'invalid-interest' | 'invalid-period'

export type CalculateNuContaReturnsResponse = {
  violations: Violation[]
  gross: number
  tax: number
}
