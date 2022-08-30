import React, { useState } from "react";
import {  AwardsType } from "../../type";
import styles from "./Awards.module.css";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

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
  const [rotate, setRotate] = useState(false);

  const handleSetRotate = (index: number) => {
    setRotate(!rotate);
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.1 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.01}}
      variants={infoAnimate}
      className={styles.info}
    >
      <div className={styles.flex_wrapper_info}>
        <div className={styles.line_info} />
        <h1 className={styles.title}>Docenili Nas <FaAward className={styles.award_icon} /></h1>
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
            
              
              <span className={styles.room_number}>{list.rok}</span>
              <span className={styles.room_info}> {list.nagroda}</span>
            
          </div>
        );
      })}
    </motion.div>
  );
};

export default AccomodationsInfo;
