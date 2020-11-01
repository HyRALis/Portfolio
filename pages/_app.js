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
      <Navbar width={windowWidth} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
