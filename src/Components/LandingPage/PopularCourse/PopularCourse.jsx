import React from 'react';
import CourseCard from '../../Common/CourseCard/CourseCard';
import styles from './PopularCourse.module.css';
import Button from '../../Common/Button/Button';
function PopularCourse() {
  const courseData = [
    {
      image: 'https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg',
      title: 'Learning historical words and sentences',
      lesson: 10,
      student: 200,
      level: 'Intermediate',
      score: 4,
    },
    {
      image: 'https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg',
      title: 'Learning historical words and sentences',
      lesson: 8,
      student: 180,
      level: 'Beginner',
      score: 3.5,
    },
    {
      image: 'https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg',
      title: 'Learning historical words and sentences',
      lesson: 12,
      student: 250,
      level: 'Advanced',
      score: 4.8,
    },
    {
      image: 'https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg',
      title: 'Learning historical words and sentences',
      lesson: 12,
      student: 250,
      level: 'Advanced',
      score: 3.8,
    },
    {
      image: 'https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg',
      title: 'Learning historical words and sentences',
      lesson: 12,
      student: 250,
      level: 'Advanced',
      score: 2.8,
    },
    {
      image: 'https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg',
      title: 'Learning historical words and sentences',
      lesson: 12,
      student: 250,
      level: 'Advanced',
      score: 4.8,
    },
  ];

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Popular Course</h2>
      <div className={styles.list}>
        {courseData.map((course, index) => (
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
      <Button nofillPrimary width="24rem" rightIcon={<i class="fas fa-chevron-right"></i>}>See All Courses</Button>
      </div>
    </div>
  );
}

export default PopularCourse;
