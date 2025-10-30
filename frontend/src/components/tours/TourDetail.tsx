import { Fragment, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { TourType } from '../../types/tours';
import SectionWrapper from '../SectionWrapper';
import PageTitle from '../PageTitle';
import Title from '../Title';
import TourDetailItem from './TourDetailItem';
import ReviewStars from './ReviewStars';
import LikeButton from '../LikeButton';
import AddToCartButton from '../AddToCartButton';
import StyledText from '../StyledText';
import Itenerary from './Itenerary';
import { IteneraryType } from '../../types/itenerary';
import LoadingSpinner from '../LoadingSpinner';
import useFetch from '../../hooks/useFetch';

export default function TourDetail() {
  const { tourId } = useParams();
  const { data, loading, error } = useFetch({ pathname: `tours/${tourId}` });

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>No Tour</Box>;
  if (!data || !data.data || data.data.length === 0) return <Box>Loading...</Box>

  const tour: TourType = data.data;

  return (
    <SectionWrapper bgColor='beige' >
      <RenderTourDetail tour={tour} />
    </SectionWrapper>
  )
}

function RenderTourDetail({ tour }: { tour: TourType }) {
  const [itenerary, setItenerary] = useState<IteneraryType[]>();

  const priceCad = useMemo(() => 
    tour.discountRate !== 0
      ? tour.priceCad - (tour.priceCad * tour.discountRate)
      : tour.priceCad,
    [tour]
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/itenerary/2`)
    .then(res => res.json())
    .then((data: IteneraryType[]) => setItenerary(data))
    // .catch(error => console.log('msg: ' + error))
  }, [tour]);

  if (!itenerary) return <Box>Loading...</Box>

  return (
    <Fragment>
      <PageTitle full>{tour.name}</PageTitle>
      <Box sx={{ p: '0 25px' }}>
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
            <LikeButton tourId={tour.id} isDetail />
            <AddToCartButton tourId={tour.id} />
          </Box>
        </Box>

        <Box sx={{ height: '50vh', backgroundColor: 'snow' }}>
          IMAGES
        </Box>

        <Box sx={{ p: '25px' }}>
          <Title>Overview</Title>
          <StyledText bold>{tour.overviewTitle}</StyledText>
          {tour.overviewContent}
        </Box>
        <Box sx={{ p: '25px' }}>
          <Title>Itenerary</Title>
          <Itenerary itenerary={itenerary} />
        </Box>
      </Box>
    </Fragment>
  )
}