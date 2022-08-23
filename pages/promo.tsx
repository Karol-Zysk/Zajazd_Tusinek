import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {  PromoType } from "../type";
import styles from "../components/Promo/Promo.module.css";
import { promoData } from "../data";
import Promo from "../components/Promo/Promo";

const promo: NextPage<PromoType> = ({ promoInfo }) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Tusinek Oferty Promocje</title>
        <meta
          name="description"
          content="Tusinek Oferty Promocje Aktualności"
        />
      </Head>

      <Promo promoInfo={promoInfo}  />
    </div>
  );
};


export default promo;

export const getStaticProps = async () => {
  const promoInfo = promoData;

  return {
    props: { promoInfo },
  };
};