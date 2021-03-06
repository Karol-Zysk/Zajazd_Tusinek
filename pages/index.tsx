import type { NextPage } from "next";
import Head from "next/head";
import Slider from "../components/Slider/Slider";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import { data } from "../data";
import { dataType } from "../type";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import styles from "../components/Hero/Hero.module.css"

const Home: NextPage<dataType> = ({ services }) => {
  return (
    <>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      <Hero />
      {/* <Slider /> */}
      <Intro />
      <Services services={services} />
      <Testimonials />
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
