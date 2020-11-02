import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import PatternHome from "../components/svg/PatternHome";

import styles from "../styles/modules/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
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
