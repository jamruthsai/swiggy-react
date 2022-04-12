//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _noop from 'lodash/noop';

//CSS
import './plusAndMinusButton.css';

function PlusAndMinusButton(props) {
  const { label, onIncrementClick, onDecrementClick, className, id } = props;

  return (
    <button className={className} id={id}>
      <span className='decrease' onClick={onDecrementClick}>
        -
      </span>
      <span className='quantity'>{label}</span>
      <span className='increase' onClick={onIncrementClick}>
        +
      </span>
    </button>
  );
}

PlusAndMinusButton.defaultProps = {
  label: 1,
  onIncrement: _noop,
  onDecrement: _noop,
  className: undefined,
  id: undefined,
};

PlusAndMinusButton.propTypes = {
  label: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PlusAndMinusButton;
