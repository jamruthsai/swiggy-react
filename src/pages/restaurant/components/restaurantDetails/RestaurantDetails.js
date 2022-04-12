/* eslint-disable jsx-a11y/img-redundant-alt */
//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import restaurantDetailsReader from './readers/restaurantDetailsReader';

//Icons
import star from '../../../../images/star.svg';
import delivery from '../../../../images/delivery.svg';
import rupee from '../../../../images/rupee.svg';

//Components
import Offers from './components/offers';
import Filters from './components/filters';
import RestaurantInfo from './components/restaurantInfo';
import Placeholder from '../../../../commonComponents/placeholder';

//CSS
import './restaurantDetails.css';

function renderOffers(offers) {
  return offers.length > 0 ? <Offers offers={offers} /> : null;
}

function renderAdditionalInfo(restaurantDetails) {
  const ratingCount = restaurantDetailsReader.ratingCount(restaurantDetails);
  const ratingValue = restaurantDetailsReader.ratingValue(restaurantDetails);
  const deliveryTime = restaurantDetailsReader.deliveryTime(restaurantDetails);
  const cost = restaurantDetailsReader.cost(restaurantDetails);
  const noOfMembers = restaurantDetailsReader.noOfMembers(restaurantDetails);
  return (
    <div>
      <Placeholder
        icon={star}
        title={ratingValue}
        subtitle={`${ratingCount}+ ratings`}
      />
      <Placeholder
        icon={delivery}
        title={`${deliveryTime} mins`}
        subtitle='Delivery Time'
      />
      <Placeholder
        icon={rupee}
        title={cost}
        subtitle={`Cost for ${noOfMembers}`}
      />
    </div>
  );
}

function RestaurantDetails(props) {
  const { restaurantDetails } = props;
  const imageURL = restaurantDetailsReader.imageURL(restaurantDetails);
  const offers = restaurantDetailsReader.offers(restaurantDetails);

  return (
    <section className='details'>
      <div className='container'>
        <img src={imageURL} alt='restaurant-image' className='restaurantLogo' />
        <RestaurantInfo
          restaurantDetails={restaurantDetails}
          renderAdditionalInfo={renderAdditionalInfo}
        />
        {renderOffers(offers)}
      </div>
      <Filters />
    </section>
  );
}

RestaurantDetails.defaultProps = {
  restaurantDetails: {},
};

RestaurantDetails.propTypes = {
  restaurantDetails: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    city: PropTypes.string,
    imageURL: PropTypes.string,
    rating: PropTypes.shape({
      value: PropTypes.number,
      count: PropTypes.number,
    }),
    priceRange: PropTypes.shape({
      cost: PropTypes.number,
      noOfMembers: PropTypes.string,
    }),
    deliveryTime: PropTypes.number,
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        discount: PropTypes.string,
        coupon: PropTypes.string,
      })
    ),
  }),
};

export default RestaurantDetails;
