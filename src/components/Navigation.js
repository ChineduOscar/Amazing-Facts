import React from 'react';
import { useGlobalContext } from '../context';
import { items } from '../data';

/*add 'all facts' to the categories*/

function Navigation() {
  const { filterItems, value } = useGlobalContext();

  const allCategories = [
    'all facts',
    ...new Set(items.map((item) => item.category)),
  ];

  return (
    <div className='navs'>
      {allCategories.map((category, index) => {
        return (
          <div
            className={`nav-menu ${index === value && 'active-btn'}`}
            key={index}
            onClick={() => filterItems(category, index)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
