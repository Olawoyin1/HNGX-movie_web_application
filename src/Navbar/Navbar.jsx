import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = ({handleToggle, toggle, styles}) => {
    
    
    

    
  return (
    <header style={styles}>
        <div className="container2">
            <div className="d-flex flex-wrap align-items-center header justify-content-between">
                <a href='mailto:yustee2017@gmail.com' className="mail gap-2">
                    <RiMailSendLine />
                    <p>yustee2017@gmail.com</p>
                </a>
                
                <div className="d-none d-lg-flex mail links">
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
                <div className="d-none d-lg-flex mail gap-3">
                    <a href="https://github.com/olawoyin1">
                        <VscGithubAlt />
                    </a>
                    <a href="https://x.com/OlawoyinGbolah3">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/olawoyin1/">
                        <SlSocialLinkedin />
                    </a>
                    <a href="#li" onClick={handleToggle}>

                        {
                            toggle ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
                        }
                    </a>
                </div>
                <a href="#li" className='d-flex d-lg-none' onClick={handleToggle}>

                    {
                        toggle ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
                    }
                </a>
                {/* <RiMenu3Line className='d-flex d-lg-none' /> */}
            </div>
        </div>
    </header>
  )
}

export default Navbar