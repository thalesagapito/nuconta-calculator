import { getTaxPercentage } from './get-tax-percentage'
import { calculateTaxAmount, CalculateTaxAmountArgs } from './calculate-tax-amount'

type Input = CalculateTaxAmountArgs
type InputWithExpectedResult = Omit<Input, 'taxPercentage'> & { expectedResult: number; period: number }

describe('calculate-tax-amount', () => {
  const validInput: Input = { gross: 1100, initialAmount: 1000, taxPercentage: 5 }
  const exampleInputs: InputWithExpectedResult[] = [
    { initialAmount: 1000, gross: 1348.85, period: 60, expectedResult: 52.33 },
    { initialAmount: 1000, gross: 1061.68, period: 12, expectedResult: 12.34 },
  ]

  it('should increase result when gross is increased and other inputs remain the same', () => {
    const resultWithBaseGross = calculateTaxAmount({ ...validInput, gross: 1000 })
    const resultWithIncreasedGross = calculateTaxAmount({ ...validInput, gross: 1100 })

    expect(resultWithIncreasedGross).toBeGreaterThan(resultWithBaseGross)
  })

  it('should increase result when taxPercentage is increased and other inputs remain the same', () => {
    const resultWithBaseTaxPercentage = calculateTaxAmount({ ...validInput, taxPercentage: 5 })
    const resultWithIncreasedTaxPercentage = calculateTaxAmount({ ...validInput, taxPercentage: 10 })

    expect(resultWithIncreasedTaxPercentage).toBeGreaterThan(resultWithBaseTaxPercentage)
  })

  it('should decrease result when initialAmount is increased and other inputs remain the same', () => {
    const resultWithBaseInitialAmount = calculateTaxAmount({ ...validInput, initialAmount: 1000 })
    const resultWithIncreasedInitialAmount = calculateTaxAmount({ ...validInput, initialAmount: 1050 })

    expect(resultWithBaseInitialAmount).toBeGreaterThan(resultWithIncreasedInitialAmount)
  })

  test.each(exampleInputs)('should calculate correctly, compared to examples', ({ expectedResult, initialAmount, gross, period }) => {
    const taxPercentage = getTaxPercentage({ period })
    const actualResult = calculateTaxAmount({ gross, initialAmount, taxPercentage })

    expect(actualResult).toEqual(expectedResult)
  })
})
