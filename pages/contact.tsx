import Head from "next/head";
import React from "react";
import styles from "../components/Accomodations/Accomodations.module.css";
import Contact from "../components/Contact/Contact";

const contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kontakt</title>
        <meta name="description" content="Kontakt Email Napisz do nas" />
      </Head>

      <Contact />
    </div>
  );
};

export default contact;
