import React from 'react'
import styles from '@/app/styles/contact.module.scss'

const ContactForm = () => {
  return (
    <div className={styles.contactMainDiv}>
      <h1 className={styles.contactTitle}>Lets work together</h1>
      <form className={styles.contactForm}>
        <div className={styles.contactInputDiv}>
          <input className={styles.contactInputs} type='text' placeholder='Name'/>
          <input className={styles.contactInputs} type='email' placeholder='Email'/>
        </div>
        <input className={styles.contactInputs} type='text' placeholder='Subject' />
        <textarea className={styles.contactInputs} cols={30} rows={10} placeholder='Message'></textarea>
        <button className={styles.contactEmailButton}>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm