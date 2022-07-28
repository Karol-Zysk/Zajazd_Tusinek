/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsCalendar2Month } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { GiBed, GiHotMeal } from "react-icons/gi";
import styles from "./Awards.module.css";
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

const AccomodationsContact = () => {
  return (
    <div className={styles.welcome_content}>
      <div className={styles.flex_wrapper} style={{ marginBottom: "2rem" }}>
        <div className={styles.line} style={{ border: " 1px solid green" }} />
        <h1 className={styles.contact_h1}>
          <span style={{ color: "green", fontSize: "2.3rem" }}>C</span>ennik{" "}
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
            Kameralna i domowa atmosfera oraz tradycyjny charakter.
          </motion.p>
          <motion.p variants={titleAnimate} className={styles.contact_text}>
            W <b>Naszym Zajeździe</b> mamy do dyspozycji 17 pokoi
            umożliwiających przenocowanie 45 osób.
          </motion.p>{" "}
          <motion.p variants={titleAnimate} className={styles.contact_text}>
            Posiadamy łóżeczka dla dzieci, które można dostawić do niektórych
            pokoi.
          </motion.p>{" "}
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45}}
        >
          <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
            Cena za dobę{" "}
            <GiBed
              style={{
                fontSize: "2.5rem",
                transform: "translateY(10px)",
                color: "green",
                marginLeft: "0.3rem",
              }}
            />
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Nocleg w pokoju 2,3,4 - osobowym: <b>100zł/osoba.</b>
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Nocleg w pokoju 1 - osobowym: <b>110zł/osoba.</b>
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            dziecko w wieku 1-7 lat <b>75zł.</b>{" "}
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Dzieci do 1 roku życia: <b>bezpłatnie.</b>{" "}
          </motion.p>
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
            Śniadania{" "}
            <GiHotMeal
              style={{
                fontSize: "2.5rem",
                transform: "translateY(5px)",
                color: "green",
                marginLeft: "0.3rem",
              }}
            />
          </motion.p>

          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Osoba dorosła: <b>35zł</b>
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Dzieci w wieku 1-7 lat: <b>25zł</b>
          </motion.p>
          <motion.p variants={itemAnimate} className={styles.contact_text}>
            Śniadanie w formie bufetu: <b>40zł/osoba</b>
          </motion.p>
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
            Dodatkowe opłaty{" "}
            <FaDog
              style={{
                fontSize: "2.5rem",
                transform: "translateY(5px) ",
                color: "green",
                marginLeft: "0.3rem",
              }}
            />
          </motion.p>

          <motion.p
            variants={itemAnimate}
            className={styles.contact_text_animal}
          >
            Zwierzęta w hotelu za dopłatą: <b> 20zł/doba *</b>{" "}
          </motion.p>
          <motion.span
            variants={itemAnimate}
            className={styles.contact_subtext_animal}
          >
            *(własciciel zobowiązany jest do zapewnienia legowiska - zwierzęta
            nie mogą spać na meblach oraz w pełni odpowiada za szkody wynikłe
            zarówno w pomieszczeniach jak i na terenie.)
          </motion.span>
        </motion.div>

        <motion.p variants={titleAnimate} className={styles.contact_subtitle}>
          Ceny nie dotyczą okresów świątecznych i długich weekendów
          <BsCalendar2Month
            style={{
              fontSize: "2.1rem",
              transform: "translateY(5px)",
              color: "green",
              marginLeft: "0.5rem",
            }}
          />
        </motion.p>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.h2 variants={titleAnimate} className={styles.contact_h2}>
            Serdecznie zapraszamy!
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AccomodationsContact;
