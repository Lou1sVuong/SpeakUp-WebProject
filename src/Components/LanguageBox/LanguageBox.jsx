import React from 'react'
import styles from './LanguageBox.module.css'

function LanguageBox({ icon, name }) {
    return (
        <div className={styles.box}>
            {icon}
            <h3>{name}</h3>
        </div>
    )
}

export default LanguageBox
