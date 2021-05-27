import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="about" />
      <Footer />
    </div>
  );
}
