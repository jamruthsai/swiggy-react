//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Constants
import { BUTTON_TYPES } from './constants/button.general';

//Helpers
import _noop from 'lodash/noop';
import _values from 'lodash/values';
import cx from 'classnames';

//CSS
import './button.css';

function Button(props) {
  const { label, onClick, className, type, ...rest } = props;
  const typeClassName = cx({
    [BUTTON_TYPES.PRIMARY]: type === BUTTON_TYPES.PRIMARY,
    [BUTTON_TYPES.SECONDARY]: type === BUTTON_TYPES.SECONDARY,
  });

  return (
    <button
      className={cx(className, typeClassName, 'btn')}
      onClick={onClick}
      {...rest}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: 'Button',
  onClick: _noop,
  className: '',
  type: BUTTON_TYPES.PRIMARY,
};

Button.propTypes = {
  label: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(_values(BUTTON_TYPES)),
};

export default Button;
