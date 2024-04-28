import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const art= useLoaderData()
    const {_id,image,item_name,name,email,Subcategory_Name,price,rating,stockStatus,customization,processing_time,short_description}=art
    return (
        <div>
             <Helmet>
            <title>ArtRoof | Details</title>
          </Helmet>
            <Navbar></Navbar>
            <div className='md:h-[80vh] dark:border dark:border-white dark:rounded-2xl mt-10 p-2 sm:p-5 flex md:flex-row flex-col justify-between gap-10 mb-7 dark:text-white'>
           <div className='h-full md:w-1/2 w-full'>
           <img src={image} alt="" className='h-full rounded-2xl w-full' />
           </div>
           <div className='md:w-1/2 w-full'>

            <div  className='space-y-5 border-b-2 pb-5'>
                <h1 className='text-[#131313] play font-bold md:text-5xl text-lg dark:text-white'>{item_name}</h1>
                <p className='text-[#131313cc] font-medium md:text-xl text-balance  work-sans dark:text-white'>Subcategory : {Subcategory_Name}</p>
            </div>
    
            <div className=' space-y-5 py-5 border-b-2 dark:text-white'>
                <p>{short_description}</p>
                
            </div>
            <div className='sm:w-3/4 w-full space-y-3 py-5'>
                <div className='flex  justify-start items-center sm:gap-3 gap-2 '>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>Price:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{price}$</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>Cutomization:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{customization}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>Stock status:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{stockStatus}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>Rating:</p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{rating}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>Processing Time: </p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{processing_time}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>Username: </p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{name}</p>
                </div>
                <div className='flex justify-start items-center sm:gap-3 gap-2'>
                    <p className='text-[#131313b3] work-sans sm:text-base text-balance dark:text-white'>User Email: </p>
                    <p className='text-[#131313] work-sans font-semibold sm:text-base text-balance dark:text-white'>{email}</p>
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