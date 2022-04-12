//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Icons
import offerIcon from '../../../../../../../../images/offer.svg';

//Helpers
import offerItemReader from './readers/offerItemReader';

//Components
import IconWithLabel from '../../../../../../../../commonComponents/iconWithLabel';

function OfferItem(props) {
  const { offer, className } = props;
  const discount = offerItemReader.discount(offer);
  const coupon = offerItemReader.coupon(offer);
  return (
    <IconWithLabel
      className={className}
      icon={offerIcon}
      label={`${discount} | Use code ${coupon}`}
    />
  );
}

OfferItem.defaultProps = {
  offer: {},
  className: undefined,
};

OfferItem.propTypes = {
  offer: PropTypes.shape({
    discount: PropTypes.string,
    coupon: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default OfferItem;
