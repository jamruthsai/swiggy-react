const imgPath = '/assets/images/';

function HeaderLinks(props) {
  var { name, type } = props;
  var link = imgPath + type + '.svg';

  return (
    <>
      <img src={link} alt={name} className='icon' />
      <a href='/'>{name}</a>
    </>
  );
}

export default HeaderLinks;
