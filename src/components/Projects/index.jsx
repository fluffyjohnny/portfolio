"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import gsap from "gsap";

const projects = [
  {
    title: "AI-musing",
    src: "https://github.com/fluffyjohnny/AI-musing",
    description: "ChatGTP powered chatbot",
  },
  {
    title: "PetBnB",
    src: "https://github.com/fluffyjohnny/PetBnB",
    description: "AirBnB clone for pets",
  },
  {
    title: "Scheduler",
    src: "https://github.com/fluffyjohnny/Scheduler",
    description: "Interview booking webapp",
  },
  {
    title: "Tweeter",
    src: "https://github.com/fluffyjohnny/tweeter",
    description: "Twitter clone webapp",
  },
  {
    title: "heymate!",
    src: "https://heymate.ca/",
    description: "All-in-one business management platform",
  },
  {
    title: "toStrong()",
    src: "https://github.com/fluffyjohnny/toStrong",
    description: "Fitness tracking webapp",
  },
];

const web = [
  {
    title: "Calton Developments",
    src: "https://www.caltondevelopments.ca/",
    description: "Custom home building specialists",
  },
  {
    title: "Fusion Supermarket",
    src: "https://fusionsupermarket.ca/",
    description: "Asian Supermarket",
  },
  {
    title: "Grow Car Rental",
    src: "https://growcarrental.ca/",
    description: "Car rental services",
  },
  {
    title: "Handi Grill",
    src: "https://handigrill.com/",
    description: "A culinary journey",
  },
  {
    title: "Homespro Building",
    src: "https://www.homespros.ca/",
    description: "High quality flooring supplier",
  },
  {
    title: "House of Colour",
    src: "https://www.hochairsalon.net/",
    description: "Boutique hair salon",
  },
  {
    title: "Jade Sunrise Law",
    src: "https://www.jadesunriselaw.com/",
    description: "Law office",
  },
  {
    title: "Lotus Range Hoods",
    src: "https://www.lotusrangehood.ca/",
    description: "Kitchen ventilation specialists",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-20%", y: "-20%" },
  enter: {
    scale: 1,
    x: "-20%",
    y: "-20%",
    transition: { duration: 0.4, ease: [0.75, 0, 0.25, 1] },
  },
  closed: {
    scale: 0,
    x: "-20%",
    y: "-20%",
    transition: { duration: 0.4, ease: [0.3, 0, 0.7, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        <div className={styles.container}>
          <Magnetic>
            <h1>Projects</h1>
          </Magnetic>
          <div className={styles.projectContainer}>
            {projects.map((project, index) => {
              return (
                <Project
                  index={index}
                  title={project.title}
                  description={project.description}
                  src={project.src}
                  manageModal={manageModal}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <Magnetic>
            <h1>Web & Design</h1>
          </Magnetic>
          <div className={styles.projectContainer}>
            {web.map((project, index) => {
              return (
                <Project
                  index={index}
                  title={project.title}
                  description={project.description}
                  src={project.src}
                  manageModal={manageModal}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
