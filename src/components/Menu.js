import React from 'react';
import Navigation from './Navigation';
import EmptyFacts from './EmptyFacts';
import SearchedFacts from './SearchedFacts';
import { useGlobalContext } from '../context';

/*this component contains both the navigations and the main body*/
function Menu() {
  const { filteredItems } = useGlobalContext();

  return (
    <section className='main--section'>
      <div className='blog-content'>
        <Navigation />
        {filteredItems.length !== 0 ? <SearchedFacts /> : <EmptyFacts />}
      </div>
    </section>
  );
}

export default Menu;
