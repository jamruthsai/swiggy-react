import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import { headerLinksConfig, addressConfig } from './constants/config.js';
import Location from './components/Location';
import './Header.css';
function Header() {
  return (
    <header>
      <div className='nav-left'>
        <a href='index.html' className='logo'>
          <img
            src='https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png'
            alt='Swiggy'
          />
        </a>
        <Location addressConfig={addressConfig} />
      </div>
      <HeaderLinks headerLinksConfig={headerLinksConfig} />
    </header>
  );
}

export default Header;
