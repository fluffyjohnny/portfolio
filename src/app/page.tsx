'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader/Index';
import Landing from '../components/Landing/Index';
import Gallery from '../components/Gallery/Index';
import Projects from '../components/Projects/Index';
import Description from '../components/Description/Index';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact/Index';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Gallery />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
