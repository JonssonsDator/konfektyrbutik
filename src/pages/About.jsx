import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <main className={styles.about}>
      <h1 className={styles.heading}>Om Oss</h1>
      <section className={styles.sectionTop}>
        <h2>Vår lilla historia</h2>
        <p>
          Välkommen till vår lilla konfektyrbutik! Vi har funnits i hjärtat av
          staden i över 20 år och älskar att sprida glädje genom sötsaker.
            <br/>
          Hos oss hittar du både klassiska favoriter och spännande nyheter. Vårt
          mål är att skapa en plats där både stora och små kan hitta något som
          gör dagen lite sötare.
        </p>
      </section>
      <section className={styles.sectionBottom}>
        <h2>Vår Filosofi</h2>
        <p>
          Vi tror på kvalitet, gemenskap och en gnutta lekfullhet. Allt vårt
          godis är noga utvalt för att ge dig den bästa smakupplevelsen.
        </p>
      </section>
    </main>
  );
};

export default About;
