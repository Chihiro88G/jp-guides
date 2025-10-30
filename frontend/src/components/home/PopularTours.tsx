import { Box, Link } from '@mui/material';
import { TourType } from '../../types/tours';
import Title from '../Title';
import TourCard from '../TourCard';
import SectionWrapper from '../SectionWrapper';
import TourCards from '../TourCards';
import LoadingSpinner from '../LoadingSpinner';
import useFetch from '../../hooks/useFetch';

export default function PopularTours() {
  const { data, loading, error } = useFetch({ pathname: 'tours?popular=true' });

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>No Popular Tours</Box>;
  if (!data || !data.data || data.data.length === 0) return null;

  const items: TourType[] = data.data;

  return (
    <SectionWrapper height='90vh'>
      <Title>Popular Tours</Title>
      <TourCards>
        {items.map((item: TourType) => (
          <TourCard tourData={item} key={item.id}/>
        ))}
      </TourCards>
      <Link sx={{ float: 'right' }}>Browse all tours...</Link>
    </SectionWrapper>
  );
}

