import { Fragment, useMemo, useState } from 'react';
import ToursList from '../components/tours/ToursList';
import { Box } from '@mui/material';
import PageTitle from '../components/PageTitle';
import SectionWrapper from '../components/SectionWrapper';
import Selection from '../components/tours/Selection';
import { getDurations } from '../utils/getDurations';
import { ActivityLevelsType } from '../types/activityLevels';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import { TourType } from '../types/tours';

export default function Tours() {
  const durationItems = getDurations();

  const { data: toursData, loading: toursLoading, error: toursError } = useFetch({ pathname: 'tours' });
  const { data: activityLevelsData, loading: activityLevelLoading, error: activitiLevelError } = useFetch({ pathname: 'activity-levels' });
  const { data: destinationsData, loading: destinationsLoading, error: destinationsError } = useFetch({ pathname: 'destinations' });

  if (toursLoading || activityLevelLoading || destinationsLoading) return <LoadingSpinner />;
  if (toursError) return <Box>No Tours</Box>;
  if (activitiLevelError) return <Box>No Activity Levels</Box>;
  if (destinationsError) return <Box>No Destinations</Box>;

  return (
    <SectionWrapper 
      height='inherit'
      // bgColor='white'
    >
      <PageTitle full>FIND TOURS</PageTitle>

      <RenderToursPage
        destinationData={destinationsData.data}
        durationItems={durationItems}
        activityLevelsData={activityLevelsData.data}
        toursData={toursData.data}
      />
    </SectionWrapper>
  )
}

type RenderToursPageProps = {
  destinationData: any[];
  durationItems: string[];
  activityLevelsData: ActivityLevelsType[];
  toursData: TourType[];
};

function RenderToursPage({ destinationData, durationItems, activityLevelsData, toursData }: RenderToursPageProps) {
  const [query, setQuery] = useState<{
    destination: string | undefined,
    activityLevel: string | undefined,
    duration: string | undefined,
  }>({
    destination: undefined,
    activityLevel: undefined,
    duration: undefined,
  });

  const activityLevelsItems = useMemo(() => 
    activityLevelsData.map((item: any) => item.levelName),
    [activityLevelsData]
  );

  const destinationItems = useMemo(() => 
    destinationData.map((item: any) => item.city_name),
    [destinationData]
  );

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

  const handleDurationChange = (duration: string) => {
    setQuery({
      ...query,
      duration: duration,
    });
  }

  return (
    <Fragment>
      <Box sx={{
        p: '0 20px',
        display: { xs: 'flex', md: 'block' },
        flexDirection: 'column'
      }}>
        <Selection label='Destination' items={destinationItems} onChange={handleDestinationChange} value={query.destination}/>
        <Selection label='Duration' items={durationItems} onChange={handleDurationChange} value={query.duration} />
        <Selection label='Activity level' items={activityLevelsItems}  onChange={handleActivityLevelChange} value={query.activityLevel} />
      </Box>

      <ToursList query={query} tours={toursData} />
    </Fragment>
  )
}