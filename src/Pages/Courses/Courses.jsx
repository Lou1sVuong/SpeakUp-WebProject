import React, { useState } from 'react';
import styles from './Courses.module.css';
import Button from '../../Components/Common/Button/Button';
import CourseCard from '../../Components/Common/CourseCard/CourseCard';
import { courseData } from '../../Pages/Courses/courseData';
import useScrollToTop from '../../Hooks/useScrollToTop';

function Courses() {
  useScrollToTop()
  const [showAllCourses, setShowAllCourses] = useState(false);

  let coursesToDisplay = showAllCourses ? courseData : courseData.slice(0, 9);

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>English Courses</h2>
      <div className={styles.list}>
        {coursesToDisplay.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            lesson={course.lesson}
            student={course.student}
            level={course.level}
            score={Math.round(course.score)}
          />
        ))}
      </div>
      <div className={styles.viewMore}>
        {!showAllCourses && (
          <Button
            nofillPrimary
            width="24rem"
            rightIcon={<i className="fas fa-chevron-right"></i>}
            onClick={() => setShowAllCourses(true)}
          >
            See All Courses
          </Button>
        )}
        {showAllCourses && (
          <Button
            nofillPrimary
            width="24rem"
            rightIcon={<i className="fas fa-chevron-right"></i>}
            onClick={() => setShowAllCourses(false)}
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
}

export default Courses;
