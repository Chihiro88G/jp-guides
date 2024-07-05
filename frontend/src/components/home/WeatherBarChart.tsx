import { BarChart } from '@mui/x-charts/BarChart';

export default function WeatherBarChart() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

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
        { yAxisKey: 'temperatureAxis', data: [9, 19, 29, 9, 19, 29, 9, 19, 29, 9, 19, 29], label: 'tempreture' },
        { yAxisKey: 'rainAxis', data: [70, 17, 27, 70, 17, 27, 7, 17, 27, 7, 17, 27], label: 'rain' },
      ]}
      leftAxis="temperatureAxis"
      rightAxis="rainAxis"
      height={300}
    />
  )
}