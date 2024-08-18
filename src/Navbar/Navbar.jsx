import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <div className="d-flex flex-wrap align-items-center header justify-content-between">
                <div className="mail gap-2">
                    <RiMailSendLine />
                    <p>yustee2017@gmail.com</p>
                </div>
                
                <div className="mail links">
                    <ul className='d-flex gap-4 m-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#home">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#about">About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#skills">Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#portfolio">Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="mail gap-3">
                    <a href="#github">
                        <VscGithubAlt />
                    </a>
                    <a href="#twitter">
                        <FaXTwitter />
                    </a>
                    <a href="#linkedin">
                        <SlSocialLinkedin />
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar