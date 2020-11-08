import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import {
  linePathsCopper,
  linePathsLightBlue,
  linePathsBlue,
  linePathsPurple,
  pinPaths,
} from "../animationVariants";

const PatternAbout = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="638"
        height="253.237"
        viewBox="0 0 638 253.237"
      >
        <g
          id="Group_27"
          data-name="Group 27"
          transform="translate(-636.357 -814.539)"
        >
          <g id="Group_30" data-name="Group 30">
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsLightBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape"
              d="M51.079,189.444a51.821,51.821,0,0,1-28.561-8.474,51.151,51.151,0,0,1-7.559-6.059,50.311,50.311,0,0,1-6.237-7.343,49.19,49.19,0,0,1-4.709-8.428A48.094,48.094,0,0,1,0,139.828V49.616A48.094,48.094,0,0,1,4.013,30.3a49.191,49.191,0,0,1,4.709-8.428,50.313,50.313,0,0,1,6.237-7.343A51.264,51.264,0,0,1,31.2,3.9,52.169,52.169,0,0,1,79.641,8.474,51.149,51.149,0,0,1,87.2,14.532a50.313,50.313,0,0,1,6.237,7.343A49.191,49.191,0,0,1,98.146,30.3a48.094,48.094,0,0,1,4.014,19.313v90.212a48.094,48.094,0,0,1-4.014,19.313,49.19,49.19,0,0,1-4.709,8.428,50.311,50.311,0,0,1-6.237,7.343,51.265,51.265,0,0,1-16.236,10.633A52.063,52.063,0,0,1,51.079,189.444Zm0-162.381a23.665,23.665,0,0,0-9.038,1.772,23.186,23.186,0,0,0-7.38,4.833,22.451,22.451,0,0,0-4.975,7.169,21.862,21.862,0,0,0-1.824,8.779v90.212a21.862,21.862,0,0,0,1.824,8.779,22.45,22.45,0,0,0,4.975,7.169,23.186,23.186,0,0,0,7.38,4.833,23.934,23.934,0,0,0,18.077,0,23.187,23.187,0,0,0,7.38-4.833,22.45,22.45,0,0,0,4.975-7.169,21.862,21.862,0,0,0,1.824-8.779V49.616a21.862,21.862,0,0,0-1.824-8.779A22.451,22.451,0,0,0,67.5,33.669a23.186,23.186,0,0,0-7.38-4.833A23.666,23.666,0,0,0,51.079,27.064Z"
              transform="translate(1143.975 877.558)"
              fill="#98dfea"
              stroke="#98dfea"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsCopper}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-2"
              data-name="Shape"
              d="M27.905,76.57c0-27.364,22.9-49.545,51.159-49.545A13.74,13.74,0,0,0,93.017,13.512,13.74,13.74,0,0,0,79.064,0C35.4,0,0,34.282,0,76.57A13.74,13.74,0,0,0,13.953,90.083,13.74,13.74,0,0,0,27.905,76.57Z"
              transform="translate(1181.341 814.539)"
              fill="#e6c79c"
              stroke="#e6c79c"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-3"
              data-name="Shape"
              d="M51.079,99.362A51.775,51.775,0,0,1,22.52,90.877a51.167,51.167,0,0,1-7.56-6.066,50.365,50.365,0,0,1-6.237-7.353,49.272,49.272,0,0,1-4.71-8.439,48.588,48.588,0,0,1,0-38.676A49.271,49.271,0,0,1,8.724,21.9a50.365,50.365,0,0,1,6.237-7.353A51.265,51.265,0,0,1,31.2,3.9,52.113,52.113,0,0,1,79.639,8.485a51.165,51.165,0,0,1,7.56,6.066A50.369,50.369,0,0,1,93.436,21.9a49.274,49.274,0,0,1,4.71,8.439,48.588,48.588,0,0,1,0,38.676,49.274,49.274,0,0,1-4.71,8.439A50.37,50.37,0,0,1,87.2,84.811,51.265,51.265,0,0,1,70.962,95.458,52,52,0,0,1,51.079,99.362Zm0-72.263a23.634,23.634,0,0,0-9.037,1.775,23.187,23.187,0,0,0-7.38,4.84,22.484,22.484,0,0,0-4.976,7.178,22.086,22.086,0,0,0,0,17.58,22.484,22.484,0,0,0,4.976,7.178,23.187,23.187,0,0,0,7.38,4.84,23.9,23.9,0,0,0,18.075,0,23.188,23.188,0,0,0,7.38-4.84,22.484,22.484,0,0,0,4.976-7.178,22.085,22.085,0,0,0,0-17.58A22.484,22.484,0,0,0,67.5,33.713a23.188,23.188,0,0,0-7.38-4.84A23.635,23.635,0,0,0,51.079,27.1Z"
              transform="translate(1019.555 967.641)"
              fill="#07beb8"
              stroke="#07beb8"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsCopper}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-4"
              data-name="Shape"
              d="M13.92,0a13.747,13.747,0,0,1,13.92,13.566c0,12.487,10.387,22.61,23.2,22.61h92.8c12.813,0,23.2-10.123,23.2-22.61a13.924,13.924,0,0,1,27.839,0,49.307,49.307,0,0,1-21.281,40.418c3.27,11.67,14.288,20.178,27.777,20.178h53.823a13.571,13.571,0,1,1,0,27.132H201.371c-25.177,0-46.8-15.727-54.033-38.1q-1.736.114-3.5.115h-92.8C22.85,63.309,0,41.039,0,13.566A13.747,13.747,0,0,1,13.92,0Z"
              transform="translate(778.268 929.752)"
              fill="#e6c79c"
              stroke="#e6c79c"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsLightBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-5"
              data-name="Shape"
              d="M27.862,49.681c0,12.472,10.4,22.582,23.218,22.582S74.3,62.152,74.3,49.681,63.9,27.1,51.08,27.1A13.744,13.744,0,0,1,37.149,13.549,13.744,13.744,0,0,1,51.08,0c28.211,0,51.08,22.243,51.08,49.681S79.291,99.362,51.08,99.362,0,77.119,0,49.681A13.744,13.744,0,0,1,13.931,36.131,13.744,13.744,0,0,1,27.862,49.681Z"
              transform="translate(945.221 893.41)"
              fill="#98dfea"
              stroke="#98dfea"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-6"
              data-name="Shape"
              d="M50.909,27.1c-12.78,0-23.141,10.11-23.141,22.582S38.129,72.263,50.909,72.263a13.553,13.553,0,1,1,0,27.1C22.793,99.362,0,77.119,0,49.681S22.793,0,50.909,0A13.72,13.72,0,0,1,64.794,13.549,13.72,13.72,0,0,1,50.909,27.1Z"
              transform="translate(843.459 929.752)"
              fill="#07beb8"
              stroke="#07beb8"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-7"
              data-name="Shape"
              d="M166.148,27.114c-35.372,0-64.046,27.92-64.046,62.361,0,27.453-22.856,49.708-51.051,49.708S0,116.929,0,89.475A13.744,13.744,0,0,1,13.923,75.918,13.744,13.744,0,0,1,27.846,89.475c0,12.479,10.389,22.595,23.205,22.595s23.205-10.116,23.205-22.595C74.256,40.06,115.4,0,166.148,0a13.744,13.744,0,0,1,13.923,13.557A13.744,13.744,0,0,1,166.148,27.114Z"
              transform="translate(664.978 854.748)"
              fill="#07beb8"
              stroke="#07beb8"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-8"
              data-name="Shape"
              d="M77.912,89.309c0-34.378-28.653-62.246-64-62.246A13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0c50.713,0,91.824,39.985,91.824,89.309a13.918,13.918,0,0,1-27.826,0Z"
              transform="translate(988.947 843.922)"
              fill="#cb48b7"
              stroke="#cb48b7"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsLightBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-9"
              data-name="Shape"
              d="M13.913,65.726A13.714,13.714,0,0,1,0,52.22V13.505A13.714,13.714,0,0,1,13.913,0,13.714,13.714,0,0,1,27.826,13.505V52.22A13.714,13.714,0,0,1,13.913,65.726Z"
              transform="translate(636.357 999.344)"
              fill="#98dfea"
              stroke="#98dfea"
              strokeWidth="3"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsBlue}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-10"
              data-name="Shape"
              d="M0,13.532A13.733,13.733,0,0,1,13.926,0H124.407a13.733,13.733,0,0,1,13.926,13.532,13.733,13.733,0,0,1-13.926,13.532H13.926A13.733,13.733,0,0,1,0,13.532Z"
              transform="translate(717.051 1040.712)"
              fill="#07beb8"
              stroke="#07beb8"
              strokeWidth="3"
            />
          </g>
          <g id="Group_31" data-name="Group 31">
            <motion.path
              strokeDasharray="0 1"
              variants={pinPaths}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-11"
              data-name="Shape"
              d="M27.826,13.532A13.728,13.728,0,0,0,13.913,0,13.728,13.728,0,0,0,0,13.532,13.729,13.729,0,0,0,13.913,27.063,13.729,13.729,0,0,0,27.826,13.532Z"
              transform="translate(1181.341 877.558)"
              fill="#cb48b7"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-12"
              data-name="Shape"
              d="M27.826,13.532A13.727,13.727,0,0,1,13.913,27.063,13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0,13.727,13.727,0,0,1,27.826,13.532Z"
              transform="translate(945.221 929.365)"
              fill="#cb48b7"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-13"
              data-name="Shape"
              d="M27.826,13.532A13.727,13.727,0,0,1,13.913,27.063,13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0,13.727,13.727,0,0,1,27.826,13.532Z"
              transform="translate(1019.555 1003.983)"
              fill="#cb48b7"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-14"
              data-name="Shape"
              d="M27.826,13.532A13.727,13.727,0,0,1,13.913,27.063,13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0,13.727,13.727,0,0,1,27.826,13.532Z"
              transform="translate(1056.921 1003.597)"
              fill="#cb48b7"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-15"
              data-name="Shape"
              d="M27.826,13.532A13.727,13.727,0,0,1,13.913,27.063,13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0,13.727,13.727,0,0,1,27.826,13.532Z"
              transform="translate(880.427 929.752)"
              fill="#cb48b7"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-16"
              data-name="Shape"
              d="M27.826,13.532A13.727,13.727,0,0,1,13.913,27.063,13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0,13.727,13.727,0,0,1,27.826,13.532Z"
              transform="translate(817.621 854.748)"
              fill="#cb48b7"
            />
            <motion.path
              strokeDasharray="0 1"
              variants={linePathsPurple}
              initial="initial"
              animate="dom"
              exit="initial"
              key="Shape-17"
              data-name="Shape"
              d="M27.826,13.532A13.727,13.727,0,0,1,13.913,27.063,13.727,13.727,0,0,1,0,13.532,13.727,13.727,0,0,1,13.913,0,13.727,13.727,0,0,1,27.826,13.532Z"
              transform="translate(664.978 930.525)"
              fill="#cb48b7"
            />
          </g>
        </g>
      </svg>
    </AnimatePresence>
  );
};

export default PatternAbout;
