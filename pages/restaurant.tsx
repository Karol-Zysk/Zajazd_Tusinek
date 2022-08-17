import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { restauracja } from "../data";
import { RestaurantDataType } from "../type";
import styles from "../components/Restaurant/Restaurant.module.css";
import Restaurant from "../components/Restaurant/Restaurant";

const products: NextPage<RestaurantDataType> = ({ restaurantData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tusinkowe Smaki</title>
        <meta
          name="description"
          content="Restauracja Tusinek Świeże, Regionalne potrawy"
        />
      </Head>
      <Restaurant restaurantData={restaurantData} />
    </div>
  );
};

export default products;

export const getStaticProps = async () => {
  const restaurantData = restauracja;
  return {
    props: { restaurantData },
  };
};
