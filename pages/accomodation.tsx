import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { AccomodationsType } from "../type";
import styles from "../components/Accomodations/Accomodations.module.css";
import Accomodations from "../components/Accomodations/Accomodations";
import {  noclegi } from "../data";

const accomodation: NextPage<AccomodationsType> = ({ accomodations }) => {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Tusinek Noclegi</title>
        <meta
          name="description"
          content="Tusinek Noclegi Atrakcje"
        />
      </Head>

      <Accomodations accomodations={accomodations} />
    </div>
  );
};

export default accomodation;

export const getStaticProps = async () => {
  const accomodations = noclegi;

  return {
    props: { accomodations },
  };
};
