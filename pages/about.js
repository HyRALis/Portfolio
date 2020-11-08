import { motion } from "framer-motion";
import { Tag } from "../components/Tag";
import Image from "next/image";
import Head from "next/head";

import styles from "../styles/modules/About.module.scss";
import { tagStagger } from "../components/animationVariants";
import PatternAbout from "../components/svg/PatternAbout";

const About = ({ Width }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Petar T. - About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>About</h1>
        <section className={styles.aboutLanding}>
          <div className={styles.heroImage}>
            <Image
              src="/assets/images/my_image.jpg"
              alt="Petar Trajanoski's Picture"
              loading="eager"
              priority={true}
              layout="fill"
            />
          </div>
          <motion.div className={styles.content}>
            <h3>Excepteur sint occaeuiecat.</h3>
            <p>
              Culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptartem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi ropeior architecto
              beatae vitae dicta sunt explicabo…
            </p>
            <motion.div
              className={styles.tagsContainer}
              variants={tagStagger}
              initial="initial"
              animate="dom"
            >
              <Tag TagContent={"React.js"} BorderColor="#07beb8" />
              <Tag TagContent={"Next.js"} BorderColor="#cb48b7" />
              <Tag TagContent={"JavaScript"} BorderColor="#07beb8" />
              <Tag TagContent={"TypeScript"} BorderColor="#cb48b7" />
              <Tag TagContent={"Mongodb"} BorderColor="#07beb8" />
              <Tag TagContent={"Redux"} BorderColor="#cb48b7" />
              <Tag TagContent={"SASS"} BorderColor="#07beb8" />
              <Tag TagContent={"HTML5"} BorderColor="#cb48b7" />
            </motion.div>
            <PatternAbout />
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default About;
