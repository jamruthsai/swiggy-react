//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _noop from 'lodash/noop';
import { getDishIcon } from '../../../../../../helpers/menu.helper';
import { getTotalPricePerItem } from '../../../../helpers/cart.helper';

//Icons
import rupee from '../../../../../../../../../../images/rupee.svg';

//Components
import PlusAndMinusButton from '../../../../../../../../../../commonComponents/plusAndMinusButton';
import IconWithLabel from '../../../../../../../../../../commonComponents/iconWithLabel';

//CSS
import './cartItem.css';
function CartItem(props) {
  const { cartItem, quantity, onIncrementClick, onDecrementClick } = props;
  const { id, name, price, isVeg } = cartItem;
  const totalPriceOfCurrentItem = getTotalPricePerItem(price, quantity);
  return (
    <div className='cartItem'>
      <img src={getDishIcon(isVeg)} alt='dish-icon' className='icon' />
      <p>{name}</p>
      <PlusAndMinusButton
        id={id}
        label={quantity}
        onIncrementClick={onIncrementClick}
        onDecrementClick={onDecrementClick}
        className='secondary'
      />
      <IconWithLabel
        icon={rupee}
        label={totalPriceOfCurrentItem}
        className='currencyIcon lightWeightText'
      />
    </div>
  );
}

CartItem.defaultProps = {
  cartItem: {},
  quantityPerDishById: {},
  onIncrementClick: _noop,
  onDecrementClick: _noop,
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    isVeg: PropTypes.bool,
  }),
  quantityPerDishById: PropTypes.object,
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

export default CartItem;
