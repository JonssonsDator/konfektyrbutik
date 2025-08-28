import React, { useEffect, useState } from "react";
import NewsGrid from "../components/NewsGrid/NewsGrid";
import styles from "./News.module.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    import("../data/news.json").then((data) => {
      setNews(data.default);
    });
  }, []);

  return (
    <main className={styles.news}>
      <h1 className={styles.heading}>Nyheter & Uppdateringar</h1>
      <p className={styles.subheading}>
        Här kan du läsa om nya produkter, erbjudanden och roliga tävlingar.
      </p>
      <NewsGrid news={news} />
    </main>
  );
};

export default News;
