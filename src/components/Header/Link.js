function Link(props) {
  const { label, icon } = props;

  return (
    <>
      <a href='/'>
        <img src={icon} alt={label} className='headerIcon' />
        <span>{label}</span>
      </a>
    </>
  );
}

export default Link;
