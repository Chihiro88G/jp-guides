import db from '../database';
import { WeatherModel, WeatherRecord } from './types';
import { getMonthString } from './utils';

export async function findAll(): Promise<WeatherModel[]> {
  const query = `SELECT * FROM weather;`
  const result = (await db.query(query))[0];
  const weatherData = await Promise.all(result.map((record: WeatherRecord) => toModel(record)));

  return weatherData;
}

async function toModel(
  weather: WeatherRecord
): Promise<WeatherModel> {
  return {
    month: getMonthString(weather.month),
    maxTemp: weather.max_temp_tokyo,
    rain: weather.rain_tokyo,
  }
}