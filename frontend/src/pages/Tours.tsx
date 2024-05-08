import { Fragment } from 'react';
import ToursTop from '../components/tours/ToursTop';
import ToursList from '../components/tours/ToursList';

export default function Tours() {
  return (
    <Fragment>
      <ToursTop />
      <ToursList />
    </Fragment>
  )
}