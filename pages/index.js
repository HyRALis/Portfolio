import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import PatternHome from "../components/svg/PatternHome";
// import MainPattern from "../public/assets/patterns/mainPatern.svg";

import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  // const [windowWidth, setWindowWidth] = useState(null);

  // function determineWidth() {
  //   const width = window.innerWidth;
  //   setWindowWidth(width);
  // }
  // useEffect(() => {
  //   determineWidth();
  //   window.addEventListener("resize", determineWidth);

  //   return function () {
  //     window.removeEventListener("resize", determineWidth);
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Petar T. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar width={windowWidth} /> */}
      <main className={styles.main}>
        <PatternHome />
        <div className={styles.content}>
          <motion.h1>Petar</motion.h1>
          <motion.h2>Trajanoski</motion.h2>
          <motion.h3>Front-end developer & UI designer</motion.h3>
        </div>
      </main>
    </div>
  );
}
