'use client'
import React from 'react'
import Image from 'next/image'
import Madsokami from '@/app/logos/Madsokami.png'
import styles from '@/app/styles/navbar.module.scss'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <Link href='/'>
        <Image 
        src={Madsokami}
        width={205}
        height={75}
        className='cursor-pointer'
        alt="mads navbar logo cute"
        />
        </Link>
        <div className={styles.navMainDiv}>
          <ul className={styles.navUnordered}>
            <Link href='/about' className={styles.navLists}>
            <li>About Me</li>
            </Link>
            <Link href='/projects' className={styles.navLists}>
            <li>Projects</li>
            </Link>
            <Link href='/contact' className={styles.navLists}>
            <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className={styles.navHamburgerButton}>
          <AiOutlineMenu size={37} />
        </div>
      </div>
      {menuOpen ?
      <div className={styles.navHamburgerOpen}></div>
       :
      <div className={styles.navHamburgerClosed}></div>
      }
    </nav>
  )
}

export default Navbar