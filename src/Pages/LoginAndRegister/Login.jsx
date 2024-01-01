import React from "react";
import styles from "../../Assets/Styles/LoginAndRegister.module.css";
import LoginImg from "../../Assets/Image/Login/Login.jpg";
import useScrollToTop from "../../Hooks/useScrollToTop";
import Input from "../../Components/Common/Input/Input";
import CheckBox from "../../Components/Common/CheckBox/CheckBox";
import Button from "../../Components/Common/Button/Button";
import clsx from "clsx";
import Google from "../../Assets/ComponentSVG/Google";
import FacebookFill from "../../Assets/ComponentSVG/FacebookFill";
import Instagram from "../../Assets/ComponentSVG/Instagram";
import { Link } from "react-router-dom";

function Login() {
  useScrollToTop();
  return (
    <div className={styles.LoginContair}>
      <div className={styles.col}>
        <img src={LoginImg} alt="" />
      </div>
      <div className={clsx(styles.col, styles.colLogin)}>
        <div className={styles.LoginBox}>
          <h2>Log In</h2>
          <p className={styles.SignUp}>
            New to Speak Up?{" "}
            <Link to="/SignUp">
              <span> Sign Up</span>
            </Link>
          </p>
          <div className={styles.row}>
            <p>Email or username</p>
            <Input
              width="100%"
              type="text"
              placeholder="Enter your Email or username"
            />
          </div>
          <div className={styles.row}>
            <p>Password</p>
            <Input
              width="100%"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className={styles.row}>
            <div className={styles.actionPass}>
              <div className={styles.CheckBoxContainer}>
                <CheckBox />
                <span>Remember Me</span>
              </div>
              <Link to="/ResetPassWord">
                <span className={styles.forget}>Forgot password?</span>
              </Link>
            </div>
          </div>
          <div className={styles.btn}>
            <Button primary width={"100%"}>
              Log In
            </Button>
          </div>
          <div className={styles.ortherLogin}>
            <div className={styles.line}>
              <span>Or continue with</span>
            </div>
            <div className={styles.boxSocial}>
              <Link to="/LogGoogle">
                <Google />
              </Link>
              <Link to="/LogFacebook">
                <FacebookFill />
              </Link>
              <Link to="/LogIns">
                <Instagram />
              </Link>
            </div>
            <p className={styles.SignUpBold}>
              Don’t have an Accoount?
              <Link to="/SignUp">
                <span> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
