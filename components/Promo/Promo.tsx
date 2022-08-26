import Image from "next/image";
import React, { useState } from "react";
import { PromoType } from "../../type";
import styles from "./Promo.module.css";
import { motion } from "framer-motion";
import CircleCut1 from "../Circle/CircleCut1";
import CircleCut2 from "../Circle/CircleCut2";
import Health from "./Health";
import Horses from "./Horses";
import EducationalFarm from "./EducationalFarm";
import Cheese from "./Cheese";

const imageAnimate = {
  offscreen: { x: -15, y: 15, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 0.6 },
  },
};

const Promo: React.FC<PromoType> = ({ promoInfo }) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);

  const showProducts = (index: number) => {
    setShow(!show);
    setNumber(index + 1);
  };

  const promoName = promoInfo.map((category, index) => {
    return (
      <h1
        key={index}
        className={styles.header}
        style={{
          filter: number === index + 1 ? "brightness(1.2)" : undefined,
          transform:
            number === index + 1 ? "scale(1.05) translateX(2%)" : undefined,
        }}
        onClick={() => showProducts(index)}
      >
        {category.name}
      </h1>
    );
  });

  const imageAnimate = {
    offscreen: { x: 0, y: 20, opacity: 0 },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,

      transition: { type: "spring", duration: 0.9 },
    },
  };

  return (
    <>
      <CircleCut1 width="30vw" height="30vw" top="-1rem" right="-3rem" />
      <CircleCut2 width="30vw" height="30vw" bottom="0" left="72%" />
      <header className={styles.main_title}>
        <h1 className={styles.main_title_text}>
          Aktualności i <span className={styles.main_title_color}>Promocje</span>
        </h1>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.header_wrapper}> {promoName}</div>
        {promoInfo.map((category, index) => {
          return (
            <React.Fragment key={index}>
              {number === category.id ? (
                <>
                  {" "}
                  <div className={styles.content}>
                    <div className={styles.content_flex}>
                      <div className={styles.text_content}>
                        <h1 className={styles.content_title}>{category.title}</h1>
                        {category.id === 1 ? (
                          <Health />
                        ) : category.id === 2 ? (
                          <EducationalFarm />
                        ) : category.id === 3 ? (
                          <Cheese />
                        ) : category.id === 4 ? (
                          <Horses />
                        ) : (
                          "Something Went Wrong"
                        )}
                      </div>
                      <motion.div
                        className={styles.images_content}
                        transition={{ staggerChildren: 0.2 }}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        {category.images.map((img, index) => {
                          return (
                            <motion.div
                              key={index}
                              variants={imageAnimate}
                              className={styles.image_wrapper}
                              whileHover={{
                                scale: 1.1,
                                transition: {
                                  duration: 0.5,
                                },
                              }}
                            >
                              <Image
                                alt={img.img}
                                layout="fill"
                                objectFit="cover"
                                src={`/images/promo/${img.img}.jpg`}
                                className={styles.image}
                              />
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>{" "}
    </>
  );
};

export default Promo;
