import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './pages/restaurant/reducer/restaurant.reducer';

const store = createStore(
  combineReducers({
    restaurant: restaurantReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
