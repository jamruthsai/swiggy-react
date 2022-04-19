//Libraries
import React from 'react';
import { connect } from 'react-redux';

//Constants
import { RESTAURANT_ID } from './constants/restaurant.general';

//Images
import nodata from '../../images/nodata.svg';
import error from '../../images/error.svg';

//Helpers
import _isEmpty from 'lodash/isEmpty';

//Action Creators
import { getRestaurantData } from './actions/restaurant.actions';

//Components
import Loader from '../../commonComponents/loader';
import ErrorHandler from '../../commonComponents/errorHandler';
import RestaurantDetails from './components/restaurantDetails';
import Menu from './components/menu';

//CSS
import './restaurants.css';

const mapStateToProps = (state) => {
  const { restaurant } = state;
  return restaurant;
};

const mapDispatchToProps = (dispatch) => ({
  getRestaurantData: () => {
    dispatch(getRestaurantData(RESTAURANT_ID));
  },
});

class Restaurant extends React.Component {
  componentDidMount() {
    const { getRestaurantData } = this.props;
    getRestaurantData();
  }

  renderRestaurantData() {
    const { restaurantDetails } = this.props;
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
    const { dishes } = this.props;
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
    console.log(this.props);
    const { isLoading, errorMessage } = this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
