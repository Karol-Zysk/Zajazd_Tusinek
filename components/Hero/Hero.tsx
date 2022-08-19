import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import hero_image from "../../public/images/heroImage5.png";
import { AnimatePresence, motion } from "framer-motion";

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
            style={{ transform: `translateY(${offsetY * 0.2}px)`, zIndex: "7" }}
          />
        </div>
        <div
          
          className={styles.wrapper}
          style={{ transform: `translateY(${offsetY * 0.5}px)`, zIndex: "6" }}
        >
          <div className={styles.flex_wrapper}>
            <div className={styles.line} />
            <p className={styles.small_text}>Zajedź do nas</p>
            <div className={styles.line} />
          </div>
          <p className={styles.big_text}>W drodze na Mazury</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
