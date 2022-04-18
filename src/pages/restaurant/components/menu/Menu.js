//Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

//Helpers
import postCartDetails from '../../../../api/postCartDetails';
import {
  getUpdatedQuantityPerDishById,
  getTotalItems,
  updateQuantityPerDishByIdState,
  getPostCartDetails,
} from './helpers/menu.helper';
import _keys from 'lodash/keys';
import produce from 'immer';
import { CHECKOUT_ROUTE } from '../../../../constants/routes';

//Images
import emptyCart from '../../../../images/emptycart.webp';
import error from '../../../../images/error.svg';

//Constants
import {
  INITIAL_STATE,
  ADD_NEW_DISH_TO_CART,
  INCREMENT_DISH_QUANTITY,
  DECREMENT_DISH_QUANTITY,
  EMPTY_CART_DESCRIPTION,
} from './constants/menu.general';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/restaurant.general';

//Components
import MenuLinks from './components/menuLinks';
import Dishes from './components/dishes';
import Cart from './components/cart';
import Placeholder from '../../../../commonComponents/placeholder';
import ErrorHandler from '../../../../commonComponents/errorHandler';
import Loader from '../../../../commonComponents/loader';

//CSS
import './menu.css';

class Menu extends React.Component {
  state = INITIAL_STATE;

  resetCartItems = () => {
    this.setState({
      quantityPerDishById: {},
    });
  };

  handleCheckout = () => {
    const { quantityPerDishById } = this.state;
    const cartDetails = getPostCartDetails(quantityPerDishById);
    this.setState({
      isPosting: true,
    });
    postCartDetails(cartDetails)
      .then(this.resetCartItems)
      .then(this.setRedirectState)
      .catch(this.handleError)
      .finally(this.setPostingState);
  };

  setPostingState = () => {
    this.setState({
      isPosting: false,
    });
  };

  setRedirectState = () => {
    this.setState({
      redirectTo: true,
    });
  };

  handleError = (error) => {
    const { message = DEFAULT_ERROR_MESSAGE } = error;
    this.setState({
      errorMessage: message,
    });
  };

  addNewDishToCart = (event) => {
    const {
      target: { id: dishId },
    } = event;
    const { quantityPerDishById } = this.state;
    const updatedQuantity = getUpdatedQuantityPerDishById(
      quantityPerDishById,
      dishId,
      ADD_NEW_DISH_TO_CART
    );
    const newQuantityPerDishById = produce(
      this.state,
      updateQuantityPerDishByIdState(updatedQuantity, dishId)
    );
    this.setState(newQuantityPerDishById);
  };

  incrementDishQuantity = (event) => {
    const {
      target: {
        parentNode: { id: dishId },
      },
    } = event;

    const { quantityPerDishById } = this.state;
    const updatedQuantity = getUpdatedQuantityPerDishById(
      quantityPerDishById,
      dishId,
      INCREMENT_DISH_QUANTITY
    );
    const newQuantityPerDishById = produce(
      this.state,
      updateQuantityPerDishByIdState(updatedQuantity, dishId)
    );
    this.setState(newQuantityPerDishById);
  };

  decrementDishQuantity = (event) => {
    const {
      target: {
        parentNode: { id: dishId },
      },
    } = event;
    const { quantityPerDishById } = this.state;
    const updatedQuantity = getUpdatedQuantityPerDishById(
      quantityPerDishById,
      dishId,
      DECREMENT_DISH_QUANTITY
    );
    const newQuantityPerDishById = produce(
      this.state,
      updateQuantityPerDishByIdState(updatedQuantity, dishId)
    );
    this.setState(newQuantityPerDishById);
  };

  renderCart() {
    const { quantityPerDishById } = this.state;
    const { dishes } = this.props;
    const totalItemsInCart = getTotalItems(quantityPerDishById);
    if (!totalItemsInCart) {
      return (
        <div className='cart'>
          <h3 className='emptyCartHeading'>Empty Cart</h3>
          <Placeholder
            icon={emptyCart}
            subtitle={EMPTY_CART_DESCRIPTION}
            className={'emptyCartPlaceholder'}
          />
        </div>
      );
    }
    return (
      <Cart
        dishes={dishes}
        quantityPerDishById={quantityPerDishById}
        onIncrementClick={this.incrementDishQuantity}
        onDecrementClick={this.decrementDishQuantity}
        onCheckoutClick={this.handleCheckout}
      />
    );
  }

  redirectToThankYouPage() {
    const { redirectTo } = this.state;
    if (redirectTo) {
      return <Navigate to={CHECKOUT_ROUTE} />;
    }
  }

  render() {
    const { quantityPerDishById, errorMessage, isPosting } = this.state;
    const { dishes } = this.props;
    const categories = _keys(dishes);
    if (isPosting) {
      return (
        <Loader
          color='orange'
          label='Saving Your Order...'
          className='loader'
        />
      );
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
    return (
      <section className='menu'>
        {this.redirectToThankYouPage()}
        <MenuLinks categories={categories} />
        <Dishes
          dishes={dishes}
          quantityPerDishById={quantityPerDishById}
          addNewDishToCart={this.addNewDishToCart}
          onIncrementClick={this.incrementDishQuantity}
          onDecrementClick={this.decrementDishQuantity}
        />
        {this.renderCart()}
      </section>
    );
  }
}

Menu.defaultProps = {
  dishes: {},
};

Menu.propTypes = {
  dishes: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        isVeg: PropTypes.bool,
      })
    )
  ),
};

export default Menu;
