import Head from "next/head";

import PatternHome from "../components/svg/PatternHome";

import styles from "../styles/modules/Home.module.scss";
import { motion } from "framer-motion";
import { slowFadePop, Stagger } from "../components/animationVariants";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Petar T. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        className={styles.main}
        variants={Stagger}
        initial="initial"
        animate="dom"
        exit="initial"
      >
        <div className={styles.content}>
          <motion.h1 variants={slowFadePop}>Petar</motion.h1>
          <motion.h2 variants={slowFadePop}>Trajanoski</motion.h2>
          <motion.h3 variants={slowFadePop}>
            Front-end developer & UI designer
          </motion.h3>
        </div>
        <PatternHome />
      </motion.main>
    </div>
  );
}
