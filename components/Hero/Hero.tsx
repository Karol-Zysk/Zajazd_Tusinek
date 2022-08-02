import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import hero_image from "../../public/images/heroImage.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 0.5 },
        }}
        className={styles.container}
      >
        <Image src={hero_image}  objectFit="-moz-initial" alt="hero" />
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
          }}
          className={styles.wrapper}
        >
          <div className={styles.flex_wrapper}>
            <div className={styles.line} />
            <p className={styles.small_text}>Zajedź do nas</p>
            <div className={styles.line} />
          </div>
          <p className={styles.big_text}>W drodze na Mazury</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
