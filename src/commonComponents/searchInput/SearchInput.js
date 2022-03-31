//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Icons
import searchIcon from './images/search.svg';

//CSS
import './searchInput.css';

function SearchInput(props) {
  const { className, icon, placeholder } = props;
  return (
    <div className={`${className} search`}>
      <img src={icon} alt='search' />
      <input type='text' placeholder={placeholder} />
    </div>
  );
}

SearchInput.defaultProps = {
  className: '',
  icon: searchIcon,
  placeholder: 'Search...',
};

SearchInput.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchInput;
