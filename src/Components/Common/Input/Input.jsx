import React, { useState } from 'react';

function Input({ type = 'text', placeholder = '', width, height}) {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const inputStyle = {
    display: 'flex',
    width: width || '21rem',
    height: height || '3rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0.5rem',
    border: '1px solid var(--Neutral-gray-BDBDBD, #BDBDBD)',
    background: 'var(--Neutral-gray-F9F9F9, #F9F9F9)',
  };

  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    width: '2rem',
    height: '2rem',
    marginRight: '1rem',
  };

return (
    <div style={inputStyle}>
        <input
            type={inputType}
            placeholder={placeholder}
            style={{ width: 'calc(100% - 30px)', border: 'none', outline: 'none', background: 'transparent', padding: '0.5rem 2rem' }}
        />
        {type === 'password' && (
            <button onClick={togglePasswordVisibility} style={buttonStyle}>
                {inputType === 'password' ? <i className="far fa-eye"></i>  : <i className="far fa-eye-slash"></i>}
            </button>
        )}
    </div>
);
}

export default Input;
