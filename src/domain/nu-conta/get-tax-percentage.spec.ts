import { getTaxPercentage } from './get-tax-percentage'

describe('get-tax-percentage', () => {
  it('should decrease tax percentage when increasing period ', () => {
    const taxPercentageFor1Month = getTaxPercentage({ period: 1 })
    const taxPercentageFor6Months = getTaxPercentage({ period: 6 })
    const taxPercentageFor12Months = getTaxPercentage({ period: 12 })
    const taxPercentageFor18Months = getTaxPercentage({ period: 18 })
    const taxPercentageFor24Months = getTaxPercentage({ period: 24 })

    expect(taxPercentageFor1Month).toBeGreaterThanOrEqual(taxPercentageFor6Months)
    expect(taxPercentageFor6Months).toBeGreaterThanOrEqual(taxPercentageFor12Months)
    expect(taxPercentageFor12Months).toBeGreaterThanOrEqual(taxPercentageFor18Months)
    expect(taxPercentageFor18Months).toBeGreaterThanOrEqual(taxPercentageFor24Months)
  })
})
