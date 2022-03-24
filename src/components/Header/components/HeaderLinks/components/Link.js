import React from 'react';
import PropTypes from 'prop-types';
function Link(props) {
  const { label, icon, superScriptText } = props;

  return (
    <>
      <a href='/'>
        <img src={icon} alt={label} className='headerIcon' />
        <span>{label}</span>
      </a>
      {superScriptText && <div className='superScript'>{superScriptText}</div>}
    </>
  );
}

Link.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  superScriptText: PropTypes.string,
};

export default Link;
