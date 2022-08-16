import React from "react";
import { CategoryType } from "../../type";
import styles from "./Products.module.css";
import { motion } from "framer-motion";

const infoAnimate = {
  offscreen: { x: 0, y: -25, opacity: 0 },
  onscreen: {
    x: 0,
    y: -75,
    opacity: 1,

    transition: { type: "spring", duration: 1 },
  },
};

const ProductInfo: React.FC<CategoryType> = ({ category }) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.1 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.01 }}
      variants={infoAnimate}
      className={styles.info}
    >
      <div className={styles.flex_wrapper}>
        <div className={styles.line} />
        <h1 className={styles.title}>{category.title}</h1>
        <div className={styles.line} />
      </div>
      <h2 className={styles.long_desc}>{category.dlugiOpis}</h2>
      {category.cennik.map((productList) => {
        return (
          <div className={styles.list_item_wrapper} key={productList.id}>
            <p className={styles.list_item}>
              <span className={styles.product_name}>{productList.name}</span>

              {productList.price && (
                <>
                  <span className={styles.price}>: {productList.price}</span>
                  <span> {productList.qty}</span>
                </>
              )}
              {productList.info && (
                <span className={styles.honey_info}>: {productList.info}</span>
              )}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProductInfo;
