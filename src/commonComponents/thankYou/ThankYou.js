//Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Components
import Button, { BUTTON_TYPES } from '../button';

//CSS
import './thankYou.css';

function ThankYou(props) {
  const { additionalInfo, buttonLabel } = props;
  return (
    <div className='thankYou'>
      <h1>Thank you for associating with us</h1>
      <p>{additionalInfo}</p>
      <Link to='/'>
        <Button
          className='goto'
          label={buttonLabel}
          type={BUTTON_TYPES.PRIMARY}
        />
      </Link>
    </div>
  );
}

ThankYou.defaultProps = {
  additionalInfo: undefined,
  buttonLabel: 'Go to home page',
};

ThankYou.propTypes = {
  additionalInfo: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default ThankYou;
