//Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Images
import error from './images/error.svg';

//Helper
import { HOME_ROUTE } from '../../constants/routes';

//Components
import Button, { BUTTON_TYPES } from '../button';

function ErrorHandler(props) {
  const { className, message, errorImg, buttonLabel } = props;
  return (
    <div className={className}>
      <img src={errorImg} alt='error' />
      <p>Oops! Something went Wrong</p>
      <p>{message}</p>
      <Link to={HOME_ROUTE}>
        <Button
          className='goto'
          label={buttonLabel}
          type={BUTTON_TYPES.PRIMARY}
        />
      </Link>
    </div>
  );
}

ErrorHandler.defaultProps = {
  className: undefined,
  message: 'Something went wrong please try again!!!',
  errorImg: error,
  buttonLabel: 'Go to Restaurant page',
};

ErrorHandler.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  errorImg: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default ErrorHandler;
