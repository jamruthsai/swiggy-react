//Libraries
import React from 'react';

//Icons
import heartIcon from '../../../../images/heart.svg';
import searchIcon from '../../../..//images/search.svg';

//Components
import SearchInput from '../../../../commonComponents/searchInput';
import IconWithLabel from '../../../../commonComponents/iconWithLabel';
import Checkbox from '../../../../commonComponents/checkbox';

//CSS
import './filters.css';

function Filters() {
  return (
    <div className='filters'>
      <SearchInput
        className='filterItem'
        icon={searchIcon}
        placeholder='Search...'
      />
      <Checkbox
        className='filterItem'
        label='Veg Only'
        isChecked={false}
        htmlFor='checkbox'
      />
      <IconWithLabel
        className='filterItem favourite'
        icon={heartIcon}
        label='Favourite'
      />
    </div>
  );
}

export default Filters;
