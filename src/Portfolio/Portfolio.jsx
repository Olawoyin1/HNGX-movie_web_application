import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Portfolio = () => {
  return (
    <div className='py-4'>
      <div className="container2">
            <div className="sec-header mb-4 text-center ">
              <h2 className="text-bold">Portfolio</h2>
              <p className="about-text text-muted">My Recent Works</p>
            </div>
            <div className="grid1   m-0 ">


              <div className='item2 bg-white shadow-sm'>
                <div className="image">
                  <img src="../../Images/Redmi1.jpeg" alt="" />
                </div>
                <div className="port-content d-flex flex-column gap-2 p-3">
                  <h6 className='fw-bold'>Redmi Note 9s Control Panel</h6>
                  <small  className='text-muted'>Lorem ipsum,iam aliquid sit fugit quibusdam, nihil distinctio id! Quibusdam?</small>
                  <a href="#view">View <IoIosArrowRoundForward /></a>
                </div>
              </div>

              <div className='item2 bg-white shadow-sm'>
                <div className="image">
                  <img src="../../Images/signup.png" alt="" />
                </div>
                <div className="port-content d-flex flex-column gap-2 p-3">
                  <h6 className='fw-bold'>Redmi Note 9s Control Panel</h6>
                  <small  className='text-muted'>Lorem ipsum,iam aliquid sit fugit quibusdam, nihil distinctio id! Quibusdam?</small>
                  <a href="#view">View <IoIosArrowRoundForward /></a>
                </div>
              </div>

              <div className='item2 bg-white shadow-sm'>
                <div className="image">
                  <img src="../../Images/signup2.png" alt="" />
                </div>
                <div className="port-content d-flex flex-column gap-2 p-3">
                  <h6 className='fw-bold'>Redmi Note 9s Control Panel</h6>
                  <small  className='text-muted'>Lorem ipsum,iam aliquid sit fugit quibusdam, nihil distinctio id! Quibusdam?</small>
                  <a href="#view">View <IoIosArrowRoundForward /></a>
                </div>
              </div>


              



            </div>
      </div>
    </div>
  )
}

export default Portfolio