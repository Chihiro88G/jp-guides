import db from '../database';
import { IteneraryModel, IteneraryRecord } from "./type";

import * as mealsService from '../meals/service';

export async function findOneByTourId(tourId: number): Promise<IteneraryModel | void> {
  const query = `
    SELECT it.id, it.title, it.included_meal_id, it.content, tit.tour_id
    FROM itenerary as it
    LEFT JOIN tours_itenerary as tit
    ON it.id = tit.itenerary_id
    WHERE tour_id = ?
    ;  
  `;

  const itenerary = (await db.query(query, tourId))[0];
  console.log(itenerary);
  // const meals = await mealsService.findById(itenerary.id);

  // return toModel(itenerary, meals);
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