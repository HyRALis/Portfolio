import React from "react";
import { motion } from "framer-motion";

import NavItem from "../components/NavItem";

import styles from "../styles/modules/Navbar.module.scss";

import {
  navbarVariantSm,
  navbarVariantLg,
  navItemVariant,
} from "./animationVariants";

export const Navbar = ({ width }) => {
  return (
    width !== null && (
      <motion.div
        className={styles.navbar_ilumination}
        variants={width < 879 ? navbarVariantSm : navbarVariantLg}
        initial="initial"
        animate="dom"
        exit="initial"
      >
        <div className={styles.navbar}>
          <ul className={styles.main}>
            <NavItem Svg="Home" Variant={navItemVariant} />
            <NavItem Svg="About" Variant={navItemVariant} />
            <NavItem Svg="Projets" Variant={navItemVariant} />
            <NavItem Svg="Mail" Variant={navItemVariant} />
          </ul>
          <motion.ul className={styles.social} variants={navItemVariant}>
            <NavItem Svg="LinkedIn" />
            <NavItem Svg="Github" />
            <NavItem Svg="Facebook" />
            <NavItem Svg="Instagram" />
            <NavItem Svg="Twitter" />
          </motion.ul>
        </div>
      </motion.div>
    )
  );
};

export default Navbar;
