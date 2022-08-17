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
const infoAnimate2 = {
  offscreen: { x: 0, y: -25, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 1 },
  },
};
const dishAnimate = {
  offscreen: { x: 0, y: 20, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 0.7 },
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
      viewport={{ once: true, amount: 0.1 }}
      variants={infoAnimate}
      className={styles.info}
    >
      {restaurantData.map((restaurantCategory, index) => {
        return (
          <div id="dish"  key={restaurantCategory.id}>
            {menuIndex === index && (
              <div>
                {restaurantCategory.photos.map((dish, index) => {
                  return (
                    <motion.div variants={infoAnimate2} key={dish.id}>
                      {imgIndex === index && (
                        <>
                          <motion.div
                            variants={dishAnimate}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.4 }}
                            className={styles.flex_wrapper_restaurant}
                          >
                            <div className={styles.line_restaurant} />
                            <motion.h1
                            variants={dishAnimate}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.01 }} className={styles.title}>{dish.title}</motion.h1>
                            <div className={styles.line_restaurant} />
                          </motion.div>

                          <motion.p
                            variants={dishAnimate}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.4 }}
                            dangerouslySetInnerHTML={{ __html: dish.subtitle }}
                            className={styles.long_desc}
                          />
                          <motion.p
                            variants={dishAnimate}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.4 }} className={styles.dish_info}>{dish.comment}</motion.p>
                          {dish.cena && (
                            <motion.p
                            variants={dishAnimate}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.4 }} className={styles.price}>
                              Cena:{" "}
                              <b style={{ color: "green" }}>{dish.cena}</b>
                            </motion.p>
                          )}
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
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
