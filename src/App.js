//Libraries
import React from 'react';

//Components
import Header from './components/header';
import Breadcrumb from './components/breadcrumb';
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
