//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import App from './App';
import ThankYou from './commonComponents/thankYou/ThankYou';

//CSS
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route
          path='/thank-you'
          element={
            <ThankYou
              additionalInfo={'We will be in touch with you shortly.'}
              buttonLabel={'Go to home page'}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
