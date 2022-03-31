/* eslint-disable jsx-a11y/img-redundant-alt */
//Libraries
import React from 'react';

//Helpers
import fetchRestaurantDetails from '../../api/fetchRestaurantDetails';
import restaurantDetailsReader from './readers/restaurantDetailsReader';

//Icons
import star from '../../images/star.svg';
import delivery from '../../images/delivery.svg';
import rupee from '../../images/rupee.svg';

//Constants
import {
  INITIAL_STATE,
  RESTAURANT_ID,
  DEFAULT_ERROR_MESSAGE,
} from './constants/restaurantDetails.general';

//Components
import Offers from './components/offers';
import Filters from './components/filters';
import RestaurantInfo from './components/restaurantInfo';
import Placeholder from './components/placeholder';
import Loader from '../../commonComponents/loader';
import ErrorHandler from '../../commonComponents/errorHandler';

//CSS
import './restaurantDetails.css';

class RestaurantDetails extends React.Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.getRestaurantDetails();
  }

  getRestaurantDetails() {
    fetchRestaurantDetails(RESTAURANT_ID)
      .then(this.setRestaurantDetails)
      .catch(this.handleError)
      .finally(this.setAsLoaded);
  }

  setRestaurantDetails = (restaurantDetails) => {
    this.setState({
      restaurantDetails: restaurantDetails,
    });
  };

  handleError = (error) => {
    const { message = DEFAULT_ERROR_MESSAGE } = error;

    this.setState({
      errorMessage: message,
    });
  };

  setAsLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  renderAdditionalInfo = () => {
    const { restaurantDetails } = this.state;
    const ratingCount = restaurantDetailsReader.ratingCount(restaurantDetails);
    const ratingValue = restaurantDetailsReader.ratingValue(restaurantDetails);
    const deliveryTime = restaurantDetailsReader.deliveryTime(
      restaurantDetails
    );
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
  };

  renderOffers(offers) {
    return offers.length > 0 ? <Offers offers={offers} /> : null;
  }

  render() {
    const { restaurantDetails, isLoading, errorMessage } = this.state;
    const imageURL = restaurantDetailsReader.imageURL(restaurantDetails);
    const offers = restaurantDetailsReader.offers(restaurantDetails);

    if (isLoading) {
      return <Loader color='orange' label='Loading...' className='loader' />;
    }
    if (errorMessage) {
      return <ErrorHandler className='errorHandler' message={errorMessage} />;
    }
    return (
      <section className='details'>
        <div className='container'>
          <img
            src={imageURL}
            alt='restaurant-image'
            className='restaurantLogo'
          />
          <RestaurantInfo
            restaurantDetails={restaurantDetails}
            renderAdditionalInfo={this.renderAdditionalInfo}
          />
          {this.renderOffers(offers)}
        </div>
        <Filters />
      </section>
    );
  }
}

export default RestaurantDetails;
