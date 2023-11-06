import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navigation/navbar/Navbar'
import Hero from './components/Hero/Hero'

export default function Home() {
  return (
    <div className='dark: bg-gray-500'>
 <Navbar/>
 <Hero heading='Hi! Im Mads' message='Its nice to meet you'/>
    </div>

  )
}
