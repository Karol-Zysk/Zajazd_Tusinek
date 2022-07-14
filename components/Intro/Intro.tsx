import React from "react";
import styles from "./Intro.module.css";
import Image from "next/image";
import introImage1 from "../../public/images/intro/introImage1.jpg";
import introImage2 from "../../public/images/intro/introImage2.jpg";
import introImage3 from "../../public/images/intro/introImage3.jpg";
import introImage4 from "../../public/images/intro/introImage4.jpg";
import Circle from "../Circle/Circle";

const images = [introImage1, introImage2, introImage3, introImage4];

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-35vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          Witajcie<span className={styles.brand}> Tusinku</span>
        </h1>
        <p className={styles.description}>
          <b style={{fontSize: "1.8rem", color: "darkgreen"}}>Tusinek</b> jest położony przy drodze na Mazury w
          miejscowości Rozogi. Przy wjeździe znajduje się restauracja, w której
          serwowane są wyśmienite <b>regionalne potrawy</b>. W głębi{" "}
          <i>Alei Lipowej</i>, za restauracją znajduje się część hotelowa oraz{" "}
          <b>gospodarstwo</b>.
        </p>
        <button className={styles.button}>Sprawdź Ofertę</button>
      </div>
      <div className={styles.imagesCard}>
        {images.map((img, index) => {
          return (
            <div key={index} className={styles.imageWrapper}>
              <Image
                alt="Tusinek"
                objectFit="fill"
                src={img}
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Intro;
