import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdForwardToInbox } from "react-icons/md";
const Footer = () => {
    return (
        <div className=" mt-16 bg-[url('https://i.ibb.co/Xp0RpLX/pngtree-abstract-art-black-paint-textured-background-wallpaper-image-13650221.png')] bg-no-repeat bg-cover bg-center rounded-2xl flex flex-col">
           <footer className="footer md:p-10 p-3 text-base-content rounded-2xl overflow-hidden  mb-10">
       
       <nav>
         <h6 className=" text-balance text-white font-sora sm:text-2xl font-extrabold mb-5">Art<span className='text-[#AF9F7B]'>Roof</span></h6> 
         <p className='sm:text-lg text-balance text-white font-lato'>Explore our services!!!</p>
         <div className='flex justify-center space-x-5'>
           <a href="#"><FaFacebookSquare className='text-white text-4xl' /></a>
           <a href="#"><FaSquareTwitter className='text-white text-4xl'/></a>
           <a href="#"><FaSquareInstagram className='text-white text-4xl'/></a>
         </div>
       </nav> 
       <nav>
         <h6 className="text-white font-sora sm:text-2xl text-balance font-bold mb-5">Services</h6> 
         <a className="link link-hover sm:text-lg text-balance text-white font-lato">variety of original   drawings and paints</a>
         <a className="link link-hover sm:text-lg text-balance text-white font-lato">Providing the option for customers to request custom drawings</a>
         <a className="link link-hover sm:text-lg text-balance text-white font-lato">Advertisement</a>
       </nav> 
       <nav>
         <h6 className="text-white font-sora sm:text-2xl text-balance font-bold mb-5">Contact Info</h6> 
         <a className="link link-hover sm:text-lg text-balance text-white font-lato flex justify-center items-start space-x-2 sm:w-full w-3/4"><IoLocationOutline className='text-3xl' /><p>BG Road,Street No.023,Dhaka,Bangladesh</p></a>
         <a className="link link-hover sm:text-lg text-balance text-white font-lato flex justify-center items-center space-x-2"><BsFillTelephoneFill className='text-2xl' /><p>01782486353</p></a>
         <a className="link link-hover sm:text-lg text-balance text-white font-lato flex justify-center items-center space-x-2"><MdForwardToInbox className='text-2xl'/> <p>info@domain.com</p></a>
       </nav> 
       <form>
         <h6 className="text-white font-sora sm:text-2xl text-balance font-bold mb-5">Newsletter</h6> 
         <fieldset className="form-control w-80">
           <label className="label">
             <span className="label-text sm:text-lg text-balance text-white font-lato sm:w-full w-1/2">Enter your email address and Subscribe Us</span>
           </label> 
           <div className="join">
             <input type="text" placeholder="username@site.com" className="input input-bordered join-item sm:w-1/2 w-1/6" /> 
             <button className="btn btn-primary join-item">Subscribe</button>
           </div>
         </fieldset>
       </form>
      
     </footer>
     <div className='flex justify-center items-center'>
           <small className='text-white text-lg'>Copyright 2024&copy;ArtRoof</small>
       </div>
     </div>
    );
};

export default Footer;