export function formatAmountInCents(amountInCents: number) {
  const floatAmount = Math.floor(amountInCents / 100)
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatter.format(floatAmount)
}
