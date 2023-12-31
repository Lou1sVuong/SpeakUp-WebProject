import React from 'react'
import NotFoundImg from '../../Assets/Svg/NotFound.svg'
import Button from '../../Components/Common/Button/Button'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div>
      <section>
        <div className={styles.block404}>
          <img src={NotFoundImg} alt="" />
          <h1>This page could not be found</h1>
          <p>The page you are looking for might have been removed or temporarily unavailable.</p>
          <Link to="/"><Button primary>Back to Homepage</Button></Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound
