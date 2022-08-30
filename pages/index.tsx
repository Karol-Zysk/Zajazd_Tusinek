import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import { data } from "../data";
import { dataType } from "../type";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero from "../components/Hero/Hero";
import Map from "../components/Map/Map";
import { useRouter } from "next/router";
import LogoSvgAnim2 from "../components/Navbar/LogoSvgAnim2";
import { IntroData } from "../data";

const Home: NextPage<dataType> = ({ introData, services }) => {
  const router = useRouter();

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (
      router.pathname === "/" &&
      localStorage.getItem("tusinek") !== "page-visited"
    ) {
      localStorage.setItem("tusinek", "page-visited");
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 4700);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      <LogoSvgAnim2 animation={animation} />
      <Hero />

      <Intro introData={introData} />
      <Services services={services} introData={[]} />
      <Map />
      <Testimonials />
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
