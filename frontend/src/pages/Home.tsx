import { Fragment } from 'react';

import HomeTop from '../components/home/HomeTop';
import PopularTours from '../components/home/PopularTours';
import TravelTips from '../components/home/TravelTips';
import WhenToGo from '../components/home/WhenToGo';

export default function Home() {
  return (
    <Fragment >
      <HomeTop />
      <PopularTours />
      <WhenToGo />
      <TravelTips />
    </Fragment>
  )
}