import React from "react";
import styles from "./Introduction.module.css";
import Image01 from "../../../Assets/Image/Introduction/Image01.jpg";
import Image02 from "../../../Assets/Image/Introduction/Image02.webp";
import Image03 from "../../../Assets/Image/Introduction/Image03.jpg";
import clsx from "clsx";
function Introduction() {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={clsx(styles.blockBorder, styles.blockBorder01)}>
            <h3 className={styles.h3}>
              You can learn online and sit in Your Home
            </h3>
            <p className={styles.p1}>
              speak Up is a quick and convenient online test to help <br />{" "}
              higher education institutions and employers check the <br />{" "}
              English levels of individuals and groups of candidates.{" "}
            </p>
          </div>
        </div>
        <div className={styles.col}>
          <img src={Image01} alt="" />
          <h2>You Speak Up To 6 Month Faster Than Now</h2>
          <p>
            Our range of free teaching resources, lesson plans and activities is
            designed to help you prepare your students for our exams and tests.
            We also have a range of teaching qualifications, courses and support
            to help you as a teacher.
          </p>
          <div className={clsx(styles.blockBorder, styles.blockBorder02)}>
            <h4>Fun fact :</h4>
            <p>
              Did you know remember %95 of a massage when it’s watched vs only
              10% of what you read try it.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src={Image02} alt="Image 2" />
        </div>
        <div className={styles.col}>
          <h3>You can learn online and sit in class</h3>
          <p className={styles.p2}>
            speak Up is a quick and convenient online test to help higher
            education institutions and employers check the English levels of
            individuals and groups of candidates.{" "}
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3>
            Together we inspire learners to go <br /> further
          </h3>
          <p className={styles.p2}>
            Try our quick, free online tests to find out what your level of
            English is, and which Cambridge English Qualification might be best
            for you. at the end you will get recommendations on how to improve
            your English. Try our quick, free online tests to find out what your
            level of English is, and which Cambridge English Qualification might
            be best for you
          </p>
        </div>
        <div className={styles.col}>
          <img src={Image03} alt="Image 2" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
