/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import { RestaurantDataType } from "../../type";
import styles from "./Restaurant.module.css";
import { motion } from "framer-motion";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantContact from "./RestaurantContact";
import CircleCut1 from "../Circle/CircleCut1";
import CircleCut2 from "../Circle/CircleCut2";

const imageAnimate = {
  offscreen: { x: -15, y: 15, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 0.6 },
  },
};

const Restaurant: React.FC<RestaurantDataType> = ({ restaurantData }) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);
  const [imgIndex, setImgIndex] = useState(1);

  const showProducts = (index: number) => {
    setShow(!show);
    setNumber(index + 1);
  };

  const handleImgIndex = (index: number) => {
    setImgIndex(index);
  };

  const productName = restaurantData.map((menuCategory, index) => {
    return (
      <motion.h1
        className={index !== 0 ? `${styles.header}` : `${styles.header_menu}`}
        style={{
          filter: number === index + 1 ? "brightness(1.2)" : undefined,
          transform: number === index + 1 ? "scale(1.2)" : undefined,
        }}
        onClick={() => showProducts(index)}
        key={menuCategory.id}
      >
        <>
          <span className={index === 0 ? undefined : `${styles.first_letter}`}>
            {menuCategory.name[0]}
          </span>{" "}
          {menuCategory.name.slice(1, menuCategory.name.length)}
        </>
      </motion.h1>
    );
  });

  return (
    <>
      <CircleCut1 width="30vw" height="30vw" top="-1rem" right="-3rem" />
      <CircleCut2 width="38vw" height="38vw" bottom="0" left="65%" />
      <div className={styles.header_wrapper}>
        {" "}
        <div className={styles.flex_header}>
          <div className={styles.line_menu} />
          {productName[0]}
          <div className={styles.line_menu} />
        </div>
        {productName.slice(1, productName.length)}
      </div>
      <div className={styles.wrapper}>
        {restaurantData.map((menuCategory, index) => {
          return (
            <>
              {number === menuCategory.id ? (
                <>
                  {" "}
                  <motion.div
                    transition={{ staggerChildren: 0.1 }}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.4 }}
                    className={styles.photos}
                  >
                    {menuCategory.photos.map((img, index) => {
                      return (
                        <motion.div
                          onClick={() => handleImgIndex(index)}
                          key={img.id}
                          variants={imageAnimate}
                          className={styles.img_container}
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              duration: 0.5,
                            },
                          }}
                        >
                          <Image
                            style={{ borderRadius: "10px" }}
                            src={`/images/menu/${img.img}`}
                            objectFit="cover"
                            layout="fill"
                            alt=""
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                  <RestaurantInfo
                    imgIndex={imgIndex}
                    menuIndex={index}
                    restaurantData={restaurantData}
                  />
                </>
              ) : null}
            </>
          );
        })}
      </div>{" "}
      <RestaurantContact />
    </>
  );
};

export default Restaurant;
