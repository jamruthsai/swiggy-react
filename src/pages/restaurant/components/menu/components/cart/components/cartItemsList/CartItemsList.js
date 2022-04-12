//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _map from 'lodash/map';
import _keys from 'lodash/keys';
import _noop from 'lodash/noop';
import { getDishById } from '../../../../helpers/menu.helper';

import CartItem from './components/cartItem';

const renderCartItem = (
  quantityPerDishById,
  dishes,
  onIncrementClick,
  onDecrementClick
) => (cartItemId) => {
  const dish = getDishById(Number(cartItemId), dishes);
  const quantity = quantityPerDishById[cartItemId];
  if (quantity) {
    return (
      <CartItem
        key={cartItemId}
        cartItem={dish}
        quantity={quantity}
        onIncrementClick={onIncrementClick}
        onDecrementClick={onDecrementClick}
      />
    );
  }
  return null;
};

function CartItemsList(props) {
  const {
    quantityPerDishById,
    dishes,
    onIncrementClick,
    onDecrementClick,
  } = props;
  const cartItemIds = _keys(quantityPerDishById);
  return _map(
    cartItemIds,
    renderCartItem(
      quantityPerDishById,
      dishes,
      onIncrementClick,
      onDecrementClick
    )
  );
}

CartItemsList.defaultProps = {
  quantityPerDishById: {},
  dishes: {},
  onIncrementClick: _noop,
  onDecrementClick: _noop,
};

CartItemsList.propTypes = {
  quantityPerDishById: PropTypes.object,
  dishes: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        isVeg: PropTypes.bool,
      })
    )
  ),
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

export default CartItemsList;
