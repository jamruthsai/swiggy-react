//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './placeholder.css';

function renderIcon(icon) {
  if (icon) {
    return <img src={icon} alt='icon' />;
  }
  return null;
}

function Placeholder(props) {
  const { icon, title, subtitle, className } = props;
  return (
    <div className={className}>
      <div>
        {renderIcon(icon)}
        <span>{title}</span>
      </div>
      <p className='lightWeightText'>{subtitle}</p>
    </div>
  );
}

Placeholder.defaultProps = {
  icon: undefined,
  title: undefined,
  subtitle: 'Xyz',
  className: 'placeholder',
};

Placeholder.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default Placeholder;
