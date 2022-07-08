import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dataType } from "../../type";
import styles from "./Services.module.css";

const Services: React.FC<dataType> = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <p className={styles.subtitle}>Services</p>
      <div className={styles.services}>
        {services.map((service, index) => {
          return (
            <Link key={service.id} href={`/products${service.name}`}>
              <div className={styles.service}>
                <span className={styles.category}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      src={service.video}
                      autoPlay
                      loop
                      className={styles.video}
                    ></video>
                  ) : (
                    <Image alt={service.name} src={`/image/${service.photo}`} width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover" />
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
