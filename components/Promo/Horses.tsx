import React from "react";
import styles from './Promo.module.css'


const Horses = () => {
  return (
    <div>
      <p className={styles.medium_text}>
        W naszym gospodarstwie mamy Koniki Polskie (mylnie nazywanymi
        Tarpanami).
        Konie te służą u nas do rekreacji w sezonie letnim.
      </p>

      <p>Cennik jazd konnych:</p>

      <p>Oprowadzanie - 5 minut - 10zł</p>

      <p>Jazda samodzielna - 45 minut - 70zł</p>

      <p>Hipoterapia - 30 minut - 60zł</p>

      <p>Przejażdżka z ćwiczeniami - 20 minut - 50zł</p>

      <p>Teren 60 minut - 90 zł</p>

      <p>
        Nauka czyszczenia i siodłania / zajęcia teoretyczne - 30 minut - 15zł
      </p>

      <p>
        Jazdy odbywają sie po wcześniejszej rezerwacji i instruktorki - Zuza
        509-417-540 - prośba o smsa
      </p>
    </div>
  );
};

export default Horses;
