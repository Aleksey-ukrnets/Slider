
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {
  
  
  
  return (
    <div className="wrapper">
    <>
    
    <Swiper style={ {'--swiper-pagination-color': 'rgb(206, 71, 154)'} } slidesPerView={1} spaceBetween={10} pagination={{
  "clickable": true
}} breakpoints={{
  "540": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 4,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 5,
    "spaceBetween": 50
  }
}} className="mySwiper">
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  <SwiperSlide  className="swipe"></SwiperSlide>
  </Swiper>
    </>
  </div>
  )
}
