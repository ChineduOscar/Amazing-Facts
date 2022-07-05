import React, { useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

function ScrollTopButton() {
  const [isVisible, SetIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      SetIsVisible(true);
    } else if (scrolled <= 300) {
      SetIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className='to-top-btn'
        style={{ display: isVisible ? 'inline' : 'none' }}
      >
        <BiUpArrowAlt />
      </button>
    </div>
  );
}

export default ScrollTopButton;
