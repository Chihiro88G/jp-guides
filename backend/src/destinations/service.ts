import db from '../database';

export async function findAll() {
  const query = `SELECT city_name FROM destinations;`
  const result = (await db.query(query))[0];
  
  return result;
}