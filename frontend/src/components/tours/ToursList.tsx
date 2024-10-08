import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';
import { TourType } from '../../types/tours';
import LoadingSpinner from '../LoadingSpinner';

type ToursListProps = {
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
  };
}

export default function ToursList({ query }: ToursListProps) {
  const [tours, setTours] = useState<TourType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URI}/tours`)
    .then(res => {
      if (!res.ok) throw new Error('failed to fetch tours');
      return res.json();
    })
    .then((responseData: { success: boolean; data: TourType[] }) => {
      setTours(responseData.data);
      setLoading(false);
    })
    .catch(err => {    
      setError(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>No Tours</Box>;
  if (tours.length === 0) return <Box>No Tours</Box>;

  return (
    <SectionWrapper bgColor='beige'>
      <RenderTours tours={tours} query={query} />
    </SectionWrapper>
  )
}

type RenderToursProps = {
  tours: TourType[];
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
  };
}

function RenderTours({ tours, query }: RenderToursProps) {
  const [filteredTours, setFilteredTours] = useState<TourType[]>(tours);

  useEffect(() => {
    let toursToFilter = tours;
    if (query.activityLevel) {
      toursToFilter = toursToFilter.filter((tour: TourType) =>
      tour.activityLevel === query.activityLevel!.toLowerCase());
    };
    if (query.destination) {
      toursToFilter = toursToFilter.filter((tour: TourType) =>
      tour.destinations.includes(query.destination!));
    };

    setFilteredTours(toursToFilter);
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