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

    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
    });

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  const scrollToAnchor = (anchorId) => {
    const sectionSelector = document.getElementById(`${anchorId}`);
    
    if (sectionSelector &&scrollRef.current) {
      scrollRef.current.scrollTo(sectionSelector, {
            duration: 5,
            disableLerp: false,
          });
    } else {
      console.log('error scrolling to anchor')
    }
  };

  return (
    <div id={"scroll-container"}>
      <div ref={header} id={"top"} className={styles.header}>
        <div className={styles.logoContainer}>
          <Magnetic>
            <Image
              src={"/images/logo.png"}
              width={"60"}
              height={"60"}
              className={styles.logo}
              alt={"logo"}
              draggable={"false"}
            />
          </Magnetic>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.nav}>
            <Magnetic>
              <div onClick={() => scrollToAnchor("work")} className={styles.el}>
                <p>About</p>
              </div>
            </Magnetic>
            <Magnetic>
              <div onClick={() => scrollToAnchor("top")} className={styles.el}>
                <p>Projects</p>
              </div>
            </Magnetic>
            <Magnetic>
              <div onClick={() => scrollToAnchor("top")} className={styles.el}>
                <p>Skills</p>
              </div>
            </Magnetic>
            <Magnetic>
              <div onClick={() => scrollToAnchor("top")} className={styles.el}>
                <p>Contact</p>
              </div>
            </Magnetic>
          </div>
          <iframe
            className={styles.spotify}
            src={
              "https://open.spotify.com/embed/track/7hZnAqzJGdz58gS4XxRowB?utm_source=generator"
            }
            width={"85%"}
            height={"80"}
            allow={
              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            }
            loading={"lazy"}
          ></iframe>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded onClick={() => scrollToAnchor("top")} className={`${styles.button}`}>
          <div className={styles.arrow}>↑</div>
        </Rounded>
      </div>
    </div>
  );
}
