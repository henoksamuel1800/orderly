import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

const Loading = lazy(()=> import ('./components/Loading'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const EmployeeHomePage = lazy(() => import('./pages/EmployeeHomePage'));
const ResdientHomePage = lazy(() => import('./pages/ResidentHomePage'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="Employee/home" element={<EmployeeHomePage/>}/> 
          <Route path="Resident/home" element={<ResdientHomePage />} />
      </Routes>
    </Suspense>
</BrowserRouter>
);

