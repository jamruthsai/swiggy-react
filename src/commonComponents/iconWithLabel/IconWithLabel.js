//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Icons
import heartIcon from './images/heart.svg';

//CSS
import './iconWithLabel.css';

function IconWithLabel(props) {
  const { className, icon, label } = props;
  return (
    <div className={`${className} iconWithLabel`}>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
}

IconWithLabel.defaultProps = {
  className: '',
  icon: heartIcon,
  label: 'Favourite',
};

IconWithLabel.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default IconWithLabel;
