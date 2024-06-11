export type TourRecord = {
  id: number,
  tour_name: string,
  total_days: number,
  group_size_min: number,
  group_size_max: number,
  net_price_cad: number,
  discount_id: number,
  activity_level_id: number,
  overview_title: string,
  overview_content: string,
}

export type TourModel = {
  id: number,
  name: string,
  totalDays: number,
  groupSizeMin: number,
  groupSizeMax: number,
  priceCad: number,
  discountRate: number | null,
  activityLevel: string,
  overviewTitle: string,
  overviewContent: string,
  destinations: string[],
}