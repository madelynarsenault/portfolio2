import Navbar from '../components/navigation/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div>
      <Hero heading='Contact me' message='Id love to hear from you. Fill out the form below'/>
      <ContactForm />
      </div>
  )
}