import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Slider/Slider";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import { data } from "../data";
import { dataType } from "../type";
import Testimonials from "../components/Testimonials/Testimonials";



const Home: NextPage<dataType> = ({ services }) => {

  return (
    <div>
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      {/* <Hero /> */}
      <Intro />
      <Services services={services} />
      <Testimonials/>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
