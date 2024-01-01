import React from "react";
import styles from "../../Assets/Styles/LoginAndRegister.module.css";
import LoginImg from "../../Assets/Image/Login/Login.jpg";
import Input from "../../Components/Common/Input/Input";
import Button from "../../Components/Common/Button/Button";
import clsx from "clsx";
import { Link } from "react-router-dom";

function ResetPass() {
  return (
    <div className={styles.LoginContair}>
      <div className={styles.col}>
        <img src={LoginImg} alt="" />
      </div>
      <div className={clsx(styles.col, styles.colLogin)}>
        <div className={styles.LoginBox}>
          <h2>Reset Password</h2>
          <p className={styles.SignUp}>
            Enter the email addresses or mobile number associated with your
            account .
          </p>
          <div className={styles.row}>
            <p>Email or Mobile Number</p>
            <Input
              width="100%"
              type="text"
              placeholder="Enter Email or Mobile Number"
            />
          </div>
          <div className={styles.btn}>
            <Button primary width={"100%"}>
              CONTINUE
            </Button>
          </div>
          <div className={clsx(styles.row, styles.backPage)}>
            <p>
              Return to{" "}
              <Link to="/Login">
                <span>Log in</span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
