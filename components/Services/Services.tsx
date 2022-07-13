import Link from "next/link";
import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { dataType } from "../../type";
import styles from "./Services.module.css";
import tusinek from "../../public/images/tusinek.jpg";
import logo from "../../public/images/tusinek.jpg";

const Services: React.FC<dataType> = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>Co nas wyróżnia</h1>

      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          {" "}
          <div className={styles.info}>
            <div className={styles.services}>
              {services.map((service, index) => {
                return (
                  <Link key={service.id} href={`/products${service.name}`}>
                    <div className={styles.service}>
                      <span className={styles.cat}>{service.title}</span>
                      <div className={styles.media}>
                        {service.video ? (
                          <HoverVideoPlayer
                            videoStyle={{
                              objectFit: "cover",
                              width: "120%",
                              // height: "100%",
                            }}
                            videoSrc={`/video/${service.video}`}
                            // pausedOverlay={
                            //   <Image
                            //     src={logo}
                            //     alt="miniaturka"
                            //     style={{
                            //       width: "100%",
                            //       height: "100%",
                            //       objectFit: "cover",
                                  
                            //     }}
                            //   />
                            // }
                            loadingOverlay={
                              <div className="loading-overlay">
                                <div className="loading-spinner" />
                              </div>
                            }
                          />
                        ) : (
                          <div style={{ width: "100%" }}>
                            <Image
                              alt={service.name}
                              src={`/images/${service.photo}`}
                              width={100}
                              height={100}
                            />
                          </div>
                        )}
                      </div>
                      <button className="btnLink">Więcej</button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <Image
            alt="Tusinek"
            src={tusinek}
            objectFit="fill"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
