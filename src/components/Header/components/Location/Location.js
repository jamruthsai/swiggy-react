import React from 'react';
import downArrow from '../../../../images/downarrow.svg';
import PropTypes from 'prop-types';
import './location.css';
function Location(props) {
  const { addressConfig } = props;
  const { street, city, state } = addressConfig;
  return (
    <div className='location'>
      <span className='street'>{street}</span>
      <span className='others'>
        {city}, {state}
      </span>
      <span className='icon'>
        <img src={downArrow} alt='down-arrow' />
      </span>
    </div>
  );
}

Location.propTypes = {
  addressConfig: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};

export default Location;
