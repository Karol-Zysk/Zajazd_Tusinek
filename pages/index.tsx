import type { NextPage } from "next";
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

const Home: NextPage<dataType> = ({ services, animation }) => {
  return (
    <>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      <div style={{ minHeight: "100vh" }}>
        {!animation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            {/* <Slider />*/}
            <Intro />
            <Services services={services} />
            <Testimonials />
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
