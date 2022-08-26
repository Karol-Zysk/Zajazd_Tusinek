import React from "react";
import styles from "./Promo.module.css";

const Horses = () => {
  return (
    <div>
      <p className={styles.medium_text}>
        W naszym gospodarstwie mamy Koniki Polskie (mylnie nazywanymi
        Tarpanami). Konie te służą u nas do rekreacji w sezonie letnim.
      </p>
      <div className={styles.margin_top_div}>
        <p className={styles.bigger}>Cennik jazd konnych:</p>

        <p className={styles.medium_text}>
          Oprowadzanie - <span className={styles.color}>5 minut - 10zł</span>
        </p>

        <p className={styles.medium_text}>
          Jazda samodzielna -{" "}
          <span className={styles.color}>45 minut - 70zł</span>
        </p>

        <p className={styles.medium_text}>
          Hipoterapia - <span className={styles.color}>30 minut - 60zł</span>
        </p>

        <p className={styles.medium_text}>
          Przejażdżka z ćwiczeniami -{" "}
          <span className={styles.color}>20 minut - 50zł</span>
        </p>

        <p className={styles.medium_text}>
          Teren <span className={styles.color}>60 minut - 90 zł</span>
        </p>

        <p className={styles.medium_text}>
          Nauka czyszczenia i siodłania / zajęcia teoretyczne -{" "}
          <span className={styles.color}>30 minut - 15zł</span>
        </p>
      </div>
      <div className={styles.margin_top_div}>
        <p className={styles.bigger}>
          Jazdy odbywają sie po wcześniejszej rezerwacji i instruktorki - Zuza
          509-417-540 - prośba o smsa
        </p>
      </div>
    </div>
  );
};

export default Horses;
