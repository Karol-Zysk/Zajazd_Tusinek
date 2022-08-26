import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import { data } from "../data";
import { dataType } from "../type";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import { AnimatePresence, motion } from "framer-motion";
import Map from "../components/Map/Map";
import { useRouter } from "next/router";
import LogoSvgAnim2 from "../components/Navbar/LogoSvgAnim2";
import { IntroData } from "../data";

const Home: NextPage<dataType> = ({ introData, services }) => {
  const router = useRouter();

  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    if (router.pathname === "/") {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 4500);
    }
  }, [router, setAnimation]);

  return (
    <>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      <LogoSvgAnim2 animation={animation} />
      <div style={{ minHeight: "100vh" }}>
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <Intro introData={introData} />
          <Services services={services} introData={[]} />
          <Map />
          <Testimonials />
        </motion.div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const services = data;
  const introData = IntroData;
  return {
    props: { services, introData },
  };
};
