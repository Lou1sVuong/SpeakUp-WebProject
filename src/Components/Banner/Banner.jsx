import React from 'react'
import styles from './Banner.module.css'
function Banner({ heading, para , center}) {
  return (
    <section className={styles.main}>
      <div className={ center ? styles.bannerCenter : styles.banner}>
        <div className={styles.text}>
          <h1>{heading}</h1>
          <p>{para}</p>
        </div>
      </div>
        <div className={styles.graph}>
          <div className={styles.graph02}></div>
          <div className={styles.graph01}></div>
        </div>
    </section>
  )
}

export default Banner
