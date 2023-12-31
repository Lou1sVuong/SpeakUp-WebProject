import React from 'react'
import styles from './CommentLP.module.css'
import Star from '../../../Assets/ComponentSVG/Star';
function CommentLP() {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Here’s what others love about Speak Up </h1>
        <p>Our strong community are all learning together. Here’s what some of them say..... </p>
      </div>
      <div className={styles.listCardCmt}>
        <div className={styles.card}>
            <div className={styles.listStar}>
                <Star/> 
                <Star/> 
                <Star/> 
                <Star/> 
                <Star/> 
            </div>
            <p className={styles.cmt}>
            "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!"
            </p>
            <div className={styles.status}>
                <p>jack watson, <span>14 days</span></p>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.listStar}>
                <Star/> 
                <Star/> 
                <Star/> 
                <Star/> 
                <Star/> 
            </div>
            <p className={styles.cmt}>
            "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!"
            </p>
            <div className={styles.status}>
                <p>jack watson, <span>14 days</span></p>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.listStar}>
                <Star/> 
                <Star/> 
                <Star/> 
                <Star/> 
                <Star/> 
            </div>
            <p className={styles.cmt}>
            "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up! I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!"
            </p>
            <div className={styles.status}>
                <p>jack watson, <span>14 days</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CommentLP
