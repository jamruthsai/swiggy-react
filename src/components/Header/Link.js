function Link(props) {
  const { label, icon } = props;

  return (
    <>
      <img src={icon} alt={label} className='icon' />
      <a href='/'>{label}</a>
    </>
  );
}

export default Link;
