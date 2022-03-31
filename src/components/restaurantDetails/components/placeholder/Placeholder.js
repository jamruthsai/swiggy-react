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
  const { icon, title, subtitle } = props;
  return (
    <div>
      <div className='placeholder'>
        {renderIcon(icon)}
        <span>{title}</span>
      </div>
      <div>
        <span className='lightWeightText'>{subtitle}</span>
      </div>
    </div>
  );
}

Placeholder.defaultProps = {
  icon: undefined,
  title: 'Abc',
  subtitle: 'Xyz',
};

Placeholder.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.string,
};

export default Placeholder;
