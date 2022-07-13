import styles from "./Slider.module.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./sliderData";
import Image from "next/image";

type InsideSliderProps = {
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
};

const SliderInside: React.FC<InsideSliderProps> = ({
  slideIndex,
  setSlideIndex,
}) => {
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
    <div className={styles.container_slider_inside}>
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
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={styles.container_dots}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderInside;
