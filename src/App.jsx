import './App.css';
import React, { useLayoutEffect, Suspense, lazy, useEffect } from 'react'
import Loading from './components/Loading'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  const EmployeeHomePage = lazy(() => import('./pages/EmployeeHomePage'));
  const ResdientHomePage = lazy(() => import('./pages/ResidentHomePage'));
  const LandingPage = lazy(() => import('./pages/ResidentHomePage'));
  const orders = [{id: 1, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 2, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'},{id: 3, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 4, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 5, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 6, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 7, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 8, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 9, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'}, {id: 10, title: 'Dryer not working', description: 'Needs a new motor and needs power supply replacement'},] 
  return (
    <>
  {/* <Suspense fallback={<Loading />}> */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={LandingPage} />
      <Route path="Employee/home" element={<EmployeeHomePage/>}/>
      <Route path="Resident/home" element={<ResdientHomePage />} />
   </Routes>
  {/* </Suspense> */}
  </BrowserRouter>
  </>
  );
}

export default App;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //         <h1 className='header__title'>Orderly</h1>
  //     </header>
  //     <main>
  //       <div className="orderlist__container">
  //         {orders.map(order => <div key={order.id} className='order-item'>
  //         <p>{order.title}</p>
  //         <p>Descripton</p>
  //         <div>{order.description}</div>

  //         </div>)}
  //       </div>

  //     </main>
  //   </div>
  // );
