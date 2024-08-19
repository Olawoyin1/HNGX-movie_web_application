import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className='py-4'>
        <div className="container2">

            <div className="sec-header mb-4 text-center ">
              <h2 className="text-bold">Get In Touch</h2>
              <p className="about-text text-muted">Contact Me</p>
            </div>

            <div className="row m-0">
                <div className="col-lg-6 p-lg-5">
                    <div className="sec-header py-4 text-center">
                        <h6 className='fw-bold'>Talk To Me</h6>
                    </div>
                    <div className="rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
                        <RiMailSendLine size={20} />    
                        <h6 className='text-bold'>Email</h6>
                        <small>yustee2017@gmail.com</small>
                        <small><a href="#wr">Write Me <IoIosArrowRoundForward /></a></small>
                    </div>
                    <div className="rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                        <FaWhatsapp size={20}/>   
                        <h6 className='text-bold'>Whatsapp</h6>
                        <small>+234-816-802-8145</small>
                        <small><a href="HTTPS://wa.me/2348168028145">Write Me <IoIosArrowRoundForward /></a></small>
                    </div>
                </div>
                <div className="col-lg-6 p-lg-5">
                    <div className="sec-header py-4 text-center">
                        <h6 className='fw-bold'>Write Me Your Project</h6>
                    </div>
                    <form action="" className='contact-form'>
                        <input 
                            className='mb-3' 
                            type="text" 
                            placeholder='Enter Your Name...' 
                            name='name'
                        />
                        <input 
                            className='mb-3' 
                            type="email" 
                            placeholder='Enter Your Email...' 
                            name='email'
                        />
                        <textarea 
                            className='mb-3' 
                            name="message" 
                            placeholder='Tell me About Your Project...' 
                            id="message"  
                        />
                        <button>
                            <a href="#contact_me" className="works">
                                <p>Send Message</p>
                                <VscSend size={20} />
                            </a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact