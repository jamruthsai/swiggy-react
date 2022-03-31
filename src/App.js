//Libraries
import React from 'react';

//Components
import RestaurantDetails from './components/restaurantDetails';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';

//CSS
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <RestaurantDetails />
    </>
  );
}

export default App;
