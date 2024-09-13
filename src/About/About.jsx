import React, { useEffect, useRef } from 'react'
import { FaAward } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { LuAward } from "react-icons/lu";
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {


    const boxVariant = {
        initial : {
          // x : width > 0 ? -100 : "0",
          x : 100,
          opacity : 0
        },
        animate : {
          opacity : 1,
          x: 0,
          transition : {
            duration: 0.5,
            staggerChildren : 0.7,
            when : "beforeChildren",
            delay:1,
          } , 
        }
      }
  
      // const transition = { duration: 0.5, ease: "easeInOut", type : "tween" };

      const boxChild = {
        initial : {
          // x : width > 0 ? -100 : "0",
          x : 100,
          opacity : 0
        },
        animate : {
          opacity : 1,
          x: 0,
          transition : {
            duration: 0.5,
            staggerChildren : 0.7,
            when : "beforeChildren",
          } , 
        }
      }
      
      
      
      
      const aboutVariant = {
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
              staggerChildren : 0.7,
              when : "beforeChildren",
            } , 
        }
    }

    const leftVar = {
        initial : {
            x : -100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              
            //   staggerChildren : 0.7
            } , 
        }
    }
   
    const rightVar = {
        initial : {
            x : 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              
            //   staggerChildren : 0.7
            } , 
        }
    }

      const ref = useRef(null)
      const isInView = useInView(ref, {once : true})

      const mainControls = useAnimation()
      const slideControls = useAnimation()


      useEffect(()=>{
        if(isInView){
          mainControls.start("animate")
          slideControls.start("animate")
        }
      },[isInView])

      const fade = { 
        position:"absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: 
          "linear-gradient(0.25turn, transparent, #fff, transparent),linear-gradient(#eee, #eee), radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),          linear-gradient(#eee, #eee)" ,
        zIndex: 20,
      }
    


  return (
    <motion.div className='about-section py-4'>
        <motion.div className="container2">
            <div className="sec-header mb-4 text-center ">
                <h2 className="text-bold">About Me</h2>
                <p className="about-text text-muted">My Introduction</p>
            </div>

            <motion.div variants={aboutVariant} initial="initial" animate="animate" className="row m-0 ">
                <motion.div variants={leftVar} className="col-lg-6 px-4 py-lg-2">
                    <div className="about-img border">
                        <img src="../../Images/sec.jpeg" className='img-fluid' alt="" />
                    </div>
                </motion.div>
                <motion.div  variants={rightVar} className="col-lg-6 p-lg-2 mt-3 mt-lg-0">
                    <motion.div 
                      className="grid gap-2 gap-lg-3 m-0"
                      variants={boxVariant}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div variants={boxChild} className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <LuAward size={24} />
                            <h6 className='text-bold'>Experience</h6>
                            <small className='text-muted'>3 Years Working</small>
                        </motion.div>
                        <motion.div variants={boxChild} className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <VscBriefcase size={24} />
                            <h6 className='text-bold'>Completed</h6>
                            <small className='text-muted'>20+ Project</small>
                        </motion.div>
                        <motion.div variants={boxChild} className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <BiSupport size={24} />
                            <h6 className='text-bold'>Support</h6>
                            <small className='text-muted'>Online 24/7</small>
                        </motion.div>
                    </motion.div>
                    <motion.div ref={ref} variants={aboutVariant} initial="initial" animate={mainControls} className="me my-4" style={{position:"relative", overflow:"hidden"}}>
                        <motion.p  className='lead'>My name is Olawoyin Yusuf, and for the past 3 years, I’ve dedicated myself to the craft of software engineering. My passion lies in building software that not only meets the needs of users but also exceeds their expectations.    I’m skilled in technologies like React.js, C Programming, TypeScript, Python, and APIs, which have enabled me to work on a variety of projects, each with its unique challenges and learning opportunities. I enjoy being part of a team where collaboration and continuous improvement are the norms, as I believe that’s where the best ideas and solutions come from. I’m excited to find a new opportunity where I can apply my skills, learn new things, and help create software that truly makes a difference.</motion.p>

                            <motion.div
                              variants={{
                                initial: { left: 0, },
                                animate: { left: "100%"}
                              }}
                              initial="initial"
                              animate={slideControls}
                              transition={{duration:1.1, delay:0.8, ease:"easeIn"}}
                              style={fade}
                            >
                            </motion.div>
                    </motion.div>
                    <a href="../../Images/Olawoyin Resume.pdf" className="works">
                        <p>Download CV</p>
                        <FiFileText size={20} />
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About