import React, { Fragment } from 'react';

import HomeTop from '../components/home/HomeTop';
import PopularTours from '../components/home/PopularTours';
import TravelTips from '../components/home/TravelTips';

export default function Home() {
  return (
    <Fragment >
      <HomeTop />
      <PopularTours />
      <TravelTips />
    </Fragment>
  )
}