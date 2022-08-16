import Image from "next/image";
import React from "react";
import { AwardsType } from "../../type";
import CircleCut1 from "../Circle/CircleCut1";
import CircleCut2 from "../Circle/CircleCut2";
import styles from "./Awards.module.css";
import { motion } from "framer-motion";
import AwardsContact from "./AwardsContact";
import AwardsInfo from "./AwardsInfo";

const imageAnimate = {
  offscreen: { x: -15, y: 15, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 0.6 },
  },
};

const Awards: React.FC<AwardsType> = ({ awardsList, images }) => {
  return (
    <>
      <CircleCut1 width="30vw" height="30vw" top="-1rem" right="-3rem" />
      <CircleCut1 width="35vw" height="35vw" top="30%" left="10%" />
      <CircleCut2 width="45vw" height="45vw" bottom="0%" left="52%" />
      <div className={styles.header_wrapper}>
        <div className={styles.flex_wrapper}>
          <div className={styles.line_link} />
          <h1 className={styles.header}>Nagrody i Wyróżnienia</h1>
          <div className={styles.line_link} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <>
          <motion.div
            transition={{ staggerChildren: 0.1 }}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
            className={styles.photos}
          >
            {images.map((img) => {
              return (
                <motion.div
                  key={img.url}
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
                    src={`/images/nagrody/${img.url}`}
                    objectFit="contain"
                    className={styles.image}
                    layout="fill"
                    alt=""
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <AwardsInfo images={images} awardsList={awardsList} />
        </>
      </div>{" "}
      <AwardsContact />
    </>
  );
};

export default Awards;
