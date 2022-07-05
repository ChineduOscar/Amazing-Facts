import React from 'react';
import { useGlobalContext } from '../context';

function Search() {
  //bring handleChange function from useGlobalContext context.js file
  const { handleChange } = useGlobalContext();

  return (
    <section className='title--section'>
      <div className='blog-header'>
        <h2 className='blog-description'>
          Get amazing facts about humans and animals
        </h2>
      </div>
      <div className='search-input'>
        <input
          type='text'
          placeholder='search a fact...'
          onChange={handleChange}
          autoFocus
        />
      </div>
    </section>
  );
}

export default Search;
