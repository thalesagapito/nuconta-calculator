import { render } from '@testing-library/vue'
import { i18n } from '../modules/i18n'
import Component from './calculator-output.vue'

describe('calculator-output', () => {
  const getOptionsWithProps = (props: Record<string, any> = {}) => ({
    global: { plugins: [i18n] },
    props: {
      grossAmount: 1000,
      amount: 1000,
      months: 12,
      ...props,
    },
  })

  it('should generate different html for different grossAmount values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ grossAmount: 1000 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ grossAmount: 1200 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })

  it('should generate different html for different amount values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ amount: 1000 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ amount: 1200 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })

  it('should generate different html for different months values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ months: 10 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ months: 12 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })
})
