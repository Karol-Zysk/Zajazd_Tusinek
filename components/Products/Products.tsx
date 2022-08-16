/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import { AllProdusts } from "../../type";
import { Link } from "react-scroll";
import styles from "./Products.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ProductInfo from "./ProductInfo";
import ProductsContact from "./ProductsContact";
import CircleCut1 from "../Circle/CircleCut1";
import CircleCut2 from "../Circle/CircleCut2";
import { useWindowSize } from "../Hooks/DimensionHook";

const imageAnimate = {
  offscreen: { x: -15, y: 15, opacity: 0 },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: { type: "spring", duration: 0.6 },
  },
};

const Products: React.FC<AllProdusts> = ({ buyProducts }) => {
  //@ts-ignore
  const size = useWindowSize();

  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);

  const showProducts = (index: number) => {
    setShow(!show);
    setNumber(index + 1);
  };
  console.log(size);

  const productName = buyProducts.map((category, index) => {
    return (
      <Link
        disabled={true}
        key={index}
        duration={700}
        to="info"
        smooth
        delay={1000}
      >
        <h1
          className={styles.header}
          style={{
            filter: number === index + 1 ? "brightness(1.2)" : undefined,
            transform: number === index + 1 ? "scale(1.2)" : undefined,
          }}
          onClick={() => showProducts(index)}
        >
          {category.name}
        </h1>
      </Link>
    );
  });

  return (
    <>
      <CircleCut1 width="30vw" height="30vw" top="-1rem" right="-3rem" />
      <CircleCut2 width="30vw" height="30vw" bottom="0" left="72%" />
      <div className={styles.header_wrapper}> {productName}</div>
      <div className={styles.wrapper}>
        {buyProducts.map((category, index) => {
          return (
            <React.Fragment key={index}>
              {number === category.id ? (
                <>
                  {" "}
                  <motion.div
                    transition={{ staggerChildren: 0.1 }}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    className={styles.photos}
                  >
                    {category.images.map((img) => {
                      return (
                        <motion.div
                          key={img.id}
                          variants={imageAnimate}
                          className={styles.img_container}
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              duration: 0.5,
                            },
                          }}
                        >
                          <Image
                            style={{ borderRadius: "10px" }}
                            src={`/images/products/${img.url}`}
                            objectFit="cover"
                            layout="fill"
                            alt=""
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                  <ProductInfo category={category} key={category.name} />
                </>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>{" "}
      <ProductsContact />
    </>
  );
};

export default Products;
