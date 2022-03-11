import HeaderLinks from './HeaderLinks';
import {
  headerLinksConfig,
  breadcrumbConfig,
  addressConfig,
} from './constants/config.js';
import Location from './Location';
import Breadcrumb from './Breadcrumb';
import './header.css';
function Header() {
  return (
    <>
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
      <Breadcrumb breadcrumbConfig={breadcrumbConfig} />
    </>
  );
}

export default Header;
