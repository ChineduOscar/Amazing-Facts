import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ScrollTopButton from './components/ScrollTopButton';
import Menu from './components/Menu';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <main className='container'>
      <Header />
      <Search />
      <ScrollTopButton />
      <Menu />
      <Pagination />
      <Footer />
    </main>
  );
}

export default App;
