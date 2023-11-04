import React from 'react'
import Image from 'next/image'
import Madsokami from '@/app/logos/Madsokami.png'




const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-transparent'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px12'>
        <Image 
        src={Madsokami}
        width={205}
        height={75}
        className='cursor-pointer'
        alt="mads navbar logo"
        />
        <div>right side</div>
      </div>
    </nav>
  )
}

export default Navbar