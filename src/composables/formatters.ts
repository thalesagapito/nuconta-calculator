import { useI18n } from 'vue-i18n'

type FormatCurrencyArgs = {
  amount: number
  useGrouping?: boolean
  useSpaceAfterSymbol?: boolean
}

export function useCurrencyFormatter() {
  const { n } = useI18n({
    numberFormats: {
      en: {
        currency: {
          style: 'currency',
          currency: 'BRL',
          part: true,
        },
        currencyWithoutGrouping: {
          style: 'currency',
          currency: 'BRL',
          useGrouping: false,
        },
      },
    },
  })

  const addSpaceAfterSymbol = (value: string) => value.replace(/^(\D+)/, '$1 ')

  const formatCurrency = (args: FormatCurrencyArgs) => {
    const { amount, useGrouping = false, useSpaceAfterSymbol = true } = args
    const format = useGrouping ? 'currency' : 'currencyWithoutGrouping'
    const formattedAmount = n(amount, format)

    if (useSpaceAfterSymbol) return addSpaceAfterSymbol(formattedAmount)
    return formattedAmount
  }

  return {
    formatCurrency,
  }
}
