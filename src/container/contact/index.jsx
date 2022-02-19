import React from 'react'
import { ContactWrapper } from './contact.style'
import {SiMaildotru} from 'react-icons/si';
import {motion} from 'framer-motion'
import { bounceTransition } from '../../Animation';
export default function ContactMe() {
  return (
    <ContactWrapper> 
        <div className="content">
          <motion.a
          href='mailto:aduntobi7@gmail.com'
          variants={bounceTransition}
          whileInView='show'
          className="bouncing-email">
          <SiMaildotru className='' size='30' color='white'/>
          </motion.a>
            <div className="general-container">
            <div className="contact">
            <h2>Let's connect with  each other.</h2>
            <div className='email-div'>
            <p className='email-is'>My email is: 
            </p>
            <p>aduntobi7@gmail.com</p>
            </div>
           
        </div>
</div>
</div>
    </ContactWrapper>
    
  )
}
