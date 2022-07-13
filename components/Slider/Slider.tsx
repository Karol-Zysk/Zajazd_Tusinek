import React, { useState } from "react";
import styles from "./Slider.module.css";
import dataSlider from "./sliderData";
import Image from "next/image";
import SliderInside from "./Sliderinside";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index: React.SetStateAction<number>) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container_slider}>
      <SliderInside slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? `${styles.slide} ${styles.active_anim}`
                : ` ${styles.slide}`
            }
          >
            <Image
              layout="fill"
              src={`/images/slider/slider${[index + 1]}.jpg`}
              alt={`slider${[index + 1]}`}
              style={{ filter: "blur(1rem)" }}
            />
          </div>
        );
      })}
    </div>
  );
}
