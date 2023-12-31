import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Sale from '../../Components/LandingPage/Sale/Sale';
import Hero from '../../Components/LandingPage/Hero/Hero';
import Introduction from '../../Components/LandingPage/Introduction/Introduction';
import PopularCourse from '../../Components/LandingPage/PopularCourse/PopularCourse';

function Home() {
  return (
    <>
      <Header light />
      <Sale />
      <Hero />
      <Introduction />
      <PopularCourse />
      <Footer dark />
    </>
  );
}

export default Home;
