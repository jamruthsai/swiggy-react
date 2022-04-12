//Libraries
import _property from 'lodash/property';

const discount = _property('discount');
const coupon = _property('coupon');

const offerItemReader = {
  discount,
  coupon,
};

export default offerItemReader;
