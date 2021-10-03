import { render, fireEvent } from '@testing-library/vue'
import { i18n } from '../modules/i18n'
import Component from './calculator-input-month-slider.vue'

describe('calculator-input-month-slider', () => {
  const months = 1
  const mountingOptions = {
    global: { plugins: [i18n] },
    props: { months },
  }

  it('should emit update:months when moving slider', async() => {
    const { getByTestId, emitted } = render(Component, mountingOptions)

    const slider = getByTestId('slider')

    const newMonths = 10
    await fireEvent.update(slider, newMonths.toString())

    const updateEvent = emitted()['update:months'][0] as number[]
    expect(updateEvent).not.toBeUndefined()

    const updateEventValue = updateEvent[0]
    expect(updateEventValue).toEqual(newMonths)
  })

  it('should update markup when months props changes', async() => {
    const { html: htmlWith1Month } = render(Component, { ...mountingOptions, props: { months: 1 } })
    const { html: htmlWith12Months } = render(Component, { ...mountingOptions, props: { months: 12 } })

    expect(htmlWith1Month).not.toEqual(htmlWith12Months)
  })
})
