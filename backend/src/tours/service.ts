import db from '../database';

export async function findAll() {
  const query = `SELECT * FROM tours;`
  const result: any = await db.query(query);
  return result[0];
}

export async function findOne(tourId: number) {
  const query = `SELECT * FROM tours WHERE id = ?`;
  const result: any = await db.query(query, tourId);
  return result[0][0];
}