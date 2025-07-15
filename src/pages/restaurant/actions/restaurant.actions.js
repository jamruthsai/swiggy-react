//Helpers
import fetchRestaurantData from '../../../api/fetchRestaurantData';
import restaurantReader from '../readers/restaurantReader';

//Constants
import {
  SET_RESTAURANT_DATA,
  SET_ERROR_MESSAGE,
  SET_AS_LOADING,
  SET_AS_LOADED,
} from '../reducer/restaurant.actionTypes';

const setAsLoading = () => ({
  type: SET_AS_LOADING,
});

const setRestaurantData = (restaurantData) => ({
  type: SET_RESTAURANT_DATA,
  payload: {
    dishes: restaurantReader.dishes(restaurantData),
    restaurantDetails: restaurantReader.details(restaurantData),
  },
});

const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  payload: {
    errorMessage,
  },
});

const setAsLoaded = () => ({
  type: SET_AS_LOADED,
});

export const getRestaurantData = (restaurantId) => (dispatch) => {
  dispatch(setAsLoading());
  return fetchRestaurantData(restaurantId)
    .then((restaurantData) => dispatch(setRestaurantData(restaurantData)))
    .catch((error) => {
      const { message = 'Something went wrong' } = error;
      dispatch(setErrorMessage(message));
    })
    .finally(() => dispatch(setAsLoaded()));
};
