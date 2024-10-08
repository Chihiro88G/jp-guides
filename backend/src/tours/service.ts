import db from '../database';
import { TourModel, TourRecord } from './types';
import { ActivityLevelsModel } from '../activity-levels/type';
import { DiscountModel } from '../discounts/types';

import * as activityLevelsService from '../activity-levels/service';
import * as discountsService from '../discounts/service';
import * as destinationsService from '../destinations/service';

export async function findAll(): Promise<TourModel[]> {
  const query = `SELECT * FROM tours;`
  const result = (await db.query(query))[0];
  
  const tours = await Promise.all(result.map(async (tour: TourRecord) => {
    const activityLevel = await activityLevelsService.findOneById(tour.activity_level_id);
    const destinations = await destinationsService.findByTourId(tour.id);
    return toModel(tour, activityLevel, destinations);
  }));

  return tours;
}

export async function findOneById(tourId: number): Promise<TourModel | null> {
  const query = `SELECT * FROM tours WHERE id = ?`;
  const result: TourRecord = (await db.query(query, tourId))[0][0];

  if (!result) return null;

  const activityLevel = await activityLevelsService.findOneById(result.activity_level_id);
  const discount = await discountsService.findOneById(result.discount_id);

  return toModel(result, activityLevel, [], discount);
}

export async function findPopular(): Promise<TourModel[]> {
  const query = `SELECT * FROM tours ORDER BY review DESC LIMIT 3;`
  const result = (await db.query(query))[0];

  const tours = await Promise.all(result.map(async (tour: TourRecord) => {
    const activityLevel = await activityLevelsService.findOneById(tour.activity_level_id);
    const destinations = await destinationsService.findByTourId(tour.id);
    return toModel(tour, activityLevel, destinations);
  }));

  return tours;
}

async function toModel(
  tour: TourRecord,
  activityLevel: ActivityLevelsModel,
  destinations: string[],
  discount?: DiscountModel,
): Promise<TourModel> {
  return {
    id: tour.id,
    name: tour.tour_name,
    totalDays: tour.total_days,
    groupSizeMin: tour.group_size_min,
    groupSizeMax: tour.group_size_max,
    priceCad: tour.net_price_cad,
    discountRate: discount ? discount.discountRate : null,
    activityLevel: activityLevel.levelName,
    overviewTitle: tour.overview_title,
    overviewContent: tour.overview_content,
    destinations: destinations,
  }
}