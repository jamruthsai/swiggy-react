//Libraries
import _property from 'lodash/property';

const imageURL = _property('imageURL');
const ratingValue = _property('rating.value');
const ratingCount = _property('rating.count');
const deliveryTime = _property('deliveryTime');
const cost = _property('priceRange.cost');
const noOfMembers = _property('priceRange.noOfMembers');

const offers = _property('offers');

const restaurantDetailsReader = {
  imageURL,
  ratingValue,
  ratingCount,
  deliveryTime,
  cost,
  noOfMembers,
  offers,
};

export default restaurantDetailsReader;
