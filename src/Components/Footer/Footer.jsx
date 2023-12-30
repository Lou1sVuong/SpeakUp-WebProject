import React from "react";
import styles from "./Footer.module.css";
import mockData from "./mockDataFooter";
import clsx from "clsx";
function Footer({ light , dark}) {
  const ContactItem = ({ icon, text, href }) => (
    <div className={styles.rowInCol}>
      <span className="material-symbols-outlined">{icon}</span>{" "}
      <a href={href}>{text}</a>
    </div>
  );

  const data = mockData;

  return (
    <>
      <footer className={clsx({ [styles.bgLight]: light, [styles.bgDark]: dark })}>
        <div className={styles.Footer}>
          <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.quote}>
                Fluency is nothing more than <br /> mastering the 100 most{" "}
                <br /> important real-life <br /> conversations
              </p>
            </div>
            {Object.entries(data).map(([title, items], index) => (
              <div className={styles.col} key={index}>
                <h3>{title}</h3>
                {items.map((item, itemIndex) => (
                  <p className={styles.rowInCol} key={itemIndex}>
                    <ContactItem {...item} />
                  </p>
                ))}
              </div>
            ))}
          </div>
          <ul className={styles.socialBox}>
            <li>
              <a href="">
              <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
              <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="">
              <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
              <i class="fab fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.row2}>
          <p className={styles.AllRight}>© 2021 Speak up. All rights reserved</p>
          <div className={styles.block}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
