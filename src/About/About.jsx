import React from 'react'
import { FaAward } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";

const About = () => {
  return (
    <div className='about-section py-4'>
        <div className="container2">
            <div className="about-header mb-4 text-center ">
                <h2 className="text-bold">About Me</h2>
                <p className="about-text text-muted">My Introduction</p>
            </div>

            <div className="row m-0">
                <div className="col-lg-6">image here</div>
                <div className="col-lg-6 p-lg-2">
                    <div className="row gap-3 m-0">
                        <div className="col rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3">
                            <FaAward size={24} />
                            <h6 className='text-bold'>Experience</h6>
                            <small className='text-muted'>3 Years Working</small>
                        </div>
                        <div className="col rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3">
                            <VscBriefcase size={24} />
                            <h6 className='text-bold'>Completed</h6>
                            <small className='text-muted'>20+ Project</small>
                        </div>
                        <div className="col rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-3">
                            <FaAward size={24} />
                            <h6 className='text-bold'>Support</h6>
                            <small className='text-muted'>Online 24/7</small>
                        </div>
                    </div>
                    <div className="me my-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aspernatur. Mollitia, illo neque vitae repellat soluta facilis minima accusamus necessitatibus pariatur quo animi nihil at et omnis quisquam voluptas ipsa! Voluptas hic nobis, officia nesciunt enim cupiditate facilis aspernatur ratione eos culpa voluptatem atque placeat sit facere temporibus quae?</p>
                    </div>
                    <a href="#contact_me" className="works">
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