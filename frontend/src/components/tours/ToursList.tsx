import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';

type ToursListProps = {
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
  };
}

export default function ToursList({ query }: ToursListProps) {
  const [tours, setTours] = useState<any>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours`)
    .then(res => res.json())
    .then(data => setTours(data));
  }, []);

  if (!tours) return <Box>No Tours</Box>

  return (
    <RenderTours tours={tours} query={query} />
  )
}

type RenderToursProps = {
  tours: any[];
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
  };
}

function RenderTours({ tours, query }: RenderToursProps) {
  const [filteredTours, setFilteredTours] = useState<any[]>(tours);

  useEffect(() => {
    let result = tours;
    if (query.activityLevel) {
      result = result.filter((tour: any) =>
      tour.activityLevel === query.activityLevel!.toLowerCase());
    };
    if (query.destination) {
      result = result.filter((tour: any) =>
      tour.destinations.includes(query.destination!));
    };

    setFilteredTours(result);
  }, [tours, query]);

  return (
    <SectionWrapper bgColor='beige'>
      <Title>Tours</Title>
      <TourCards>
        {filteredTours.map((tour: any) => (
          <TourCard tourData={tour} key={tour.id}/>
        ))}
      </TourCards>
    </SectionWrapper>
  )
}