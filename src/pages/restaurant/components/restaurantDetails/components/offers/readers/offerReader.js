//Libraries
import _property from 'lodash/property';

const discount = _property('discount');
const coupon = _property('coupon');

const offerReader = {
  discount,
  coupon,
};

export default offerReader;
