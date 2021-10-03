
import { Violation } from './types'
import { validateNuContaReturnsCalculatorInput as validateInput } from './validate-input'

describe('validate-input', () => {
  const validInput = { 'initial-amount': 1000, 'interest': 0.5, 'period': 60 }
  const invalidInputs = [
    { ...validInput, 'initial-amount': 0 },
    { ...validInput, 'initial-amount': -1 },
    { ...validInput, interest: 0 },
    { ...validInput, interest: -1 },
    { ...validInput, period: 0 },
    { ...validInput, period: -1 },
  ]
  const allInputs = [validInput, ...invalidInputs]

  it('should return an empty violations array and false hasViolations flag when all the inputs are valid', () => {
    const { hasViolations, violations } = validateInput(validInput)

    expect(hasViolations).toBeFalsy()
    expect(violations.length).toBe(0)
  })

  test.each(invalidInputs)('should return a non empty violations array when any of the inputs is invalid', (input) => {
    const { violations } = validateInput(input)

    expect(violations.length).toBeGreaterThan(0)
  })

  test.each(allInputs)('should return a hasViolations flag that reflects the violations array state', (input) => {
    const { hasViolations, violations } = validateInput(input)

    expect(hasViolations).toBe(violations.length > 0)
  })

  test.each(invalidInputs)('should populate violations array with correct violation types', (input) => {
    const { hasViolations, violations } = validateInput(input)
    const expectedViolationType = ((): Violation => {
      if (input.interest <= 0) return 'invalid-interest'
      if (input.period <= 0) return 'invalid-period'
      return 'invalid-initial-amount'
    })()

    expect(hasViolations).toBeTruthy()
    expect(violations[0]).toBe(expectedViolationType)
  })
})
