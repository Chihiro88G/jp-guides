import React from 'react';

import SectionWrapper from '../SectionWrapper';
import { Box } from '@mui/material';
import Selection from './Selection';
import PageTitle from '../PageTitle';

export default function ToursTop() {
  return (
    <SectionWrapper height='30vh' bgColor='white'>
      <PageTitle>FIND TOURS</PageTitle>
      <Box sx={{ padding: '0 20px' }}>
        <Selection label='Destination' items={['Tokyo', 'Kyoto', 'Hokkaido']} />
        <Selection label='Duration' items={['1 day', '2-3 days', '3-5 days']} />
        <Selection label='Activity level' items={['Moderate', 'High', 'Very High']} />
      </Box>
    </SectionWrapper>
  )
}