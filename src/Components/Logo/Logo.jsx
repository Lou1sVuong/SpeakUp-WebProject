import React from 'react';
import styles from './Logo.module.css';
import LogoBlue from '../../Assets/Svg/LogoBlue.svg';
import LogoWhite from '../../Assets/Svg/LogoWhite.svg';

function Logo({ light, dark }) {
  const containerClass = styles.containerLogo;
  const textClass = light ? styles.textLight : dark ? styles.textDark : '';

  return (
    <div>
      <div className={containerClass}>
        {light && <img src={LogoBlue} alt="Logo" />}
        {dark && <img src={LogoWhite} alt="Logo" />}
        <span className={textClass}>Speak up</span>
      </div>
    </div>
  );
}

export default Logo;
