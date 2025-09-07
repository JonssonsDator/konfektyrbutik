import React from "react";
import styles from "./Contact.module.css";
import { Clock, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <h1 className={styles.heading}>Kontakta Oss</h1>
      <p className={styles.intro}>
        Har du frågor, vill beställa större mängder godis eller bara säga hej?
        Hör gärna av dig till oss!
      </p>

      <div className={styles.wrapper}>
        <section className={styles.info}>
            <h2>Butiksinformation</h2>

            <div className={styles.infoRow}>
                <MapPin size={20} />
                <div>
                    <h3>Adress</h3>
                    <p>Konfektyrgatan 8 <br/> 123 45, Konfektyr</p>
                </div>
            </div>

            <div className={styles.infoRow}>
                <Phone size={20} />
                <div>
                    <h3>Telefon</h3>
                    <p>0499-123 456</p>
                </div>
            </div>

            <div className={styles.infoRow}>
                <Mail size={20} />
                <div>
                    <h3>E-post</h3>
                    <p>info@godalivetskonfektyr.se</p>
                </div>
            </div>

            <div className={styles.infoRow}>
                <Clock size={20} />
                <div>
                    <h3>Öppettider</h3>
                    <p>Onsd 10–18<br/> Lör 10–14 <br/> Sönd - Tisd, Fred Stängt</p>
                </div>
            </div>
        </section>

        <section className={styles.formSection}>
            <h2>Skicka ett meddelande</h2>
            <form className={styles.form}>
            <label>
                Namn
                <input type="text" name="name" required aria-required="true"/>
            </label>
            <label>
                E-post
                <input type="email" name="email" required aria-required="true"/>
            </label>
            <label>
                Meddelande
                <textarea name="message" placeholder="Berätta vad du vill..." required aria-required="true"></textarea>
            </label>
            <button type="submit">
                <Mail size={20}/>
                Skicka
            </button>
            </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
