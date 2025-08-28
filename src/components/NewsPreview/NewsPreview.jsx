import React from 'react';
import Button from '../UI/Button';
import styles from './NewsPreview.module.css';

const NewsPreview = () => {
    return (
        <section className={styles.news}>
            <h2 className={styles.heading}>Senaste Nytt</h2>
            <p className={styles.text}>
                Håll dig uppdaterad med våra senaste nyheter, erbjudanden och evenemang. Klicka nedan för att läsa mer om vad som händer hos Mönsterås Konfektyr.
            </p>
            <Button variant="secondary" to='/news'>
                Läs våra nyheter
            </Button>
        </section>
    );
}

export default NewsPreview;