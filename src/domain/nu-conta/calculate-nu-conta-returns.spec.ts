import { CalculateNuContaReturnsArgs, CalculateNuContaReturnsResponse } from './types'
import { calculateNuContaReturns } from './calculate-nu-conta-returns'

type Input = CalculateNuContaReturnsArgs
type InputWithExpectedResult = Input & { expectedResult: CalculateNuContaReturnsResponse }

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
    {
      'period': 60,
      'interest': 0.5,
      'initial-amount': 1000,
      'expectedResult': {
        violations: [],
        gross: 1348.85,
        tax: 52.33,
      },
    },
    {
      'period': 12,
      'interest': 0.5,
      'initial-amount': 1000.00,
      'expectedResult': {
        violations: [],
        gross: 1061.68,
        tax: 12.34,
      },
    },
    {
      'period': -6,
      'interest': -1,
      'initial-amount': -50,
      'expectedResult': {
        violations: [
          'invalid-initial-amount',
          'invalid-interest',
          'invalid-period',
        ],
        gross: 0,
        tax: 0,
      },
    },
  ]

  it('should increase gross when initial amount is increased and other inputs remain the same', () => {
    const resultWithBaseInitialAmount = calculateNuContaReturns({ ...validInput, 'initial-amount': 1000 })
    const resultWithIncreasedInitialAmount = calculateNuContaReturns({ ...validInput, 'initial-amount': 2000 })

    expect(resultWithIncreasedInitialAmount.gross).toBeGreaterThan(resultWithBaseInitialAmount.gross)
  })

  it('should increase gross when period is increased and other inputs remain the same', () => {
    const resultWithBasePeriod = calculateNuContaReturns({ ...validInput, period: 12 })
    const resultWithIncreasedPeriod = calculateNuContaReturns({ ...validInput, period: 24 })

    expect(resultWithIncreasedPeriod.gross).toBeGreaterThan(resultWithBasePeriod.gross)
  })

  it('should increase gross when interest is increased and other inputs remain the same', () => {
    const resultWithBaseInterest = calculateNuContaReturns({ ...validInput, interest: 0.5 })
    const resultWithIncreasedInterest = calculateNuContaReturns({ ...validInput, interest: 1 })

    expect(resultWithIncreasedInterest.gross).toBeGreaterThan(resultWithBaseInterest.gross)
  })

  test.each(invalidInputs)('should return gross and tax as 0 and a filled violations array if any of the inputs is non positive', (input) => {
    const result = calculateNuContaReturns(input)
    expect(result.violations.length).toBeGreaterThan(0)
    expect(result.gross).toEqual(0)
    expect(result.tax).toEqual(0)
  })

  test.each(exampleInputs)('should calculate correctly, compared to examples', ({ expectedResult, ...input }) => {
    const actualResult = calculateNuContaReturns(input)
    expect(actualResult).toEqual(expectedResult)
  })
})
