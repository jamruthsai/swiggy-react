import HeaderLinks from './HeaderLinks';
import { headerLinksConfig, breadcrumbConfig } from './constants/config.js';
import Breadcrumb from './Breadcrumb';
function Header() {
  return (
    <>
      <header>
        <a href='index.html' className='logo'>
          <img
            src='https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png'
            alt='Swiggy'
          />
        </a>
        <HeaderLinks headerLinksConfig={headerLinksConfig} />
      </header>
      <Breadcrumb breadcrumbConfig={breadcrumbConfig} />
    </>
  );
}

export default Header;
