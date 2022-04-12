//Helpers
import _property from 'lodash/property';

const dishes = _property('dishes');
const details = _property('details');

const containerReader = {
  dishes,
  details,
};

export default containerReader;
