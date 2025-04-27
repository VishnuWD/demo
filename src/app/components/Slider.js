import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  const [width, setWidth] = useState("2");

  useEffect(() => {
    const updateWidth = () => {
      const bodyWidth = document.body.offsetWidth;

      if (bodyWidth <= 900) {
        setWidth("1");
      } else {
        setWidth("2");
      }
    };

    // Initial check
    updateWidth();

    // Set up event listener for window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  
  
  return (
    <>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={width}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-[8vmin]"
      > 
      <SwiperSlide>
          <Image width={500} height={500} src="/images/pose.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family2.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family3.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family4.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family5.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family6.webp" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <Image width={500} height={500} src="/images/family7.webp" alt=""/>
        </SwiperSlide>
    
      </Swiper>
    </>
  );
}
