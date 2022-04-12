//Libraries
import React from 'react';

//Components
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Restaurant from './pages/restaurant';

//CSS
import './app.css';

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Restaurant />
    </>
  );
}

export default App;
