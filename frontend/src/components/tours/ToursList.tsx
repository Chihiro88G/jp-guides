import { useMemo } from 'react';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';
import { TourType } from '../../types/tours';

type ToursListProps = {
  query: {
    destination: string | undefined,
    activityLevel: string | undefined,
    duration: string | undefined,
  };
  tours: TourType[];
}

export default function ToursList({ query, tours }: ToursListProps) {
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
    <SectionWrapper>
      <Title>{filteredTours.length} Tours Found!</Title>
      <TourCards>
        {filteredTours.map((tour: TourType) => (
          <TourCard tourData={tour} key={tour.id}/>
        ))}
      </TourCards>
    </SectionWrapper>
  )
}
