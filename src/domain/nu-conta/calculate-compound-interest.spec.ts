
import { calculateCompoundInterest } from './calculate-compound-interest'

describe('calculate-compound-interest', () => {
  it('should increase result when initial amount is increased and other inputs remain the same', () => {
    const commonInputs = { interest: 0.5, period: 12 }
    const resultWithBaseInitialAmount = calculateCompoundInterest({ ...commonInputs, 'initial-amount': 1000 })
    const resultWithIncreasedInitialAmount = calculateCompoundInterest({ ...commonInputs, 'initial-amount': 2000 })

    expect(resultWithIncreasedInitialAmount).toBeGreaterThan(resultWithBaseInitialAmount)
  })

  it('should increase result when period is increased and other inputs remain the same', () => {
    const commonInputs = { 'interest': 0.5, 'initial-amount': 1000 }
    const resultWithBasePeriod = calculateCompoundInterest({ ...commonInputs, period: 12 })
    const resultWithIncreasedPeriod = calculateCompoundInterest({ ...commonInputs, period: 24 })

    expect(resultWithIncreasedPeriod).toBeGreaterThan(resultWithBasePeriod)
  })

  it('should increase result when interest is increased and other inputs remain the same', () => {
    const commonInputs = { 'period': 12, 'initial-amount': 1000 }
    const resultWithBaseInterest = calculateCompoundInterest({ ...commonInputs, interest: 0.5 })
    const resultWithIncreasedInterest = calculateCompoundInterest({ ...commonInputs, interest: 1 })

    expect(resultWithIncreasedInterest).toBeGreaterThan(resultWithBaseInterest)
  })

  it('should return 0 if any of the inputs is non positive', () => {
    const validInput = { 'initial-amount': 1000.00, 'interest': 0.5, 'period': 60 }

    const resultWithZeroInitialAmount = calculateCompoundInterest({ ...validInput, 'initial-amount': 0 })
    expect(resultWithZeroInitialAmount).toEqual(0)
    const resultWithNegativeInitialAmount = calculateCompoundInterest({ ...validInput, 'initial-amount': -10 })
    expect(resultWithNegativeInitialAmount).toEqual(0)

    const resultWithZeroInterest = calculateCompoundInterest({ ...validInput, interest: 0 })
    expect(resultWithZeroInterest).toEqual(0)
    const resultWithNegativeInterest = calculateCompoundInterest({ ...validInput, interest: -1 })
    expect(resultWithNegativeInterest).toEqual(0)

    const resultWithZeroPeriod = calculateCompoundInterest({ ...validInput, period: 0 })
    expect(resultWithZeroPeriod).toEqual(0)
    const resultWithNegativePeriod = calculateCompoundInterest({ ...validInput, period: -1 })
    expect(resultWithNegativePeriod).toEqual(0)
  })

  it('should calculate correctly, compared to examples', () => {
    const example1Input = { 'initial-amount': 1000.00, 'interest': 0.5, 'period': 60 }
    const example1ExpectedResult = 1348.85
    const example1ActualResult = calculateCompoundInterest(example1Input)
    expect(example1ActualResult).toEqual(example1ExpectedResult)

    const example2Input = { 'initial-amount': 1000.00, 'interest': 0.5, 'period': 12 }
    const example2ExpectedResult = 1061.68
    const example2ActualResult = calculateCompoundInterest(example2Input)
    expect(example2ActualResult).toEqual(example2ExpectedResult)
  })
})
