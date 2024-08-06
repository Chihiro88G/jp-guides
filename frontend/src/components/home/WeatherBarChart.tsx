import { BarChart } from '@mui/x-charts/BarChart';
import { months } from './WhenToGo';
import { WeatherType } from '../../types/weather';

type WeatherBarChartProps = {
  weatherdata: WeatherType[];
};

export default function WeatherBarChart({ weatherdata }: WeatherBarChartProps) {
  if (!weatherdata) return <div>No months</div>;

  const maxTempList = weatherdata.map((weather: WeatherType) => weather.maxTemp);
  const rainList = weatherdata.map((weather: WeatherType) => weather.rain);

  return (
    <BarChart
      xAxis={[
        { 
          scaleType: 'band',
          dataKey: 'month',
          data: months,
        }
      ]}
      yAxis={[
        { id: 'temperatureAxis', scaleType: 'linear'},
        { id: 'rainAxis', scaleType: 'linear' }
      ]}
      series={[
        { yAxisKey: 'temperatureAxis', data: maxTempList, label: 'tempreture' },
        { yAxisKey: 'rainAxis', data: rainList, label: 'rain' },
      ]}
      leftAxis="temperatureAxis"
      rightAxis="rainAxis"
      height={300}
    />
  )
}