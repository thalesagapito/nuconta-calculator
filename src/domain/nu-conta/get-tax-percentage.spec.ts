import { getTaxPercentage } from './get-tax-percentage'

describe('get-tax-percentage', () => {
  it('should decrease tax percentage when increasing period over breakpoints', () => {
    const taxPercentageFor6Months = getTaxPercentage({ period: 6 })
    const taxPercentageFor12Months = getTaxPercentage({ period: 12 })
    const taxPercentageFor18Months = getTaxPercentage({ period: 18 })
    const taxPercentageFor24Months = getTaxPercentage({ period: 24 })

    expect(taxPercentageFor6Months).toBeGreaterThan(taxPercentageFor12Months)
    expect(taxPercentageFor12Months).toBeGreaterThan(taxPercentageFor18Months)
    expect(taxPercentageFor18Months).toBeGreaterThan(taxPercentageFor24Months)
  })
})
