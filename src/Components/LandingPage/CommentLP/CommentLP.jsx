import React from 'react';
import styles from './CommentLP.module.css';
import Star from '../../../Assets/ComponentSVG/Star';

const commentsData = [
  {
    stars: 5,
    comment: "I just had an honest-to-goodness conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!",
    author: "Jack Watson",
    daysAgo: "14 days"
  },
  {
    stars: 5,
    comment: "I just had an honest-to-goodness conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!",
    author: "Jack Watson",
    daysAgo: "14 days"
  },
  {
    stars: 5,
    comment: "I just had an honest-to-goodness conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it’s because of Speak Up!",
    author: "Jack Watson",
    daysAgo: "14 days"
  },
];

function CommentLP() {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>Here’s what others love about Speak Up</h1>
        <p>Our strong community is all learning together. Here’s what some of them say...</p>
      </div>
      <div className={styles.listCardCmt}>
        {commentsData.map((comment, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.listStar}>
              {[...Array(comment.stars)].map((_, starIndex) => (
                <Star key={starIndex} />
              ))}
            </div>
            <p className={styles.cmt}>{comment.comment}</p>
            <div className={styles.status}>
              <p>{comment.author}, <span>{comment.daysAgo}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentLP;
