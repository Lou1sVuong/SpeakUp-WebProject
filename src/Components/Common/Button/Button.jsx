import React from 'react';
import styles from './Button.module.css';

function Button({ primary, secondary, rightIcon, leftIcon, onClick, children }) {
  const buttonClasses = `
    ${styles.button}
    ${primary ? styles.primary : ''}
    ${secondary ? styles.secondary : ''}
  `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.text}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
