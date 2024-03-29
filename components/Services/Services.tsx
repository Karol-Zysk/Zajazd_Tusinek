import Link from "next/link";
import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { dataType } from "../../type";
import { motion } from "framer-motion";
import styles from "./Services.module.css";
import tusinek from "../../public/images/tusinek.jpg";

const serviceAnimate = {
  offscreen: { x: 0, y: 90, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 0.7 },
  },
};
const imageAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,

    transition: { type: "spring" },
  },
};

const Services:React.FC<dataType> = ({ services }) => {



  return (
    <div id="services"  className={styles.container}>
      <div className={styles.flex_wrapper}>
        <div className={styles.line} />
        <h1 className={styles.title}>
          {" "}
          Nasza
          <span style={{ color: "black" }}> Oferta</span>{" "}
        </h1>
        <div className={styles.line} />
      </div>
      <motion.div
        className={styles.content_wrapper}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.content}>
          {" "}
          <div className={styles.info}>
            <motion.div className={styles.services}>
              {services.map((service) => {
                return (
                  <Link key={service.id} href={`/${service.name}`}>
                    <motion.div
                      className={styles.service}
                      variants={serviceAnimate}
                    >
                      <span className={styles.cat}>{service.title}</span>
                      <div className={styles.media}>
                        {service.video ? (
                          <HoverVideoPlayer
                            videoStyle={{
                              objectFit: "cover",
                              width: "120%",
                            }}
                            videoSrc={`/video/${service.video}`}
                            loadingOverlay={
                              <div className="loading-overlay">
                                <div className="loading-spinner" />
                              </div>
                            }
                          />
                        ) : (
                          <motion.div
                            variants={imageAnimate}
                            style={{ width: "100%" }}
                          >
                            <Image
                              alt={service.name}
                              src={`/images/services/${service.photo}`}
                              objectFit="cover"
                              layout="fill"
                            />
                          </motion.div>
                        )}
                      </div>
                      <button className={styles.button}>Więcej</button>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div variants={imageAnimate} className={styles.photo}>
          <Image
            alt="Tusinek"
            src={tusinek}
            objectFit="fill"
            className={styles.img}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
