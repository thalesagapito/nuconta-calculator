import { BigJs, DECIMAL_PLACES_FOR_RESULT } from './constants'

type CalculateTaxAmountArgs = {
  taxPercentage: number
  initialAmount: number
  gross: number
}

export function calculateTaxAmount({ gross, initialAmount, taxPercentage }: CalculateTaxAmountArgs): number {
  const taxOnInitialAmount = BigJs(initialAmount).times(taxPercentage).div(100)
  const taxOnGross = BigJs(gross).times(taxPercentage).div(100)

  return taxOnGross
    .sub(taxOnInitialAmount.toNumber())
    .round(DECIMAL_PLACES_FOR_RESULT)
    .toNumber()
}
