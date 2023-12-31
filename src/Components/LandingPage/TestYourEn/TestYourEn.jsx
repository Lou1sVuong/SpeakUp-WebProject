import React from 'react'
import styles from './TestYourEn.module.css'
import Button from '../../Common/Button/Button'
function TestYourEn() {
    return (
        <div className={styles.TestYourEn}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h1>Test Your English</h1>
                    <p>Try our quick, free online tests to find out what your level of English is, and which <span>SpeakUp</span> English Qualification might be best for you. There are tests suited for every level.</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.block}>
                    <Button primary width="18.75rem">Test Your English</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestYourEn
