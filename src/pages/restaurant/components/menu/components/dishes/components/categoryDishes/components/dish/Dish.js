//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import dishReader from './readers/dishReader';
import _noop from 'lodash/noop';
import { getDishIcon } from '../../../../../../helpers/menu.helper';

//Icons
import rupee from '../../../../../../../../../../images/rupee.svg';

//Components
import IconWithLabel from '../../../../../../../../../../commonComponents/iconWithLabel';
import Button from '../../../../../../../../../../commonComponents/button';
import PlusAndMinusButton from '../../../../../../../../../../commonComponents/plusAndMinusButton';
import { BUTTON_TYPES } from '../../../../../../../../../../commonComponents/button';

//CSS
import './dish.css';

function renderDishButton(
  dishId,
  quantityPerDishById,
  addNewDishToCart,
  onIncrementClick,
  onDecrementClick
) {
  const isDishInCart = quantityPerDishById[dishId];
  if (!isDishInCart) {
    return (
      <Button
        id={dishId}
        onClick={addNewDishToCart}
        label='Add'
        className='dishButton'
        type={BUTTON_TYPES.SECONDARY}
      />
    );
  }

  return (
    <PlusAndMinusButton
      id={dishId}
      label={quantityPerDishById[dishId]}
      onIncrementClick={onIncrementClick}
      onDecrementClick={onDecrementClick}
      className='secondary'
    />
  );
}

function Dish(props) {
  const {
    dish,
    quantityPerDishById,
    addNewDishToCart,
    onIncrementClick,
    onDecrementClick,
  } = props;
  const dishId = dishReader.id(dish);
  const name = dishReader.name(dish);
  const price = dishReader.price(dish);
  const isVeg = dishReader.isVeg(dish);
  const description = dishReader.description(dish);

  return (
    <div className='dish'>
      <div>
        <img src={getDishIcon(isVeg)} alt='dish-icon' className='icon' />
        <h3 className='dishHeading'>{name}</h3>
        <IconWithLabel icon={rupee} label={price} className='dishPrice' />
        <div className='dishDescription'>{description}</div>
      </div>
      <div>
        {renderDishButton(
          dishId,
          quantityPerDishById,
          addNewDishToCart,
          onIncrementClick,
          onDecrementClick
        )}
      </div>
    </div>
  );
}

Dish.defaultProps = {
  dish: {},
  quantityPerDishById: {},
  addNewDishToCart: _noop,
  onIncrementClick: _noop,
  onDecrementClick: _noop,
};

Dish.propTypes = {
  dish: PropTypes.shape({
    dishId: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    isVeg: PropTypes.bool,
    description: PropTypes.string,
  }),
  quantityPerDishById: PropTypes.object,
  addNewDishToCart: PropTypes.func,
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

export default Dish;
