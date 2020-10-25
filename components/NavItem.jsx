import React from "react";
import { motion } from "framer-motion";

import styles from "../styles/modules/Navbar.module.scss";

import HomeSvg from "./svg/HouseSvg";
import MailSvg from "./svg/MailSvg";
import AboutSvg from "./svg/PersonSvg";
import ProjetsSvg from "./svg/ProjetsSvg";
import LinkedInSvg from "./svg/LinkedImSvg";
import GithubSvg from "./svg/GithubSvg";
import FacebookSvg from "./svg/FacebookSvg";
import InstagramSvg from "./svg/InstagramSvg";
import TwitterSvg from "./svg/TwitterSvg";

const NavItem = ({ Svg, Variant, Initial, Animate }) => {
  {
    switch (Svg) {
      case "Home":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <a href="">
              <HomeSvg />
            </a>
          </motion.li>
        );
      case "About":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <a href="">
              <AboutSvg />
            </a>
          </motion.li>
        );
      case "Projets":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <a href="">
              <ProjetsSvg />
            </a>
          </motion.li>
        );
      case "Mail":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <a href="">
              <MailSvg />
            </a>
          </motion.li>
        );
      case "LinkedIn":
        return (
          <li className={`${styles.item} ${styles.linkedin}`}>
            <a href="">
              <LinkedInSvg />{" "}
            </a>
          </li>
        );
      case "Github":
        return (
          <li className={`${styles.item} ${styles.github}`}>
            <a href="">
              <GithubSvg />
            </a>
          </li>
        );
      case "Facebook":
        return (
          <li className={`${styles.item} ${styles.facebook}`}>
            <a href="">
              <FacebookSvg />
            </a>
          </li>
        );
      case "Instagram":
        return (
          <li className={`${styles.item} ${styles.instagram}`}>
            <a href="">
              <InstagramSvg />
            </a>
          </li>
        );
      case "Twitter":
        return (
          <li className={`${styles.item} ${styles.twitter}`}>
            <a href="">
              <TwitterSvg />
            </a>
          </li>
        );
      default:
        return (
          <li className={styles.item}>
            <a href="">
              <HomeSvg />
            </a>
          </li>
        );
    }
  }
};

export default NavItem;
