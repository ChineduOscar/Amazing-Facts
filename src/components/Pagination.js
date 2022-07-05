import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useGlobalContext } from '../context';

function Pagination() {
  const { page, factsInACategory, nextPage, prevPage, handlePage } =
    useGlobalContext();

  return (
    <section className='pagination--section'>
      <div className='page-number' onClick={prevPage}>
        <GrPrevious />
      </div>
      {factsInACategory.map((menuItem, index) => {
        return (
          <div
            className={`page-number ${
              index === page ? 'active-page-btn' : null
            }`}
            key={index}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </div>
        );
      })}

      <div className='page-number' onClick={nextPage}>
        <GrNext />
      </div>
    </section>
  );
}

export default Pagination;
