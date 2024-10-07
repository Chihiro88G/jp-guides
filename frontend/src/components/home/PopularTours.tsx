import { useEffect, useState } from 'react';
import { Link } from '@mui/material';
import { TourType } from '../../types/tours';
import Title from '../Title';
import TourCard from '../TourCard';
import SectionWrapper from '../SectionWrapper';
import TourCards from '../TourCards';
import LoadingSpinner from '../LoadingSpinner';

export default function PopularTours() {
  const [items, setItems] = useState<TourType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URI}/tours?popular=true`)
    // returns Promise<Response>
    // only rejects on network failure or if anything prevented the request from completing
    .then(res => {
      if (!res.ok) throw new Error('failed to fetch tours');
      return res.json();
    })
    .then((data: TourType[]) => {
      setItems(data);
      setLoading(false);
    })
    // In a Promise chain, the catch block is only invoked 
    // if a Promise in the chain is rejected or if an error is thrown.
    .catch(err => {    
      setError(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return null;
  if (items.length === 0) return null;

  return (
    <SectionWrapper bgColor='beige' height='470px' >
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

