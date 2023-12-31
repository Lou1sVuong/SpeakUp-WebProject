import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useEffect } from "react";
import HeaderText from "./HeaderText/HeaderText";
import SelectLang from "../SelectLang/SelectLang";
import clsx from "clsx";

function Header({ light, dark }) {
  const listNav = ["Home", "Courses", "Contact us", "About us"];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleHeaderTextClick = (index) => {
      setActiveIndex(index);
    };
    useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector(`.${styles.header}`);
        if (header && window.scrollY > 80) {
          header.classList.add(styles.active);
        } else if (header) {
          header.classList.remove(styles.active);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [styles.header]);
  return (
    <nav className={clsx(styles.header, { [styles.bgLight]: light, [styles.bgDark]: dark })}>
      {light ? <Logo light /> : dark ? <Logo dark /> : light}
      <ul className={styles.ulNav}>
        {listNav.map((item, index) => {
          return (
            <li key={index}>
              <HeaderText
                text={item}
                dark={dark}
                isActive={activeIndex === index}
                onClick={() => handleHeaderTextClick(index)}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.userBox}>
        <span className="material-symbols-outlined">person</span>
        <SelectLang lang="EN" />
      </div>
    </nav>
  );
}

export default Header;
