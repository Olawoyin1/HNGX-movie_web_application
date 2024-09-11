import React from 'react'
import { FaAward } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { LuAward } from "react-icons/lu";
import { animate, motion, delay } from 'framer-motion/dom';

const About = () => {


    const mainVariant = {
        initial : {
          // x : width > 0 ? -100 : "0",
          x : -100,
          opacity : 0
        },
        animate : {
          opacity : 1,
          x: 0,
          transition : {
            duration: 0.5,
            staggerChildren : 0.7
          } , 
        }
      }
  
      const transition = { duration: 0.5, ease: "easeInOut", type : "tween" };

      const bigVar = {
        initial : {
          // x : width > 0 ? -100 : "0",
          x : -100,
          opacity : 0
        },
        animate : {
          opacity : 1,
          x: 0,
          transition
        }
      }

      const aboutVariant = {

        initial : {
          x : 100,
          opacity : 0
        },
        animate : {
          x : 0,
          opacity : 1,
          // rotate : [0 , 45 , -45, 0],
          // transition 
          transition : {
            duration: 0.5,
            staggerChildren : 1
          } , 
        }
      }

      const slideIn = {

        initial : {
          x : 100,
          opacity : 0
        },
        animate : {
          x : 0,
          opacity : 1,
          transition
        }
      }


  return (
    <div className='about-section py-4'>
        <div className="container2">
            <div className="sec-header mb-4 text-center ">
                <h2 className="text-bold">About Me</h2>
                <p className="about-text text-muted">My Introduction</p>
            </div>

            <div className="row m-0 ">
                <div className="col-lg-6 px-4 py-lg-2">
                    <div className="about-img border">
                        <img src="../../Images/sec.jpeg" className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-lg-6 p-lg-2 mt-3 mt-lg-0">
                    <div className="grid gap-2 gap-lg-3 m-0">
                        <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <LuAward size={24} />
                            <h6 className='text-bold'>Experience</h6>
                            <small className='text-muted'>3 Years Working</small>
                        </div>
                        <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <VscBriefcase size={24} />
                            <h6 className='text-bold'>Completed</h6>
                            <small className='text-muted'>20+ Project</small>
                        </div>
                        <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <BiSupport size={24} />
                            <h6 className='text-bold'>Support</h6>
                            <small className='text-muted'>Online 24/7</small>
                        </div>
                    </div>
                    <div className="me my-4">
                        <p className='lead'>My name is Olawoyin Yusuf, and for the past 3 years, I’ve dedicated myself to the craft of software engineering. My passion lies in building software that not only meets the needs of users but also exceeds their expectations.  <br /><br />
                            I’m skilled in technologies like React.js, C Programming, TypeScript, Python, and APIs, which have enabled me to work on a variety of projects, each with its unique challenges and learning opportunities. I enjoy being part of a team where collaboration and continuous improvement are the norms, as I believe that’s where the best ideas and solutions come from. I’m excited to find a new opportunity where I can apply my skills, learn new things, and help create software that truly makes a difference.</p>
                    </div>
                    <a href="../../Images/Olawoyin Resume.pdf" className="works">
                        <p>Download CV</p>
                        <FiFileText size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About