import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useEffect } from "react";
import HeaderText from "./HeaderText/HeaderText";
import SelectLang from "../SelectLang/SelectLang";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function Header({ light, dark }) {
  const listNav = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/Courses" },
    { name: "Contact", link: "/Contact" },
    { name: "About us", link: "/About" },
    { name: "Test Profile", link: "/User/MyProfile" },
  ];

  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const foundIndex = listNav.findIndex((item) => item.link === location.pathname);
    setActiveIndex(foundIndex);
  }, [listNav, location]);

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
              <Link to={item.link}>
                <HeaderText
                  text={item.name}
                  dark={dark}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.userBox}>
        <Link to="/Login">
          <span className="material-symbols-outlined">person</span>
        </Link>
        <SelectLang lang="EN" />
      </div>
    </nav>
  );
}

export default Header;
