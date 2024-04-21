import * as React from 'react';

import { Box, Typography } from '@mui/material';
import Title from '../Title';
import TourCard from '../TourCard';
import SectionWrapper from '../SectionWrapper';

export default function PopularTours() {
  return (
    <SectionWrapper bgColor='beige' >
      <Title>Popular Tours</Title>
      <Box 
        sx={{ 
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '10px',
          flexWrap: 'wrap',
        }}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
      </Box>
      {/* <Typography>Browse all tours...</Typography> */}
    </SectionWrapper>
  )
}