//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Components
import OfferItemList from './components/offerItemList';

//CSS
import './offers.css';

function Offers(props) {
  const { offers } = props;
  return (
    <div className='offers'>
      <div className='heading'>offers</div>
      <div>
        <OfferItemList offers={offers} />
      </div>
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
