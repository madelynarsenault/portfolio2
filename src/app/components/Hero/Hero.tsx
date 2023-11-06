import React from 'react'
import styles from '@/app/styles/hero.module.scss'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

interface HeroProps {
    heading: string;
    message: string; 
  }

const Hero: React.FC<HeroProps> = ({heading, message}) => {
  return (
    <div className={`${styles.heroMainDiv} ${'custom-img'}`}>
        <div className={styles.heroTextDiv}>
            <h2 className={`${styles.heroTitle} ${rubik.className}`}>{heading}</h2>
            <p className={styles.heroPTag}>{message}</p>
            <button className={styles.heroContactButton}>contact</button>
        </div> 
    </div>
  )
}

export default Hero