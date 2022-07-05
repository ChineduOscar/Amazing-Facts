import React from 'react';
import Facts from './Facts';
import { useGlobalContext } from '../context';

function SearchedFacts() {
  const { facts, query, filteredItems } = useGlobalContext();

  return (
    <section>
      {query !== ''
        ? filteredItems.map((fact) => {
            return <Facts {...fact} key={fact.id} />;
          })
        : facts.map((fact) => {
            return <Facts {...fact} key={fact.id} />;
          })}
    </section>
  );
}

export default SearchedFacts;
