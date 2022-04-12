//Libraries
import _property from 'lodash/property';

const name = _property('name');
const category = _property('category');
const area = _property('area');
const city = _property('city');

const restaurantInfoReader = {
  name,
  category,
  area,
  city,
};

export default restaurantInfoReader;
