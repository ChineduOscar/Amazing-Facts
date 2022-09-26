import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Facts({ title, content }) {
  const [isShow, setIsShow] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className='nav-menu-container'>
      <h3 className='fact-title'>{title}</h3>
      {isShow && <h4 className='fact-content'>{content}</h4>}
      <span className='read-more' onClick={() => setIsShow(!isShow)}>
        {isShow ? `show less` : 'read more'}
      </span>
      <CopyToClipboard text={title}>
        <button
          className='copy-to-clipboard'
          onClick={() => {
            setIsCopied(true);
          }}
        >
          {isCopied ? 'copied' : 'copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default Facts;
