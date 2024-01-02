import React, { useState } from 'react';

function TextArea({ placeholder = '', width, height }) {
  const [inputValue, setInputValue] = useState('');

  const textareaStyle = {
    display: 'flex',
    width: width || '21rem',
    height: height || '8rem',
    justifyContent: 'space-between',
    borderRadius: '0.5rem',
    border: '1px solid var(--Neutral-gray-BDBDBD, #BDBDBD)',
    background: 'var(--Neutral-gray-F9F9F9, #F9F9F9)',
    resize: 'none',
    padding: '1rem 2rem',
  };


  return (
    <div style={textareaStyle}>
      <textarea
        placeholder={placeholder}
        value={inputValue}
        style={{
          width: 'calc(100% - 30px)',
          border: 'none',
          outline: 'none',
          background: 'transparent',
          resize: 'none',
        }}
        onChange={(e) => setInputValue(e.target.value)}
        rows={4}
      />
     
    </div>
  );
}

export default TextArea;
