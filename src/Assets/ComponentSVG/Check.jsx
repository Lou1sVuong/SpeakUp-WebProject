import React from 'react';

function Check({ size, color, bg, padding }) {
    const svgStyle = {
        fill: color || 'white',
        fillOpacity: 1,
        width: size || '1rem',
        height: size || '1rem',
        padding: padding || '0.5rem', // Default padding if not provided
    };

    const circleStyle = {
        fill: bg || 'var(--primary-primary, #0065F4)',
        fillOpacity: 1,
    };

    const containerStyle = {
        width: size || '1rem',
        height: size || '1rem',
        backgroundColor: bg || 'var(--primary-primary, #0065F4)',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: padding || '0.1rem', 
    };

    return (
        <div style={containerStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 14 15">
                <circle cx="7" cy="7.5" r="6.5" style={circleStyle} />
                <path d="M5.12997 9.76053L2.69747 7.32803L1.86914 8.15053L5.12997 11.4114L12.13 4.41137L11.3075 3.58887" style={svgStyle} />
            </svg>
        </div>
    );
}

export default Check;
