import React from 'react'
import { GoVerified } from "react-icons/go";
import Skills from './data';

const Portfolio = () => {

    const frontend = Skills.filter(item => item.stack === 'frontend');


    console.log(frontend)

  return (
    <div className='portfolio py-4'>
        <div className="container2">
            <div className="sec-header text-center mb-4">
                <h2 className="text-bold">Skills</h2>
                <p className="about-text text-muted">My Technical Level</p>
            </div>
            <div className="skills row row-cols-1 row-cols-sm-2 m-0 gap-4">
                <div className="item col p-2 bg-white">
                    <h6 className='text-center py-3'>Frontend Developer</h6>
                    
                    <div className="stack-skills mx-auto row m-0">
                    {
                        frontend.map((item) => {
                            return(
                                <div className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
                                    <GoVerified className='mt-1' />
                                    <div className="d-flex  flex-column gap-1">
                                        <p className='fw-bold'>{item.skill}</p>
                                        <small className="text-muted">{item.level}</small>
                                    </div>
                                </div>    
                            )
                        })
                    }
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Portfolio