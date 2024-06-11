import { Fragment, useEffect, useState } from 'react';
import ToursList from '../components/tours/ToursList';
import { Box } from '@mui/material';
import PageTitle from '../components/PageTitle';
import SectionWrapper from '../components/SectionWrapper';
import Selection from '../components/tours/Selection';

const durationItems = ['1 day', '2-3 days', '3-5 days'];

export default function Tours() {
  const [query, setQuery] = useState<{
    destination: string | undefined,
    activityLevel: string | undefined,
  }>({
    destination: undefined,
    activityLevel: undefined,
  });
  const [activityLevelsItems, setActivityLevelsItems] = useState<string[]>([]);
  const [destinationItems, setDestinationItems] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/activity-levels`)
    .then(res => res.json())
    .then(data => setActivityLevelsItems(data.map((item: any) => item.levelName)));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/destinations`)
    .then(res => res.json())
    .then(data => setDestinationItems(data.map((item: any) => item.city_name)));
  }, []);

  const handleDestinationChange = (destination: string) => {
    if (query.destination !== destination) {
      setQuery({
        ...query,
        destination: destination,
      });
    }
  }

  const handleActivityLevelChange = (activityLevel: string) => {
    if (query.activityLevel !== activityLevel) {
      setQuery({
        ...query,
        activityLevel: activityLevel,
      });
    }
  }

  return (
    <Fragment>
      <SectionWrapper height='inherit' bgColor='white'>
        <PageTitle full>FIND TOURS</PageTitle>
        <Box sx={{
          padding: '0 20px',
          display: { xs: 'flex', md: 'block' },
          flexDirection: 'column'
        }}>
          <Selection label='Destination' items={destinationItems} onChange={handleDestinationChange}/>
          {/* <Selection label='Duration' items={durationItems} onChange={handleDestinationChange} /> */}
          <Selection label='Activity level' items={activityLevelsItems}  onChange={handleActivityLevelChange}/>
        </Box>
      </SectionWrapper>
      <ToursList query={query} />
    </Fragment>
  )
}