"use client";
import { useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

export default function index() {
  const header = useRef(null);
  const button = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });

    const scroll = new LocomotiveScroll();
    scrollRef.current = scroll;
    return () => {
      scroll.destroy();
    };
  }, []);

  const scrollToTop = () => {
    const sectionSelector = document.getElementById("top");
    scrollRef.current.scrollTo(sectionSelector, {
      duration: 4,
      disableLerp: false,
    });
  };

  return (
    <>
      <div ref={header} id={"top"} className={styles.header}>
        <div className={styles.logo}>
          <Image src={"/images/logo.png"} width={"90"} height={"90"} className={styles.logo} alt={"logo"} />
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a href="#work">About</a>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>Projects</a>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>Skills</a>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a>Contact</a>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded onClick={scrollToTop} className={`${styles.button}`}>
          <div className={styles.arrow}>↑</div>
        </Rounded>
      </div>
    </>
  );
}
