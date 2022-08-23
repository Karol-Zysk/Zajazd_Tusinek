import Image from "next/image";
import React, { useState } from "react";
import { PromoType } from "../../type";
import styles from "./Promo.module.css";
import { motion } from "framer-motion";
import PromoText from "./PromoText";
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

const Promo: React.FC<PromoType> = ({ promoInfo }) => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);

  const showProducts = (index: number) => {
    setShow(!show);
    setNumber(index + 1);
  };

  const productName = promoInfo.map((category, index) => {
    return (
      <h1
        key={index}
        className={styles.header}
        style={{
          filter: number === index + 1 ? "brightness(1.2)" : undefined,
          transform: number === index + 1 ? "scale(1.2)" : undefined,
        }}
        onClick={() => showProducts(index)}
      >
        {category.name}
      </h1>
    );
  });

  return (
    <>
      <CircleCut1 width="30vw" height="30vw" top="-1rem" right="-3rem" />
      <CircleCut2 width="30vw" height="30vw" bottom="0" left="72%" />
      <div className={styles.header_wrapper}> {productName}</div>
      <div className={styles.wrapper}>
        {promoInfo.map((category, index) => {
          return (
            <React.Fragment key={index}>
              {number === category.id ? (
                <>
                  {" "}
                  <motion.div
                    transition={{ staggerChildren: 0.1 }}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    dangerouslySetInnerHTML={{__html: category.text}}
                  />
                  {/* <PromoText category={category}  /> */}
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
