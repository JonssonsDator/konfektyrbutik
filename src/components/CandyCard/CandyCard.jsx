import React from "react";
import Button from "../UI/Button";
import styles from "./CandyCard.module.css";

const CandyCard = ({ name, description, image }) => {
  return (
    <article className={styles.card}>
      <img
        src={image}
        alt={name}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default CandyCard;
