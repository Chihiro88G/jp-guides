import db from '../database';
import { ActivityLevelsModel, ActivityLevelsRecord } from './type';

export async function findAll(): Promise<ActivityLevelsModel[]> {
  const query = `SELECT * FROM activity_levels;`;
  const result = (await db.query(query))[0];

  return await Promise.all(result.map((activityLevel: ActivityLevelsRecord)  => {
    return toModel(activityLevel);
  }));
}

export async function findOneById(activityLevelId: number): Promise<ActivityLevelsModel> {
  const query = `SELECT * FROM activity_levels WHERE id = ?`;
  const result: ActivityLevelsRecord = (await db.query(query, activityLevelId))[0][0];
  return toModel(result);
}

async function toModel(activityLevel: ActivityLevelsRecord): Promise<ActivityLevelsModel> {
  return {
    id: activityLevel.id,
    levelName: activityLevel.level_name,
  }
}