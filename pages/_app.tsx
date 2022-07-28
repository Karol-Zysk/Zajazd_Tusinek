import "../styles/globals.css";
import "../styles/Home.module.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import styles from "../components/Accomodations/Accomodations.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      
    
        <Component {...pageProps} />
      
    </Layout>
  );
}

export default MyApp;
