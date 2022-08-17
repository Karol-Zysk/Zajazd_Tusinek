import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import hero_image from "../../public/images/heroImage3.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../Hooks/DimensionHook";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
      >
        <div className={styles.image_wrapper}>
          {/* <div className={styles.cover}></div> */}
          <Image
            src={hero_image}
            layout="fill"
            objectFit="cover"
            alt="hero"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          />
        </div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            delay: 1,
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
