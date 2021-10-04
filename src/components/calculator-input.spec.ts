import { render } from '@testing-library/vue'
import { i18n } from '../modules/i18n'
import Component from './calculator-input.vue'

describe('calculator-input', () => {
  const months = 1
  const firstDepositAmount = 1000
  const getOptionsWithProps = (props: Record<string, any> = {}) => ({
    global: { plugins: [i18n] },
    props: { months, firstDepositAmount, ...props },
  })

  it('should generate different html for different firstDepositAmount values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ firstDepositAmount: 1000 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ firstDepositAmount: 1200 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })

  it('should generate different html for different months values', async() => {
    const { html: firstHtml } = render(Component, getOptionsWithProps({ months: 1 }))
    const { html: secondHtml } = render(Component, getOptionsWithProps({ months: 12 }))

    expect(firstHtml).not.toEqual(secondHtml)
  })
})
