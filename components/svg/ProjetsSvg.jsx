import React from "react";
import { motion } from "framer-motion";

import {} from "../animationVariants";

const ProjetsSvg = ({ fill, width, height }) => {
  return (
    <motion.svg
      fill={fill}
      width={width}
      height={height}
      id="Layer_1"
      enable-background="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m512 23.714h-512v30h15.97v322.473h225.03v37.796c-13.893 5.869-23.667 19.633-23.667 35.638 0 21.321 17.346 38.667 38.667 38.667s38.667-17.346 38.667-38.667c0-16.005-9.774-29.768-23.667-35.638v-37.796h225.03v-322.473h15.97zm-141.65 71.23v30h-299.378v-30zm-95.02 210.012h-204.358v-30h204.358zm0-60.004h-204.358v-30h204.358zm0-60.004h-204.358v-30h204.358zm160.036 120.008h-135.033v-150.008h135.033z" />
        <path d="m330.333 184.948h75.033v90.007h-75.033z" />
      </g>
    </motion.svg>
  );
};

export default ProjetsSvg;
