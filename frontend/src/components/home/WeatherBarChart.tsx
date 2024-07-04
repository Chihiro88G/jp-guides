import { BarChart } from '@mui/x-charts/BarChart';

export default function WeatherBarChart() {

  return (
    <BarChart
      xAxis={[
        { 
          scaleType: 'band',
          dataKey: 'month',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        }
      ]}
      yAxis={[
        { id: 'linearAxis', scaleType: 'linear'},
        { id: 'logAxis', scaleType: 'linear' }
      ]}
      series={[
        { yAxisKey: 'linearAxis', data: [9, 19, 29, 9, 19, 29, 9, 19, 29, 9, 19, 29], label: 'tempreture' },
        { yAxisKey: 'logAxis', data: [70, 17, 27, 70, 17, 27, 7, 17, 27, 7, 17, 27], label: 'rain' },
      ]}
      leftAxis="linearAxis"
      rightAxis="logAxis"
      height={300}
    />
  )
}