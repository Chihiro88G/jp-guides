import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './index.css'
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';
import TourDetail from './components/tours/TourDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
      </Route>
    </Routes>
  );
}