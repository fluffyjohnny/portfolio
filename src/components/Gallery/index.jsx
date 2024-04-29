"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "toStrong.png",
  "hoc.png",
  "homespro.png",
  "ai-musing.png",
  "heymate-m.png",
  "tweeter.png",
  "maxmerge.png",
  "petbnb.png",
  "fusion.png",
  "scheduler.png",
  "calton.png",
  "jade.png",
];

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main>
      <div ref={gallery} className={styles.gallery}>
        <div className={styles.topArc}></div>
        <div className={styles.galleryContainer}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
        <div className={styles.bottomArc}></div>
      </div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image
              src={`/images/${src}`}
              alt={"project"}
              fill
              sizes={"(max-width: 600px) 80%, 100%"}
              draggable={"false"}
              priority
            />
          </div>
        );
      })}
    </motion.div>
  );
};
