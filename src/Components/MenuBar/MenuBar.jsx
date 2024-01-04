import React, { useState, useEffect } from 'react';

function MenuBar({ style, icon , text, logout , isActive, onClick }) {
  const [currentStyle, setCurrentStyle] = useState(style);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isActive) {
      setCurrentStyle('active');
    } else {
      setCurrentStyle(style);
    }
  }, [isActive, style]);
  let menuStyle = {
    display: 'flex',
    gap : "1.5rem",
    alignItems: 'center',
    padding: '0rem 1.5rem',
    height: '3rem',
    backgroundColor: 'transparent',
    color: logout ? 'var(--state-Error-light, #D50000)' : 'var(--Neutral-gray-404040, #404040)',
    fontFamily: 'Poppins',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    borderRadius: '0.5rem 0rem 0rem 0.5rem',
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
    menuStyle = {
      ...menuStyle,
      color: 'var(--primary-primary, #0065F4)',
      backgroundColor: 'var(--primary-tint-1, #E8EFFE)',
      borderRight: '4px inset var(--primary-primary, #0065F4)',
    };
  } else if (isHovered) {
    menuStyle = {
      ...menuStyle,
      backgroundColor: logout ? '#ffdede' : '#EDEDED',
      borderRight: logout ? ' 4px inset var(--state-Error-light, #D50000)' : '4px inset var(--primary-primary, #0065F4)',
    };
  }

  return (
    <div
      style={menuStyle}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {text}
    </div>
  );
}

export default MenuBar;
