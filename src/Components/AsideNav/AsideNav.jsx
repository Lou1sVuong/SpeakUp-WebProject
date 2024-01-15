import React, { useState, useEffect } from "react";
import styles from "./AsideNav.module.css";
import { Link, useLocation } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
function AsideNav() {
  const listNav = [
    {
      name: "Profile",
      icon: <i className="fas fa-user-circle"></i>,
      link: "/User/MyProfile",
    },
    {
      name: "My Courses",
      icon: <i className="fas fa-book-open"></i>,
      link: "/User/MyCourses",
    },
    {
      name: "Setting",
      icon: <i className="fas fa-cog"></i>,
      link: "/User/Setting",
    },
  ];

  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const foundIndex = listNav.findIndex(
      (item) => item.link === location.pathname
    );
    setActiveIndex(foundIndex);
  }, [listNav, location]);
  return (
    <aside className={styles.aside}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src="https://i.pinimg.com/736x/4a/4c/29/4a4c29807499a1a8085e9bde536a570a.jpg" alt="" />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>
            <span>Maya atay</span>
          </div>
          <div className={styles.address}>
            <div>
              {" "}
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>United Arab Emirates</span>
            </div>
          </div>
        </div>
      </div>
      <h2>Menu</h2>
      {listNav.map((item, index) => {
        return (
          <div key={index} className={styles.MenuBar}>
            <Link to={item.link}>
              <MenuBar
                icon={item.icon}
                text={item.name}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            </Link>
          </div>
        );
      })}
      <div className={styles.MenuBar}>
        <MenuBar
          logout={true}
          icon={<i className="fas fa-sign-out-alt"></i>}
          text="Logout"
          onClick={() => setActiveIndex(true)}
        />
      </div>
    </aside>
  );
}

export default AsideNav;
