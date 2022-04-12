//Libraries
import React from 'react';

//Constants
import {
  INITIAL_STATE,
  RESTAURANT_ID,
  DEFAULT_ERROR_MESSAGE,
} from './constants/restaurant.general';

//Images
import nodata from '../../images/nodata.svg';
import error from '../../images/error.svg';

//Helpers
import fetchRestaurantData from '../../api/fetchRestaurantData';
import restaurantReader from './readers/restaurantReader';
import _isEmpty from 'lodash/isEmpty';

//Components
import Loader from '../../commonComponents/loader';
import ErrorHandler from '../../commonComponents/errorHandler';
import RestaurantDetails from './components/restaurantDetails';
import Menu from './components/menu';

//CSS
import './restaurants.css';

class Restaurant extends React.Component {
  state = INITIAL_STATE;
  componentDidMount() {
    this.getRestaurantData();
  }
  getRestaurantData() {
    fetchRestaurantData(RESTAURANT_ID)
      .then(this.setRestaurantState)
      .catch(this.handleError)
      .finally(this.setAsLoaded);
  }
  setRestaurantState = (restaurantData) => {
    const dishes = restaurantReader.dishes(restaurantData);
    const restaurantDetails = restaurantReader.details(restaurantData);
    this.setState({
      restaurantDetails,
      dishes,
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
  renderRestaurantData() {
    const { restaurantDetails } = this.state;
    const isRestaurantDetailsEmpty = _isEmpty(restaurantDetails);
    if (isRestaurantDetailsEmpty) {
      return (
        <ErrorHandler
          message='Restaurant Details data not found'
          className='errorHandler'
          errorImg={nodata}
        />
      );
    }
    return (
      <>
        <RestaurantDetails restaurantDetails={restaurantDetails} />
        {this.renderDishes()}
      </>
    );
  }
  renderDishes() {
    const { dishes } = this.state;
    const isDishesEmpty = _isEmpty(dishes);
    if (isDishesEmpty) {
      return (
        <ErrorHandler
          message='Dishes data not found'
          className='errorHandler'
          errorImg={nodata}
        />
      );
    }
    return <Menu dishes={dishes} />;
  }
  render() {
    const { isLoading, errorMessage } = this.state;
    if (isLoading) {
      return <Loader color='orange' label='Loading...' className='loader' />;
    }
    if (errorMessage) {
      return (
        <ErrorHandler
          className='errorHandler'
          message={errorMessage}
          errorImg={error}
        />
      );
    }
    return this.renderRestaurantData();
  }
}

export default Restaurant;
