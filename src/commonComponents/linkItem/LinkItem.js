// Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _noop from 'lodash/noop';
import cx from 'classnames';

function renderLinkItem(props, ref) {
  const { label, isActive, href, onClick } = props;
  const activeClassname = cx({
    active: isActive,
  });

  return (
    <a href={href} className={activeClassname} ref={ref} onClick={onClick}>
      {label}
    </a>
  );
}

const LinkItem = React.forwardRef((props, ref) => renderLinkItem(props, ref));

LinkItem.defaultProps = {
  href: 'default',
  isActive: false,
  label: 'default',
  onClick: _noop,
};

LinkItem.propTypes = {
  href: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default LinkItem;
