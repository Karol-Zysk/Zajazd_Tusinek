
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import React from "react";
import Image from "next/image";
import styles from './Slider.module.css'

type BtnProps = {
  direction: string;
  moveSlide: () => void;
};

const BtnSlider: React.FC<BtnProps> = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <>
      <button
        onClick={moveSlide}
        className={direction === "next" ? `${styles.btn_slide} ${styles.next}` : `${styles.btn_slide} ${styles.prev}`}
      >
        <Image
          alt="arrow"
          src={direction === "next" ? rightArrow : leftArrow}
        />
      </button>
    </>
  );
};

export default BtnSlider;
