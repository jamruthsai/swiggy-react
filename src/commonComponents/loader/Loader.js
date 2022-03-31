//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Components
import FadeLoader from 'react-spinners/FadeLoader';

function Loader(props) {
  const { color, label, className } = props;
  return (
    <div className={className}>
      <FadeLoader color={color} />
      <p>{label}</p>
    </div>
  );
}

Loader.defaultProps = {
  className: undefined,
  color: '#00BFFF',
  label: 'Loading...',
};

Loader.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Loader;
