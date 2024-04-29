import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const AllArts = () => {

    const arts = useLoaderData();
     
    const loading = arts === undefined; 

    return (
       <div>
         <Helmet>
            <title>ArtRoof | All Arts</title>
          </Helmet>
        <Navbar></Navbar>
         <div className='mt-16 space-y-8'>
        <h1 className='sm:text-5xl text-3xl dark:text-white text-[#151515] font-poppins font-bold text-center duration-500 hover:text-[#AF9F7B]'> Arts and Paints of all users</h1>
      <div>

<div className="overflow-x-auto">
                    {loading ? (
                        <div className="text-center mt-10">
                            <span className="loading loading-spinner loading-lg dark:text-white"></span>
                        </div>
                    ) : (
                        <table className="table dark:text-white dark:border dark:border-white">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='dark:text-white'>SL No</th>
                                    <th className='dark:text-white'>Item Name</th>
                                    <th className='dark:text-white'>Subcategory Name</th>
                                    <th className='dark:text-white'>Price</th>
                                    <th className='dark:text-white'>Stock Status</th>
                                    <th className='dark:text-white'>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arts.slice(6).map((art, idx) => (
                                    <tr key={art._id}>
                                        <th>{idx + 1}</th>
                                        <td>{art.item_name}</td>
                                        <td>{art.Subcategory_Name}</td>
                                        <td>{art.price}$</td>
                                        <td>{art.stockStatus}</td>
                                        <td> <Link to={`/details/${art._id}`} className="btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]">View Details</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
      
      

        </div>

       
   </div>
   <Footer></Footer>
       </div>
    );
};

export default AllArts;