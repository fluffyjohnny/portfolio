import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    color: "#d6d7dc",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
  },
  {
    color: "#e3e3e3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    color: "#21242b",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    color: "#e3e5e7",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    color: "#d6d7dc",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
  },
  {
    color: "#e3e3e3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
  },
  {
    color: "#21242b",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  }
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg",
  },
  {
    color: "#e5e0e1",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    color: "#d7d4cf",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    color: "#e1dad6",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    color: "#d4e3ec",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    color: "#e5e0e1",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg",
  },
  {
    color: "#d7d4cf",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
  },
  {
    color: "#e1dad6",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filezilla/filezilla-original.svg",
  },
];

const slider3 = [
    {
        color: "#e3e5e7",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
      },
      {
        color: "#21242b",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
      },
    {
      color: "#e3e3e3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain-wordmark.svg",
    },
    {
      color: "#d6d7dc",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      color: "#e3e5e7",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain-wordmark.svg",
    },
    {
      color: "#d6d7dc",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain-wordmark.svg",
    },
    {
      color: "#e3e3e3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg",
    },
    {
      color: "#21242b",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original-wordmark.svg",
    },
  ];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} id={"skills"} className={styles.slidingImages}>
      <div className={styles.slidingImagesContainer}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.icon}
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"icon"}
                    src={project.src}
                    sizes={"(max-width: 640px) 80%, 100%"}
                    draggable={"false"}
                    priority
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.icon}
                style={{ backgroundColor: project.color }}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"icon"}
                    src={project.src}
                    sizes={"(max-width: 640px) 80%, 100%"}
                    draggable={"false"}
                    priority
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x3 }} className={styles.slider}>
          {slider3.map((project, index) => {
            return (
              <div
                key={index}
                className={styles.icon}
                style={{ backgroundColor: project.color }}
              >
                <div key={index} className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"icon"}
                    src={project.src}
                    sizes={"(max-width: 640px) 80%, 100%"}
                    draggable={"false"}
                    priority
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
