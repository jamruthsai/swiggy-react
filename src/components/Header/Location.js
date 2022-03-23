import downArrow from '../../images/downarrow.svg';

function Location(props) {
  const { addressConfig } = props;
  const { street, city, state } = addressConfig;
  return (
    <div className='location'>
      <span className='street'>{street}</span>
      <span className='others'>
        {city}, {state}
      </span>
      <span className='icon'>
        <img src={downArrow} alt='down-arrow' />
      </span>
    </div>
  );
}

export default Location;
