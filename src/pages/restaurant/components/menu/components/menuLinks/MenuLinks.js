//Libraries
import React from 'react';
import PropTypes from 'prop-types';

//Helpers
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _startCase from 'lodash/startCase';
import _isEqual from 'lodash/isEqual';

//Components
import LinkItem from '../../../../../../commonComponents/linkItem';

//CSS
import './menuLinks.css';

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { hash },
    } = window;
    const { categories } = this.props;
    const isHashEmpty = _isEmpty(hash);
    const currActive = isHashEmpty ? categories[0] : hash.slice(1);
    this.state = {
      currActive,
    };
  }

  setCurrentActiveLink = (newRef) => {
    const newActiveLink = newRef.current.hash.substring(1);
    this.setState({ currActive: newActiveLink });
  };

  renderMenuLinkItem = (category) => {
    const { currActive } = this.state;
    const isCurrActive = _isEqual(category, currActive);
    const linkRef = React.createRef();
    const categoryHref = `#${category}`;
    const onClick = () => this.setCurrentActiveLink(linkRef);
    return (
      <LinkItem
        key={category}
        label={_startCase(category)}
        href={categoryHref}
        isActive={isCurrActive}
        ref={linkRef}
        onClick={onClick}
      />
    );
  };
  render() {
    const { categories } = this.props;
    return (
      <div className='menuLinks'>
        {_map(categories, this.renderMenuLinkItem)}
      </div>
    );
  }
}

MenuLinks.defaultProps = {
  categories: [],
};

MenuLinks.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(MenuLinks, _isEqual);
