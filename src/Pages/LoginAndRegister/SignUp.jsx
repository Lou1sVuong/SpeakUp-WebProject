import React from "react";
import styles from "../../Assets/Styles/LoginAndRegister.module.css";
import LoginImg from "../../Assets/Image/Login/Login.jpg";
import useScrollToTop from "../../Hooks/useScrollToTop";
import Input from "../../Components/Common/Input/Input";
import Button from "../../Components/Common/Button/Button";
import clsx from "clsx";
import { Link } from "react-router-dom";
function SignUp() {
useScrollToTop();
  return (
    <div className={styles.LoginContair}>
      <div className={styles.col}>
        <img src={LoginImg} alt="" />
      </div>
      <div className={clsx(styles.col, styles.colLogin)}>
        <div className={styles.LoginBox}>
          <h2>Sign Up</h2>
          <div className={styles.row}>
            <p>Full Name</p>
            <Input
              width="100%"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.row}>
            <p>Email Address</p>
            <Input
              width="100%"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className={styles.row}>
            <p>Password</p>
            <Input
              width="100%"
              type="text"
              placeholder="Enter Password "
            />
          </div>
          <div className={styles.btn}>
          <Button primary width={"100%"}>
          Sign Up
          </Button>
          </div>
          <div className={clsx(styles.row, styles.backPage)}>
            <p>Already have an account? <Link to="/Login"><span>Log in</span></Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
