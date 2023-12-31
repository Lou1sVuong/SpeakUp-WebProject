import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sale from '../../Components/LandingPage/Sale/Sale'
import Hero from '../../Components/LandingPage/Hero/Hero'
import Introduction from '../../Components/LandingPage/Introduction/Introduction'

function Home() {
  return (
    <>
      <Header light/>
      <Sale />
      <Hero />
      <Introduction />
      <Footer dark />
    </>
  )
}

export default Home
