import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { allProducts } from "../data";
import { AllProdusts } from "../type";
import styles from "../components/Products/Products.module.css";
import Products from "../components/Products/Products";

const products: NextPage<AllProdusts> = ({ buyProducts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tusinkowe Smaki</title>
        <meta
          name="description"
          content="Tusinkowe Smaki Wędliny Sery Miody i inne"
        />
      </Head>
      <Products buyProducts={buyProducts} />
    </div>
  );
};

export default products;

export const getStaticProps = async () => {
  const buyProducts = allProducts;
  return {
    props: { buyProducts },
  };
};
