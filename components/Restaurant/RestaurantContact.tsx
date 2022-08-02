/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Restaurant.module.css";
import { motion } from "framer-motion";

const titleAnimate = {
  offscreen: { x: 0, y: 0, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 2.5 },
  },
};
const itemAnimate = {
  offscreen: { x: 0, y: 0, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 2.5 },
  },
};

const RestaurantContact = () => {
  return (
    <div className={styles.welcome_content}>
      <div className={styles.flex_wrapper} style={{ marginBottom: "2rem" }}>
        <div className={styles.line} style={{ border: " 1px solid green" }} />
        <h1 className={styles.contact_h1}>
          <span style={{ color: "green", fontSize: "2.3rem" }}>R</span>estauracja{" "}w  {' '}
          <span style={{ color: "green", fontSize: "2.3rem" }}>T</span>usinku{" "}
        </h1>{" "}
        <div className={styles.line} />
      </div>
      <div className={styles.prices_wrapper}>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
            Informacje
          </motion.p>
          <motion.p variants={titleAnimate} className={styles.contact_text}>
            W Naszej Restauracji serwowane są dania regionalne, wytwarzane przez
            miejscowe gospodynie.
          </motion.p>{" "}
          <motion.p variants={titleAnimate} className={styles.contact_text}>
            Smak tych dań został już wielokrotnie doceniony (lista nagród i
            wyróżnień w zakładce nagrody).
          </motion.p>{" "}
          <motion.p variants={titleAnimate} className={styles.contact_text}>
            Obiekt należy do{" "}
            <b>Sieci Dziedzictwa Kulinarnego Warmii Mazur i Powiśla</b>.
            Tajemnicą smaku naszej restauracji jest używanie{" "}
            <b>produktów w większości pochodzących z naszego gospodarstwa.</b>
          </motion.p>{" "}
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
            Menu
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Oby dowiedzieć się więcej o daniach wybierz kategorię w <b>Menu</b>,
            a następnie kliknij zdjęcie z wybraną pozycją.
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Dbamy o to, by menu nie było bardzo rozbudowane dzięki czemu potrawy
            są <b>świeże</b> i <b>przygotowywane na bieżąco.</b>
          </motion.p>
        </motion.div>

        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
            Restauracja Czynna:
          </motion.p>
          <motion.p variants={titleAnimate} className={styles.contact_text}>
            Poniedziałek - Niedziela <b>9:00-19:00</b>
          </motion.p>
          <motion.h2 variants={titleAnimate} className={styles.contact_h2}>
            Serdecznie zapraszamy!
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default RestaurantContact;
