import React from 'react';
import Link from './components/link/Link';
import './headerLinks.css';
import PropTypes from 'prop-types';

function HeaderLinks(props) {
  const { headerLinksConfig } = props;

  function renderLinks() {
    return headerLinksConfig.map((item, index) => {
      return (
        <li key={index}>
          <Link {...item} />
        </li>
      );
    });
  }

  return (
    <nav className='navbar'>
      <ul>{renderLinks()}</ul>
    </nav>
  );
}

HeaderLinks.propTypes = {
  headerLinksConfig: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      superScriptText: PropTypes.string,
    })
  ),
};

export default HeaderLinks;
