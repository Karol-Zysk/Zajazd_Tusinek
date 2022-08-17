import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import hero_image from "../../public/images/heroImage.jpg";
import hero_image2 from "../../public/images/mobile-image.jpg";
import hero_image3 from "../../public/images/mobile-image2.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../Hooks/DimensionHook";

const Hero = () => {
  const size = useWindowSize();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (size) {//@ts-ignore
      if (size.width > 512) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    } else {
      setMobile(false);
    }
  }, [size]);

  const width = size.width as number;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
      >
        <div className={styles.image_wrapper}>
          <Image
            src={mobile ? hero_image : hero_image3}
            layout="fill"
            objectFit="cover"
            alt="hero"
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
