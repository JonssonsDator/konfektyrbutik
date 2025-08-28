import React, { useEffect, useState } from "react";
import CandyGrid from "../components/CandyGrid/CandyGrid";
import styles from "./Selection.module.css";

const Selection = () => {
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    import("../data/candies.json").then((data) => {
      setCandies(data.default);
    });
  }, []);

  return (
    <main className={styles.selection}>
      <h1 className={styles.heading}>Vårt sortiment</h1>
      <p className={styles.subheading}>
        Här hittar du våra populäraste godissorter – allt från surt till sött.
      </p>
      <CandyGrid candies={candies} />
    </main>
  );
};

export default Selection;
