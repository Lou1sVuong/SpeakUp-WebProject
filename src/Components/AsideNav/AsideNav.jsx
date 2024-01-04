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
          <img src="https://s3-alpha-sig.figma.com/img/3170/76df/a57d49314359fd7606cce752f3324d5d?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HT3KUkMo5QwGIYVziV9t6hIJVcWeBKGUi4c~L7emcRC~01KaW-TqMEtWFZ~U-rm9HnGXxezMT0~6BOAwEKE8vF92kKXbj-lEghuQ2lOt5~64x-7tX~A0MTxZgLRMtGxgZpGNp9NUejoge8YuvBGZQ-bhgEUWK-N2IjE-~IaMpitG-LzJV~T-wFR8X6QJDZsKguFjLEkVvFNcPdzVrkvIjNOXow4VDC89x3d2z5dyqkaz6VJBuqSdSCD~jteK3ND50i65scrFXXrmgPbcY~NKI7jk0ma~qXVadPIlxGDd234o0ENv0wPKBvjKdgIrVtrO1bzkb32jdv6-1hODqpoaBw__" alt="" />
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
