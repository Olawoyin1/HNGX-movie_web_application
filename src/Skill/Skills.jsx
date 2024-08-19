import React from 'react'
import { GoVerified } from "react-icons/go";
import Skills from './data';

const Portfolio = () => {

    const frontend = Skills.filter(item => item.stack === 'frontend');
    const backend = Skills.filter(item => item.stack === 'backend');
    const devops = Skills.filter(item => item.stack === 'devOps');



  return (
    <div className='portfolio py-4'>
        <div className="container2">
            <div className="sec-header text-center mb-4">
                <h2 className="text-bold">Skills</h2>
                <p className="about-text text-muted">My Technical Level</p>
            </div>
            <div className="grid1  m-0 ">

                {/* =========== FRONTEND STACK STARTS HERE ============ */}
                <div className="item p-2 bg-white">
                    <h6 className='text-center py-3'>Frontend Developer</h6>
                    
                    <div className="stack-skills mx-auto row m-0">
                    {
                        frontend.map((item) => {
                            return(
                                <div key={item.id} className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
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
                {/* =========== FRONTEND STACK ENDS HERE ============ */}
                

                {/* =========== BACKEND STACK STARTS HERE ============ */}
                <div className="item  p-2 bg-white">
                    <h6 className='text-center py-3'>Backend Developer</h6>
                    
                    <div className="stack-skills mx-auto row m-0">
                    {
                        backend.map((item) => {
                            return(
                                <div key={item.id} className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
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
                {/* =========== BACKEND STACK ENDS HERE ============ */}

                {/* =========== BACKEND STACK STARTS HERE ============ */}
                <div className="item p-2 bg-white">
                    <h6 className='text-center py-3'>System Engineering & DevOps</h6>
                    
                    <div className="stack-skills mx-auto row m-0">
                    {
                        devops.map((item) => {
                            return(
                                <div key={item.id} className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
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
                {/* =========== BACKEND STACK ENDS HERE ============ */}





            </div>
        </div>
    </div>
  )
}

export default Portfolio