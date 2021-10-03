import { calculateCompoundInterest, CalculateCompoundInterestArgs } from './calculate-compound-interest'

type Input = CalculateCompoundInterestArgs
type InputWithExpectedResult = Input & { expectedResult: number }

describe('calculate-compound-interest', () => {
  const validInput: Input = { 'initial-amount': 1000, 'interest': 0.5, 'period': 60 }
  const invalidInputs: Input[] = [
    { ...validInput, 'initial-amount': 0 },
    { ...validInput, 'initial-amount': -1 },
    { ...validInput, interest: 0 },
    { ...validInput, interest: -1 },
    { ...validInput, period: 0 },
    { ...validInput, period: -1 },
  ]
  const exampleInputs: InputWithExpectedResult[] = [
    { 'initial-amount': 1000, 'interest': 0.5, 'period': 60, 'expectedResult': 1348.85 },
    { 'initial-amount': 1000, 'interest': 0.5, 'period': 12, 'expectedResult': 1061.68 },
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

  test.each(exampleInputs)('should calculate correctly, compared to examples', ({ expectedResult, ...input }) => {
    const actualResult = calculateCompoundInterest(input)
    expect(actualResult).toEqual(expectedResult)
  })
})
