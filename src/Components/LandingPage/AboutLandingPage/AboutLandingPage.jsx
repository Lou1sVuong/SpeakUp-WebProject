import React from 'react'
import styles from './AboutLandingPage.module.css'
import AboutImg from '../../../Assets/Image/AboutLandingPage/About.png';
function AboutLandingPage() {
  return (
    <div className={styles.main}>
      <div className={styles.col}>
        <img src={AboutImg} alt="" />
      </div>
      <div className={styles.col}>
        <h2>About Us</h2>
        <h3>Online Group Courses</h3>
        <p>The learning experiences we create could only come from Cambridge. Our solutions for teaching and assessment are empowering millions of learners everywhere and are built on unique insights from our research, expertise and
speak Up is a quick and convenient online test to help higher education institutions and employers and groups of candidates. </p>
      </div>
    </div>
  )
}

export default AboutLandingPage
