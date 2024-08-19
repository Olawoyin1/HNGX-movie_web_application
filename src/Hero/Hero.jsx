import React from "react";
import { VscBriefcase } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="main">
      <div className="container2">
        <div className="row flex-column-reverse flex-lg-row hero m-0">
          <div className="col-lg-7 d-flex flex-column align-content-lg-start align-items-start gap-2 ">
            <p className="line">HEY THERE ! 👋 </p>
            <h1 className="hero-header">I'm <span className="colored">Olawoyin</span> Yusuf</h1>
            <div className="stack d-flex gap-2 align-items-center">
                <p className="long-line"></p>
                <h4>Software Engineer </h4>
            </div>
            <p className="text-muted my-2">I design, develop, and maintain software applications. My role involves writing code in various programming languages, solving complex problems, and collaborating with teams to deliver functional software that meets user or business needs</p>
    
            <a href="#portfolio" className="works">
                <p>View Works</p>
                <VscBriefcase size={20} />
            </a>
          </div>
          <div className="col-lg-5 hero-img p-4">
            <div className="hero-image p-1 bg-white shadow-sm mx-auto">
                <img src="../../Images/me.png" className='img-fluid shadow' alt="myself" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
