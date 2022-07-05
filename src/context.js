import React, { useState, useContext, useEffect } from 'react';
import { items } from './data';
import paginate from './utils';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /* all states */
  const [menuItems, setMenuItems] = useState(paginate(items));
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [facts, setFacts] = useState([]);
  const [factsInACategory, setFactsInACategory] = useState(menuItems);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setFacts(factsInACategory[page]);
  }, [page, factsInACategory]);

  /*handleChange function was used in search.js to automatically update the input state*/
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  /* filterItem function was used in Menu.js to navigate to another menu */
  const filterItems = (category, index) => {
    setValue(index);
    /*Change to first page on click of the navigation menu */
    setPage(0);

    if (category === 'all facts') {
      setFacts(menuItems[page]);
      setFactsInACategory(menuItems);
      return;
    }

    const newItems = menuItems[page].filter(
      (item) => item.category === category
    );
    const ItemsInOneCategory = items.filter(
      (item) => item.category === category
    );

    setFacts(newItems);
    setFactsInACategory(paginate(ItemsInOneCategory));
  };

  /* nextPage function was used in Pagination.js to change to next page */
  const nextPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > factsInACategory.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  /* prePage function was used in Pagination.js to change to previous page */
  const prevPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = factsInACategory.length - 1;
      }
      return prevPage;
    });
  };

  /* handlePage function was used in Pagination.js to change to handle page change */
  const handlePage = (index) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPage(index);
  };

  /*to filter the query of the user*/
  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(query);
  });

  return (
    <AppContext.Provider
      value={{
        facts,
        page,
        menuItems,
        factsInACategory,
        query,
        value,
        filteredItems,
        handleChange,
        filterItems,
        nextPage,
        prevPage,
        handlePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
