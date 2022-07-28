/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Accomodations.module.css";

const AccomodationsContact = () => {
  return (
    <div className={styles.welcome_content}>
      <div className={styles.flex_wrapper} style={{ marginBottom: "2rem" }}>
        <div className={styles.line} style={{ border: " 1px solid green" }} />
        <h1 className={styles.contact_h1}>
          <span style={{ color: "green", fontSize: "2.3rem" }}>C</span>ennik{" "}
        </h1>{" "}
        <div className={styles.line} />
      </div>
<div className={styles.prices_wrapper}><p className={styles.contact_subtitle}>
        Kameralna i domowa atmosfera oraz tradycyjny charakter.
      </p>
      <p className={styles.contact_text}>
        W <b>Naszym Zajeździe</b> mamy do dyspozycji 17 pokoi umożliwiających
        przenocowanie 45 osób.
      </p>{" "}
      <p className={styles.contact_text}>
        Posiadamy łóżeczka dla dzieci, które można dostawić do niektórych pokoi.
      </p>{" "}
      <p className={styles.contact_subtitle}>Cena za dobę</p>
      <p className={styles.contact_text}>
        Nocleg w pokoju 2,3,4 - osobowym: <b>100zł/osoba.</b>
      </p>
      <p className={styles.contact_text}>
        Nocleg w pokoju 1 - osobowym: <b>110zł/osoba.</b>
      </p>
      <p className={styles.contact_text}>
        dziecko w wieku 1-7 lat <b>75zł.</b>{" "}
      </p>
      <p className={styles.contact_text}>
        Dzieci do 1 roku życia: <b>bezpłatnie.</b>{" "}
      </p>
      <p className={styles.contact_subtitle}>Śniadania</p>
      <p className={styles.contact_text}>
        Osoba dorosła: <b>35zł</b>
      </p>
      <p className={styles.contact_text}>
        Dzieci w wieku 1-7 lat: <b>25zł</b>
      </p>
      <p className={styles.contact_text}>
        Śniadanie w formie bufetu: <b>40zł/osoba</b>
      </p>
      <p className={styles.contact_subtitle}>Dodatkowe opłaty</p>
      <p className={styles.contact_text}>
        Śniadanie w formie bufetu: <b>40zł/osoba</b>
      </p>
      <p className={styles.contact_text}>
        Zwierzęta w hotelu za dopłatą: <b>20zł/doba.</b><br></br> (własciciel zobowiązany
        jest do zapewnienia legowiska - zwierzęta nie mogą spać na meblach oraz
        w pełni odpowiada za szkody wynikłe zarówno w pomieszczeniach jak i na
        terenie.)
      </p>
      <p className={styles.contact_text}>
        Śniadanie w formie bufetu: <b>40zł/osoba</b>
      </p></div>
      
      <h2 className={styles.contact_h2}>Serdecznie zapraszamy!</h2>
    </div>
  );
};

export default AccomodationsContact;
