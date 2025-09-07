import React from 'react';
import Button from '../UI/Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Godalivets Konfektyr - <span>Din lokala konfektyr butik</span>
                </h1>
                <p className={styles.subtitle}>
                    Upptäck ett färgstarkt sortiment av handgjorda godisar och delikatesser.
                </p>
                <div className={styles.actions}>
                    <Button variant="primary" to='/selection'>
                        Utforska vårt sortiment
                    </Button>
                    <Button variant="secondary" to='/about'>
                        Läs mer om oss
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero;