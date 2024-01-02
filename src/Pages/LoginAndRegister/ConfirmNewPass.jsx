import React from "react";
import styles from "../../Assets/Styles/LoginAndRegister.module.css";
import LoginImg from "../../Assets/Image/Login/Login.jpg";
import Input from "../../Components/Common/Input/Input";
import Button from "../../Components/Common/Button/Button";
import clsx from "clsx";
import { Link } from "react-router-dom";

function ConfirmNewPass() {
  return (
    <div className={styles.LoginContair}>
      <div className={styles.col}>
        <img src={LoginImg} alt="" />
      </div>
      <div className={clsx(styles.col, styles.colLogin)}>
        <div className={styles.LoginBox}>
          <h2>Confirm new Password</h2>
          <div className={styles.row}>
            <p>Enter a new Password</p>
            <Input
              width="100%"
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className={styles.row}>
            <p>Confirm New Password</p>
            <Input
              width="100%"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className={styles.btn}>
            <Button primary width={"100%"}>
            SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmNewPass
