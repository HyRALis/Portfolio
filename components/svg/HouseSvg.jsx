import React from "react";
import { motion } from "framer-motion";

const HouseSvg = ({ fill, height, width, Variant, Initial, Animate }) => {
  return (
    <motion.svg
      fill={fill}
      height={height}
      width={width}
      variants={Variant}
      initial={Initial}
      animate={Animate}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 336.054 336.054"
      enableBackground="new 0 0 336.054 336.054"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M328.797,156.976v-0.04l-143.24-143.24c-9.69-9.641-25.35-9.641-35.04,0L7.277,156.936
                        c-9.687,9.665-9.705,25.353-0.04,35.04s25.353,9.705,35.04,0.04l125.76-125.8l125.72,125.8c9.676,9.676,25.364,9.676,35.04,0
                        S338.473,166.652,328.797,156.976z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M167.957,82.216l-115.92,116v115.32c0.432,9.218,8.219,16.362,17.44,16h47.52c2.209,0,4-1.791,4-4v-77.88
                        c0.003-25.979,21.066-47.037,47.046-47.034c25.975,0.003,47.031,21.059,47.034,47.034v77.92c0,2.209,1.791,4,4,4h47.44
                        c9.221,0.362,17.008-6.782,17.44-16v-115.36L167.957,82.216z"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default HouseSvg;
