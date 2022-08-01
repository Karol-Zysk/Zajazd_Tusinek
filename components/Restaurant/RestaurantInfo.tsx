import React from "react";
import { RestaurantDataType } from "../../type";
import styles from "./Restaurant.module.css";
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

const RestaurantInfo: React.FC<RestaurantDataType> = ({
  restaurantData,
  menuIndex,
  imgIndex,
}) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.1 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.4 }}
      variants={infoAnimate}
      className={styles.info}
    >
      {restaurantData.map((restaurantCategory, index) => {
        return (
          <div key={restaurantCategory.id}>
            {menuIndex === index && (
              <h1>
                {restaurantCategory.photos.map((dish, index) => {
                  return (
                    <div key={dish.id}>
                      {imgIndex === index && (
                        <>
                          {" "}
                          <h1>{dish.title}</h1>
                          <h2>{dish.subtitle}</h2>
                          <p>{dish.comment}</p>
                          <p>Cena : {dish.cena}</p>
                        </>
                      )}
                    </div>
                  );
                })}
              </h1>
            )}
          </div>
        );
      })}
      {/* <div className={styles.flex_wrapper}>
        <div className={styles.line} />
        <h1 className={styles.title}>{menuCategory.name}</h1>
        <div className={styles.line} />
      </div>
      <h2 className={styles.long_desc}>{menuCategory.name}</h2>
      {menuCategory.photos.map((productList) => {
        return (
          <div className={styles.list_item_wrapper} key={productList.id}>
            <p className={styles.list_item}>
              <span className={styles.product_name}>{productList.comment}</span>

              {productList.cena && (
                <>
                  <span className={styles.price}>: {productList.cena}</span>
                  <span> {productList.id}</span>
                </>
              )}
              {productList.comment && (
                <span className={styles.honey_info}>: {productList.text}</span>
              )}
            </p>
          </div>
        );
      })} */}
    </motion.div>
  );
};

export default RestaurantInfo;
