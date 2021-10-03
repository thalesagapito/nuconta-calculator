import { calculateCompoundInterest } from './calculate-compound-interest'

describe('calculate-compound-interest', () => {
  const validInput = { 'initial-amount': 1000, 'interest': 0.5, 'period': 60 }
  const invalidInputs = [
    { ...validInput, 'initial-amount': 0 },
    { ...validInput, 'initial-amount': -1 },
    { ...validInput, interest: 0 },
    { ...validInput, interest: -1 },
    { ...validInput, period: 0 },
    { ...validInput, period: -1 },
  ]

  it('should increase result when initial amount is increased and other inputs remain the same', () => {
    const resultWithBaseInitialAmount = calculateCompoundInterest({ ...validInput, 'initial-amount': 1000 })
    const resultWithIncreasedInitialAmount = calculateCompoundInterest({ ...validInput, 'initial-amount': 2000 })

    expect(resultWithIncreasedInitialAmount).toBeGreaterThan(resultWithBaseInitialAmount)
  })

  it('should increase result when period is increased and other inputs remain the same', () => {
    const resultWithBasePeriod = calculateCompoundInterest({ ...validInput, period: 12 })
    const resultWithIncreasedPeriod = calculateCompoundInterest({ ...validInput, period: 24 })

    expect(resultWithIncreasedPeriod).toBeGreaterThan(resultWithBasePeriod)
  })

  it('should increase result when interest is increased and other inputs remain the same', () => {
    const resultWithBaseInterest = calculateCompoundInterest({ ...validInput, interest: 0.5 })
    const resultWithIncreasedInterest = calculateCompoundInterest({ ...validInput, interest: 1 })

    expect(resultWithIncreasedInterest).toBeGreaterThan(resultWithBaseInterest)
  })

  test.each(invalidInputs)('should return 0 if any of the inputs is non positive', (input) => {
    const result = calculateCompoundInterest(input)
    expect(result).toEqual(0)
  })

  it('should calculate correctly, compared to examples', () => {
    const example1Input = { 'initial-amount': 1000, 'interest': 0.5, 'period': 60 }
    const example1ExpectedResult = 1348.85
    const example1ActualResult = calculateCompoundInterest(example1Input)
    expect(example1ActualResult).toEqual(example1ExpectedResult)

    const example2Input = { 'initial-amount': 1000, 'interest': 0.5, 'period': 12 }
    const example2ExpectedResult = 1061.68
    const example2ActualResult = calculateCompoundInterest(example2Input)
    expect(example2ActualResult).toEqual(example2ExpectedResult)
  })
})
