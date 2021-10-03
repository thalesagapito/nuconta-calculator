import { calculateTaxAmount } from './calculate-tax-amount'
import { getTaxPercentage } from './get-tax-percentage'

describe('calculate-tax-amount', () => {
  const exampleInputs = [
    { initialAmount: 1000, gross: 1348.85, period: 60, expectedResult: 52.33 },
    { initialAmount: 1000, gross: 1061.68, period: 12, expectedResult: 12.34 },
  ]

  it('should increase result when gross is increased and other inputs remain the same', () => {
    const taxPercentage = 5
    const initialAmount = 1000
    const resultWithBaseGross = calculateTaxAmount({ initialAmount, taxPercentage, gross: 1000 })
    const resultWithIncreasedGross = calculateTaxAmount({ initialAmount, taxPercentage, gross: 1100 })

    expect(resultWithIncreasedGross).toBeGreaterThan(resultWithBaseGross)
  })

  it('should increase result when taxPercentage is increased and other inputs remain the same', () => {
    const gross = 1100
    const initialAmount = 1000
    const resultWithBaseTaxPercentage = calculateTaxAmount({ gross, initialAmount, taxPercentage: 5 })
    const resultWithIncreasedTaxPercentage = calculateTaxAmount({ gross, initialAmount, taxPercentage: 10 })

    expect(resultWithIncreasedTaxPercentage).toBeGreaterThan(resultWithBaseTaxPercentage)
  })

  it('should decrease result when initialAmount is increased and other inputs remain the same', () => {
    const gross = 1200
    const taxPercentage = 5
    const resultWithBaseInitialAmount = calculateTaxAmount({ gross, taxPercentage, initialAmount: 1000 })
    const resultWithIncreasedInitialAmount = calculateTaxAmount({ gross, taxPercentage, initialAmount: 1100 })

    expect(resultWithBaseInitialAmount).toBeGreaterThan(resultWithIncreasedInitialAmount)
  })

  test.each(exampleInputs)('should calculate correctly, compared to examples', ({ expectedResult, initialAmount, gross, period }) => {
    const taxPercentage = getTaxPercentage({ period })
    const actualResult = calculateTaxAmount({ gross, initialAmount, taxPercentage })

    expect(actualResult).toEqual(expectedResult)
  })
})
