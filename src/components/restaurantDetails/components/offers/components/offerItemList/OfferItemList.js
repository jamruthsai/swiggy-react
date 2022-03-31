//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _map from 'lodash/map';
import _uniqueId from 'lodash/uniqueId';

//Components
import OfferItem from './components/offerItem';

function renderOffer(offer) {
  return <OfferItem key={_uniqueId()} className='offer' offer={offer} />;
}

function OfferItemList(props) {
  const { offers } = props;

  return _map(offers, renderOffer);
}

OfferItemList.defaultProps = {
  offers: [],
};

OfferItemList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      discount: PropTypes.string,
      coupon: PropTypes.string,
    })
  ),
};

export default OfferItemList;
