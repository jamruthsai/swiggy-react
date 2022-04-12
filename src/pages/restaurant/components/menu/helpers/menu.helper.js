// icons
import veg from '../../../../../images/veg.png';
import nonVeg from '../../../../../images/nonveg.png';

//Helpers
import _values from 'lodash/values';
import _sum from 'lodash/sum';
import compose from '../../../../../utils/compose';

const getDish = (id) => (dish) => {
  return dish.id === id;
};

const getDishCategory = (id) => (item) => {
  const dish = item.find(getDish(id));
  return dish;
};

export function getDishById(id, dishes) {
  const items = _values(dishes);
  const dishCategory = items.find(getDishCategory(id));
  const dish = dishCategory.find(getDish(id));
  return dish;
}

export function getDishIcon(dishType) {
  return dishType ? veg : nonVeg;
}

export function getSubHeading(count, label) {
  return count === 1 ? `${count} ${label}` : `${count} ${label}s`;
}

function getCurrentQuantity(dishId, quantityPerDishById) {
  const quantity = quantityPerDishById[dishId];
  return quantity ? quantity : 0;
}

export function getUpdatedQuantityPerDishById(
  quantityPerDishById,
  dishId,
  changeInQuantity
) {
  const updatedQuantity =
    getCurrentQuantity(dishId, quantityPerDishById) + changeInQuantity;
  return updatedQuantity;
}

export const getTotalItems = compose(_sum, _values);

export const updateQuantityPerDishByIdState = (updatedQuantity, dishId) => (
  draft
) => {
  draft.quantityPerDishById[dishId] = updatedQuantity;
};
