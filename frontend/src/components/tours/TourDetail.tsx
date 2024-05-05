import { useEffect, useState } from 'react';
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
  const [tour, setTour] = useState<any>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours/${tourId}`)
    .then(res => res.json())
    .then(data => setTour(data));
  }, [tourId]);

  if (!tour) return <Box>No Tour Found</Box>

  // TODO: review, activity level

  return (
    <SectionWrapper bgColor='beige' >
      <PageTitle full>{tour.tour_name}</PageTitle>
      <Box sx={{ padding: '0 25px' }}>
        <StyledText bold>{tour.total_days} days</StyledText>
        <Box sx={{
          display: { xs: 'block', md: 'flex' },
          flexDirection: 'row'
        }}>
          <TourDetailItem>
            <Typography>Group size</Typography>
            <Typography>{tour.group_size_min} - {tour.group_size_max} travelers</Typography>
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
            <LikeButton tourId={parseInt(tour.id)} isDetail />
            <AddToCartButton tourId={parseInt(tour.id)} />
          </Box>
        </Box>

        <Box sx={{ height: '50vh', backgroundColor: 'snow' }}>
          IMAGES
        </Box>

        <Box sx={{ padding: '25px' }}>
          <Title>Overview</Title>
          <StyledText bold>{tour.overview_title}</StyledText>
          {tour.overview_content}
        </Box>
        <Box sx={{ padding: '25px' }}>
          <Title>Itenerary</Title>
          COMING SOON...!
        </Box>
      </Box>

    </SectionWrapper>
  )
}