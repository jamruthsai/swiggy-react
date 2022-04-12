//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import dishCategoryReader from './readers/dishCategoryReader';
import _lowerCase from 'lodash/lowerCase';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import { getSubHeading } from '../../../../helpers/menu.helper';

//Components
import Dish from './components/dish';

//CSS
import './categoryDishes.css';

const renderDish = (
  quantityPerDishById,
  addNewDishToCart,
  onIncrementClick,
  onDecrementClick
) => (dish) => {
  const id = dishCategoryReader.id(dish);
  return (
    <Dish
      key={id}
      dish={dish}
      quantityPerDishById={quantityPerDishById}
      addNewDishToCart={addNewDishToCart}
      onIncrementClick={onIncrementClick}
      onDecrementClick={onDecrementClick}
    />
  );
};

function CategoryDishes(props) {
  const {
    category,
    categoryDishes,
    quantityPerDishById,
    addNewDishToCart,
    onIncrementClick,
    onDecrementClick,
  } = props;

  return (
    <div id={_lowerCase(category)} className='categories' name={category}>
      <div>
        <h2>{category}</h2>
        <p className='lightWeightText'>
          {getSubHeading(categoryDishes.length, 'Item')}
        </p>
        {_map(
          categoryDishes,
          renderDish(
            quantityPerDishById,
            addNewDishToCart,
            onIncrementClick,
            onDecrementClick
          )
        )}
      </div>
    </div>
  );
}

CategoryDishes.defaultProps = {
  categoryDishes: {},
  category: undefined,
  quantityPerDishById: {},
  addNewDishToCart: _noop,
  onIncrementClick: _noop,
  onDecrementClick: _noop,
};

CategoryDishes.propTypes = {
  categoryDishes: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
  addNewDishToCart: PropTypes.func,
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

export default CategoryDishes;
