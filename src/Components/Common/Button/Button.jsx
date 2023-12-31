import React from 'react';
import styles from './Button.module.css';

function Button({ primary, secondary, nofillPrimary ,nofillSecondary, rightIcon, leftIcon, onClick, children, width  }) {
  const buttonClasses = `
    ${styles.button}
    ${primary ? styles.primary : ''}
    ${secondary ? styles.secondary : ''}
    ${nofillPrimary ? styles.nofillPrimary : ''}
    ${nofillSecondary ? styles.nofillSecondary : ''}

  `;

  const buttonStyle = {
    width: width || styles.button
  };

  return (
    <button className={buttonClasses} style={buttonStyle} onClick={onClick}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.text}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
