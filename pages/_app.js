import { AnimatePresence } from "framer-motion";
import { useState, useEffect, Fragment } from "react";

import Navbar from "../components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
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
    <Fragment>
      <Navbar Width={windowWidth} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} Width={windowWidth} />
      </AnimatePresence>
    </Fragment>
  );
}

export default MyApp;
