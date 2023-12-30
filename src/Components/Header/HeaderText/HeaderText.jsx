import React, { useState, useEffect } from 'react';

function HeaderText({ style, text, dark, isActive, onClick }) {
  const [currentStyle, setCurrentStyle] = useState(style);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isActive) {
      setCurrentStyle('active');
    } else {
      setCurrentStyle(style);
    }
  }, [isActive, style]);

  let textStyle = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '1.1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    cursor: 'pointer',
    color: dark ? 'var(--Neutral-white, #FFF)' : 'var(--Neutral-Black1-0C0C0C, #0C0C0C)',
  };

  const handleOnClick = () => {
    onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (currentStyle === 'active') {
    textStyle = {
      ...textStyle,
      color: 'var(--primary-primary, #0065F4)',
      fontWeight: 700,
    };
  } else if (isHovered) {
    textStyle = {
      ...textStyle,
      color: 'var(--Neutral-gray-BDBDBD, #BDBDBD)',
    };
  }

  return (
    <span
      style={textStyle}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
}

export default HeaderText;
