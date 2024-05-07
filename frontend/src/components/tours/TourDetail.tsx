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
  const [tour, setTour] = useState<any>(null);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours/${tourId}`)
    .then(res => res.json())
    .then(data => setTour(data));
  }, [tourId]);

  if (!tour) return <Box>Loading...</Box>

  return <RenderTourDetail tour={tour} />
}

function RenderTourDetail({ tour }: { tour: any }) {
  const [priceCad, setPriceCad] = useState<number>(0);

  useEffect(() => {
    tour.discountRage !== 0 ? setPriceCad(tour.priceCad - (tour.priceCad * tour.discountRate)) : setPriceCad(tour.priceCad);
  }, [tour]);

  return (
    <SectionWrapper bgColor='beige' >
      <PageTitle full>{tour.name}</PageTitle>
      <Box sx={{ padding: '0 25px' }}>
        <StyledText bold>{tour.totalDays} days</StyledText>
        <Box sx={{
          display: { xs: 'block', md: 'flex' },
          flexDirection: 'row'
        }}>
          <TourDetailItem>
            <Typography>Group size</Typography>
            <Typography>{tour.groupSizeMin} - {tour.groupSizeMax} travelers</Typography>
          </TourDetailItem>
          <TourDetailItem>
            <Typography>Reviews</Typography>
            <ReviewStars />
          </TourDetailItem>
          <TourDetailItem>
            <Typography>Physical activity</Typography>
            <Typography>{tour.activityLevel}</Typography>
          </TourDetailItem>
          <TourDetailItem>
            <Typography>Price (CAD)</Typography>
            <Typography>{priceCad}</Typography>
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
          <StyledText bold>{tour.overviewTitle}</StyledText>
          {tour.overviewContent}
        </Box>
        <Box sx={{ padding: '25px' }}>
          <Title>Itenerary</Title>
          COMING SOON...!
        </Box>
      </Box>
    </SectionWrapper>
  )
}