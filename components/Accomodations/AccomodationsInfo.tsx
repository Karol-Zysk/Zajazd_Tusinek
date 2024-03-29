import React, { useState } from "react";
import { AccomodationsType } from "../../type";
import styles from "./Accomodations.module.css";
import { motion } from "framer-motion";
import { GiKey} from "react-icons/gi";

const infoAnimate = {
  offscreen: { x: 0, y: -25, opacity: 0 },
  onscreen: {
    x: 0,
    y: -75,
    opacity: 1,

    transition: { type: "spring", duration: 1 },
  },
};

const AccomodationsInfo: React.FC<AccomodationsType> = ({ accomodations }) => {
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
      viewport={{ once: true, amount: 0.01 }}
      variants={infoAnimate}
      className={styles.info}
    >
      <div className={styles.flex_wrapper_info}>
        <div className={styles.line_info} />
        <h1 className={styles.title}>Lista Pokoi</h1>
        <div className={styles.line_info} />
      </div>
      {accomodations.map((list, index) => {
        return (
          <div
            className={styles.list_item_wrapper}
            onMouseEnter={() => handleSetRotate(index)}
            onMouseLeave={() => handleSetRotate(index)}
            key={list.nr}
          >
            <p className={styles.list_item}>
              <GiKey
                className={styles.key_icon}
                style={{
                  color: "black",
                  transition: "300ms",
                  transform:
                    number === index + 1 ? "rotate(40deg)" : "rotate(15deg)",
                }}
              />
              <span className={styles.room_number}>{list.nr}</span>
              <span className={styles.room_info}> {list.info}</span>
              <span> </span>
            </p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default AccomodationsInfo;
