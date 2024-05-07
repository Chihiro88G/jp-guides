import db from '../database';
import { TourModel, TourRecord } from './types';
import * as activityLevelsService from '../activity-levels/service';
import * as discountsService from '../discounts/service';
import { ActivityLevelsModel } from '../activity-levels/type';
import { DiscountModel } from '../discounts/types';

export async function findAll() {
  const query = `SELECT * FROM tours;`
  const result: any = await db.query(query);
  return result[0];
}

export async function findOneById(tourId: number): Promise<TourModel> {
  const query = `SELECT * FROM tours WHERE id = ?`;
  const tour: TourRecord = (await db.query(query, tourId))[0][0];

  const activityLevel = await activityLevelsService.findOneById(tour.activity_level_id);
  const discount = await discountsService.findOneById(tour.discount_id);

  return toModel(tour, activityLevel, discount);
}

async function toModel(
  tour: TourRecord,
  activityLevel: ActivityLevelsModel,
  discount: DiscountModel,
): Promise<TourModel> {
  return {
    id: tour.id,
    name: tour.tour_name,
    totalDays: tour.total_days,
    groupSizeMin: tour.group_size_min,
    groupSizeMax: tour.group_size_max,
    priceCad: tour.net_price_cad,
    discountRate: discount.discountRate,
    activityLevel: activityLevel.levelName,
    overviewTitle: tour.overview_title,
    overviewContent: tour.overview_content,
  }
}