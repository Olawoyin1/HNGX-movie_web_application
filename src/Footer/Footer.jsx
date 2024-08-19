import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='py-4'>
        <div className="container2 text-center">
            <h4 className='fw-bold'>Olawoyin</h4>
            <div className="d-flex align-items-center justify-content-center my-3 gap-4">
                <a href="https://github.com/olawoyin1">
                    <VscGithubAlt />
                </a>
                <a href="https://x.com/OlawoyinGbolah3">
                    <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/olawoyin1/">
                    <SlSocialLinkedin />
                </a>
            </div>
            <small>© Olawoyin Yusuf. All rights reserved</small>
        </div>
    </div>
  )
}

export default Footer