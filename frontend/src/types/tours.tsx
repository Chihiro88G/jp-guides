export type TourType = {
  id: number,
  name: string,
  totalDays: number,
  groupSizeMin: number,
  groupSizeMax: number,
  priceCad: number,
  discountRate: number,
  activityLevel: string,
  overviewTitle: string,
  overviewContent: string,
  destinations: string[],
}