import React, { useEffect } from "react";
import styles from "./Login.module.css";
import LoginImg from "../../Assets/Image/Login/Login.jpg";
import useScrollToTop from "../../Hooks/useScrollToTop";
import Input from "../../Components/Common/Input/Input";

function Login() {
  useScrollToTop();
  return (
    <div className={styles.LoginContair}>
      <div className={styles.col}>
        <img src={LoginImg} alt="" />
      </div>
      <div className={styles.col}>
        <div className={styles.LoginBox}>
          <h2>Log In</h2>
          <p>New to Speak Up? Sign Up</p>
          <div className={styles.row}>
            <p>Email or username</p>
            <Input type="text" placeholder="Enter your Email or username" />
          </div>
          <div className={styles.row}>
            <p>Password</p>
            <Input type="password" placeholder="Enter your Password" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
