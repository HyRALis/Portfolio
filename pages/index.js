import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

import MainPattern from "../public/assets/patterns/mainPatern.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
