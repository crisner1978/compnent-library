export function formatMoney(value: number | string | null, curr?: boolean) {
  const input = Number(value)
  const digits = new Intl.NumberFormat().format(input)
  const usDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(input)
  return curr ? usDollar : digits
}