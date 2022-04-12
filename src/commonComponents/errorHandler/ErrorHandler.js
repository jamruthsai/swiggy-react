//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Images
import error from './images/error.svg';

function ErrorHandler(props) {
  const { className, message, errorImg } = props;
  return (
    <div className={className}>
      <img src={errorImg} alt='error' />
      <p>Oops! Something went Wrong</p>
      <p>{message}</p>
    </div>
  );
}

ErrorHandler.defaultProps = {
  className: undefined,
  message: 'Something went wrong please try again!!!',
  errorImg: error,
};

ErrorHandler.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  errorImg: PropTypes.string,
};

export default ErrorHandler;
