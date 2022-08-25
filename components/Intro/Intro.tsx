import React from "react";
import styles from "./Intro.module.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { IntroData } from "../../data";
import Circle from "../Circle/Circle";
import { Link } from "react-scroll";
import { IntroType } from "../../type";

const imageAnimate = {
  offscreen: { x: 0, y: 150, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 2 },
  },
};

const Intro:React.FC<IntroType> = ({introData}) => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-35vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          Witajcie<span className={styles.brand}> w Tusinku</span>
        </h1>
        <p className={styles.description}>
          <b className={styles.bold_text}>Tusinek</b> jest położony przy drodze
          na Mazury w miejscowości Rozogi. Przy wjeździe znajduje się
          restauracja, w której serwowane są wyśmienite{" "}
          <b>regionalne potrawy</b>. W głębi <i>Alei Lipowej</i>, za restauracją
          znajduje się część hotelowa oraz <b>gospodarstwo</b>.
        </p>
        <Link to="services" smooth offset={-50} className={styles.button}>Sprawdź Ofertę</Link>
      </div>
      <motion.div
        className={styles.images_card}
        transition={{ staggerChildren: 0.3 }}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.4 }}
      >
        {introData.map((intro, index) => {
          return (
            <motion.div
              key={intro.id}
              variants={imageAnimate}
              className={styles.image_wrapper}
              style={intro.position}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Image
                alt="Tusinek"
                objectFit="fill"
                src={intro.img}
                className={styles.image}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Intro;
