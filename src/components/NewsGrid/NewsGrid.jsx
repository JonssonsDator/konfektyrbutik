import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./NewsGrid.module.css";

const NewsGrid = ({ news }) => {
  return (
    <div className={styles.grid}>
      {news.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NewsGrid;
