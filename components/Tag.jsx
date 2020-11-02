import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/modules/Tag.module.scss";

import { tagVariant } from "./animationVariants";

export const Tag = ({ TagContent, BorderColor }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.tag}
        style={{ borderColor: BorderColor }}
        variants={tagVariant}
      >
        {TagContent}
      </motion.div>
    </AnimatePresence>
  );
};
