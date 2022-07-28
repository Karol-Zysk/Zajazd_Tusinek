import React, { useState } from "react";
import { AccomodationsType, AwardsType } from "../../type";
import styles from "./Awards.module.css";
import { motion } from "framer-motion";
import { GiKey, GiKeyLock } from "react-icons/gi";

const infoAnimate = {
  offscreen: { x: 0, y: -25, opacity: 0 },
  onscreen: {
    x: 0,
    y: -75,
    opacity: 1,

    transition: { type: "spring", duration: 1 },
  },
};

const AccomodationsInfo: React.FC<AwardsType> = ({ awardsList }) => {
  const [number, setNumber] = useState(0);
  const [rotate, setRotate] = useState(false);

  const handleSetRotate = (index: number) => {
    setNumber(index + 1);
    setRotate(!rotate);
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.1 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.4 }}
      variants={infoAnimate}
      className={styles.info}
    >
      <div className={styles.flex_wrapper_info}>
        <div className={styles.line_info} />
        <h1 className={styles.title}>Lista Pokoi</h1>
        <div className={styles.line_info} />
      </div>
      {awardsList.map((list, index) => {
        return (
          <div
            className={styles.list_item_wrapper}
            onMouseEnter={() => handleSetRotate(index)}
            onMouseLeave={() => handleSetRotate(index)}
            key={list.id}
          >
            <p className={styles.list_item}>
              <GiKey
                style={{
                  color: "black",
                  transition: "300ms",
                  transform:
                    number === index + 1 ? "rotate(40deg)" : "rotate(15deg)",
                }}
                size="30"
              />
              <span className={styles.room_number}>{list.id}</span>
              <span className={styles.room_info}> {list.nagroda}</span>
              <span className={styles.room_info}> {list.rok}</span>
              <span> </span>
            </p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default AccomodationsInfo;
