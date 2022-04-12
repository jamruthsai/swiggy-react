//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import saveItemToLocalStorage from '../../../../utils/saveItemToLocalStorage';
import {
  getUpdatedQuantityPerDishById,
  getTotalItems,
  updateQuantityPerDishByIdState,
} from './helpers/menu.helper';
import _keys from 'lodash/keys';
import produce from 'immer';

//Images
import emptyCart from '../../../../images/emptycart.webp';

//Constants
import {
  INITIAL_STATE,
  SAVE_ITEM_TO_LOCAL_STORAGE,
  ADD_NEW_DISH_TO_CART,
  INCREMENT_DISH_QUANTITY,
  DECREMENT_DISH_QUANTITY,
  EMPTY_CART_DESCRIPTION,
} from './constants/menu.general';

//Components
import MenuLinks from './components/menuLinks';
import Dishes from './components/dishes';
import Cart from './components/cart';
import Placeholder from '../../../../commonComponents/placeholder';

//CSS
import './menu.css';

class Menu extends React.Component {
  state = INITIAL_STATE;
  resetCartItems() {
    this.setState({
      quantityPerDishById: {},
    });
  }

  handleCheckout = () => {
    const { quantityPerDishById } = this.state;
    saveItemToLocalStorage(SAVE_ITEM_TO_LOCAL_STORAGE, quantityPerDishById);
    this.resetCartItems();
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

  render() {
    const { quantityPerDishById } = this.state;
    const { dishes } = this.props;
    const categories = _keys(dishes);
    return (
      <section className='menu'>
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
