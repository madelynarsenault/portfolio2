'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Madsokami from '@/app/logos/Madsokami.png'
import styles from '@/app/styles/navbar.module.scss'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsGithub, BsLinkedin, BsFillMoonStarsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')


  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90){
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, []) 

  return (
    <nav className={styles.navbar}>
      <div style={{backgroundColor: `${color}`}} className={styles.navlogo}>
        <Link href='/'>
       <h1 style={{color: `${textColor}`}} className={styles.navListsMadsTitle}>Madsokami</h1>
        </Link>
        <div className={styles.navMainDiv}>
          <ul style={{color: `${textColor}`}}className={styles.navUnordered}>
          <BsFillMoonStarsFill className={styles.navLists} size={25} onClick={() => setDarkMode(!darkMode)} />
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
          {!menuOpen ? <AiOutlineMenu size={37} style={{color: `${textColor}`}}/>
           :
           <AiOutlineClose size={37} style={{color: `${textColor}`}}/>
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