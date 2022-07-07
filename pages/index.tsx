import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Slider";
import Intro from "../components/Intro/Intro";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Tusinek Strona Główna</title>
        <meta name="description" content="Strona Główna Restauracji Tusinek" />
      </Head>
      <Hero />
      <Intro />
    </div>
  );
};

export default Home;
