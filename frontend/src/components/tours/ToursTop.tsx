import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import Selection from './Selection';
import PageTitle from '../PageTitle';

export default function ToursTop() {
  
  return (
    <SectionWrapper height='inherit' bgColor='white'>
      <PageTitle>FIND TOURS</PageTitle>
      <Box sx={{ 
        padding: '0 20px',
        display: { xs: 'flex', md: 'block' },
        flexDirection: 'column'
      }}>
        <Selection label='Destination' items={['Tokyo', 'Kyoto', 'Hokkaido']} />
        <Selection label='Duration' items={['1 day', '2-3 days', '3-5 days']} />
        <Selection label='Activity level' items={['Moderate', 'High', 'Very High']} />
      </Box>
    </SectionWrapper>
  )
}