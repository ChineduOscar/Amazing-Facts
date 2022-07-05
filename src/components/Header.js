import React, { useEffect, useState } from 'react';

/*local storage was used to save the theme for better User experience */
const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function Header() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    /*we will create a className 'theme' in the html tag to be able to change the styles from there*/
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className='header--section'>
      <div className='logo'>
        <span className='logo-item1'>Amazing</span>
        <span className='logo-item2'>Facts</span>
      </div>
      <div className='darkmode' onClick={toggleTheme}>
        <div className='dark-mode-switch' id='dmSwitch'></div>
      </div>
    </header>
  );
}

export default Header;
