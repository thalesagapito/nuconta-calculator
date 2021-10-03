import { CalculateNuContaReturnsArgs } from './types'

type GetTaxPercentageArgs = Pick<CalculateNuContaReturnsArgs, 'period'>

export function getTaxPercentage({ period }: GetTaxPercentageArgs): number {
  if (period <= 6) return 22.5
  if (period <= 12) return 20
  if (period <= 18) return 17.5
  return 15
}
