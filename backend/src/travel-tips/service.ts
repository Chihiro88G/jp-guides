import db from '../database';
import { TravelTipsModel, TravelTipsRecord } from './type';

export async function findAll() {
  const query = `SELECT * FROM travel_tips;`
  const result = await db.query(query);
  return await Promise.all(result[0].map((record: TravelTipsRecord) => toModel(record)));
}

async function toModel(travelTips: TravelTipsRecord): Promise<TravelTipsModel> {
  return {
    title: travelTips.title,
    content: travelTips.content,
  }
}