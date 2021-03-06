import { render, fireEvent } from '@testing-library/vue'
import { i18n } from '../modules/i18n'
import Component from './calculator-input-first-deposit-input.vue'

describe('calculator-input-first-deposit-input', () => {
  const firstDepositAmount = 1000
  const getOptionsWithProps = (props: Record<string, any> = {}) => ({
    global: { plugins: [i18n] },
    props: { firstDepositAmount, ...props },
  })

  it('should emit update:firstDepositAmount on decrement button click', async() => {
    const { getByTestId, emitted } = render(Component, getOptionsWithProps())

    const decrementButton = getByTestId('decrement')

    await fireEvent.click(decrementButton)

    const decrementEvent = emitted()['update:firstDepositAmount'][0] as number[]
    expect(decrementEvent).not.toBeUndefined()

    const decrementEventValue = decrementEvent[0]
    expect(decrementEventValue).toBeLessThan(firstDepositAmount)
  })

  it('should emit update:firstDepositAmount on increment button click', async() => {
    const { getByTestId, emitted } = render(Component, getOptionsWithProps())

    const incrementButton = getByTestId('increment')

    await fireEvent.click(incrementButton)

    const incrementEvent = emitted()['update:firstDepositAmount'][0] as number[]
    expect(incrementEvent).not.toBeUndefined()

    const incrementEventValue = incrementEvent[0]
    expect(incrementEventValue).toBeGreaterThan(firstDepositAmount)
  })

  it('should emit update:firstDepositAmount when typing on input', async() => {
    const { getByTestId, emitted } = render(Component, getOptionsWithProps())

    const input = getByTestId('input')

    const newFirstDepositAmount = 10
    await fireEvent.update(input, newFirstDepositAmount.toFixed(2))

    const updateEvent = emitted()['update:firstDepositAmount'][0] as number[]
    expect(updateEvent).not.toBeUndefined()

    const updateEventValue = updateEvent[0]
    expect(updateEventValue).toEqual(newFirstDepositAmount)
  })

  it('should emit update:firstDepositAmount as 0 when clearing input', async() => {
    const { getByTestId, emitted } = render(Component, getOptionsWithProps())

    const input = getByTestId('input')

    await fireEvent.update(input, '')

    const updateEvent = emitted()['update:firstDepositAmount'][0] as number[]
    expect(updateEvent).not.toBeUndefined()

    const updateEventValue = updateEvent[0]
    expect(updateEventValue).toEqual(0)
  })

  it('should disable decrement button when firstDepositAmount is 0', async() => {
    const { getByTestId } = render(Component, getOptionsWithProps({ firstDepositAmount: 0 }))

    const decrementButton = getByTestId('decrement')

    expect(decrementButton).toBeDisabled()
    await fireEvent.click(decrementButton)
  })

  it('should generate different html for different firstDepositAmount values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ firstDepositAmount: 1000 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ firstDepositAmount: 1200 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })
})
