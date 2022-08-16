/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Products.module.css";

const ProductsContact = () => {
  return (
    <div className={styles.welcome_content}>
      <div className={styles.flex_wrapper_contact} style={{marginBottom: "2rem"}}>
        <div className={styles.line} style={{border: " 1px solid green"}} />
        <h1 className={styles.contact_h1}>
          Szanowni Państwo
        </h1>{" "}
        <div className={styles.line} />
      </div>
      <p className={styles.contact_text}>
        Przedstawiamy <b>"Tusinkowe smaki"</b>, które mogą Państwo zamawiać w
        naszej restauracji i sklepie.
      </p>{" "}
      <p className={styles.contact_text}>
        Zachęcamy do składania zamówień. Prowadzimy <b>SPRZEDAŻ WYSYŁKOWĄ </b>!
        Tusinkowe smaki już jutro mogą być na Twoim stole.
      </p>{" "}
      <p className={styles.contact_text}>
        {" "}
        Za zakupy można zapłacić przy odbiorze lub przelewem na konto. Na
        zamówienia czekamy codziennie w godzinach 9:00 - 17:00.
      </p>
      <p className={styles.contact_contact}>
        <b>E-mail:</b>{" "}
        <a className={styles.contact_link} href="mailto:tusinek@tusinek.com.pl">
          tusinek@tusinek.com.pl
        </a>{" "}
        lub
        <a className={styles.contact_link} href="mailto:tobiasz552@wp.pl">
          {" "}
          biuro
        </a>
      </p>
      <p className={styles.contact_contact}>
        <b>Tel:</b> (89) 722 60 39 <i>lub</i> 666 337 887
      </p>{" "}
      <h2 className={styles.contact_h2}>Serdecznie zapraszamy!</h2>
    </div>
  );
};

export default ProductsContact;
