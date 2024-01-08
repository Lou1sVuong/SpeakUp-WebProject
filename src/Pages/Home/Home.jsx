import React from 'react';
import Sale from '../../Components/LandingPage/Sale/Sale';
import Hero from '../../Components/LandingPage/Hero/Hero';
import Introduction from '../../Components/LandingPage/Introduction/Introduction';
import PopularCourse from '../../Components/LandingPage/PopularCourse/PopularCourse';
import TestYourEn from '../../Components/LandingPage/TestYourEn/TestYourEn';
import AboutLandingPage from '../../Components/LandingPage/AboutLandingPage/AboutLandingPage';
import CommentLP from '../../Components/LandingPage/CommentLP/CommentLP';
import PricingPlan from '../../Components/LandingPage/PricingPlan/PricingPlan';
import useScrollToTop from '../../Hooks/useScrollToTop';

function Home() {
  useScrollToTop();
  return (
    <>
      <Sale />
      <Hero />
      <Introduction />
      <PopularCourse />
      <TestYourEn />
      <AboutLandingPage/>
      <CommentLP/>
      <PricingPlan/>
    </>
  );
}

export default Home;
