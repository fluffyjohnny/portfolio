import styles from "./style.module.scss";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "../../common/Magnetic";
export default function Index() {
  const phrase =
    "A Full-Stack Developer who transitioned from Veterinary Science has always had a passion for technology and software. Due to COVID-19, he decided to take a leap of faith and make a career change...";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <main ref={description} className={styles.description}>
      <div id={"work"} className={styles.anchor}></div>
      <div>
        <div data-scroll data-scroll-speed={0.3}>
          <Magnetic>
            <div className={styles.leaf1}></div>
          </Magnetic>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyContainer}>
            <p>
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>

            <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
              Learning how to be comfortable outside of my comfort zone,
              tackling one challenge at a time, and celebrating each small
              victory!
            </motion.p>
          </div>
        </div>
        <div data-scroll data-scroll-speed={0.1}>
          <Magnetic>
            <div className={styles.leaf2}></div>
          </Magnetic>
        </div>
        <div className={styles.border}></div>
        <Image
          src="https://github.com/fluffyjohnny/portfolio/blob/main/public/images/branch.png?raw=true"
          width="1000"
          height="1000"
          alt="branch"
          className={styles.branch}
          draggable="false"
          priority
        />
      </div>
    </main>
  );
}
