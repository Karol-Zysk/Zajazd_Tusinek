import React from "react";
import Circle from "../Circle/Circle";
import styles from "./Testimonials.module.css";
import { users } from "../../data";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CircleCut2 from "../Circle/CircleCut2";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <CircleCut2 width="40vw" height="40vw" bottom="0" left="65%" />
      <Circle backgroundColor="green" top="-65vh" />
      <div className={styles.opinions}>
        <h1 className={styles.title}>Opinie z </h1>
        <Image
          alt=""
          objectFit="contain"
          height="100"
          width="240"
          src="/images/logos/booking.png"
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.carousel_wrapper}>
          <Carousel
            swipeable={true}
            emulateTouch={true}
            autoPlay
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={4000}
            transitionTime={1000}
            dynamicHeight={false}
            infiniteLoop={true}
          >
            {users.map((user, index) => {
              return (
                <div key={user.name} className={styles.card}>
                  <div className={styles.header}>
                    <div className={styles.header_user}>
                      {" "}
                      <div className={styles.info}>
                        <span className={styles.username}>{user.name}</span>
                        <span className={styles.date}>{user.date}</span>
                      </div>{" "}
                      <Image
                        src={`/images/logos/${user.logo}`}
                        alt="logo"
                        width="25"
                        height="25"
                        objectFit="contain"
                      />
                    </div>
                    <div className={styles.header_note}>
                      {" "}
                      <div className={styles.note}>
                        Ocena{" "}
                        <span className={styles.note_number}>{user.note}</span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.comment}> {user.comment}</p>
                  <div className={styles.person}></div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
