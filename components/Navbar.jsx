import React from "react";
import { motion } from "framer-motion";

import NavItem from "../components/NavItem";

import styles from "../styles/modules/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar_ilumination}>
      <div className={styles.navbar}>
        <ul className={styles.main}>
          <NavItem svg="Home" />
          <NavItem svg="About" />
          <NavItem svg="Projets" />
          <NavItem svg="Mail" />
        </ul>
        <ul className={styles.social}>
          <NavItem svg="LinkedIn" />
          <NavItem svg="Github" />
          <NavItem svg="Facebook" />
          <NavItem svg="Instagram" />
          <NavItem svg="Twitter" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
