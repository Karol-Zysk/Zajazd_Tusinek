import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { allProducts } from "../data";
import { AllProdusts } from "../type";
import styles from "./products/Product.module.css";

const products:NextPage<AllProdusts> = ({buyProducts}) => {

  console.log(buyProducts);
  
  return (
    <div className='container'>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta
          name="description"
          content="Tusinkowe Smaki Wędliny Sery Miody i inne"
        />
      </Head>
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
