import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Main({movieList}) {

  const Background = `https://image.tmdb.org/t/p/w500${movieList.poster_path}`
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          movieList.map(movie => ((

            <SwiperSlide style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#333", backgroundBlendMode: "multiply", color: "#ffffff"}} className='main-H'>
              <div className="container">

                <div className="navbar">
                  <div className="brand d-flex align-items-center">
                    <img src="./Images/tv.png" className='me-4' alt="" />
                    <h3 className='fw-bolder'>MovieBox</h3>
                  </div>
                  <form action="">
                    <input type="search" name="search" placeholder='What do you want to watch ?' className='form-control' id="" />
                  </form>
                  <div className="right">
                    <small>sign up</small>
                    <small className='badge bg-danger ms-3'><i class="uil uil-bars"></i></small>
                  </div>
                </div>
              </div>

              <div className="slider-body mt-lg-5 p-lg-5 ">
                <h3>{movie.title}</h3>
                <p className='fw-bold text-muted'>{movie.overview}</p>
                <button className="btn btn-danger fw-bolder d-flex align-items-center">WATCH TRAILER <i class="uil uil-play ms-2"></i></button>
              </div>
            </SwiperSlide>
          )))
        }
      </Swiper>
    </>
  );
}
