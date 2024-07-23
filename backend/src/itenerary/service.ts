import db from '../database';
import { IteneraryModel, IteneraryRecord } from "./type";

import * as mealsService from '../meals/service';

export async function findOneByTourId(tourId: number): Promise<IteneraryModel[] | void> {
  const query = `
    SELECT it.id, it.title, it.included_meal_id, it.content, tit.tour_id
    FROM itenerary as it
    LEFT JOIN tours_itenerary as tit
    ON it.id = tit.itenerary_id
    WHERE tour_id = ?
    ;  
  `;

  const retult = (await db.query(query, tourId))[0];

  const iteneraryList = await Promise.all(retult.map(async (item: IteneraryRecord) => {
    const meal = await mealsService.findById(item.included_meal_id);
    return toModel(item, meal);
  }));

  return iteneraryList;
}

async function toModel(
  itenerary: IteneraryRecord,
  meals: string,
): Promise<IteneraryModel> {
  return {
    title: itenerary.title,
    includedMeals: meals,
    content: itenerary.content,
  }
}