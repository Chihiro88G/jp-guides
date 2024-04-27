import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';
import TourDetail from './components/tours/TourDetail';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SwitchRoutes />
      </BrowserRouter>
    </>
  );
}

function SwitchRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:tourId' element={<TourDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}