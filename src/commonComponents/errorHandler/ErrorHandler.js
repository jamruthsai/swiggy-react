//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Images
import error from './images/error.svg';

function ErrorHandler(props) {
  const { className, message } = props;
  return (
    <div className={className}>
      <img src={error} alt='error' />
      <p>Oops! Something went Wrong</p>
      <p>{message}</p>
    </div>
  );
}

ErrorHandler.defaultProps = {
  className: undefined,
  message: 'Something went wrong please try again!!!',
};

ErrorHandler.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

export default ErrorHandler;
