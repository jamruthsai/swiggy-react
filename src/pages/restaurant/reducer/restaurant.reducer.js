//Constants
import { INITIAL_STATE } from '../constants/restaurant.general';
import {
  SET_RESTAURANT_DATA,
  SET_ERROR_MESSAGE,
  SET_AS_LOADING,
  SET_AS_LOADED,
} from './restaurant.actionTypes';

function restaurantReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_RESTAURANT_DATA: {
      const { dishes, restaurantDetails } = payload;
      return {
        ...state,
        dishes,
        restaurantDetails,
      };
    }
    case SET_ERROR_MESSAGE: {
      const { errorMessage } = payload;
      return {
        ...state,
        errorMessage,
      };
    }
    case SET_AS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_AS_LOADED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export default restaurantReducer;
