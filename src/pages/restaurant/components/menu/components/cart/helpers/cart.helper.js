//Helpers
import { getDishById } from '../../../helpers/menu.helper';
import _reduce from 'lodash/reduce';

export function getTotalPricePerItem(price, quantity) {
  return price * quantity;
}

const calculateTotalAmout = (dishes) => (total, quantity, dishId) => {
  const dish = getDishById(Number(dishId), dishes);
  const { price } = dish;
  return total + getTotalPricePerItem(price, quantity);
};

export function getTotalAmount(dishes, quantityPerDishById) {
  return _reduce(quantityPerDishById, calculateTotalAmout(dishes), 0);
}
