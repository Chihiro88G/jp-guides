import db from '../database';
import { IteneraryModel, IteneraryRecord } from "./type";

import * as mealsService from '../meals/service';

export async function findOneByTourId(tourId: number): Promise<IteneraryModel> {
  const query = `SELECT * FROM itenerary WHERE id = ?`;
  const itenerary: IteneraryRecord = (await db.query(query, tourId))[0][0];

  const meals = await mealsService.findById(itenerary.id);

  return toModel(itenerary, meals);
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