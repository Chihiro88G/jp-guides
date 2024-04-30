import db from '../database';

export async function findAll() {
  const query = `SELECT * FROM travel_tips;`
  const result: any = await db.query(query);
  return result[0];
}