import React from 'react';
import { Gift, Heart, Award } from 'lucide-react';
import FeatureCard from './FeatureCard';
import styles from './Features.module.css';

const Features = () => {
    const features = [
        {
            icon: Award,
            title: 'Brett Utbud',
            description: 'Upptäck vårt stora utbud av handgjorda godisar, från klassiska favoriter till unika delikatesser.'
        },
        {
            icon: Heart,
            title: 'Service av Högsta Klass',
            description: 'Varje godis är nogrant utvalt av oss och består av den högsta kvalitén. Vi finns även nära dig och strävar efter att ge dig den bästa upplevelsen du kan tänka dig.'
        },
        {
            icon: Gift,
            title: 'Perfekt som Presenter',
            description: 'Vackra och personliga paket gör vårat godis perfekt att ge bort som present oavsett tillfälle.'
        }
    ];

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        {...feature}
                    />
                ))}
            </div>
        </section>
    );
}

export default Features;