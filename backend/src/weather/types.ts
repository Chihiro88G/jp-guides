export type WeatherRecord = {
  id: number,
  month: number,
  max_temp_tokyo: number,
  rain_tokyo: number,
  comments: string,
}

export type WeatherModel = {
  month: string,
  maxTemp: number,
  rain: number,
  comments: string,
}