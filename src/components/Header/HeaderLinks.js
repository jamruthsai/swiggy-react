import Link from './Link';
function HeaderLinks(props) {
  const { headerLinksConfig } = props;

  function renderLinks() {
    return headerLinksConfig.map((item, index) => {
      return (
        <li key={index}>
          <Link {...item} />
        </li>
      );
    });
  }

  return (
    <>
      <nav className='navbar'>
        <ul>{renderLinks()}</ul>
      </nav>
    </>
  );
}

export default HeaderLinks;
