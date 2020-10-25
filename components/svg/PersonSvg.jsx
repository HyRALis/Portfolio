import React from "react";
import { motion } from "framer-motion";

import {} from "../animationVariants";

const PersonSvg = ({ fill, width, height, Variant, Initial, Animate }) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      variants={Variant}
      initial={Initial}
      animate={Animate}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 792 792"
      enableBackground="new 0 0 792 792"
      xmlSpace="preserve"
    >
      <g>
        <g id="_x36__11_">
          <g>
            <path
              d="M611.399,428.646C561.627,498.984,483.764,544.5,396,544.5s-165.627-45.516-215.399-115.854
                            c-34.477,27.026-56.851,68.606-56.851,115.854v99c0,82.021,66.479,148.5,148.5,148.5h247.5c82.021,0,148.5-66.479,148.5-148.5
                            v-99C668.25,497.252,645.876,455.672,611.399,428.646z M396,495c123.032,0,222.75-110.806,222.75-247.5S519.032,0,396,0
                            S173.25,110.806,173.25,247.5S272.968,495,396,495z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PersonSvg;
