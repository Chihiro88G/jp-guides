import React from 'react';
import { useParams } from 'react-router-dom';

import SectionWrapper from '../SectionWrapper';
import PageTitle from '../PageTitle';
import { Box, Typography } from '@mui/material';
import Title from '../Title';
import TourDetailItem from './TourDetailItem';
import ReviewStars from './ReviewStars';
import LikeButton from '../LikeButton';
import AddToCartButton from '../AddToCartButton';

export default function TourDetail() {
  const { tourId } = useParams();
  if (!tourId) return;

  return (
    <SectionWrapper bgColor='beige' >
      <PageTitle>TOUR NAME {tourId}</PageTitle>
      <Box sx={{ padding: '0 25px' }}>
        <Typography sx={{ fontWeight: 'bold' }} >XX days</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TourDetailItem>
            <Typography>Group size</Typography>
            <Typography>YY - ZZ travelers</Typography>
          </TourDetailItem>
          <TourDetailItem>
            <Typography>Reviews</Typography>
            <ReviewStars />
          </TourDetailItem>
          <TourDetailItem>
            <Typography>Physical activity</Typography>
            <Typography>High</Typography>
          </TourDetailItem>
          <Box>
            <LikeButton tourId={parseInt(tourId)} isDetail />
            <AddToCartButton tourId={parseInt(tourId)} />
          </Box>
        </Box>

        <Box sx={{ height: '50vh', backgroundColor: 'snow' }}>
          IMAGES
        </Box>

        <Title>Overview</Title>
        <Box sx={{ height: '50vh', backgroundColor: 'pink' }}>
          OVERVIEW
        </Box>
      </Box>

    </SectionWrapper>
  )
}