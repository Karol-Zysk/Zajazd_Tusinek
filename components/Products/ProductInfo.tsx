import React from "react";
import { CategoryType } from "../../type";
import styles from "./Products.module.css";



const ProductInfo:React.FC<CategoryType> = ({ category }) => {
  return (
    <div className={styles.info}>
      <div className={styles.flex_wrapper}>
        <div className={styles.line} />
        <h1 className={styles.title}>{category.title}</h1>
        <div className={styles.line} />
      </div>
      <h2>{category.dlugiOpis}</h2>
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
    </div>
  );
};

export default ProductInfo;
