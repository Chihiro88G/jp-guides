import { useMemo } from 'react';
import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';
import { TourType } from '../../types/tours';
import LoadingSpinner from '../LoadingSpinner';
import useFetch from '../../hooks/useFetch';

type ToursListProps = {
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
    duration: string | undefined,
  };
}

export default function ToursList({ query }: ToursListProps) {
  const { data, loading, error } = useFetch({ pathname: 'tours' });

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>No Tours</Box>;
  if (!data || !data.data || data.data.length === 0) return <Box>No Tours</Box>;

  const tours: TourType[] = data.data;

  return (
    <SectionWrapper>
      <RenderTours tours={tours} query={query} />
    </SectionWrapper>
  )
}

type RenderToursProps = {
  tours: TourType[];
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
    duration: string | undefined,
  };
}

function RenderTours({ tours, query }: RenderToursProps) {
  const filteredTours = useMemo(() => {
    let toursToFilter = tours;
    if (query.activityLevel && query.activityLevel !== '') {
      toursToFilter = toursToFilter.filter((tour: TourType) =>
        tour.activityLevel === query.activityLevel!.toLowerCase()
      );
    }

    if (query.destination && query.destination !== '') {
      toursToFilter = toursToFilter.filter((tour: TourType) =>
        tour.destinations.includes(query.destination!)
      );
    }

    if (query.duration && query.duration !== '') {
      const daysFrom = parseInt(query.duration.split(' - ')[0]);
      const daysTo = parseInt(query.duration.split(' - ')[1].split(' days')[0]);

      toursToFilter = toursToFilter.filter((tour: TourType) =>
        tour.totalDays >= daysFrom && tour.totalDays <= daysTo
      );
    }
    return toursToFilter;
  }, [tours, query]);

  return (
    <>
      <Title>{filteredTours.length} Tours Found!</Title>
      <TourCards>
        {filteredTours.length > 0 ?
          filteredTours.map((tour: TourType) => (
            <TourCard tourData={tour} key={tour.id}/>
          ))
        :
          'No Tours Found.'
        }
      </TourCards>
    </>
  )
}