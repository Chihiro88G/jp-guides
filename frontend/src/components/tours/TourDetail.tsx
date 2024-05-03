import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import SectionWrapper from '../SectionWrapper';
import PageTitle from '../PageTitle';
import Title from '../Title';
import TourDetailItem from './TourDetailItem';
import ReviewStars from './ReviewStars';
import LikeButton from '../LikeButton';
import AddToCartButton from '../AddToCartButton';
import StyledText from '../StyledText';

export default function TourDetail() {
  const { tourId } = useParams();
  if (!tourId) return;

  return (
    <SectionWrapper bgColor='beige' >
      <PageTitle>TOUR NAME {tourId}</PageTitle>
      <Box sx={{ padding: '0 25px' }}>
        <StyledText bold>XX days</StyledText>
        <Box sx={{
          display: { xs: 'block', md: 'flex' },
          flexDirection: 'row'
        }}>
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

        <Box sx={{ padding: '25px' }}>
          <Title>Overview</Title>
          <StyledText bold>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, esse.</StyledText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ea incidunt repellendus laboriosam, possimus odio veniam. Cupiditate ipsa magni doloremque sequi officia distinctio tempore suscipit repellendus architecto est accusamus, maxime quo odio aliquid quam, culpa sunt tenetur itaque deleniti et odit eius alias quaerat expedita? Cumque dolores corrupti excepturi quis!
        </Box>
        <Box sx={{ padding: '25px' }}>
          <Title>Itenerary</Title>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ea incidunt repellendus laboriosam, possimus odio veniam. Cupiditate ipsa magni doloremque sequi officia distinctio tempore suscipit repellendus architecto est accusamus, maxime quo odio aliquid quam, culpa sunt tenetur itaque deleniti et odit eius alias quaerat expedita? Cumque dolores corrupti excepturi quis!
        </Box>
      </Box>

    </SectionWrapper>
  )
}