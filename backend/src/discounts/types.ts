export type DiscountRecord = {
  id: number,
  name: string,
  discount_rate: number,
  min_party: number | null,
  active: 0 | 1,
}

export type DiscountModel = {
  id: number,
  name: string,
  discountRate: number,
  minParty: number | null,
}