import React from 'react';
import { AboutWrapper } from './about.style';
import apps from './design.svg';
import tailored from '../../image/roller-brush.svg'

export default function AboutSection() {
  return (
    <AboutWrapper id='about'>
      <div className='general-container'>
      <div className="about-me">
      <h2 className="title">About Me</h2>
                <div className="text">
                  <div className='title'>
                  <h5>A goal-driven Front-End Developer striving to create world class products.</h5>
                  </div>
                        <div className="content">
                        <p className="">
                  Hi there!, I’m Adunola, a frontend engineer from Lagos,
                  Nigeria. I enjoy building rich interactive web applications. I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. 
                </p>
                <p>I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. Currently working on improving my skills in, and understanding of core React, algorithms, cool animations by building more interactive projects and staying up to date with new technologies. <br/> <span>I'm available for a contract or full-time role. Feel free to reach out and say hello!</span></p>
                        </div>
                    
      
                </div>
                <div className="stacks">
                  <h4 className="title">skills</h4>
                  <ul className="skills-list">
                    <li>HTML, CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>NextJs</li>
                    <li>Typescript</li>
                    <li>Framer motion</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                    <li>Angular</li>
                    <li>Redux</li>
                    <li>Rematch Redux</li>
                    <li>NodeJS</li>
                  </ul>
                </div>
            </div>
      </div>
           
    </AboutWrapper>
  )
}
