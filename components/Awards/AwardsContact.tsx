import React from "react";
import styles from "./Awards.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const titleAnimate = {
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
      <div
        className={styles.flex_wrapper_opinions}
        style={{ marginBottom: "2rem" }}
      >
        <div className={styles.line} style={{ border: " 1px solid green" }} />
        <h1 className={styles.contact_h1}>Opinie</h1>{" "}
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
            Cieszą nas nagrody i wyróżnienia jednak najważniejsze są wasze
            pozytywne oceny.
          </motion.p>
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.3 }}
          className={styles.flex_text}
        >
          <Image
            src={`/images/full_logo/facebook.png`}
            alt="logo"
            width="130"
            height="35"
            objectFit="contain"
          />{" "}
          <motion.span className={styles.note} variants={titleAnimate}>
            4.7/5
          </motion.span>
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
          className={styles.flex_text}
        >
          <Image
            src={`/images/full_logo/booking.png`}
            alt="logo"
            width="195"
            height="40"
            objectFit="contain"
          />{" "}
          <motion.span className={styles.note} variants={titleAnimate}>
            8.7/10
          </motion.span>
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
          className={styles.flex_text}
        >
          <Image
            src={`/images/full_logo/google.png`}
            alt="logo"
            width="130"
            height="40"
            objectFit="contain"
          />
          <motion.span variants={titleAnimate} className={styles.note}>
            4.7/5
          </motion.span>
        </motion.div>

        <motion.div
          transition={{ staggerChildren: 0.2 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.45 }}
          className={styles.contact_h2_wrapper}
        >
          <motion.h2 variants={titleAnimate} className={styles.contact_h2}>
            Sprawdź nas i Ty!
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AccomodationsContact;
