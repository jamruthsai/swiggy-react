const imgPath = '../../../assets/images/';

function HeaderLinks(props) {
  var { name, type } = props;
  var link = imgPath + type + '.svg';
  console.log(link);
  return (
    <a href='/'>
      <img src={link} alt={name} />
      {name}
    </a>
  );
}

export default HeaderLinks;
