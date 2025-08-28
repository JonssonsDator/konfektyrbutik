import React from 'react';
import styles from './Features.module.css';

const FeatureCard = ({ icon, title, description }) => {
    const Icon = icon
    return (
        <div className={styles.card}>
            <Icon size={36} className={styles.icon} aria-hidden="true" />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
}

export default FeatureCard