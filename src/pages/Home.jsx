import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import SelectionPreview from '../components/SelectionPreview/SelectionPreview';
import NewsPreview from '../components/NewsPreview/NewsPreview';
import CTASection from '../components/CTASection/CTASection';
import styles from './Home.module.css';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <div className={styles.section}>
                <SelectionPreview />
                <NewsPreview />
                <CTASection />
            </div>
        </main>
    );
}

export default Home;