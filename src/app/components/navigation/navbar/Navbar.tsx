'use client'
import React from 'react'
import Image from 'next/image'
import Madsokami from '@/app/logos/Madsokami.png'
import styles from '@/app/styles/navbar.module.scss'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    console.log('handlenav', menuOpen)
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
            <Link href='/About' className={styles.navLists}>
            <li>About Me</li>
            </Link>
            <Link href='/Projects' className={styles.navLists}>
            <li>Projects</li>
            </Link>
            <Link href='/Contact' className={styles.navLists}>
            <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div onClick={() => handleNav()} className={styles.navHamburgerButton}>
          {!menuOpen ? <AiOutlineMenu size={37} />
           :
           <AiOutlineClose size={37} />
          }
        </div>
      </div>
      {menuOpen ?
      <div className={styles.navOpenHamburger}>
        <div className={styles.navMobileMenu}>
          <div onClick={() => handleNav()}>
          <AiOutlineClose size={37} />
          </div>
        </div>
        <div className={styles.navMobileMenuItemsDiv}>
        <ul className={styles.navMobileUnordered}>
            <Link href='/' className={styles.navListsMobile}>
            <li>Home</li>
            </Link>
            <Link href='/About' className={styles.navListsMobile}>
            <li>About Me</li>
            </Link>
            <Link href='/Projects' className={styles.navListsMobile}>
            <li>Projects</li>
            </Link>
            <Link href='/Contact' className={styles.navListsMobile}>
            <li>Contact</li>
            </Link>
          </ul>
          </div>
          <div className={styles.navMobileSocialIcons}>
            <Link href='https://github.com/madelynarsenault'>
              <BsGithub size={30} />
              </Link>
              <Link href='https://www.linkedin.com/in/madelyna/'>
              <BsLinkedin size={30} />
              </Link>
              <Link href='/mail'>
              <MdEmail size={30} />
              </Link>
          </div>
          <div className={styles.madsIcon}>
         <Link href='/'>
            <Image 
            src={Madsokami}
            width={205}
            height={75}
            alt="mads navbar logo cute"
            />
        </Link>
        </div>
      </div>
       :
      <div className={styles.navClosedHamburger}></div>
      }
    </nav>
  )
}

export default Navbar