import { data } from "../../data";
import styles from "./Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { productType } from "../../type";
import { NextPage } from "next";

const Product: NextPage<productType> = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Design for Your Product</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className={styles.cardL}>
        {products.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image src={`/images/intro/${img.url}`} layout="fill" objectFit="cover" alt="" />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{products.title}</h1>
        <p className={styles.desc}>{products.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx: { params: { name: any } }) => {
  const name = ctx.params.name;
  const products = data.filter((item) => item.name === name)[0];
  return {
    props: { products },
  };
};

export default Product;
