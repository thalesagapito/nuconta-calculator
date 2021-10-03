import { render, fireEvent } from '@testing-library/vue'
import { i18n } from '../modules/i18n'
import Component from './calculator-input-month-slider.vue'

describe('calculator-input-month-slider', () => {
  const getOptionsWithProps = (props: Record<string, any> = {}) => ({
    global: { plugins: [i18n] },
    props: { months: 1, ...props },
  })

  it('should emit update:months when moving slider', async() => {
    const { getByTestId, emitted } = render(Component, getOptionsWithProps())

    const slider = getByTestId('slider')

    const newMonths = 10
    await fireEvent.update(slider, newMonths.toString())

    const updateEvent = emitted()['update:months'][0] as number[]
    expect(updateEvent).not.toBeUndefined()

    const updateEventValue = updateEvent[0]
    expect(updateEventValue).toEqual(newMonths)
  })

  it('should generate different html for different months values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ months: 1 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ months: 12 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })
})
