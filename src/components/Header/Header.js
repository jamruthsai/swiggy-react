import React from 'react';
import HeaderLinks from './headerHelper.js';
class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <a href='index.html' className='logo'>
            <img
              src='https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png'
              alt='Swiggy'
            />
          </a>

          <nav className='navbar'>
            <ul>
              <li>
                <HeaderLinks name='Search' type='search' />
              </li>
              <li>
                <HeaderLinks name='Offers' type='offer' />
                <sup style={{ color: 'orange', fontSize: 'small' }}>NEW</sup>
              </li>
              <li>
                <HeaderLinks name='Help' type='help' />
              </li>
              <li>
                <HeaderLinks name='Cart' type='cart' />
              </li>
              <li>
                <HeaderLinks name='Sign in' type='signin' />
              </li>
            </ul>
          </nav>
        </header>
        <section className='breadcrumb'>
          <span class='lightWeightText'>Home / Banglore / RTM-Banglore / </span>
          <span>Kitchens Of Punjab</span>
        </section>
      </>
    );
  }
}

export default Header;
