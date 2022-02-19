// import React from "react";
// import { AiFillMessage } from "react-icons/ai";
// import goodAction from "../../image/goodaction.png";
// import quabbly from "../../image/quabbly.svg";
// import tradeGrid from "../../image/tradegrid.svg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import quabbly1 from "../../image/quabbly-1.png";
// import quabbly2 from "../../image/quabbly-2.png";
// import quabbly3 from "../../image/quabbly-3.png";
// import GoodAction1 from "../../image/goodaction-1.png";
// import GoodAction2 from "../../image/goodaction-3.png";
// import GoodAction3 from "../../image/goodaction-4.png";

// import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
// const AboutMe = () => {
//   const settings1 = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const settings2 = {
//     className: "center",
//     centerMode: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };
//   return (
//     <div className="bg-[black] pt-40">
//       <div className="" >
//         <div className="w-[100%] p-0 text-left container relative">
          
//                       <div className='fixed left-50 top-80 mt-8 flex flex-col justify-center items-center'> 
//                         <a>
//                         <AiFillGithub color="#adadad" size="20" className="mb-8 hover:cursor-pointer icon"/>
//                         </a>
//                         <a >
//                         <AiFillLinkedin color="#adadad" size="20" className="mb-8 hover:cursor-pointer icon"/>
//                         </a>
//                         <a >
//                         <AiOutlineTwitter color="#adadad" size="20" className="mb-8 hover:cursor-pointer icon"/>
//                         </a>
//                         <div className="bg-[#adadad] h-40 w-[1px]"></div>

//                       </div> 
//           <div className=" w-full  px-28  ">
//             <h3 className='text-[#E95065] font-[500] text-lg mb-6 '>Hi, my name is</h3>
//             <h1 className="font-bold  text-7xl mb-6 text-[#adadad]">Adunola Odetola.</h1>
//             <h1 className='font-bold text-7xl text-[#3d3d3d] mb-6'>I build web applications.</h1>
//            <p className="text-lg  text-[#3d3d3d] leading-8 w-1/2 font-[500] mb-6" > I'm a frontend engineer specialized in building (and occasionally designing) scalable and highly performant web based applications.</p>
           
//            <button
//                         href="https://drive.google.com/file/d/1AN_15gKCucyubhYZLy45ZFZa7r98I1pm/view?usp=sharing" target="_blank"
//                         className="noselect button red  text-center font-bold "
//                       >Download Resume
                       
//                       </button>
//             <a
//               href="mailto:aduntobi7@gmail.com"
//               className="rounded-full ml-auto mt-24 animate-bounce bg-[#0139CE] flex justify-center items-center w-32 h-32"
//             >
//               <AiFillMessage color="white" size="40" />
//             </a>
//           </div>

//           <div className="bg-black pt-36 " id='about'>
//             <div className="text-[#adadad] container">
//             <h2 className='text-[#3d3d3d] font-bold text-5xl mb-14'>
//                 &#60;  About /&#62;
//                 </h2>
//               <div className="w-1/2 mb-20">
               
//                 <p className="leading-loose	text-lg">
//                   Hi there!, I’m Adunola, a frontend engineer from Lagos,
//                   Nigeria. I have experience in buidling scalable and highly
//                   performant web based applications. I am highly skilled in UI
//                   engineering and performance optimisation. I love building
//                   applications that are not just functional, but also delivers a
//                   great experience to the user.
//                 </p>
//               </div>
//               <div className="ml-auto w-1/2 ">
//                 <p className="leading-loose	text-lg">
//                   I create successful responsive websites that are fast, easy to
//                   use, and built with best practices. The main area of my
//                   expertise is front-end development, HTML, CSS, JS, building
//                   small and medium web apps, custom plugins, features,
//                   animations, and coding interactive layouts.
//                 </p>
//               </div>
             
//             </div>
//           </div>

//           <div className="bg-black pt-36 " id='skills'>
//             <div className="text-[#adadad] container">
//               <div className="skills mt-36">
//               <h2 className='text-[#3d3d3d] font-bold text-5xl mb-14'>
//                 &#60;  Skills /&#62;
//                 </h2>

//                 <div className="flex justify-between mt-8 w-[80%] flex-wrap text-white font-bold">
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>HTML</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>CSS</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>Javascript</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>React</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>Typescript</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>Tailwind</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>Boostrap</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>NodeJs</span>
//                   </div>
//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>Redux</span>
//                   </div>

