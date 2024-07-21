import db from '../database';

export async function findById(includedMealsId: number): Promise<string> {
  const query = `SELECT name FROM meals WHERE id = ?`;
  const meals: string = (await db.query(query, includedMealsId))[0][0];

  return meals;
}