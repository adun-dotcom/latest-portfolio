import React, {useState, useEffect} from "react";
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import { HeaderWrap } from "./header.style";
import Hamburger from "hamburger-react";
import {GrClose} from 'react-icons/gr'
import {IoIosMenu} from 'react-icons/io'
import {VscChromeClose} from 'react-icons/vsc';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {SiMaildotru} from 'react-icons/si';
import {FaLinkedin} from 'react-icons/fa';
import  Logo from '../../image/Adunolalogo.svg';
import {motion} from 'framer-motion'
import { rotateTransition } from "../../Animation";
const MyHeader = ()=>{
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(()=>{
//     mobileMenu
//     ? document.querySelector("body").classList.add("fixed-position")
//     : document.querySelector("body").classList.remove("fixed-position");
// }, [mobileMenu]);
  
    return (
      <HeaderWrap>
         
              <div className="content">
          <div className='info'>
              <a className='brand'>
                  <img src={Logo}/>
                  Adunola
              </a>
              {/* <div className='contact'>
                  <a>+234 8143-2450-17</a>
                  <span>/</span>
                  <a>aduntobi7@gmail.com</a>
              </div> */}
          </div>
          <div className="icons">
              <motion.div
              variants={rotateTransition}
              
              WhileHover={'hover'}
              >
                  
        <BsTwitter 
        
        className='close socials ' size='18' color='white'/>
                  
              </motion.div>
        <FaFacebookF className='close socials' size='18' color='white'/>
        <SiMaildotru className='close socials' size='18' color='white'/>
        <FaLinkedin className='close socials' size='18' color='white'/>
       </div>
          {/* <div className="hamburger">
            <IoIosMenu 
            color='#FFFFFE'
            className='close' 
                size='30'
            onClick={()=>setMobileMenu(true)} />

            </div> */}
            </div>
            {/* {mobileMenu && 
            <div className="hidden-menu">
                <div className="close-div">
                <VscChromeClose 
                onClick={()=>setMobileMenu(false)}
                className='close close-btn' 
                size='30' 
                color='#fff'/>
                </div>
           
                
                <div className="hidden-menu-list">
                    <a href='/#home'>Home</a>
                    <a>Resume</a>
                    <a href='/#about'>About</a>
                    <a>Projects</a>
                    <a></a>
                </div>
            </div>
            } */}
            
          </HeaderWrap>
    )

}

export default MyHeader