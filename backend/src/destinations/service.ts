import db from '../database';

export async function findAll() {
  const query = `SELECT city_name FROM destinations;`
  const result = (await db.query(query))[0];
  return result;
}

export async function findByTourId(tourId: number): Promise<string[]> {
  const query = `
      SELECT de.city_name
      FROM tours_destinations as td
      LEFT JOIN destinations as de
      ON td.destination_id = de.id
      WHERE td.tour_id = ?
      ;`;

  const result = (await db.query(query, tourId))[0];
  const cityNames = result.map((item: any) => item.city_name)
  console.log(cityNames);
  return cityNames;
}