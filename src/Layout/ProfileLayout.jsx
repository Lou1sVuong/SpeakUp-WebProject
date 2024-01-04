import React from "react";
import MainLayout from "./MainLayout";
import AsideNav from "../Components/AsideNav/AsideNav";
import styles from "../Assets/Styles/ProfileLayout.module.css";
function ProfileLayout({ children }) {
  return (
    <div>
      <MainLayout>
        <section className={styles.main}>
          <AsideNav />
          <div>{children}</div>
        </section>
      </MainLayout>
    </div>
  );
}

export default ProfileLayout;
