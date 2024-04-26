import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Details = () => {
    const art= useLoaderData()
    const {_id,image,item_name,Subcategory_Name,price,rating,stockStatus,customization,processing_time,short_description}=art
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-[70vh] mt-10 p-0 sm:p-5 flex md:flex-row flex-col justify-between gap-10 mb-7'>
           <div className='h-full md:w-1/2 w-full'>
           <img src={image} alt="" className='h-full rounded-2xl w-full' />
           </div>
           <div className='md:w-1/2 w-full'>

            <div  className='space-y-5 border-b-2 pb-5'>
                <h1 className='text-[#131313] play font-bold md:text-5xl text-lg'>{item_name}</h1>
                <p className='text-[#131313cc] font-medium md:text-xl text-balance  work-sans'>Subcategory : {Subcategory_Name}</p>
            </div>
    
            <div className=' space-y-5 py-5 border-b-2'>
                <p>{short_description}</p>
                
            </div>
            <div className='sm:w-3/4 w-full space-y-3 py-5'>
                <div className='flex  justify-start items-center sm:gap-10 gap-7 '>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance'>Price:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance'>{price}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance'>Cutomization:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance'>{customization}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance'>Stock status:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance'>{stockStatus}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance'>Rating:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance'>{rating}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance'>Processing Time: </p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance'>{processing_time}</p>
                </div>
              
            </div>
            <div>
                <Link to='/' className='btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]' >Go to Home</Link>
               
            </div>

           </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Details;