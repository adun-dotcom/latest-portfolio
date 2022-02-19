import logo from './logo.svg';
import './App.css';
import MyHeader from '../src/container/header'
import AboutMe from './container/about';
import HomeSection from './container/home';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {SiMaildotru} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa';
import AboutSection from './container/about/about';
import Projects from './container/projects';
import ContactMe from './container/contact';

function App() {
  return (
    <div className="">
     <div className="main-container">
     <MyHeader/>

     <HomeSection/>
     <AboutSection/>
     <Projects/>
     <ContactMe/>
     </div>
     {/* <div className="fixed-footer">
       <div>&copy; Adunola 2022.</div>
       <div className="icons">
        <BsTwitter className='close socials ' size='18' color='white'/>
        <FaFacebookF className='close socials' size='18' color='white'/>
        <SiMaildotru className='close socials' size='18' color='white'/>
        <FaLinkedin className='close socials' size='18' color='white'/>
       </div>
     </div> */}
    </div>
  );
}

export default App;
