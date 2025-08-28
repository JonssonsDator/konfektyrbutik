import React from 'react';
import Button from '../UI/Button';
import styles from './CTASection.module.css';
import { MapPin } from 'lucide-react';

const CTASection = () => {
    return (
        <section className={styles.cta}>
            <h2 className={styles.heading}>Gör ditt nästa köp idag och unna dig något sött!</h2>
            <Button variant="primary" to='/contact'>
                <MapPin size={20} />
                Hitta hit
            </Button>
        </section>
    );
}

export default CTASection;