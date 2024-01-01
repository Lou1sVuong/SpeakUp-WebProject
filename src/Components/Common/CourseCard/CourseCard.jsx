import React from "react";
import styles from "./CourseCard.module.css";
import Button from "../Button/Button";
import Score from ".././Score/Scrore";
import clsx from "clsx";

function CourseCard({ image, title, lesson, student, level, score }) {
  return (
    <div className={styles.CourseCard}>
      <div className={styles.imgBox}>
      <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={clsx(styles.row , styles.desc)}>
        <div>
          <span className={clsx(styles.logo , "fas fa-book")} ></span>
          <span>Lessons: {lesson}</span>
        </div>
        <div>
          <span className={clsx(styles.logo , "fas fa-user")}></span>
          <span>Students:{student}</span>
        </div>
        <div>
          <span  className={clsx(styles.logo , "fas fa-trophy")}></span>
          <span>{level}</span>
        </div>
      </div>
      <div className={styles.row}>
      <Button primary rightIcon={<i className="fas fa-chevron-right"></i>}>Start Course</Button>
      <Score score={score}/>
      </div>
    </div>
  );
}

export default CourseCard;
