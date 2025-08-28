import React from "react";
import styles from "./NewsCard.module.css";
import { Clock } from "lucide-react";

const NewsCard = ({ title, date, excerpt, category, image }) => {
  return (
    <article className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <header>
            <span className={styles.category}>{category}</span>
            <h3 className={styles.title}>{title}</h3>
        </header>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.info}>
            <span>
                <Clock size={16} />
                <time className={styles.date}>{new Date(date).toLocaleDateString("sv-SE")}</time>
            </span>
            <button className={styles.button}>
                Läs Mer
            </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