//                   <div className="bg-[#0C0D0D] border rounded-md border-black shadow-outline p-6 flex flex-col justify-between items-center m-4">
//                     <span>Git</span>
//                   </div>
//                 </div>
//                 </div>
//               </div>
//               </div>

//           <div className="bg-black text-white pt-36" id='projects'>
//             <div className="projects container text-[#adadad]">
//             <h2 className='text-[#3d3d3d] font-bold text-5xl mb-14'>
//                 &#60;  Projects /&#62;
//                 </h2>
//               <div className="project-div  relative  mb-24">
             
//                 <div className="project-content text-right  pl-10">
//                   <div className="pr-8">
//                   <p className='text-[#E95065] font-[500] mb-3'>Featured project</p>
//                   <h3 className="text-[#adadad] mb-6 text-3xl font-bold ">
//                     GoodAction
//                   </h3>
//                   </div>
                  
//                   <div className="bg-[#0C0D0D] rounded-md w-[500px] z-7 p-6">
//                   <p className="text-[15px] mb-6 text-white leading-7">
//                     A fundraising platform that brings helpers and people
//                     needing help together in one online community where each
//                     need can be directly met.
//                   </p>
//                   <ul className=" ml-4 text-sm">
//                     <li>
//                       Rebuilt the company’s improved design initially written in
//                       material Ui using styled components.
//                     </li>
//                     <li>
//                       Eliminated Bootstrap and several other CSS libraries
//                       completely from the application and replaced them with
//                       custom styles.
//                     </li>
                  
//                   </ul>
//                   </div>
//                <ul className="flex justify-end pr-8 mt-8">
//                  <li className='pl-8'>React</li>
//                  <li className='pl-8'>Styled components</li>
//                </ul>
//                 </div>
//                <div className='project-img'>
//                <img
//                         src={GoodAction3}
//                         className="h-[362px] object-contain "
//                       />
//                </div>
                
//               </div>


//               <div className="project-div  relative mb-24 ">
//               <div className='project-img'>
//             <img
//                      src={quabbly1}
//                      className="h-[362px] object-contain "
//                    />
//             </div>
             
//              <div className="project-content text-right pl-10">
//                <div className="pr-8">
//                <p className='text-[#E95065] font-[500] mb-3'>Featured project</p>
//                <h3 className="text-[#adadad] mb-6 text-3xl font-bold ">
//                  Quabbly
//                </h3>
//                </div>
               
//                <div className="bg-[#0C0D0D] rounded-md w-[500px] z-7 p-6">
//                <p className="text-[15px] mb-6 text-white leading-7">
//                A no code platform to generate custom apps to automate
//                     operations made with React, redux, nextJS, styled
//                     components.
//                </p>
//                {/* <ul className=" ml-4">
//                  <li>
//                    Rebuilt the company’s improved design initially written in
//                    material Ui using styled components.
//                  </li>
//                  <li>
//                    Eliminated Bootstrap and several other CSS libraries
//                    completely from the application and replaced them with
//                    custom styles.
//                  </li>
//                  <li>
//                    Brainstormed with designers on the team on realistic flow
//                    for best user experience.
//                  </li>
//                  <li>
//                    Collaborated with a frontend developer to build quabbly’s
//                    website powered by react and nextjs.
//                  </li>
//                </ul> */}
//                </div>
//             <ul className="flex justify-end pr-8 mt-8">
//               <li className='pl-8'>React</li>
//               <li>NextJs</li>
//               <li className='pl-8'>Styled components</li>
//             </ul>
//              </div>
           
//            </div>



        
//             </div>
//             <div className="mt-[100px] mb-[100px] w-full relative">
//               <div className="bg-[#0C0D0D] absolute right-0 left-0 items-container min-h-[650px] max-h-[740px]"></div>

//               <div className="items w-full relative py-40">
//                 <Slider {...settings2} >
//                   <div className="w-[506px] px-2">
//                     <div className=" bg-black h-[280px] rounded-lg py-10 px-10 flex flex-col justify-between">
//                       <div>
//                       <h3 className="text-white mb-2 text-3xl font-[500] ">
//                         TradeGrid
//                       </h3>
//                       <p className="text-sm mb-6 text-white leading-relaxed">
//                         Trade Grid is an international oil and gas firm. I
//                         worked with a UI/UX designer to redesign and build the
//                         updated version of the trade grid website.
//                       </p>
//                       </div>
                    
//                       <a
//                         href="https://www.thetradegrid.com/about"
//                         className="bg-[#0139CE] hover:bg-blue-700 text-white w-32 text-center  py-2 px-4 rounded"
//                       >
//                         Live Demo
//                       </a>
//                     </div>
//                   </div>

