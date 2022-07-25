import React from "react";
import styles from "./Intro.module.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import introImage1 from "../../public/images/intro/introImage1.jpg";
import introImage2 from "../../public/images/intro/introImage2.jpg";
import introImage3 from "../../public/images/intro/introImage3.jpg";
import introImage4 from "../../public/images/intro/introImage4.jpg";
import Circle from "../Circle/Circle";

const images = [introImage1, introImage2, introImage3, introImage4];

const imageAnimate = {
  offscreen: { x: 0, y: 200, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring",  duration: 1.2 },
  },
};

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-35vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          Witajcie<span className={styles.brand}> Tusinku</span>
        </h1>
        <p className={styles.description}>
          <b style={{ fontSize: "1.8rem", color: "darkgreen" }}>Tusinek</b> jest
          położony przy drodze na Mazury w miejscowości Rozogi. Przy wjeździe
          znajduje się restauracja, w której serwowane są wyśmienite{" "}
          <b>regionalne potrawy</b>. W głębi <i>Alei Lipowej</i>, za restauracją
          znajduje się część hotelowa oraz <b>gospodarstwo</b>.
        </p>
        <button className={styles.button}>Sprawdź Ofertę</button>
      </div>
      <motion.div
        className={styles.images_card}
        transition={{ staggerChildren: 0.4 }}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          variants={imageAnimate}
          className={styles.image_wrapper}
          style={{ left: `5%`, top: ` 5%` }}
        >
          <Image
            alt="Tusinek"
            objectFit="fill"
            src={introImage1}
            className={styles.image}
          />
        </motion.div>
        <motion.div
          variants={imageAnimate}
          className={styles.image_wrapper}
          style={{ left: `45%`, top: `5% ` }}
        >
          <Image
            alt="Tusinek"
            objectFit="fill"
            src={introImage2}
            className={styles.image}
          />
        </motion.div>
        <motion.div
          variants={imageAnimate}
          className={styles.image_wrapper}
          style={{ left: `25%`, top: ` 45%` }}
        >
          <Image
            alt="Tusinek"
            objectFit="fill"
            src={introImage3}
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
