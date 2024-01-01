import React from 'react'
import styles from './Hero.module.css'
import Button from '../../Common/Button/Button'
import HeroImg from '../../../Assets/Svg/Hero.svg'
function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Studying Online is now much easier</h1>
        <p>Speak Up is an interesting platform that will teach you in more an interactive way</p>
        <Button secondary width="8rem">Let’s start</Button>
      </div>
      <div className={styles.imgHero}>
        <img src={HeroImg} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
