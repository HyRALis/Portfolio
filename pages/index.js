import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import MainPattern from "../public/assets/patterns/mainPatern.svg";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(null);

  function determineWidth() {
    const width = window.innerWidth;
    setWindowWidth(width);
  }
  useEffect(() => {
    determineWidth();
    window.addEventListener("resize", determineWidth);

    return function () {
      window.removeEventListener("resize", determineWidth);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Petar T. Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar width={windowWidth} />
    </div>
  );
}
