import React from "react";
import CandyCard from "../CandyCard/CandyCard";
import styles from "./CandyGrid.module.css";

const CandyGrid = ({ candies }) => {
  return (
    <div className={styles.grid}>
      {candies.map((candy) => (
        <CandyCard key={candy.id} {...candy} />
      ))}
    </div>
  );
};

export default CandyGrid;
