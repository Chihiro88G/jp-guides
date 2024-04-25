import React from 'react';

import SectionWrapper from '../SectionWrapper';
import { Box, Typography } from '@mui/material';
import Selection from './Selection';

export default function ToursTop() {
  return (
    <SectionWrapper height='30vh' bgColor='white'>
      <Typography
        variant="h2"
        color='black'
        sx={{ width: '100%', padding: '20px', fontFamily: 'system-ui', }}
      >
        FIND TOURS
      </Typography>
      <Box sx={{ padding: '0 20px' }}>
        <Selection label='Destination' items={['Tokyo', 'Kyoto', 'Hokkaido']} />
        <Selection label='Duration' items={['1 day', '2-3 days', '3-5 days']} />
        <Selection label='Activity level' items={['Moderate', 'High', 'Very High']} />
      </Box>
    </SectionWrapper>
  )
}