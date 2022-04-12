//Libraries
import _property from 'lodash/property';

const id = _property('id');
const name = _property('name');
const price = _property('price');
const isVeg = _property('isVeg');
const description = _property('description');

const dishReader = {
  id,
  name,
  price,
  isVeg,
  description,
};

export default dishReader;
