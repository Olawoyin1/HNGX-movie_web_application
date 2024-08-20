import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import Project from './data';

const Portfolio = () => {

    const [visible, setVisible] = useState(3)


    const handleVisible = () =>{
      setVisible(prevState => prevState + 3)
    }
  return (
    <div className='py-4' id='portfolio'>
      <div className="container2">
            <div className="sec-header mb-4 text-center ">
              <h2 className="text-bold">Portfolio</h2>
              <p className="about-text text-muted">My Recent Works</p>
            </div>
            <div className="grid1   m-0 ">

              {
                Project.slice(0, visible).map((item) =>{
                  return(
                    <div key={item.id} className='box item2 bg-white shadow-sm'>
                      <div className="image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="port-content d-flex flex-column gap-2 p-3">
                        <h6 className='fw-bold'>{item.name}</h6>
                        <small  className='text-muted'>{item.desc}</small>
                        <a href={item.link}>View <IoIosArrowRoundForward /></a>
                      </div>
                    </div>
                  )
                })
              }



            </div>
            <div className="sec-header my-4 text-center ">
              <button onClick={handleVisible} className="works  mx-auto">
                  <p>Load More</p>
                  <AiOutlineReload size={20} />
              </button>
            </div>
            
      </div>
    </div>
  )
}

export default Portfolio