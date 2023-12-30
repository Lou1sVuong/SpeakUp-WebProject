import React, { useState } from 'react';
import styles from './SelectLang.module.css';
function SelectLang() {
    const [isHovered, setIsHovered] = useState(false);

    let textStyle = {
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        color: 'var(--Neutral-Black1-0C0C0C, #0C0C0C)',
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    if (isHovered) {
        textStyle = {
            ...textStyle,
            color: 'var(--Neutral-gray-BDBDBD, #BDBDBD)',
        };
    }

    return (
        <div className={styles.containerSelct}
            style={textStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span>EN</span>
            <span class="material-symbols-outlined">
keyboard_arrow_down
</span>
        </div>
    );
}

export default SelectLang;
