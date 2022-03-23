function Breadcrumb(props) {
  const { breadcrumbConfig } = props;

  function renderBreadcrumb() {
    return breadcrumbConfig.map((item, index) => {
      if (item.isLink) {
        return (
          <a href='/' key={index}>
            <span className='lightWeightText'>{item.label} / </span>
          </a>
        );
      }
      return <span key={index}>Kitchens Of Punjab</span>;
    });
  }

  return <section className='breadcrumb'>{renderBreadcrumb()}</section>;
}

export default Breadcrumb;
