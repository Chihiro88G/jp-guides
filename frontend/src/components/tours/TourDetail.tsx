import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import PageTitle from '../PageTitle';
import Title from '../Title';
import TourDetailItem from './TourDetailItem';
import ReviewStars from './ReviewStars';
import LikeButton from '../LikeButton';
import AddToCartButton from '../AddToCartButton';
import StyledText from '../StyledText';
import Itenerary from './Itenerary';

export default function TourDetail() {
  const { tourId } = useParams();
  const [tour, setTour] = useState<any>(null);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours/${tourId}`)
    .then(res => res.json())
    .then(data => setTour(data));
  }, [tourId]);

  if (!tour) return <Box>Loading...</Box>

  return (
    <SectionWrapper bgColor='beige' >
      <RenderTourDetail tour={tour} />
    </SectionWrapper>
  )
}

function RenderTourDetail({ tour }: { tour: any }) {
  const [priceCad, setPriceCad] = useState<number>(0);
  const [itenerary, setItenerary] = useState<any>();

  useEffect(() => {
    tour.discountRage !== 0 ? setPriceCad(tour.priceCad - (tour.priceCad * tour.discountRate)) : setPriceCad(tour.priceCad);
  }, [tour]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/itenerary/${tour.id}`)
    .then(res => res.json())
    .then(data => setItenerary(data));
  }, [tour]);

  if (!itenerary) return <Box>Loading...</Box>

  return (
    <Fragment>
      <PageTitle full>{tour.name}</PageTitle>
      <Box sx={{ padding: '0 25px' }}>
        <StyledText bold>{tour.totalDays} days</StyledText>
        <Box sx={{
          display: { xs: 'block', md: 'flex' },
          flexDirection: 'row'
        }}>
          <TourDetailItem 
            title='Group size'
            content={`${tour.groupSizeMin} - ${tour.groupSizeMax} travelers`}
          />
          <TourDetailItem 
            title='Reviews'
            content={<ReviewStars />}
          />
          <TourDetailItem 
            title='Physical activity'
            content={tour.activityLevel}
          />
          <TourDetailItem 
            title='Price (CAD)'
            content={priceCad}
          />
          <Box sx={{ display: 'flex', justifyContent: 'end'}}>
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
          <Itenerary itenerary={itenerary} />
        </Box>
      </Box>
    </Fragment>
  )
}