import Link from './Link';
function HeaderLinks(props) {
  const { headerLinksConfig } = props;

  return (
    <>
      <nav className='navbar'>
        <ul>
          {headerLinksConfig.map((item, index) => {
            return (
              <li key={index}>
                <Link {...item} />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default HeaderLinks;
