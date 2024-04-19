import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import TopNavBar from './layouts/TopNavBar'
import './index.css'
import Home from './pages/Home';
import Layout from './layouts/Layout';

export default function App() {
  return (
    <>
      {/* <TopNavBar />
      <Home /> */}
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
      </Route>
    </Routes>
  );
}