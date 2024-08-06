import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';
import { TourType } from '../../types/tours';

type ToursListProps = {
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
  };
}

export default function ToursList({ query }: ToursListProps) {
  const [tours, setTours] = useState<TourType[]>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours`)
    .then(res => res.json())
    .then((data: TourType[]) => setTours(data));
  }, []);

  if (!tours) return <Box>No Tours</Box>

  return (
    <RenderTours tours={tours} query={query} />
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
    <SectionWrapper bgColor='beige'>
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
    </SectionWrapper>
  )
}