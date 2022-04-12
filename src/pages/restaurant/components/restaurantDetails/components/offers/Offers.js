//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _map from 'lodash/map';
import _uniqueId from 'lodash/uniqueId';

//Components
import OfferItem from './components/offerItem';

//CSS
import './offers.css';

function renderOffer(offer) {
  return <OfferItem key={_uniqueId()} className='offer' offer={offer} />;
}

function Offers(props) {
  const { offers } = props;
  return (
    <div className='offers'>
      <div className='heading'>offers</div>
      <div>{_map(offers, renderOffer)}</div>
    </div>
  );
}

Offers.defaultProps = {
  offers: [],
};

Offers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      discount: PropTypes.string,
      coupon: PropTypes.string,
    })
  ),
};

export default Offers;
