import db from '../database';
import { DiscountModel, DiscountRecord } from './types';

export async function findOneById(discountId: number) {
  const query = `SELECT * FROM discounts WHERE id = ?`;
  const result: DiscountRecord = (await db.query(query, discountId))[0][0];
  return toModel(result);
}

async function toModel(discount: DiscountRecord): Promise<DiscountModel> {
  return {
    id: discount.id,
    name: discount.name,
    discountRate: discount.discount_rate,
    minParty: discount.min_party,
  }
}