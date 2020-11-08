import { motion } from "framer-motion";

import styles from "../styles/modules/Principle.module.scss";
import { slowFadePop, Stagger } from "./animationVariants";

const Principle = ({ Illustration, title, message, color }) => {
  return (
    <motion.div
      variants={Stagger}
      initial="initial"
      animate="dom"
      exit="initial"
      className={styles.container}
    >
      <motion.div variants={slowFadePop} className={styles.illustration}>
        {Illustration}
      </motion.div>
      <motion.div variants={slowFadePop} className={styles.content}>
        <h3> {title} </h3>
        <hr style={{ backgroundColor: { color } }} />
        <p>{message}</p>
      </motion.div>
    </motion.div>
  );
};

export default Principle;
