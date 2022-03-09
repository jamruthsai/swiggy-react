function Breadcrumb(props) {
  const { breadcrumbConfig } = props;
  return (
    <section className='breadcrumb'>
      {breadcrumbConfig.map((item, index) => {
        if (item.isLink) {
          return (
            <span className='lightWeightText' key={index} href='/'>
              {item.label}/
            </span>
          );
        }
        return <span>Kitchens Of Punjab</span>;
      })}
    </section>
  );
}

export default Breadcrumb;
