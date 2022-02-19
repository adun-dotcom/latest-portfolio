import React, { useRef } from "react";
import { ProjectWrapper } from "./project.style";
import quabbly from "../../image/quabbly.png";
import tradegrid from "../../image/tradegrid.jpeg";
import robotics from "../../image/robotics.jpeg";
import goodaction from "../../image/goodaction.jpg";
import portfolio from "../../image/portfolio.jpg";

import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const ref = useRef();

  return (
    <ProjectWrapper>
      <div className="projects">
        <div className="general-container">
          <div className="content-display">
          <div className='about-work'>
          <h2 className="title">Work</h2>
          <p>This is a showcase of my best work in web development.</p>
          <p>The world of web development keeps growing at an extremely rapid rate. My aim has been to evolve with it. I'm learning and gaining new skills everyday.</p>
          </div>
          
        <div className='project-content'>
          <div className="work">
            <div className="image-div">
              <img src={robotics} alt="app image" />
            </div>
            <div className="text">
              <small>frontend developer (personal project)</small>
              <h4>Dudey.AI</h4>
              <ul className="stacks">
                <li>ReactJS</li>
                <li>Framer Motion</li>
              </ul>
              <small className='responsibilities'>responsibilities</small>

              <ul className="requirements">
                <li>Custom CSS, Animation, Mobile responsiveness</li>
                <li>
                  This is a static website with really cool animations
                </li>
               
              </ul>
              <div className="links">
                <div className="btn-div">
                  <a
                    href="https://dubey-ai-app.netlify.app/"
                    target="_blank"
                    className="button"
                  >
                    visit website
                  </a>
                </div>
                <a
                  href="https://github.com/adun-dotcom/robotics-app"
                  target="_blank"
                  className=""
                >
                  <FiGithub color="#fff" size="30" />
                </a>
              </div>
            </div>
          </div>

          <div className="work">
            <div className="image-div">
              <img src={portfolio} alt="app image" />
            </div>
            <div className="text">
              <small>Designer, Developer</small>
              <h4>Previous Portfolio</h4>
              <ul className="stacks">
                <li>ReactJS</li>
                <li>AOS</li>

              </ul>
              <small className='responsibilities'>responsibilities</small>

              <ul className="requirements">
                <li>
                Everything. An idea I developed from start to finish on my own. 
                </li>
                <li>Curated list of projects I developed</li>
               
              </ul>
              <div className="links">
                <div className="btn-div">
                  <a
                    href="https://adunola-s-portfolio.netlify.app/"
                    target="_blank"
                    className="button"
                  >
                    visit website
                  </a>
                </div>
                <a
                  href="https://github.com/adun-dotcom/portfolio"
                  target="_blank"
                  className=""
                >
                  <FiGithub color="#fff" size="30" />
                </a>
              </div>
            </div>
          </div>

          <div className="work">
            <div className="image-div">
              <img src={goodaction} alt="app image" />
            </div>
            <div className="text">
              <small>frontend developer (featured project)</small>
              <h4>GoodAction</h4>
              <ul className="stacks">
                <li>ReactJS</li>
                <li>Material UI</li>
              </ul>
              <small className='responsibilities'>responsibilities</small>

              <ul className="requirements">
                <li>Design (in collab with the product designer)</li>
                <li>
                 Website development, mobile development 
                </li>
                <li>
                Brainstorming new features and better user experience with product owner.
                </li>
               
              </ul>
              <div className="links">
                <div className="btn-div">
                  <a
                    href="https://goodaction.com/"
                    target="_blank"
                    className="button"
                  >
                    visit website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="work">
            <div className="image-div">
              <img src={quabbly} alt="app image" />
            </div>
            <div className="text">
              <small>frontend developer (featured project)</small>
              <h4>Quabbly Inc</h4>
              <ul className="stacks">
                <li>ReactJS</li>
                <li>NextJS</li>
              </ul>
              <small className='responsibilities'>responsibilities</small>

              <ul className="requirements">
                <li>
                  Assessed the efficiency and speed of current applications,
                  while writing high quality scalable code.
                </li>
                <li>Provide website maintenance and enhancements.</li>
                <li>
                  I collaborated with the Product designers, Backend engineers,
                  tester to integrate and improve usability and better translate
                  business requirements into technical requirements.
                </li>
              </ul>
              <div className="links">
                <div className="btn-div">
                  <a
                    href="https://quabbly.com/"
                    target="_blank"
                    className="button"
                  >
                    visit website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="work">
            <div className="image-div">
              <img src={tradegrid} alt="app image" />
            </div>
            <div className="text">
              <small>frontend developer (contractor)</small>
              <h4>TradeGrid</h4>
              <ul className="stacks">
                <li>ReactJS</li>
                <li>NextJS</li>
              </ul>
              <small className='responsibilities'>responsibilities</small>

              <ul className="requirements">
                <li>
                  Website development
                </li>
                <li>Client presentations</li>
                <li>
                 Component-based front-end development
                </li>
              </ul>
              <div className="links">
                <div className="btn-div">
                  <a
                    href="https://www.thetradegrid.com/"
                    target="_blank"
                    className="button"
                  >
                    visit website
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
