import React from 'react';
import { TiTick } from "react-icons/ti";
const About = () => {

    return (
    <div className='mt-16 space-y-8'>
       <p className='sm:text-5xl text-3xl text-[#151515] font-poppins font-bold text-center'>About Us</p>
<div className="card lg:card-side bg-base-100 shadow-xl"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine">
  <figure className='w-full'><img src="https://i.ibb.co/1LpzqCB/High-Hand-Art-Gallery-2022-6.jpg" className='w-full h-full' alt="Album"/></figure>
  <div className="card-body space-y-5">
  <div>
  <h1 className='sm:text-3xl text-2xl text-[#151515] font-poppins font-semibold'>Nice to meet you!</h1>
        <p className='text-[#808080] font-inter text-lg'>Founded with a profound love for art and a dedication to supporting talented artists, our shop serves as a haven for both creators and admirers alike. With a carefully curated collection of original drawings and prints, we strive to showcase the diverse talents of emerging and established artists, providing a platform for their work to be appreciated and cherished. </p>
  </div>
  <div>
    <ul>
        <li className='flex sm:items-center items-start'><TiTick className='sm:text-xl text-[#AF9F7B] mt-1 sm:mt-0' /> <p className='text-[#151515] font-lato sm:text-lg text-base'>a variety of original drawings</p></li>
        <li className='flex sm:items-center items-start'><TiTick className='text-xl text-[#AF9F7B] mt-1 sm:mt-0' /> <p className='text-[#151515] font-lato  sm:text-lg text-base'>Custom drawings</p></li>
        <li className='flex sm:items-center items-start'><TiTick className='text-xl text-[#AF9F7B] mt-1 sm:mt-0' /> <p className='text-[#151515] font-lato sm:text-lg text-base'>Organizing different  events</p></li>
        <li className='flex sm:items-center items-start'><TiTick className='sm:text-xl text-[#AF9F7B] mt-1 sm:mt-0' /> <p className='text-[#151515] font-lato  sm:text-lg text-base'>Providing restoration services</p></li>
    </ul>
  </div>
    <div className="card-actions justify-end">
      <button className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl">Read More</button>
    </div>
  </div>
</div>
    </div>
    );
};

export default About;