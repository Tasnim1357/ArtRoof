import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='mt-10 '>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{delay:2000}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full'
    >
      <SwiperSlide><div className='relative'>
      <img src="https://i.ibb.co/2WR4c5X/1-07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg" alt=""  className='w-full h-[40vh] md:h-screen rounded-2xl' />
        <div className='absolute top-0 h-full w-full flex justify-center items-center'>
            <div className='bg-black/60 sm:w-1/2  space-y-5 sm:p-5 p-1 rounded-2xl w-full'>
                <p className='text-white text-lg md:text-8xl font-bold font-poppins' style={
                  {lineHeight:1.1}
                }>Art {' '} <span className='text-[#AF9F7B]'>
                  <Typewriter
            words={['Roof', 'Scape', 'Gallery', 'Oasis!']}
            loop={5}
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
                  </span></p>
                <p className='text-white text-xs md:text-2xl font-light font-poppins'>Showcasing Our Best Sells <br /><span className='font-poppins font-semibold md:text-4xl text-lg'> of Modern Art</span></p>
            </div>
        </div>
        </div></SwiperSlide>
      <SwiperSlide><div className='relative'>
      <img src="https://i.ibb.co/M1gpG6Z/3629932-6904-2.jpg" alt=""  className='w-full h-[40vh] md:h-screen rounded-2xl' />
        <div className='absolute top-0 h-full flex justify-center items-center'>
            <div className='bg-black/60 sm:w-1/2 space-y-5 sm:p-5 p-1 rounded-2xl w-full'>
                <h1 className='text-white text-lg md:text-5xl font-poppins'>Pencil Sketch</h1>
                <p className='text-white text-xs md:text-xl font-lato'>Explore our captivating pencil sketches, where intricate lines bring scenes to life with timeless elegance and breathtaking detail.</p>
            </div>
        </div>
        </div></SwiperSlide>
      <SwiperSlide><div className='relative'>
      <img src="https://i.ibb.co/DLDDyd9/images-q-tbn-ANd9-Gc-QEv-YAZS5u-Ewx-Rz03-SCj-SQYy-Ku-Kkq-M-XTAJEB1-MB9b-5g-s.jpg" alt=""  className='w-full h-[40vh] md:h-screen rounded-2xl' />
        <div className='absolute top-0 h-full flex justify-center items-center'>
            <div className='bg-black/60 sm:w-1/2 space-y-5 sm:p-5 p-1 rounded-2xl w-full'>
                <h1 className='text-white text-lg md:text-5xl font-poppins'>Nature WaterColor Painting</h1>
                <p className='text-white text-xs md:text-xl font-lato'>Watercolor is an alchemical medium - colors mixing with water, joining with it, being extended by it - creating new life where none had been before.</p>
            </div>
        </div>
        </div></SwiperSlide>
      <SwiperSlide><div className='relative'>
      <img src="https://i.ibb.co/KzYJbGp/il-fullxfull-3740138697-n8jr.jpg" alt="" className='w-full h-[40vh] md:h-screen rounded-2xl' />
        <div className='absolute top-0 h-full flex justify-center items-center'>
            <div className='bg-black/60 sm:w-1/2 space-y-5 sm:p-5 p-1 rounded-2xl w-full'>
                <h1 className='text-white text-lg md:text-5xl font-poppins'>Oil Painting Collection</h1>
                <p className='text-white text-xs md:text-xl font-lato'>A story is not a charcoal sketch, where every stroke lies on the surface to be seen. It's an oil painting, filled with layers that the author must uncover so carefully to show its beauty.</p>
            </div>
        </div>
        </div></SwiperSlide>
      <SwiperSlide><div className='relative'>
      <img src="https://i.ibb.co/HtmHJjq/main-qimg-fe330c17267ac10774ce620816a147f6-lq.jpg" alt="" className='w-full h-[40vh] md:h-screen rounded-2xl' />
        <div className='absolute top-0 h-full flex justify-center items-center'>
            <div className='bg-black/60 sm:w-1/2 space-y-5 sm:p-5 p-1 rounded-2xl w-full'>
                <h1 className='text-white text-lg md:text-5xl font-sora'>Charcoal Sketching</h1>
                <p className='text-white text-xs md:text-xl font-inter'>If a piece of burning charcoal be placed on a man’s head, see how he struggles to throw it off. Similar will be the struggle for freedom of those who really understand that they are slaves of nature.</p>
            </div>
        </div>
        </div></SwiperSlide>
      
     
      ...
    </Swiper>
            
        </div>
    );
};

export default Banner;