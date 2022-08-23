import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Slider from "../components/Slider/Slider";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import { data } from "../data";
import { dataType } from "../type";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Map from "../components/Map/Map";
import { useRouter } from "next/router";
import LogoSvgAnim2 from "../components/Navbar/LogoSvgAnim2";

const Home: NextPage<dataType> = ({ services }) => {
  const router = useRouter();

  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    if (router.pathname === "/") {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 7000);
    }
  }, [router, setAnimation]);

  return (
    <>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      <LogoSvgAnim2 animation={animation} />
      <Hero />
      <div style={{ minHeight: "100vh" }}>
        {!animation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence>
              <Intro />
              <Services services={services} />
              <Map />
              <Testimonials />
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
