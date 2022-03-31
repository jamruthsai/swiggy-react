//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//CSS
import './checkbox.css';
function Checkbox(props) {
  const { className, isChecked, label, htmlFor } = props;

  return (
    <div className={`${className} checkbox`}>
      <input type='checkbox' value={isChecked} id={htmlFor} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  className: '',
  label: 'Checkbox',
  isChecked: false,
  htmlFor: 'checkbox',
};

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  htmlFor: PropTypes.string,
};

export default Checkbox;
