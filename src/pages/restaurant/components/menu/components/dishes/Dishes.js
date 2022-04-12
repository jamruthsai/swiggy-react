//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _map from 'lodash/map';
import _startCase from 'lodash/startCase';
import _keys from 'lodash/keys';
import _noop from 'lodash/noop';

//Components
import CategoryDishes from './components/categoryDishes';

//CSS
import './dishes.css';

const renderCategoryDishes = (
  dishes,
  quantityPerDishById,
  addNewDishToCart,
  onIncrementClick,
  onDecrementClick
) => (category) => {
  return (
    <CategoryDishes
      key={category}
      category={_startCase(category)}
      categoryDishes={dishes[category]}
      quantityPerDishById={quantityPerDishById}
      addNewDishToCart={addNewDishToCart}
      onIncrementClick={onIncrementClick}
      onDecrementClick={onDecrementClick}
    />
  );
};

function Dishes(props) {
  const {
    dishes,
    quantityPerDishById,
    addNewDishToCart,
    onIncrementClick,
    onDecrementClick,
  } = props;
  const categories = _keys(dishes);
  return (
    <div className='dishes'>
      {_map(
        categories,
        renderCategoryDishes(
          dishes,
          quantityPerDishById,
          addNewDishToCart,
          onIncrementClick,
          onDecrementClick
        )
      )}
    </div>
  );
}

Dishes.defaultProps = {
  dishes: {},
  quantityPerDishById: {},
  addNewDishToCart: _noop,
  onIncrementClick: _noop,
  onDecrementClick: _noop,
};

Dishes.propTypes = {
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
  addNewDishToCart: PropTypes.func,
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
};

export default Dishes;
