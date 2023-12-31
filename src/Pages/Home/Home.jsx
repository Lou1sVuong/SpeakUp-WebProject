import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sale from '../../Components/LandingPage/Sale/Sale';
import Hero from '../../Components/LandingPage/Hero/Hero';
import Introduction from '../../Components/LandingPage/Introduction/Introduction';
import PopularCourse from '../../Components/LandingPage/PopularCourse/PopularCourse';
import TestYourEn from '../../Components/LandingPage/TestYourEn/TestYourEn';
import AboutLandingPage from '../../Components/LandingPage/AboutLandingPage/AboutLandingPage';
import CommentLP from '../../Components/LandingPage/CommentLP/CommentLP';

function Home() {
  return (
    <>
      <Header light />
      <Sale />
      <Hero />
      <Introduction />
      <PopularCourse />
      <TestYourEn />
      <AboutLandingPage/>
      <CommentLP/>
      <Footer dark />
    </>
  );
}

export default Home;
