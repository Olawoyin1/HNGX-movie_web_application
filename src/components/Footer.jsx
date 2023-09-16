import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="contianer py-5">

            <div className="socials w-25 mx-auto d-flex align-items-center justify-content-between">
                <i class="uil uil-facebook icon"></i>
                <i class="uil uil-instagram icon"></i>
                <i class="uil uil-twitter icon"></i>
                <i class="uil uil-youtube icon"></i>
            </div>
            <div className="others w-50 my-3 mx-auto d-flex align-items-center justify-content-between">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
                
            </div>
            <p className="text-muted text-center">© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </div>
    </>
  )
}

export default Footer