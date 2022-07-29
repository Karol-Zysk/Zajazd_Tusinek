import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {  AwardsType } from "../type";
import styles from "../components/Awards/Awards.module.css";
import { awardIcons, nagrody } from "../data";
import Awards from "../components/Awards/Awards";

const awards: NextPage<AwardsType> = ({ awardsList, images }) => {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Tusinek Nagrody</title>
        <meta
          name="description"
          content="Tusinek Nagrody i Wyróżnienia"
        />
      </Head>

      <Awards awardsList={awardsList} images={images} />
    </div>
  );
};


export default awards;

export const getStaticProps = async () => {
  const awardsList = nagrody;
  const images = awardIcons;

  return {
    props: { awardsList, images },
  };
};
