import React from "react";
import { VscBriefcase } from "react-icons/vsc";

const Hero = () => {
  return (
    <div>
      <p className="line">HEY THERE ! 👋 </p>
      <h1>
        I'm <span className="colored">Olawoyin</span> Yusuf
      </h1>
      <p className="about">
        A frontend Dev and a Backend dev with high level of experience in web
        designing and development. <br />
        <br /> I care deeply about creating a world class website to my clients,
        My custom built websiteare fast loading accessible and very easy to
        manage
      </p>
      <a href="#contact_me" className="btn btn-con">
        View Works  <VscBriefcase />
      </a>
    </div>
  );
};

export default Hero;
