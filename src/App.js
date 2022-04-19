//Libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//helpers
import { HOME_ROUTE, CHECKOUT_ROUTE } from './constants/routes';

//Components
import Header from './components/header';
import Breadcrumb from './components/breadcrumb';
import Restaurant from './pages/restaurant';
import ThankYou from './commonComponents/thankYou/ThankYou';

//CSS
import './app.css';

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <BrowserRouter>
        <Routes>
          <Route
            path={CHECKOUT_ROUTE}
            element={
              <ThankYou
                additionalInfo={'We will be in touch with you shortly.'}
                buttonLabel={'Go to home page'}
              />
            }
          />
          <Route path={HOME_ROUTE} element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
