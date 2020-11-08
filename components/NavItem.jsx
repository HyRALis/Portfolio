import Link from "next/link";
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
            <Link aria-label="Home" href="/">
              <a>
                <HomeSvg />
              </a>
            </Link>
          </motion.li>
        );
      case "About":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <Link aria-label="About me" href="/about">
              <a>
                <AboutSvg />
              </a>
            </Link>
          </motion.li>
        );
      case "Projets":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <Link aria-label="My projets" href="/projets">
              <a>
                <ProjetsSvg />
              </a>
            </Link>
          </motion.li>
        );
      case "Mail":
        return (
          <motion.li className={styles.item} variants={Variant}>
            <Link aria-label="Get in touch" href="/contact">
              <a>
                <MailSvg />
              </a>
            </Link>
          </motion.li>
        );
      case "LinkedIn":
        return (
          <li className={`${styles.item} ${styles.linkedin}`}>
            <a
              aria-label="Petar's LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/petar-trajanoski-464aa8b6/"
            >
              <LinkedInSvg />{" "}
            </a>
          </li>
        );
      case "Github":
        return (
          <li className={`${styles.item} ${styles.github}`}>
            <a
              target="_blank"
              aria-label="Petar's GitHub"
              href="https://github.com/HyRALis"
            >
              <GithubSvg />
            </a>
          </li>
        );
      case "Facebook":
        return (
          <li className={`${styles.item} ${styles.facebook}`}>
            <a
              target="_blank"
              aria-label="Petar's Facebook"
              href="https://www.facebook.com/petar.trajanoski/"
            >
              <FacebookSvg />
            </a>
          </li>
        );
      case "Instagram":
        return (
          <li className={`${styles.item} ${styles.instagram}`}>
            <a
              target="_blank"
              aria-label="Petar's Instagram"
              href="https://www.instagram.com/p.trajanoski/"
            >
              <InstagramSvg />
            </a>
          </li>
        );
      case "Twitter":
        return (
          <li className={`${styles.item} ${styles.twitter}`}>
            <a
              target="_blank"
              aria-label="Petar's Twitter"
              href="https://twitter.com/Kriticarot"
            >
              <TwitterSvg />
            </a>
          </li>
        );
      default:
        return (
          <li className={styles.item}>
            <a target="_blank" aria-label="Home" href="">
              <HomeSvg />
            </a>
          </li>
        );
    }
  }
};

export default NavItem;
