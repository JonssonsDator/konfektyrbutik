import React from 'react';
import Button from '../UI/Button';
import styles from './SelectionPreview.module.css';

const SelectionPreview = () => {
    return (
        <section className={styles.selection}>
            <h2 className={styles.heading}>Populära favoriter</h2>
            <p className={styles.text}>
                Från klassiska favoriter till unika smaker - vi har något för alla smaker. Klicka nedan för att se hela vårt sortiment av handgjorda godisar och delikatesser.
            </p>
            <Button variant="primary" to='/selection'>
                Se vårt sortiment
            </Button>
        </section>
    );
}

export default SelectionPreview;