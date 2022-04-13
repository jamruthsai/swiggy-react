//Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Helpers
import _noop from 'lodash/noop';
import { getTotalAmount } from './helpers/cart.helper';
import { getSubHeading, getTotalItems } from '../../helpers/menu.helper';

//Icons
import rupee from '../../../../../../images/rupee.svg';

//Components
import CartItemsList from './components/cartItemsList';
import IconWithLabel from '../../../../../../commonComponents/iconWithLabel';
import Button from '../../../../../../commonComponents/button';
import { BUTTON_TYPES } from '../../../../../../commonComponents/button';

//CSS

import './cart.css';

function Cart(props) {
  const {
    dishes,
    quantityPerDishById,
    onCheckoutClick,
    onIncrementClick,
    onDecrementClick,
  } = props;
  const totalAmount = getTotalAmount(dishes, quantityPerDishById);
  const totalItems = getTotalItems(quantityPerDishById);
  return (
    <div className='cart'>
      <div className='cartItems'>
        <div>
          <h1>Cart</h1>
          <p className='lightWeightText'>{getSubHeading(totalItems, 'Item')}</p>
        </div>
        <CartItemsList
          dishes={dishes}
          quantityPerDishById={quantityPerDishById}
          onIncrementClick={onIncrementClick}
          onDecrementClick={onDecrementClick}
        />
        <div className='total'>
          <h4>Total</h4>
          <IconWithLabel
            icon={rupee}
            label={totalAmount}
            className='currencyIcon'
          />
        </div>
        <Link to='thank-you'>
          <Button
            className='checkout'
            onClick={onCheckoutClick}
            label={'Checkout'}
            type={BUTTON_TYPES.PRIMARY}
          />
        </Link>
      </div>
    </div>
  );
}

Cart.defaultProps = {
  dishes: {},
  quantityPerDishById: {},
  onCheckoutClick: _noop,
  onIncrementClick: _noop,
  onDecrementClick: _noop,
};

Cart.propTypes = {
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
  quantityPerDishById: PropTypes.object,
  onCheckoutClick: PropTypes.func,
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

export default Cart;
