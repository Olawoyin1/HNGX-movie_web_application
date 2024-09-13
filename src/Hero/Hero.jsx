import React, { useEffect, useRef } from "react";
import { VscBriefcase } from "react-icons/vsc";
import { motion, useInView, useAnimation } from 'framer-motion';

const Hero = () => {

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


  const heroVar = {
    initial : {
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

  const childVar = {
    initial : {
      x : -100,
      opacity : 0
    },
    animate : {
      opacity : 1,
      x: 0,
      transition : {
        duration: 0.75,
        staggerChildren : 0.7,
        when : "beforeChildren",
      } , 
    }
  }

  const fade = { 
    position:"absolute",
    top: 4,
    bottom: 4,
    left: 0,
    right: 0,
    background: "#333333",
    zIndex: 20,
  }


  return (
    <div  className="main">
      <div  className="container2">
        <motion.div ref={ref} variants={heroVar} initial="initial" animate={mainControls} className="row flex-column-reverse flex-lg-row hero m-0">
          <motion.div variants={childVar} style={{position:"relative", overflow:"hidden"}} className="col-lg-7 d-flex flex-column align-content-lg-start align-items-start gap-2 ">
            <p className="line">HEY THERE ! 👋 </p>
            <motion.div  style={{position:"relative", overflow:"hidden"}}>
              <h1 className="hero-header">I'm <span className="colored">Olawoyin</span> Yusuf</h1>
              <motion.div
                  variants={{
                    initial: { left: 0},
                    animate: { left: "100%"}
                  }}
                  initial="initial"
                  animate={slideControls}
                  transition={{duration:1.4, ease:"easeIn"}}
                  style={fade}
                >
                </motion.div>
            </motion.div>
            <div className="stack d-flex gap-2 align-items-center">
                <p className="long-line"></p>
                <h4>Software Engineer </h4>
            </div>
            <p className="text-muted my-2">I design, develop, and maintain software applications. My role involves writing code in various programming languages, solving complex problems, and collaborating with teams to deliver functional software that meets user or business needs</p>
    
            <a href="#portfolio" className="works">
                <p>View Works</p>
                <VscBriefcase size={20} />
            </a>



            
          </motion.div>
          <div className="col-lg-5 hero-img p-4">
            <div className="hero-image p-1 bg-white shadow-sm mx-auto">
                <img src="../../Images/me.png" className='img-fluid shadow' alt="myself" />
            </div>
          </div>
        </motion.div>
      </div>

      
      
    </div>
  );
};

export default Hero;
