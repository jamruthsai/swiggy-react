//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import restaurantInfoReader from './readers/restaurantInfoReader';
import _noop from 'lodash/noop';

//CSS
import './restaurantInfo.css';

function RestaurantInfo(props) {
  const { restaurantDetails, renderAdditionalInfo } = props;
  const name = restaurantInfoReader.name(restaurantDetails);
  const category = restaurantInfoReader.category(restaurantDetails);
  const area = restaurantInfoReader.area(restaurantDetails);
  const city = restaurantInfoReader.city(restaurantDetails);

  return (
    <div className='info'>
      <h1>{name}</h1>
      <p className='lightWeightText'>{category}</p>
      <p className='lightWeightText'>
        {area}, {city}
      </p>
      {renderAdditionalInfo()}
    </div>
  );
}

RestaurantInfo.defaultProps = {
  restaurantDetails: {
    name: 'Pfannerstill - Grant',
    category: 'Indian',
    area: 'Celestino Wells',
    city: 'East Ceasar',
  },
  renderAdditionalInfo: _noop,
};

RestaurantInfo.propTypes = {
  restaurantDetails: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    city: PropTypes.string,
  }),
  renderAdditionalInfo: PropTypes.func,
};

export default RestaurantInfo;
