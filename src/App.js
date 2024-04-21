import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Layout from './layouts/Layout';

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
      </Route>
    </Routes>
  );
}