//                   <div className="w-[506px] px-2">
//                     <div className=" bg-black h-[280px]  rounded-lg py-10 px-10 flex flex-col justify-between ">
//                       <div>
//                       <h3 className="text-white mb-2 text-3xl font-[500] ">
//                         ArtStock
//                       </h3>
//                       <p className="text-sm mb-6 text-white leading-relaxed">
//                         Art stock is a resource hub for media contents for
//                         creatives. I worked with a team of UI/UX designer and
//                         Backend developer.
//                       </p>
//                       </div>
                    
//                       <a
//                         href="https://myartstockcontributor.vercel.app"
//                         className="bg-[#0139CE] hover:bg-blue-700 text-white w-32 text-center  py-2 px-4 rounded"
//                       >
//                         Live Demo
//                       </a>
//                     </div>
//                   </div>

//                   <div className="w-[506px] px-2">
//                     <div className=" bg-black h-[280px]  rounded-lg py-10 px-10 flex flex-col justify-between">
//                       <div>
//                       <h3 className="text-white mb-2 text-3xl font-[500] ">
//                         Pinterest
//                       </h3>
//                       <p className="text-sm mb-6 text-white leading-relaxed">
//                         Completely built with pure HTML, CSS and JS This is a
//                         mimic of the pinterest home page
//                       </p>
//                       </div>
                    
//                       <a
//                         href="https://pinterest-clone-app.netlify.app/"
//                         className="bg-[#0139CE] hover:bg-blue-700 text-white w-32 text-center  py-2 px-4 rounded"
//                       >
//                         Live Demo
//                       </a>
//                     </div>
//                   </div>

//                   <div className="w-[506px] px-2">
//                     <div className=" bg-black h-[280px]  rounded-lg py-10 px-10 flex flex-col justify-between">
//                       <div>
//                       <h3 className="text-white mb-2 text-3xl font-[500] ">
//                         Unsplash
//                       </h3>
//                       <p className="text-sm mb-6 text-white leading-relaxed">
//                       This app fetches data (pictures) directly from Unsplash.com
//                       Users can search queries in the search box and get result.
//                       The page is a mimic of the unsplash home page
//                       </p>
//                       </div>
                    
//                       <a
//                         href="https://api-from-unsplash.netlify.app/"
//                         className="bg-[#0139CE] hover:bg-blue-700 text-white w-32 text-center py-2 px-4 rounded"
//                       >
//                         Live Demo
//                       </a>
//                     </div>
//                   </div>

//                   <div className="w-[506px] px-2">
//                     <div className=" bg-black h-[280px]  rounded-lg py-10 px-10 flex flex-col justify-between">
//                       <div>
//                       <h3 className="text-white mb-2 text-3xl font-[500] ">
//                         Calculator
//                       </h3>
//                       <p className="text-sm mb-6 text-white leading-relaxed">
//                       This app allows you perform arithmetic operations on numbers. Operations like addition, subtraction, multiplication, division and percentage.
//                       </p>
//                       </div>
                    
//                       <a
//                         href="https://functional-calculator.netlify.app/"
//                         className="bg-[#0139CE] hover:bg-blue-700 text-white w-32 text-center py-2 px-4 rounded"
//                       >
//                         Live Demo
//                       </a>
//                     </div>
//                   </div>

//                   <div className="w-[506px] px-2">
//                     <div className=" bg-black h-[280px]  rounded-lg py-10 px-10 flex flex-col justify-between">
//                       <h3 className="text-white mb-2 text-3xl font-[500] ">
//                         Brass
//                       </h3>
//                       <p className="text-sm mb-6 text-white leading-relaxed">
//                       Built with hooks and functional components
//                       A mimic of the brass finance webpage.
//                       </p>
//                       <a
//                         href="https://modest-perlman-98cccf.netlify.app/"
//                         className="bg-[#0139CE] hover:bg-blue-700 text-white w-32 text-center py-2 px-4 rounded"
//                       >
//                         Live Demo
//                       </a>
//                     </div>
//                   </div>

                 
//                 </Slider>
//               </div>
//             </div>
//           </div>

//           <div className="bg-black py-20">
//             <div className="mt-72 text-[80px] container">
//               <h2 className=" font-[500] text-white">
//                 I'm Interested in the entire{" "}
//                 <span className="text-[#0139CE]">frontend </span> spectrum and
//                 working on ambitious projects with positive people.
//               </h2>
//               <a className="font-[500]  text-[#B85474] cursor-pointer underline">
//                 Let’s connect.
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AboutMe;
