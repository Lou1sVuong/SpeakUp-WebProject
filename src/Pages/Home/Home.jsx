import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sale from '../../Components/LandingPage/Sale/Sale';
import Hero from '../../Components/LandingPage/Hero/Hero';
import Introduction from '../../Components/LandingPage/Introduction/Introduction';
import CourseCard from '../../Components/Common/CourseCard/CourseCard';
import Image01 from '../../Assets/Image/Introduction/Image01.jpg'; // Đường dẫn hình ảnh

function Home() {
  const courseData = {
    image: Image01,
    title: 'Tên khóa học',
    lesson: 10,
    student: 200,
    level: 'Intermediate',
    score: 4,
  };

  return (
    <>
      <Header light />
      <Sale />
      <Hero />
      <Introduction />
      <CourseCard
        image={courseData.image}
        title={courseData.title}
        lesson={courseData.lesson}
        student={courseData.student}
        level={courseData.level}
        score={courseData.score}
      />
      <Footer dark />
    </>
  );
}

export default Home;
